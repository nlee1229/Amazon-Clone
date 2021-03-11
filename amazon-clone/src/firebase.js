import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD5ZjxI2PcL_pPcZywEPX5tWnwZSSSAMQs",
    authDomain: "clone-27da0.firebaseapp.com",
    projectId: "clone-27da0",
    storageBucket: "clone-27da0.appspot.com",
    messagingSenderId: "580953502335",
    appId: "1:580953502335:web:7d7b96750123820733c54a",
    measurementId: "G-SCHNH3YK0S"
  };

// Initializing the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initializing the db
const db = firebaseApp.firestore(); 
const auth = firebase.auth();

export { db, auth };