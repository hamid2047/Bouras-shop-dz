/*==================================
   BOURAS.SHOP_DZ
   PRODUCTS DISPLAY SYSTEM
==================================*/


// جلب المنتجات من التخزين

let products =
JSON.parse(localStorage.getItem("products"))
|| [];




// عرض المنتجات

function displayProducts(){


const container =
document.getElementById("latestProducts");



if(!container) return;



container.innerHTML="";



if(products.length === 0){


container.innerHTML = `

<div class="empty">

لا توجد منتجات حاليا

</div>

`;

return;


}




products.forEach(product=>{


container.innerHTML += `


<div class="product-card">


<div class="product-image">


<img src="${product.image}">


<button onclick="addFavorite(${product.id})">

♡

</button>


</div>



<h3>

${product.name}

</h3>



<p>

${product.category}

</p>



<div class="price">

${product.price} دج

</div>



<button onclick="addToCart(${product.id})">

🛒 أضف للسلة

</button>



</div>


`;



});



}




// تشغيل

document.addEventListener(
"DOMContentLoaded",
displayProducts
);