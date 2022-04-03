import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';

import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    useEffect(() => {
      
        firebase.auth().onAuthStateChanged( (user) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }

            setChecking(false);
        } );      
    }, [dispatch, setChecking, setIsLoggedIn])

    if ( checking ) {
        return (
            <h1>Loading...</h1>
        )
    }
    

  return (
        <Routes>
            <Route 
                path="/*"
                element={ 
                    <PublicRoute isAuth={isLoggedIn}>
                        <AuthRouter />
                    </PublicRoute>
                 }
            />
            <Route 
                path="/"
                element={ 
                    <PrivateRoute isAuth={isLoggedIn}>
                        <JournalScreen />
                    </PrivateRoute> 
                }
            />
        </Routes>   
  )
}
