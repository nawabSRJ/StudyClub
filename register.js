import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"; // Import Firestore functions
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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
const db = getFirestore(app); // Initialize Firestore

let MainForm = document.getElementById('MainForm');
let EmailId = document.getElementById('Email_id');
let Passwd = document.getElementById('password');
let Name = document.getElementById('Name');
let DateOfBirth = document.getElementById('dob');
let Gender = document.getElementById('gender');

let RegisterUser = async (evt) => {
  evt.preventDefault();

  try {
    // Create user using email and password
    const credentials = await createUserWithEmailAndPassword(auth, EmailId.value, Passwd.value);

    // Store additional user data in Firestore
    await addDoc(collection(db, "UserData"), {
      Email: EmailId.value,
      Name: Name.value,
      DateOfBirth: DateOfBirth.value,
      Gender: Gender.value
    })
      .then(() => {
        console.log("User data stored successfully.");
        // Redirect to dashboard.html after successful write
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        console.error("Error storing user data:", error);
        // Handle error gracefully, e.g., display an error message to the user
      });
  } catch (error) {
    console.error("Error registering user:", error);
    // Handle error gracefully, e.g., display an error message to the user
  }
};

MainForm.addEventListener('submit', RegisterUser);
