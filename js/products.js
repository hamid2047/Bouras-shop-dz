/*==================================
   BOURAS.SHOP_DZ
   PREMIUM PRODUCTS SYSTEM
==================================*/


let products =
JSON.parse(localStorage.getItem("products")) || [];




// ===============================
// DISPLAY PRODUCTS
// ===============================


function displayProducts(){


const containers = [

"latestProducts",
"bestSellingProducts",
"offersProducts"

];



containers.forEach(id=>{


const box =
document.getElementById(id);


if(box){

box.innerHTML="";


products.forEach(product=>{


box.innerHTML += createProductCard(product);


});


}



});


}




// ===============================
// PRODUCT CARD
// ===============================


function createProductCard(product){


return `


<div class="product-card">


<div class="product-image">


<img src="${product.image || 'assets/images/default.png'}"
alt="${product.name}">



<button class="favorite-btn"
onclick='addFavorite(${JSON.stringify(product)})'>

♡


</button>



</div>



<h3>

${product.name}

</h3>



<p>

${product.category || ""}

</p>



<div class="price">

${product.price} دج

</div>



<button onclick='addToCart(${JSON.stringify(product)})'>

🛒 أضف للسلة

</button>



</div>


`;

}





// ===============================
// SEARCH FILTER
// ===============================


function filterProducts(category){


let filtered =
products.filter(product=>{


return product.category === category;


});



const box =
document.getElementById("latestProducts");


if(!box) return;



box.innerHTML="";



filtered.forEach(product=>{


box.innerHTML += createProductCard(product);


});


}





// ===============================
// LOAD
// ===============================


document.addEventListener(
"DOMContentLoaded",
()=>{


displayProducts();


});