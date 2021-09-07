import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyBpeHujQlZGX9H-iQxDg-hvjl-ZU-YiMa4",
    authDomain: "sistema-71ff6.firebaseapp.com",
    projectId: "sistema-71ff6",
    storageBucket: "sistema-71ff6.appspot.com",
    messagingSenderId: "409645542142",
    appId: "1:409645542142:web:a75ed22570bd4070b1d3af",
    measurementId: "G-6DDF945TDG"
  };

  if(!firebase.apps.length)
  {
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  