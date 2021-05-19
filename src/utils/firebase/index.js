import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBJWgWVeXa33Xr5fBPRoAcgRFPfxSkMY1U",
    authDomain: "justresults-9a687.firebaseapp.com",
    projectId: "justresults-9a687",
    storageBucket: "justresults-9a687.appspot.com",
    messagingSenderId: "367005611135",
    appId: "1:367005611135:web:7d7117262d7460d2fabb4a"
  };

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();