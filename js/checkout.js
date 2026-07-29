/*==================================
 BOURAS.SHOP_DZ
 CHECKOUT SYSTEM
==================================*/


function sendOrder(){


let name =
document.getElementById("name").value;


let phone =
document.getElementById("phone").value;


let wilaya =
document.getElementById("wilaya").value;


let address =
document.getElementById("address").value;


let note =
document.getElementById("note").value;



let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];



if(
name==="" ||
phone==="" ||
wilaya==="اختر الولاية"
){

alert("يرجى ملء المعلومات المطلوبة");

return;

}



let message =
"🛒 طلب جديد من Bouras.shop_dz%0A%0A";



message +=
"👤 الاسم: "+name+
"%0A";


message +=
"📞 الهاتف: "+phone+
"%0A";


message +=
"📍 الولاية: "+wilaya+
"%0A";


message +=
"🏠 العنوان: "+address+
"%0A";



message +=
"📦 المنتجات:%0A";



let total=0;



cart.forEach(item=>{


message +=
"- "+
item.name+
" × "+
item.qty+
"%0A";


total += item.price * item.qty;


});



message +=
"%0A💰 المجموع: "+
total+
" دج";



message +=
"%0A📝 ملاحظة: "+
note;



window.open(

"https://wa.me/213778196483?text="+message,

"_blank"

);



}