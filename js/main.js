/*==================================
   BOURAS.SHOP_DZ
   PREMIUM MAIN JS
==================================*/


// ===============================
// SIDE MENU
// ===============================


const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.querySelector(".side-menu");
const overlay = document.querySelector(".overlay");


function closeMenu(){

    if(sideMenu)
        sideMenu.classList.remove("active");

    if(overlay)
        overlay.classList.remove("active");

}



if(menuBtn){

menuBtn.addEventListener("click",()=>{

    sideMenu.classList.add("active");
    overlay.classList.add("active");

});

}



if(overlay){

overlay.addEventListener("click",closeMenu);

}





// ===============================
// HERO SLIDER
// ===============================


const slides =
document.querySelectorAll(".slide");


let slideIndex = 0;



function showSlide(index){


slides.forEach((slide,i)=>{


if(i === index){

slide.classList.add("active");

}else{

slide.classList.remove("active");

}


});


}



if(slides.length){


showSlide(0);


setInterval(()=>{


slideIndex++;


if(slideIndex >= slides.length){

slideIndex = 0;

}


showSlide(slideIndex);


},5000);


}





// ===============================
// CART SYSTEM
// ===============================


let cart =
JSON.parse(localStorage.getItem("cart")) || [];



function addToCart(product){


cart.push(product);


localStorage.setItem(
"cart",
JSON.stringify(cart)
);



updateCartCount();


showMessage("تمت إضافة المنتج للسلة 🛒");


}




function updateCartCount(){


const counter =
document.getElementById("cartCount");


if(counter){

counter.innerText = cart.length;

}


}



updateCartCount();






// ===============================
// FAVORITES
// ===============================


let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];




function addFavorite(product){



let exists =
favorites.find(
item=>item.id===product.id
);



if(!exists){


favorites.push(product);


localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);


showMessage("تمت الإضافة للمفضلة ❤️");


}



updateFavoriteCount();


}




function updateFavoriteCount(){


const counter =
document.getElementById("favoriteCount");


if(counter){

counter.innerText =
favorites.length;

}


}


updateFavoriteCount();






// ===============================
// SEARCH SYSTEM
// ===============================


function searchProducts(value){


let text =
value.toLowerCase().trim();



document
.querySelectorAll(".product-card")
.forEach(card=>{


let title =
card.querySelector("h3");


if(!title) return;



let name =
title.innerText.toLowerCase();



if(name.includes(text)){


card.style.display="block";


}else{


card.style.display="none";


}



});


}







// ===============================
// MESSAGE SYSTEM
// ===============================


function showMessage(text){


let box =
document.createElement("div");


box.innerText=text;


box.style.position="fixed";
box.style.bottom="30px";
box.style.right="30px";
box.style.background="#c1121f";
box.style.color="white";
box.style.padding="15px 25px";
box.style.borderRadius="30px";
box.style.zIndex="9999";


document.body.appendChild(box);



setTimeout(()=>{

box.remove();

},2500);


}






// ===============================
// SMOOTH SCROLL
// ===============================


document
.querySelectorAll('a[href^="#"]')
.forEach(link=>{


link.addEventListener("click",function(e){


let target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});