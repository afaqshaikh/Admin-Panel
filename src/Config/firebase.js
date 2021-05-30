import * as  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'


 var firebaseConfig = {
    apiKey: "AIzaSyBNu1cP6-uv4D7sNlqamSlTcZwwoguoOlU",
    authDomain: "shop-software-f58c8.firebaseapp.com",
    projectId: "shop-software-f58c8",
    storageBucket: "shop-software-f58c8.appspot.com",
    messagingSenderId: "359733774665",
    appId: "1:359733774665:web:2cd31c3ff10369f3623298",
    measurementId: "G-8L3ZRX4TV1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  
export default firebase;