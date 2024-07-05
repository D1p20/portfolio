// Import Firebase modules from the CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, set } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';

// Function to initialize Firebase
async function initializeFirebase() {
  // Dynamically load the Firebase configuration
  const response = await fetch('./config.js');
  const script = await response.text();
  eval(script); // Evaluate the script to get the firebaseConfig object

  // Initialize Firebase with the dynamically loaded configuration
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const visitorDB = ref(database, "visitor");

  // Function to save visitor data
  async function saveVisitorData() {
    try {
      // Fetch the user's IP address using an external API.
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      const ipAddress = data.ip;

      // Save the visitor data (IP address and timestamp) to the Realtime Database.
      const newVisitorRef = push(visitorDB);
      set(newVisitorRef, {
        ip: ipAddress,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      // Log the error if there's an issue while saving the visitor data.
      console.error('Error saving visitor data:', error);
    }
  }

  // Save the visitor data when the page loads.
  window.addEventListener('load', saveVisitorData);
}

// Initialize Firebase on page load
initializeFirebase();
