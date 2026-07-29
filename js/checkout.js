/*==================================
   BOURAS.SHOP_DZ
   CHECKOUT SYSTEM
==================================*/


document.addEventListener("DOMContentLoaded",()=>{


let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];



const totalBox =
document.getElementById("checkoutTotal");



let total = 0;



cart.forEach(item=>{

total += Number(item.price) * Number(item.qty);

});



if(totalBox){

totalBox.innerHTML =
total + " دج";

}





const sendBtn =
document.getElementById("sendOrder");



if(sendBtn){


sendBtn.onclick=function(){



let name =
document.getElementById("name").value;



let phone =
document.getElementById("phone").value;



let wilaya =
document.getElementById("wilaya").value;



let address =
document.getElementById("address").value;





if(
name==="" ||
phone==="" ||
wilaya==="اختر الولاية" ||
address===""
){


alert("يرجى ملء جميع المعلومات");


return;


}





let message =

`
🛒 طلب جديد من Bouras.shop_dz

👤 الاسم:
${name}

📞 الهاتف:
${phone}

📍 الولاية:
${wilaya}

🏠 العنوان:
${address}


📦 المنتجات:

`;





cart.forEach(item=>{


message += `

- ${item.name}

الكمية: ${item.qty}

السعر:
${item.price} دج

`;



});





message += `


💰 المجموع:
${total} دج


شكرا لاختياركم Bouras.shop_dz
`;






let whatsappNumber =
"213778196483";





let url =
"https://wa.me/"
+
whatsappNumber
+
"?text="
+
encodeURIComponent(message);






window.open(
url,
"_blank"
);





localStorage.removeItem("cart");



};



}



});