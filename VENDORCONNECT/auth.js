// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDzRAYtOvQg_7Za2d2FfqkFYpXKoGTyVWY",
  authDomain: "streetvendorapp-376bb.firebaseapp.com",
  projectId: "streetvendorapp-376bb",
  storageBucket: "streetvendorapp-376bb.appspot.com",
  messagingSenderId: "347902837976",
  appId: "1:347902837976:web:db66401b3471e276ccc3ad",
  measurementId: "G-CDVGK2WTLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register Function
window.register = function () {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById("message").innerText = "✅ Registered Successfully!";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "❌ " + error.message;
    });
};

// Login Function
window.login = function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById("message").innerText = "✅ Logged In!";
      // You can redirect here
      // window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "❌ " + error.message;
    });
};
