import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDV3BBJWkCSAGzXVKP72UDqDeZzVMFu6us",
    authDomain: "employercounter.firebaseapp.com",
    projectId: "employercounter",
    storageBucket: "employercounter.appspot.com",
    messagingSenderId: "897925729780",
    appId: "1:897925729780:web:d123d963709cbe855ebda1",
    measurementId: "G-ERHYBYDZ2D"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function saveVisitorData() {
  const visitorRef = collection(db, 'visitors'); // Create a reference to the 'visitors' collection in Firestore.

  try {
    // Fetch the user's IP address using an external API.
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const ipAddress = data.ip;

    // Save the visitor data (IP address and timestamp) to Firestore.
    await addDoc(visitorRef, {
      ip: ipAddress,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    // If there's an error while saving the visitor data, this block will catch and log the error.
  }
}

// Save the visitor data when the page loads.
window.addEventListener('load', saveVisitorData);
