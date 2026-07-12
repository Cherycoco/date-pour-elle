const no=document.getElementById('no');
const yes=document.getElementById('yes');
const intro=document.getElementById('intro');
const success=document.getElementById('success');
const txt=[
'Non 🥺','Tu es sûre ?','Vraiment ?','Réfléchis 😅',
'Allez... ❤️','Promis je suis sympa 😇','Dernière chance 😂'
];
let i=0,s=1;
function move(){
 const x=Math.random()*(window.innerWidth-160);
 const y=Math.random()*(window.innerHeight-80);
 no.style.position='fixed';
 no.style.left=x+'px';
 no.style.top=y+'px';
 if(i<txt.length-1)i++;
 no.textContent=txt[i];
 s+=0.08;
 yes.style.transform='scale('+s+')';
}
no.addEventListener('mouseenter',move);
no.addEventListener('click',move);
yes.onclick=()=>{
 intro.classList.add('hidden');
 success.classList.remove('hidden');
 document.querySelector('.overlay').style.backdropFilter='blur(0px)';
 for(let n=0;n<80;n++){
   const h=document.createElement('div');
   h.textContent=Math.random()>0.5?'❤️':'💖';
   h.style.position='fixed';
   h.style.left=Math.random()*100+'vw';
   h.style.top='-20px';
   h.style.fontSize=(16+Math.random()*24)+'px';
   h.style.transition='transform 4s linear';
   document.body.appendChild(h);
   requestAnimationFrame(()=>h.style.transform='translateY(110vh)');
   setTimeout(()=>h.remove(),4200);
 }
};
