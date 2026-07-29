 /*==================================
    BOURAS.SHOP_DZ
    SINGLE PRODUCT SYSTEM
==================================*/


// جلب المنتجات

let products = JSON.parse(
    localStorage.getItem("products")
) || [];



// جلب id من الرابط

const urlParams = new URLSearchParams(
    window.location.search
);

const productId = Number(
    urlParams.get("id")
);




// عرض المنتج

function loadProduct(){


const box = document.getElementById("productBox");


if(!box) return;



const product = products.find(
item => item.id === productId
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




<div class="big-price">

${product.price} دج

</div>



<p class="description">

${product.description || 
"منتج ذو جودة عالية من Bouras.shop_dz"}

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




<button class="add-cart-btn"
onclick="addProductToCart(${product.id})">


🛒 أضف إلى السلة


</button>





<a class="whatsapp-order"
href="https://wa.me/213778196483?text=أريد طلب ${product.name}"
target="_blank">


<i class="fa-brands fa-whatsapp"></i>

اطلب عبر واتساب


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



if(qty < 1){

qty = 1;

}



input.value = qty;


}





// إضافة للسلة

function addProductToCart(id){



let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];



let quantity =
Number(
document.getElementById("quantity").value
);



let old =
cart.find(
item=>item.id===id
);



if(old){


old.qty += quantity;


}else{


cart.push({

id:id,

qty:quantity

});


}




localStorage.setItem(
"cart",
JSON.stringify(cart)
);



alert("تمت إضافة المنتج للسلة 🛒");



updateCartCount();



}





// منتجات مشابهة

function loadSimilar(){


const box =
document.getElementById("similarProducts");


if(!box) return;



products
.filter(p=>p.id!==productId)
.slice(0,4)
.forEach(product=>{


box.innerHTML += `


<div class="product-card">


<img src="${product.image}">


<h3>

${product.name}

</h3>


<div class="price">

${product.price} دج

</div>


<a href="product.html?id=${product.id}">

عرض المنتج

</a>


</div>


`;


});


}




document.addEventListener(
"DOMContentLoaded",
()=>{

loadProduct();

loadSimilar();

}
);