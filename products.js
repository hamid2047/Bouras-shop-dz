/*==================================
        BOURAS.SHOP_DZ
        PRODUCTS FROM FIREBASE
===================================*/


import { db } from "./firebase.js";


import {

    collection,
    getDocs

}

from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";





// جلب المنتجات

async function loadProducts(){


    const productsContainer =
    document.getElementById("latestProducts");


    const bestContainer =
    document.getElementById("bestSellingProducts");


    const offersContainer =
    document.getElementById("offersProducts");



    if(!productsContainer) return;



    try{


        const querySnapshot =
        await getDocs(collection(db,"products"));



        productsContainer.innerHTML="";


        querySnapshot.forEach((doc)=>{


            const product =
            doc.data();



            const card = `

            <div class="product-card">


                <div class="product-image">


                    <img src="${product.image || 'assets/images/default.png'}"
                    alt="${product.name}">


                    <button class="favorite-btn">

                        ♡

                    </button>


                </div>



                <div class="product-info">


                    <div class="product-category">

                        ${product.category || ''}

                    </div>



                    <h3 class="product-title">

                        ${product.name}

                    </h3>



                    <div class="product-price">


                        <span class="new-price">

                            ${product.price} دج

                        </span>


                    </div>



                    <button class="add-cart">

                        أضف للسلة

                    </button>



                </div>


            </div>

            `;



            productsContainer.innerHTML += card;



        });



    }

    catch(error){


        console.log(
        "Firebase Error:",
        error
        );


    }



}





// تشغيل عند فتح الصفحة

document.addEventListener(
"DOMContentLoaded",
loadProducts
);