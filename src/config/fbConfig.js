import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKXVc5aMQz3MVWzALPYkc1y5i_cM8e7kw",
  authDomain: "firegram-6fa7c.firebaseapp.com",
  projectId: "firegram-6fa7c",
  storageBucket: "firegram-6fa7c.appspot.com",
  messagingSenderId: "629024386196",
  appId: "1:629024386196:web:c14c11d48f5f8ab9155881",
  measurementId: "G-QEDJB05EK1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
