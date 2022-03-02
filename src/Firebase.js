import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCKZyAEtxzPgHjlWp5fr8tXZQxhcNtm8Ck",
  authDomain: "linkedin-clone-3dd26.firebaseapp.com",
  projectId: "linkedin-clone-3dd26",
  storageBucket: "linkedin-clone-3dd26.appspot.com",
  messagingSenderId: "1020640409810",
  appId: "1:1020640409810:web:a70fce0a851354c2b7d50b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
