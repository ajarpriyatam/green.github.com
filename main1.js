

let btns2=document.getElementById('btns2');
let btns1=document.getElementById('btns1');
let btnsn1=document.getElementById('btnsn1');
let second=document.getElementById('second');
let first=document.getElementById('first');
let third=document.getElementById('third');
let username = document.getElementById('text1')
let password = document.getElementById('text2')
let login = document.getElementById('btn1')
let register = document.getElementById('btn2')



register.addEventListener('click',()=>{
    let name = document.getElementById('text3').value
    let email = document.getElementById('text4').value
    let phone = document.getElementById('text5').value
    let regiuser = document.getElementById('text6').value

    console.log(name,email,phone,regiuser)
    third.style.display="block"
    second.style.display = "none"
})
btnsn1.addEventListener('click',()=>{
    third.style.display="none"
    second.style.display = "block"
})



btns2.addEventListener('click',function(){
    second.style.display="block";
    first.style.display="none";
});
btns1.addEventListener('click',function(){
    second.style.display="none";
    first.style.display="block";
});




let burger = document.getElementById('burger');
let nav = document.getElementById('nav');
let cross = document.getElementById('cross');
let arrow = document.getElementById('arrow');
let btn1 = document.getElementById('btn1');




burger.addEventListener('click',function(){
    nav.style.left="80%";
    arrow.style.display="none";
})
cross.addEventListener('click',function(){
    nav.style.left="100%";
    arrow.style.display="block";

})