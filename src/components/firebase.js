import firebase from "firebase/app";
import 'firebase/auth'
import "firebase" 

const config = {
  apiKey: "AIzaSyB3venU5fkmk5_LBHSCO3cE4_QP7xt3NzY",
    authDomain: "react-onboarding-aab9d.firebaseapp.com",
    projectId: "react-onboarding-aab9d",
    storageBucket: "react-onboarding-aab9d.appspot.com",
    messagingSenderId: "627107825643",
    appId: "1:627107825643:web:0d842282c0fa29b5507bae"
}
firebase.initializeApp(config);
export default config