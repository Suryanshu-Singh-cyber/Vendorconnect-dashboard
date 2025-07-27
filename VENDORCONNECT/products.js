import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzRAYtOvQg_7Za2d2FfqkFYpXKoGTyVWY",
  authDomain: "streetvendorapp-376bb.firebaseapp.com",
  projectId: "streetvendorapp-376bb",
  storageBucket: "streetvendorapp-376bb.appspot.com",
  messagingSenderId: "347902837976",
  appId: "1:347902837976:web:db66401b3471e276ccc3ad",
  measurementId: "G-CDVGK2WTLG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productList = document.getElementById("productList");

async function loadProducts() {
  const q = query(collection(db, "products"), orderBy("price", "asc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    productList.innerHTML += `
      <div class="card">
        <img src="${data.image}" width="200">
        <h3>${data.name}</h3>
        <p>₹${data.price}</p>
        <p>${data.description}</p>
      </div>
    `;
  });
}

loadProducts();
