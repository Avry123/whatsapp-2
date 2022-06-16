import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDBolq1KE_rBShLCA4TnzV4VkrdbZhZA44",
    authDomain: "whatsapp-2-5328e.firebaseapp.com",
    projectId: "whatsapp-2-5328e",
    storageBucket: "whatsapp-2-5328e.appspot.com",
    messagingSenderId: "37371141777",
    appId: "1:37371141777:web:9a953234f58f3393c3e930",
    measurementId: "G-C0C4HLBVJT"
  };

  //To prevent it from repeating the steps again and again.
const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig)
: firebase.app();

const db = firebase.firestore();

const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};