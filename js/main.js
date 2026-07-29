/*==================================
        BOURAS.SHOP_DZ
        MAIN JAVASCRIPT
===================================*/


//==============================
// SIDE MENU
//==============================

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.querySelector(".side-menu");
const overlay = document.querySelector(".overlay");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        sideMenu.classList.add("active");

        overlay.classList.add("active");

    });

}



if(overlay){

    overlay.addEventListener("click",()=>{

        sideMenu.classList.remove("active");

        overlay.classList.remove("active");

    });

}



//==============================
// CLOSE MENU LINKS
//==============================

document.querySelectorAll(".side-menu a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        sideMenu.classList.remove("active");

        overlay.classList.remove("active");

    });

});





//==============================
// CART COUNT
//==============================


function updateCartCount(){


    let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];


    let count = 0;


    cart.forEach(item=>{

        count += item.quantity || 1;

    });



    let cartElement =
    document.getElementById("cartCount");


    if(cartElement){

        cartElement.textContent=count;

    }


}





//==============================
// FAVORITES COUNT
//==============================


function updateFavoriteCount(){


    let favorites =
    JSON.parse(localStorage.getItem("favorites"))
    || [];



    let favoriteElement =
    document.getElementById("favoriteCount");



    if(favoriteElement){

        favoriteElement.textContent =
        favorites.length;

    }


}





//==============================
// SEARCH
//==============================


const searchInput =
document.getElementById("searchInput");



if(searchInput){


searchInput.addEventListener("keyup",(e)=>{


    let value =
    e.target.value.toLowerCase();



    let products =
    document.querySelectorAll(".product-card");



    products.forEach(product=>{


        let title =
        product
        .querySelector(".product-title")
        ?.textContent
        .toLowerCase();



        if(title){

            if(title.includes(value)){

                product.style.display="block";

            }

            else{

                product.style.display="none";

            }

        }



    });



});

}





//==============================
// INITIAL LOAD
//==============================


document.addEventListener("DOMContentLoaded",()=>{


    updateCartCount();


    updateFavoriteCount();


});