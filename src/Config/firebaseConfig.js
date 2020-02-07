import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCqJhKE_jyRHVl94gISHWEaSkHkVNSkYzA",
    authDomain: "dolmaplan.firebaseapp.com",
    databaseURL: "https://dolmaplan.firebaseio.com",
    projectId: "dolmaplan",
    storageBucket: "dolmaplan.appspot.com",
    messagingSenderId: "276726282106",
    appId: "1:276726282106:web:45c6aeb3d0a11bda8f08c3",
    measurementId: "G-9LD4L52EZM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({timestampsInSnapshots: true})
  //firebase.analytics();

  export default firebase; 