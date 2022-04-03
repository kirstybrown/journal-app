import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';


export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      
        firebase.auth().onAuthStateChanged( (user) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
            }
        } );      
    }, [dispatch])
    

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
