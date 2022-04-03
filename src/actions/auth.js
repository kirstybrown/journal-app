import Swal from 'sweetalert2';

import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { uiFinishLoading, uiStartLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch( uiStartLoading() );

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( async({ user }) => {

                dispatch( login( user.uid, user.displayName ) );
                dispatch( uiFinishLoading() );
            } )
            .catch(e => {
                console.log(e);
                dispatch( uiFinishLoading() );
                Swal.fire('Error', e.message, 'error');
            })
    }
}

export const startRegisterWithEmailPasswName = ( email, password, name ) => {
    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) => {


                await user.updateProfile({ displayName: name });

                dispatch(
                    login( user.uid, user.displayName )
                )
            } )
            .catch(e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            })

    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName )
                );
            } )
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() );
    }
}

export const logout = () => ({
    type: types.logout
});