import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGsiguEHXycSF8GFKyk0zMMvr66C-exfc",
    authDomain: "netflix-clone-d595c.firebaseapp.com",
    projectId: "netflix-clone-d595c",
    storageBucket: "netflix-clone-d595c.appspot.com",
    messagingSenderId: "905847484822",
    appId: "1:905847484822:web:ace18b5c4b401d1943edb7",
    measurementId: "G-R6C26SE719"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;