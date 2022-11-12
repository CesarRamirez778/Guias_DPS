// Import the functions you need from the SDKs you need
import  firebase  from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5IPj7RK9I0GLfqJC9gww54PaitEPPDyY",
  authDomain: "empleados-cd55e.firebaseapp.com",
  projectId: "empleados-cd55e",
  storageBucket: "empleados-cd55e.appspot.com",
  messagingSenderId: "733702441176",
  appId: "1:733702441176:web:1fe27c989986b1b4436fad"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


// Initialize Firebase
export default firebase;