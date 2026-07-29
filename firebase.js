/*==================================
        BOURAS.SHOP_DZ
        FIREBASE CONFIG
===================================*/


import { initializeApp } 
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";


import { getFirestore } 
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


import { getStorage } 
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-storage.js";





//==================================
// FIREBASE CONFIG
// ضع معلومات مشروعك هنا
//==================================


<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBlqXOy9yOQ1Qpq0aW72MU6FfE5AmoF-JA",
    authDomain: "bouras-shop-dz.firebaseapp.com",
    projectId: "bouras-shop-dz",
    storageBucket: "bouras-shop-dz.firebasestorage.app",
    messagingSenderId: "975144083676",
    appId: "1:975144083676:web:af4f0ed1cdeb753e899419",
    measurementId: "G-1J5C143B32"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>





//==================================
// INITIALIZE FIREBASE
//==================================


const app =
initializeApp(firebaseConfig);



const db =
getFirestore(app);



const storage =
getStorage(app);





export {

    db,

    storage

};