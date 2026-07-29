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




// Firebase Configuration

const firebaseConfig = {

    apiKey: "AIzaSyBlqXOy9yOQ1Qpq0aW72MU6FfE5AmoF-JA",

    authDomain: "bouras-shop-dz.firebaseapp.com",

    projectId: "bouras-shop-dz",

    storageBucket: "bouras-shop-dz.firebasestorage.app",

    messagingSenderId: "975144083676",

    appId: "1:975144083676:web:af4f0ed1cdeb753e899419",

};




// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Database

const db = getFirestore(app);


// Storage للصور

const storage = getStorage(app);



export {

    db,

    storage

};