import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuKqUvBbG3OblQA2HE5xD7-RPIDqm7og8",
  authDomain: "sample-app-13cde.firebaseapp.com",
  databaseURL: "https://sample-app-13cde.firebaseio.com",
  projectId: "sample-app-13cde",
  storageBucket: "sample-app-13cde.appspot.com",
  messagingSenderId: "306176057096",
  appId: "1:306176057096:web:49aae779450dffe36a16bd",
  measurementId: "G-0MN052TB70"
};

const app = firebase.initializeApp(firebaseConfig);

export default app.firestore();
