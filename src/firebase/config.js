import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPips8nQ1NUugGBSoOpeiZYYRQY_qeebM",
  authDomain: "aacm-7a799.firebaseapp.com",
  databaseURL: "https://aacm-7a799.firebaseio.com",
  projectId: "aacm-7a779",
  storageBucket: "aacm-7a779.appspot.com",
  messagingSenderId: "456068472314",
  appId: "1:456068472314:android:e55bfca089a530939e1843",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
