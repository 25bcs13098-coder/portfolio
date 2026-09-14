const loader=document.getElementById("loader");

window.addEventListener("load",()=>{
setTimeout(()=>{
loader.classList.add("hide");
},700);
});


const typingElement=document.getElementById("typing");

const words=[
"Developer",
"C++ Programmer",
"Problem Solver",
"Web Developer",
"Technology Explorer"
];

let wordIndex=0;
let charIndex=0;
let deleting=false;

function typeEffect(){

const currentWord=words[wordIndex];

if(!deleting){

typingElement.textContent=
currentWord.substring(0,charIndex+1);

charIndex++;

if(charIndex===currentWord.length){

deleting=true;

setTimeout(typeEffect,1300);

return;
}

}else{

typingElement.textContent=
currentWord.substring(0,charIndex-1);

charIndex--;

if(charIndex===0){

deleting=false;

wordIndex=
(wordIndex+1)%words.length;
}

}

setTimeout(
typeEffect,
deleting?55:90
);

}

typeEffect();


/* MOBILE MENU */

const menuBtn=
document.getElementById("menuBtn");

const mobileMenu=
document.getElementById("mobileMenu");

menuBtn.addEventListener("click",()=>{

mobileMenu.classList.toggle("open");

});


document
.querySelectorAll(".mobile-menu a")
.forEach(link=>{

link.addEventListener("click",()=>{

mobileMenu.classList.remove("open");

});

});


/* SCROLL REVEAL */

const revealElements=
document.querySelectorAll(".reveal");

const revealObserver=
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

revealObserver.unobserve(
entry.target
);

}

});

},
{
threshold:.12
}
);


revealElements.forEach(element=>{

revealObserver.observe(element);

});


/* SCROLL PROGRESS */

const progress=
document.getElementById("scrollProgress");

window.addEventListener("scroll",()=>{

const scrollTop=
window.scrollY;

const documentHeight=
document.documentElement.scrollHeight-
window.innerHeight;

const percentage=
(scrollTop/documentHeight)*100;

progress.style.width=
percentage+"%";

});


/* CONTACT FORM */

const contactForm=
document.getElementById("contactForm");

const submitBtn=
document.getElementById("submitBtn");

const buttonText=
document.getElementById("buttonText");

const buttonArrow=
document.getElementById("buttonArrow");

const formStatus=
document.getElementById("formStatus");

const successModal=
document.getElementById("successModal");

const closeModal=
document.getElementById("closeModal");

const modalDone=
document.getElementById("modalDone");


contactForm.addEventListener(
"submit",
async(event)=>{

event.preventDefault();


const accessKey=
contactForm
.querySelector(
'input[name="access_key"]'
)
.value
.trim();


if(
!accessKey ||
accessKey==="YOUR_WEB3FORMS_ACCESS_KEY"
){

formStatus.textContent=
"Please add your Web3Forms Access Key first.";

formStatus.className=
"form-status error";

return;

}


submitBtn.classList.add("loading");

buttonText.textContent=
"Sending...";

buttonArrow.textContent="";

formStatus.textContent="";

formStatus.className=
"form-status";


const formData=
new FormData(contactForm);


formData.append(
"page_url",
window.location.href
);


try{

const response=
await fetch(
"https://api.web3forms.com/submit",
{
method:"POST",
body:formData
}
);


const data=
await response.json();


if(data.success){

contactForm.reset();

formStatus.textContent="";

formStatus.className=
"form-status";

successModal.classList.add(
"show"
);

}else{

formStatus.textContent=
data.message ||
"Something went wrong. Please try again.";

formStatus.className=
"form-status error";

}

}catch(error){

formStatus.textContent=
"Unable to send message. Please check your internet connection.";

formStatus.className=
"form-status error";

}


submitBtn.classList.remove(
"loading"
);

buttonText.textContent=
"Send Message";

buttonArrow.textContent=
"↗";

}
);


/* SUCCESS MODAL */

function closeSuccessModal(){

successModal.classList.remove(
"show"
);

}


closeModal.addEventListener(
"click",
closeSuccessModal
);


modalDone.addEventListener(
"click",
closeSuccessModal
);


successModal.addEventListener(
"click",
(event)=>{

if(event.target===successModal){

closeSuccessModal();

}

}
);


document.addEventListener(
"keydown",
(event)=>{

if(event.key==="Escape"){

closeSuccessModal();

}

}
);


/* YEAR */

document.getElementById("year")
.textContent=
new Date().getFullYear();


/* ACTIVE NAV */

const sections=
document.querySelectorAll(
"section[id]"
);

const navLinks=
document.querySelectorAll(
".nav-links a"
);


window.addEventListener(
"scroll",
()=>{

let current="";

sections.forEach(section=>{

const sectionTop=
section.offsetTop-180;

if(
window.scrollY>=sectionTop
){

current=
section.getAttribute("id");

}

});


navLinks.forEach(link=>{

link.classList.remove(
"active"
);

if(
link.getAttribute("href")===
"#"+current
){

link.classList.add(
"active"
);

}

});

}
);