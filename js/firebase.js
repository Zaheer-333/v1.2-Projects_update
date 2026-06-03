import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Your Firebase config (you already provided it)
const firebaseConfig = {
  apiKey: "AIzaSyAiLRpNFC6khivuyKQHpSwa7I6iO43n4rs",
  authDomain: "weba2-7a1f0.firebaseapp.com",
  projectId: "weba2-7a1f0",
  storageBucket: "weba2-7a1f0.firebasestorage.app",
  messagingSenderId: "501356088445",
  appId: "1:501356088445:web:470b722431621db00c7514"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form submit handler
document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
        await addDoc(collection(db, "contacts"), {
            name: name,
            email: email,
            message: message,
            timestamp: new Date()
        });

        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();

    } catch (error) {
        console.error("Error:", error);
        alert("Failed to send message");
    }
});