

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getAuth, GoogleAuthProvider , createUserWithEmailAndPassword , signInWithEmailAndPassword ,signOut, onAuthStateChanged  } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDyJa1CRDuxRttKUt90miQfkiCH4RYcvAA",
    authDomain: "netflex-613f1.firebaseapp.com",
    projectId: "netflex-613f1",
    storageBucket: "netflex-613f1.appspot.com",
    messagingSenderId: "722250650420",
    appId: "1:722250650420:web:1d7cec1589e148bbed0b61",
    measurementId: "G-DR20BN6VQD"
  };
  

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()
const storage = firebase.storage();
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export {db , storage,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword , onAuthStateChanged , signOut};