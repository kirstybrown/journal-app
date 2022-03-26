import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDifoArmo0UAwYdiYvBheq-yHyqFdfDpBs",
    authDomain: "react-app-cursos-aefa6.firebaseapp.com",
    projectId: "react-app-cursos-aefa6",
    storageBucket: "react-app-cursos-aefa6.appspot.com",
    messagingSenderId: "1085566370910",
    appId: "1:1085566370910:web:5feda95f36b44b340fe0cf"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}