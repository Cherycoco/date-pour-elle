
const ids=["intro","question","planning","success"];
const show=id=>ids.forEach(x=>document.getElementById(x).classList.toggle("active",x===id));
startBtn.onclick=()=>show("question");
const jokes=[
"Tu es sûre ? 🤔",
"Réfléchis encore 😅",
"Erreur 404 : le Non est introuvable.",
"Ton doigt a glissé.",
"Essaie encore 😇",
"J'abandonne pas si vite.",
"Le Oui est plus joli ❤️",
"Cette option est déconseillée.",
"On recommence ?",
"Allez... 🥺"
];
let n=0;
const popup=document.getElementById("popup");
const pt=document.getElementById("popupTitle");
const pc=document.getElementById("popupText");
popupBtn.onclick=()=>popup.classList.remove("show");
noBtn.onclick=()=>{
 pt.textContent=jokes[n%jokes.length];
 pc.textContent="Je refuse poliment d'accepter cette réponse 😄";
 popup.classList.add("show");
 n++;
 yesBtn.style.transform=`scale(${1+n*0.08})`;
 const x=Math.random()*220-110,y=Math.random()*120-60;
 noBtn.style.transform=`translate(${x}px,${y}px)`;
}
yesBtn.onclick=()=>show("planning");
confirmBtn.onclick=()=>{
 summary.textContent=`Rendez-vous ${day.value} à ${hour.value} pour ${activity.value}. ❤️`;
 show("success");
 if(window.confetti){
  const end=Date.now()+2500;
  (function f(){
    confetti({particleCount:5,spread:60,origin:{y:.6}});
    if(Date.now()<end)requestAnimationFrame(f);
  })();
 }
}
setInterval(()=>{
 const h=document.createElement("div");
 h.textContent="❤️";
 h.style.position="fixed";
 h.style.left=Math.random()*100+"vw";
 h.style.bottom="-20px";
 h.style.fontSize=(16+Math.random()*18)+"px";
 h.style.transition="transform 6s linear,opacity 6s";
 document.body.appendChild(h);
 requestAnimationFrame(()=>{
  h.style.transform="translateY(-110vh)";
  h.style.opacity="0";
 });
 setTimeout(()=>h.remove(),6000);
},500);
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
    music.volume = 0.35; // volume à 35 %
    music.play().catch(err => console.log(err));
});
