import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

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
const db = getFirestore(app);
const storage = getStorage(app);

document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("productName").value;
  const price = parseFloat(document.getElementById("price").value);
  const desc = document.getElementById("description").value;
  const imageFile = document.getElementById("image").files[0];

  const imageRef = ref(storage, `productImages/${imageFile.name}`);
  await uploadBytes(imageRef, imageFile);
  const imageURL = await getDownloadURL(imageRef);

  await addDoc(collection(db, "products"), {
    name,
    price,
    description: desc,
    image: imageURL,
    createdAt: new Date()
  });

  alert("Product uploaded successfully!");
  document.getElementById("uploadForm").reset();
});
