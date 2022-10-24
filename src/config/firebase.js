import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyA4oZm2_RewMoE3b-t3E0Ljqa_OpORiYCo",
  authDomain: "raspb-data.firebaseapp.com",
  databaseURL: "https://raspb-data-default-rtdb.firebaseio.com",
  projectId: "raspb-data",
  storageBucket: "raspb-data.appspot.com",
  messagingSenderId: "103519158335",
  appId: "1:103519158335:web:33ec7d86c901eda173788a",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
