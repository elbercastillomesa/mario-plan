// Initialize firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCmFKUZlv_R7KhMC2etYj6yDFzajuFq48k",
    authDomain: "net-ninja-marioplan-8e431.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-8e431.firebaseio.com",
    projectId: "net-ninja-marioplan-8e431",
    storageBucket: "net-ninja-marioplan-8e431.appspot.com",
    messagingSenderId: "127640194548",
    appId: "1:127640194548:web:1bf512b68cf7c444"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;