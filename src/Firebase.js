import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC-K7n5aAr4vsokYu4NIh-GU7C7QomCBVU",
    authDomain: "tik-tok-clone-1d87e.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-1d87e.firebaseio.com",
    projectId: "tik-tok-clone-1d87e",
    storageBucket: "tik-tok-clone-1d87e.appspot.com",
    messagingSenderId: "329134549829",
    appId: "1:329134549829:web:8978f584e1924abd416c2c",
    measurementId: "G-M00ZZTESHK"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;