import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBDNN6-nHC3ZYpWJu8ySuGOwiwR0eetIJ0",
  authDomain: "study-club-6b915.firebaseapp.com",
  projectId: "study-club-6b915",
  storageBucket: "study-club-6b915.appspot.com",
  messagingSenderId: "1003152565653",
  appId: "1:1003152565653:web:82d73c84379a9952dd429c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let LoginForm = document.getElementById('LoginForm');
let loginEmail = document.getElementById('login-email');
let loginpasswd = document.getElementById('login-password');

let SignInUser = evt => {
  evt.preventDefault();

  signInWithEmailAndPassword(auth, loginEmail.value, loginpasswd.value)
    .then(() => {
      // Redirect to dashboard.html after successful login
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.error("Error signing in:", errorCode, errorMessage);
    });
};

LoginForm.addEventListener('submit', SignInUser);
