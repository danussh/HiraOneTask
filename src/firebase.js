
import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_JuTsynhOANfyuQnVRDrOl7iEAhpyXr0",
    authDomain: "facebook-clone-e3191.firebaseapp.com",
    projectId: "facebook-clone-e3191",
    storageBucket: "facebook-clone-e3191.appspot.com",
    messagingSenderId: "259074879635",
    appId: "1:259074879635:web:27f31f38faf48769309d66",
    measurementId: "G-QF237RRMSR"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider }
  export default db;
