/*==================================
   BOURAS.SHOP_DZ
   PREMIUM CART SYSTEM
==================================*/


let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];




// عرض السلة

function displayCart(){


const box =
document.getElementById("cartContainer");


if(!box) return;



if(cart.length === 0){


box.innerHTML = `

<div class="cart-empty">

<h2>
🛒 السلة فارغة
</h2>

<a href="index.html">
العودة للتسوق
</a>


</div>

`;


updateSummary();

return;

}




box.innerHTML="";



cart.forEach((item,index)=>{


box.innerHTML += `


<div class="cart-item">


<div class="cart-image">

<img src="${item.image}">

</div>




<div class="cart-info">


<h3>

${item.name}

</h3>



<p class="cart-price">

${item.price} دج

</p>



<div class="quantity">


<button onclick="changeQty(${index},-1)">
-
</button>



<span>

${item.qty}

</span>



<button onclick="changeQty(${index},1)">
+
</button>



</div>



</div>




<div class="cart-actions">


<strong>

${item.price * item.qty} دج

</strong>



<button onclick="removeItem(${index})">

🗑 حذف

</button>


</div>



</div>



`;



});



updateSummary();


}





// تغيير الكمية


function changeQty(index,value){


cart[index].qty += value;



if(cart[index].qty < 1){

cart[index].qty = 1;

}



saveCart();


}





// حذف منتج


function removeItem(index){


cart.splice(index,1);


saveCart();


}





// حفظ السلة


function saveCart(){


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


displayCart();


}





// الحساب


function updateSummary(){


let count =
0;


let total =
0;



cart.forEach(item=>{


count += item.qty;


total += item.price * item.qty;


});



document.getElementById(
"itemsCount"
).innerHTML = count;



document.getElementById(
"totalPrice"
).innerHTML =
total + " دج";



}





// الطلب عبر واتساب


document.getElementById(
"checkoutBtn"
).onclick=function(){



if(cart.length===0){

alert("السلة فارغة");

return;

}



let message =
"مرحبا أريد طلب:%0A";



cart.forEach(item=>{


message +=
"- "+item.name+
" × "+
item.qty+
"%0A";


});



message +=
"%0Aالمجموع: "+
document.getElementById(
"totalPrice"
).innerText;



window.open(

"https://wa.me/213778196483?text="
+message,

"_blank"

);



};





displayCart();