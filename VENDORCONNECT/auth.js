import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  getDatabase,
  ref,
  set,
  get,
  child
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzRAYtOvQg_7Za2d2FfqkFYpXKoGTyVWY",
  authDomain: "streetvendorapp-376bb.firebaseapp.com",
  projectId: "streetvendorapp-376bb",
  storageBucket: "streetvendorapp-376bb.appspot.com",
  messagingSenderId: "347902837976",
  appId: "1:347902837976:web:db66401b3471e276ccc3ad",
  measurementId: "G-CDVGK2WTLG",
  databaseURL: "https://streetvendorapp-376bb-default-rtdb.firebaseio.com" // add this!
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Register Function
window.register = function () {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const role = document.getElementById("userRole").value;

  if (!role) {
    document.getElementById("message").innerText = "❌ Please select a role.";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const uid = user.uid;

      // Save role in Firebase DB
      set(ref(db, 'users/' + uid), {
        email: email,
        role: role
      });

      document.getElementById("message").innerText = "✅ Registered Successfully!";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "❌ " + error.message;
    });
};
