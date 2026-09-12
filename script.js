const words=[
"C++ Developer",
"Software Developer",
"AI Enthusiast",
"Computer Vision Developer",
"Problem Solver"
];

let wordIndex=0;
let charIndex=0;
let deleting=false;

const typing=document.getElementById("typing");

function typeEffect(){

const word=words[wordIndex];

if(!deleting){
typing.textContent=word.substring(0,charIndex+1);
charIndex++;

if(charIndex===word.length){
deleting=true;
setTimeout(typeEffect,1500);
return;
}

}else{
typing.textContent=word.substring(0,charIndex-1);
charIndex--;

if(charIndex===0){
deleting=false;
wordIndex=(wordIndex+1)%words.length;
}
}

setTimeout(typeEffect,deleting?50:90);
}

typeEffect();


const reveals=document.querySelectorAll(".reveal");

function revealOnScroll(){

reveals.forEach(element=>{

const position=element.getBoundingClientRect().top;

if(position<window.innerHeight-100){
element.classList.add("active");
}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


const cursor=document.querySelector(".cursor");
const ring=document.querySelector(".cursor-ring");

let mouseX=0;
let mouseY=0;
let ringX=0;
let ringY=0;

document.addEventListener("mousemove",e=>{

mouseX=e.clientX;
mouseY=e.clientY;

cursor.style.left=mouseX+"px";
cursor.style.top=mouseY+"px";

});

function animateCursor(){

ringX+=(mouseX-ringX)*0.15;
ringY+=(mouseY-ringY)*0.15;

ring.style.left=ringX+"px";
ring.style.top=ringY+"px";

requestAnimationFrame(animateCursor);

}

animateCursor();


document.querySelectorAll("a").forEach(link=>{

link.addEventListener("mouseenter",()=>{

ring.style.width="55px";
ring.style.height="55px";

});

link.addEventListener("mouseleave",()=>{

ring.style.width="35px";
ring.style.height="35px";

});

});


const navLinks=document.querySelectorAll(".nav-links a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});