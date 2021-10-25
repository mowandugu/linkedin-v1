import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSnY4JK4-8WpZJF4OozVcfoXZfB-xNjGM",
    authDomain: "linkedin-app-ab3f7.firebaseapp.com",
    projectId: "linkedin-app-ab3f7",
    storageBucket: "linkedin-app-ab3f7.appspot.com",
    messagingSenderId: "500406774202",
    appId: "1:500406774202:web:3ec23ff86c08ae1c49d583",
    measurementId: "G-ZN6ML4CFSJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
