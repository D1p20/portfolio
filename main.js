import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDV3BBJWkCSAGzXVKP72UDqDeZzVMFu6us",
    authDomain: "employercounter.firebaseapp.com",
    databaseURL: "https://employercounter-default-rtdb.firebaseio.com",
    projectId: "employercounter",
    storageBucket: "employercounter.appspot.com",
    messagingSenderId: "897925729780",
    appId: "1:897925729780:web:d123d963709cbe855ebda1",
    measurementId: "G-ERHYBYDZ2D" 
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// async function saveVisitorData() {
//   try {
//     // Fetch the user's IP address using an external API.
//     const response = await fetch('https://api.ipify.org?format=json');
//     const data = await response.json();
//     const ipAddress = data.ip;

//     // Save the visitor data (IP address and timestamp) to the Realtime Database.
//     const newVisitorRef = push(ref(db, 'visitors'));
//     set(newVisitorRef, {
//       ip: ipAddress,
//       timestamp: new Date().toISOString(),
//     });
//   } catch (error) {
//     // If there's an error while saving the visitor data, this block will catch and log the error.
//   }
// }

function saveVisitorData() {
    try {
      // Use dummy data for IP address and timestamp
      const ipAddress = '192.168.0.1'; // Replace this with any dummy IP address
      const timestamp = new Date().toISOString(); // Use the current timestamp
  
      // Save the visitor data to Firebase
      const newVisitorRef = push(ref(db, 'visitors'));
      set(newVisitorRef, {
        ip: ipAddress,
        timestamp: timestamp
      });
  
      console.log('Visitor data saved successfully:', ipAddress);
    } catch (error) {
      console.error('Error saving visitor data:', error);
    }
  }

// Save the visitor data when the page loads.
window.addEventListener('load', saveVisitorData);
