/*==================================
   BOURAS.SHOP_DZ
   ADMIN PANEL SYSTEM
==================================*/


// جلب المنتجات المحفوظة

let products =
JSON.parse(localStorage.getItem("products"))
|| [];




// إضافة منتج

function addProduct(){


const name =
document.getElementById("productName").value;


const price =
document.getElementById("productPrice").value;


const category =
document.getElementById("productCategory").value;


const image =
document.getElementById("productImage").value;



if(
name === "" ||
price === "" ||
category === ""
){

alert("أكمل معلومات المنتج");

return;

}




const product = {


id: Date.now(),

name:name,

price:price,

category:category,

image:image || "assets/products/default.jpg"


};




products.push(product);




localStorage.setItem(
"products",
JSON.stringify(products)
);




alert("تمت إضافة المنتج بنجاح ✅");



displayAdminProducts();



// تنظيف الحقول

document.getElementById("productName").value="";

document.getElementById("productPrice").value="";

document.getElementById("productCategory").value="";

document.getElementById("productImage").value="";



}




// عرض المنتجات في لوحة الإدارة

function displayAdminProducts(){


const box =
document.getElementById("adminProducts");



if(!box) return;



box.innerHTML="";



products.forEach(product=>{


box.innerHTML += `


<div class="product-card">


<div class="product-image">

<img src="${product.image}">

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



<button onclick="deleteProduct(${product.id})">

🗑 حذف

</button>



</div>


`;



});



}





// حذف منتج

function deleteProduct(id){



products =
products.filter(product=>

product.id !== id

);



localStorage.setItem(

"products",

JSON.stringify(products)

);



displayAdminProducts();



}





// تشغيل الصفحة

document.addEventListener(
"DOMContentLoaded",
displayAdminProducts
);