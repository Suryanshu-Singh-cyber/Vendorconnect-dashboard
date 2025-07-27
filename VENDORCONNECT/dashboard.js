// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase Config
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

// Protect page — Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("userEmail").innerText = `Logged in as: ${user.email}`;
  } else {
    // Redirect if not logged in
    window.location.href = "auth.html";
  }
});

// Logout Function
document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    alert("Logged out successfully");
    window.location.href = "auth.html";
  });
});
