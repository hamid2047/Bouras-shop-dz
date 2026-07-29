/*==================================
        BOURAS.SHOP_DZ
        PROFESSIONAL PRODUCT ENGINE
===================================*/


import PRODUCTS from "../data/products.js";

import CONFIG from "./config.js";



// العناصر

const latestContainer =
document.getElementById("latestProducts");

const bestContainer =
document.getElementById("bestSellingProducts");

const offersContainer =
document.getElementById("offersProducts");





// عرض المنتجات

function renderProducts(container, products){


    if(!container) return;


    container.innerHTML="";



    products.forEach(product=>{


        const card = document.createElement("div");


        card.className="product-card";



        card.innerHTML = `


        <div class="product-image">


            <img src="${product.image || CONFIG.defaultImage}"
            alt="${product.name}">


            ${
                product.offer ?

                `<span class="discount">
                عرض
                </span>`

                :

                ""

            }


            <button class="favorite-btn"
            onclick="addFavorite(${product.id})">

            ♡

            </button>


        </div>




        <div class="product-info">


            <span class="category">

            ${product.category}

            </span>



            <h3>

            ${product.name}

            </h3>




            <div class="price">


            ${
            product.oldPrice ?

            `<del>
            ${product.oldPrice} ${CONFIG.currency}
            </del>`

            :

            ""

            }


            <strong>

            ${product.price}
            ${CONFIG.currency}

            </strong>


            </div>




            <button 
            onclick="addToCart(${product.id})">

            🛒 أضف للسلة

            </button>


        </div>


        `;



        container.appendChild(card);


    });


}






// تحميل الأقسام

function loadProducts(){



renderProducts(
latestContainer,
PRODUCTS
);



renderProducts(
bestContainer,
PRODUCTS.slice(0,6)
);



renderProducts(
offersContainer,
PRODUCTS.filter(
item=>item.offer
)
);



}





// البحث

window.searchProducts=function(value){



const result =
PRODUCTS.filter(product=>

product.name
.includes(value)

);



renderProducts(
latestContainer,
result
);



};







// السلة

window.addToCart=function(id){



let cart =
JSON.parse(
localStorage.getItem("cart")
)
|| [];



const product =
PRODUCTS.find(
item=>item.id===id
);



if(!product)return;




const old =
cart.find(
item=>item.id===id
);



if(old){


old.quantity++;

}

else{


cart.push({

...product,

quantity:1

});


}



localStorage.setItem(
"cart",
JSON.stringify(cart)
);



updateCart();



alert(
"تمت إضافة المنتج للسلة"
);



};








// تحديث عداد السلة

function updateCart(){



let cart =
JSON.parse(
localStorage.getItem("cart")
)
|| [];



let count =
cart.reduce(
(a,b)=>a+b.quantity,
0
);



const element =
document.getElementById(
"cartCount"
);



if(element)

element.innerHTML=count;



}









// المفضلة

window.addFavorite=function(id){



let favorites =
JSON.parse(
localStorage.getItem("favorites")
)
|| [];



if(!favorites.includes(id)){


favorites.push(id);


localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);



alert(
"تمت الإضافة للمفضلة"
);


}



};







document.addEventListener(
"DOMContentLoaded",
()=>{


loadProducts();


updateCart();


});