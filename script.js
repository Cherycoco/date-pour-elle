const pages = {
    intro: document.getElementById("intro"),
    photo: document.getElementById("photoPage"),
    plan: document.getElementById("planPage"),
    question: document.getElementById("questionPage"),
    success: document.getElementById("successPage"),
    think: document.getElementById("thinkPage")
};

const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const questionButton = document.getElementById("questionButton");
const yesButton = document.getElementById("yesButton");
const thinkButton = document.getElementById("thinkButton");
const backButton = document.getElementById("backButton");

function show(page){

    Object.values(pages).forEach(p=>{
        p.classList.remove("active");
    });

    page.classList.add("active");

}

startButton.onclick=()=>show(pages.photo);

continueButton.onclick=()=>show(pages.plan);

questionButton.onclick=()=>show(pages.question);

backButton.onclick=()=>show(pages.question);

thinkButton.onclick=()=>show(pages.think);

yesButton.onclick=()=>{

    show(pages.success);

    launchConfetti();

}


/////////////////////////////////////////////////////
// PARTICULES EN FOND
/////////////////////////////////////////////////////

const particleContainer=document.getElementById("particles");

for(let i=0;i<30;i++){

    const dot=document.createElement("div");

    dot.style.position="absolute";

    dot.style.width=(3+Math.random()*6)+"px";
    dot.style.height=dot.style.width;

    dot.style.borderRadius="50%";

    dot.style.background="rgba(255,255,255,.18)";

    dot.style.left=Math.random()*100+"vw";
    dot.style.top=Math.random()*100+"vh";

    dot.style.animation=`float ${8+Math.random()*10}s linear infinite`;

    particleContainer.appendChild(dot);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes float{

0%{
transform:translateY(0px);
opacity:.2;
}

50%{
opacity:.7;
}

100%{
transform:translateY(-120px);
opacity:0;
}

}

`;

document.head.appendChild(style);

/////////////////////////////////////////////////////
// CONFETTIS ❤️
/////////////////////////////////////////////////////

const canvas=document.getElementById("confetti");

const ctx=canvas.getContext("2d");

resize();

window.addEventListener("resize",resize);

function resize(){

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}

function launchConfetti(){

const confetti=[];

for(let i=0;i<170;i++){

confetti.push({

x:Math.random()*canvas.width,

y:-20,

size:6+Math.random()*10,

speed:2+Math.random()*5,

rotation:Math.random()*360,

emoji:Math.random()>.5?"❤️":"💖"

});

}

let frame=0;

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

confetti.forEach(c=>{

ctx.font=c.size*2+"px serif";

ctx.save();

ctx.translate(c.x,c.y);

ctx.rotate(c.rotation);

ctx.fillText(c.emoji,0,0);

ctx.restore();

c.y+=c.speed;

c.rotation+=0.03;

});

frame++;

if(frame<260){

requestAnimationFrame(draw);

}else{

ctx.clearRect(0,0,canvas.width,canvas.height);

}

}

draw();

}

/////////////////////////////////////////////////////
// EFFET MACHINE À ÉCRIRE
/////////////////////////////////////////////////////

const titles=document.querySelectorAll("h1,h2");

titles.forEach(title=>{

const text=title.innerHTML;

title.innerHTML="";

let i=0;

function type(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(type,18);

}

}

setTimeout(type,300);

});

/////////////////////////////////////////////////////
// PETIT EFFET SUR LA PHOTO
/////////////////////////////////////////////////////

const photo=document.querySelector(".photo");

photo.addEventListener("mousemove",(e)=>{

const rect=photo.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

photo.style.transform=`
perspective(1000px)
rotateY(${(x-rect.width/2)/35}deg)
rotateX(${-(y-rect.height/2)/35}deg)
scale(1.03)
`;

});

photo.addEventListener("mouseleave",()=>{

photo.style.transform="scale(1)";

});
