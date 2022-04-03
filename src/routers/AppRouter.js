import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';


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
                path="/login/*"
                element={ <AuthRouter /> }
            />
            <Route 
                path="/"
                element={ <JournalScreen /> }
            />
            <Route 
                path="*"
                element={ <AuthRouter /> }
            />
      </Routes>   
  )
}
