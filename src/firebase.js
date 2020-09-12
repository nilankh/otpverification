import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDqLm-3pG_hKNS9itSfJ7e3td5yPn9T38g",
  authDomain: "phone-verif-7c01d.firebaseapp.com",
  databaseURL: "https://phone-verif-7c01d.firebaseio.com",
  projectId: "phone-verif-7c01d",
  storageBucket: "phone-verif-7c01d.appspot.com",
  messagingSenderId: "734263485824",
  appId: "1:734263485824:web:874bcf5d9f68ba0bfc4d65",
};

firebase.initializeApp(config);
export default firebase