import firebase from "firebase/app";
import 'firebase/auth'
const config = {
  apiKey: "AIzaSyBxmWfWln1Q-4bqvEtkCW9UIVQq5LkJHiQ",
  authDomain: "react-onboarding-a9334.firebaseapp.com",
  projectId: "react-onboarding-a9334",
  storageBucket: "react-onboarding-a9334.appspot.com",
  messagingSenderId: "501709134031",
  appId: "1:501709134031:web:fd3f813494a80f75b83fba"
}
firebase.initializeApp(config);
export default firebase