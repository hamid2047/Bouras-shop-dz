/*==================================
   BOURAS.SHOP_DZ
   PREMIUM PRODUCT PAGE SYSTEM
   LOCAL STORAGE VERSION
==================================*/


let products = [];

let productId = Number(
    new URLSearchParams(window.location.search).get("id")
);


// تحميل المنتجات من لوحة الإدارة

function getProducts(){

    products = JSON.parse(
        localStorage.getItem("products")
    ) || [];


    loadProduct();

    loadSimilar();

}



// عرض المنتج

function loadProduct(){

    const box = document.getElementById("productBox");

    if(!box) return;


    let product = products.find(
        p => p.id === productId
    );


    if(!product){

        box.innerHTML = `

        <div class="products-empty">

        <h2>
        المنتج غير موجود
        </h2>

        <a href="index.html">
        العودة للرئيسية
        </a>

        </div>

        `;

        return;
    }



    box.innerHTML = `

    <div class="product-gallery">

        <img src="${product.image}"
        alt="${product.name}">

    </div>



    <div class="product-info-page">


        <span class="category">
        ${product.category || "منتج"}
        </span>



        <h1>
        ${product.name}
        </h1>



        <div class="stars">
        ⭐⭐⭐⭐⭐
        </div>



        <div class="price-area">

        <strong>
        ${product.price} دج
        </strong>

        </div>



        <p>

        ${product.description || 
        "منتج عالي الجودة من Bouras.shop_dz"}

        </p>




        <div class="quantity-box">

            <button onclick="changeQty(-1)">
            -
            </button>


            <input id="quantity"
            value="1"
            readonly>


            <button onclick="changeQty(1)">
            +
            </button>

        </div>



        <button 
        class="add-cart-btn"
        onclick="addProductToCart()">

        🛒 أضف للسلة

        </button>




        <a class="whatsapp-order"

        href="https://wa.me/213778196483?text=أريد طلب ${product.name}"

        target="_blank">

        💬 طلب عبر واتساب

        </a>



    </div>

    `;

}



// تغيير الكمية

function changeQty(value){

    let input =
    document.getElementById("quantity");


    let qty =
    Number(input.value);


    qty += value;


    if(qty < 1)
    qty = 1;


    input.value = qty;

}




// إضافة للسلة

function addProductToCart(){


    let product =
    products.find(
        p => p.id === productId
    );


    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];



    let qty =
    Number(
        document.getElementById("quantity").value
    );



    let old =
    cart.find(
        item => item.id === product.id
    );



    if(old){

        old.qty += qty;

    }

    else{


        cart.push({

            id:product.id,

            name:product.name,

            image:product.image,

            price:product.price,

            qty:qty

        });


    }



    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    alert("تمت إضافة المنتج للسلة 🛒");

}




// المنتجات المشابهة

function loadSimilar(){


    const box =
    document.getElementById("similarProducts");


    if(!box) return;



    box.innerHTML="";



    products
    .filter(
        p => p.id !== productId
    )
    .slice(0,4)
    .forEach(p=>{


        box.innerHTML += `


        <div class="product-card">


        <img src="${p.image}">


        <h3>
        ${p.name}
        </h3>


        <div class="price">

        ${p.price} دج

        </div>



        <a href="product.html?id=${p.id}">

        مشاهدة المنتج

        </a>


        </div>


        `;


    });


}





document.addEventListener(
"DOMContentLoaded",
getProducts
);