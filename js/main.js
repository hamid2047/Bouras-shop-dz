/*==================================
   BOURAS.SHOP_DZ
   MAIN JAVASCRIPT
==================================*/


//==============================
// SIDE MENU
//==============================


const menuBtn = document.getElementById("menuBtn");

const sideMenu = document.querySelector(".side-menu");

const overlay = document.querySelector(".overlay");



if(menuBtn){


menuBtn.onclick = ()=>{


sideMenu.classList.add("active");

overlay.classList.add("active");


};


}



if(overlay){


overlay.onclick = ()=>{


sideMenu.classList.remove("active");

overlay.classList.remove("active");


};


}



//==============================
// HERO SLIDER
//==============================


let slides = document.querySelectorAll(".slide");

let currentSlide = 0;



function changeSlide(){


slides.forEach(slide=>{

slide.classList.remove("active");

});


if(slides.length){


slides[currentSlide].classList.add("active");


currentSlide++;


if(currentSlide >= slides.length){

currentSlide = 0;

}


}


}



if(slides.length){


setInterval(changeSlide,5000);


}





//==============================
// CART SYSTEM
//==============================


let cart = JSON.parse(
localStorage.getItem("cart")
) || [];




function addToCart(id){


cart.push(id);


localStorage.setItem(
"cart",
JSON.stringify(cart)
);



updateCartCount();



alert("تمت إضافة المنتج إلى السلة 🛒");


}





function updateCartCount(){


const count =
document.getElementById("cartCount");


if(count){


count.innerHTML = cart.length;


}



}



updateCartCount();




//==============================
// FAVORITES
//==============================


let favorites =
JSON.parse(
localStorage.getItem("favorites")
) || [];





function addFavorite(id){


if(!favorites.includes(id)){


favorites.push(id);


localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);


alert("تمت الإضافة إلى المفضلة ❤️");


}


updateFavoriteCount();


}





function updateFavoriteCount(){


const count =
document.getElementById("favoriteCount");



if(count){


count.innerHTML =
favorites.length;


}


}



updateFavoriteCount();






//==============================
// SEARCH
//==============================


function searchProducts(value){


let text =
value.toLowerCase();



let cards =
document.querySelectorAll(".product-card");



cards.forEach(card=>{


let name =
card.querySelector("h3")
.innerText
.toLowerCase();



if(name.includes(text)){


card.style.display="block";


}else{


card.style.display="none";


}



});


}




//==============================
// SMOOTH SCROLL
//==============================


document.querySelectorAll("a[href^='#']")
.forEach(link=>{


link.onclick=function(e){


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



};


});