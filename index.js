let box1=document.getElementById("box1");
let box2=document.getElementById("box2");
let box3=document.getElementById("box3");
let box4=document.getElementById("box4");

box1.addEventListener("click",function(){
    box1.innerHTML=Math.floor(Math.random()*100);
})
box1.addEventListener("mouseleave",function(){
    box1.innerHTML="1";
})

box2.addEventListener("mouseenter",function(){
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);
    box2.style.backgroundColor=`rgb(${a},${b},${c})`;
    box2.innerHTML= "";
})
box2.addEventListener("mouseleave",function(){
    box2.innerHTML="2";
    box2.style.backgroundColor="white";
})

box3.addEventListener("mouseenter",function(){
    let a=Math.floor(Math.random()*256);
    box3.style.backgroundColor=`rgb(256,${a},256)`;
})
box3.addEventListener("mouseleave",function(){
    box3.innerHTML="3";
    box3.style.backgroundColor="white";
})
box4.addEventListener("click",function(){
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);
    box1.style.backgroundColor=`rgb(${a},256,${c})`;
    box2.style.backgroundColor=`rgb(${a},${b},256)`;
    box3.style.backgroundColor=`rgb(256,${b},${c})`;

})
box4.addEventListener("mouseleave",function(){
    box4.innerHTML="4";
    box4.style.backgroundColor="white";
})