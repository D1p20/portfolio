import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js"

const appSettings = {
    databaseURL: "https://employercounter-default-rtdb.firebaseio.com",
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const eeDB = ref(database, "ee")
// const firebaseConfig = {
// apiKey: "AIzaSyDV3BBJWkCSAGzXVKP72UDqDeZzVMFu6us",
// authDomain: "employercounter.firebaseapp.com",
// databaseURL: "https://employercounter-default-rtdb.firebaseio.com",
// projectId: "employercounter",
// storageBucket: "employercounter.appspot.com",
// messagingSenderId: "897925729780",
// appId: "1:897925729780:web:d123d963709cbe855ebda1",
// measurementId: "G-ERHYBYDZ2D"
// };


  async function saveVisitorData() {
    try {
      // Fetch the user's IP address using an external API.
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      const ipAddress = data.ip;
  
      // Save the visitor data (IP address and timestamp) to the Realtime Database.
      const newVisitorRef = push(ref(db, 'ee'));
      set(newVisitorRef, {
        ip: ipAddress,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      // If there's an error while saving the visitor data, this block will catch and log the error.
    }
  }
  
  // Save the visitor data when the page loads.
  window.addEventListener('load', saveVisitorData);