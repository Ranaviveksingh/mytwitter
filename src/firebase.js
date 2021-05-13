import firebase from 'firebase/app';
import  'firebase/firestore';

 const firebaseConfig = {
    apiKey: "AIzaSyDjGlGS44hfrzimOVMdSN8PE0iK06BuJe4",
    authDomain: "bmsce-twitter-3.firebaseapp.com",
    projectId: "bmsce-twitter-3",
    storageBucket: "bmsce-twitter-3.appspot.com",
    messagingSenderId: "694375035743",
    appId: "1:694375035743:web:eecee0aececf352e2dbcea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore();





window.firebase = firebase;



  export default firebase;