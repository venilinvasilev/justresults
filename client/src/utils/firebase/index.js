import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBJWgWVeXa33Xr5fBPRoAcgRFPfxSkMY1U",
    authDomain: "justresults-9a687.firebaseapp.com",
    projectId: "justresults-9a687",
    databaseURL: "https://justresults-9a687-default-rtdb.europe-west1.firebasedatabase.app",
    storageBucket: "justresults-9a687.appspot.com",
    messagingSenderId: "367005611135",
    appId: "1:367005611135:web:7d7117262d7460d2fabb4a"
  };

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();

export const database = firebase.database();