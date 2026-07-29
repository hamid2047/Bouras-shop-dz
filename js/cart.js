/*==================================
   BOURAS.SHOP_DZ
   CART SYSTEM
==================================*/


document.addEventListener("DOMContentLoaded",()=>{


let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];



const container =
document.getElementById("cartContainer");



const totalBox =
document.getElementById("totalPrice");



const countBox =
document.getElementById("itemsCount");




// عرض السلة

function displayCart(){


if(!container) return;



container.innerHTML="";



if(cart.length===0){


container.innerHTML=`

<div class="products-empty">


<h2>
السلة فارغة 🛒
</h2>


<a href="index.html">

ابدأ التسوق

</a>


</div>


`;



updateTotal();

return;

}




cart.forEach((item,index)=>{


container.innerHTML += `


<div class="cart-item">



<div class="cart-image">

<img src="${item.image}">

</div>





<div class="cart-info">


<h3>

${item.name}

</h3>


<p>

${item.price} دج

</p>




<div class="cart-actions">


<button onclick="minus(${index})">

-

</button>



<span>

${item.qty}

</span>



<button onclick="plus(${index})">

+

</button>



<button class="delete"

onclick="removeItem(${index})">

🗑

</button>



</div>


</div>



</div>


`;



});



updateTotal();


}






// زيادة الكمية

window.plus=function(index){


cart[index].qty++;


saveCart();


};





// نقصان الكمية

window.minus=function(index){


if(cart[index].qty>1){

cart[index].qty--;

}


saveCart();


};






// حذف منتج

window.removeItem=function(index){


cart.splice(index,1);


saveCart();


};







// حفظ السلة

function saveCart(){


localStorage.setItem(

"cart",

JSON.stringify(cart)

);



displayCart();


}






// الحساب

function updateTotal(){



let total=0;

let count=0;



cart.forEach(item=>{


total += Number(item.price) * Number(item.qty);


count += Number(item.qty);


});




if(totalBox){

totalBox.innerHTML =
total + " دج";

}



if(countBox){

countBox.innerHTML =
count;

}


}







// زر الطلب

const checkout =
document.getElementById("checkoutBtn");



if(checkout){


checkout.onclick=function(){


if(cart.length===0){


alert("السلة فارغة");


return;


}



window.location.href =
"checkout.html";



};


}






displayCart();



});