import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0WK31wKSgQBsVXxS6CfC0Kq9hrkdBj0o",
    authDomain: "chuchis2022-e301e.firebaseapp.com",
    projectId: "chuchis2022-e301e",
    storageBucket: "chuchis2022-e301e.appspot.com",
    messagingSenderId: "71906047121",
    appId: "1:71906047121:web:d665c6ed89adc629c47b30"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth()
firebase.db = firebase.firestore()

export default firebase