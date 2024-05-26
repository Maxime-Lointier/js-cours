let tux=document.getElementById('tux');

document.addEventListener('keydown',function(event){
  console.log('Touche enfoncée:',event.key);
  let rect=tux.getBoundingClientRect();
  console.log(rect);
  let d=300;
  let left=rect.left;
  let top=rect.top;
  if(event.key==='ArrowRight'){left+=d;}
  if(event.key==='ArrowLeft' ){left-=d;}
  if(event.key==='ArrowDown' ){top+=d;}
  if(event.key==='ArrowUp'   ){top-=d;}
  tux.style.left=left+"px";
  tux.style.top=top+"px";
});

document.addEventListener('mousemove',ajouter_splat);
function ajouter_splat(event) 
{
  // Petit détail: éviter la sélection 
  event.preventDefault();
  let i=document.createElement('img');
  i.src='https://moodle.iutv.univ-paris13.fr/img/bjs/splat.png';
  i.className='splat';
  document.body.append(i);
  // Forcer le navigateur à prendre en compte la situation actuelle (position, scale).
  // Ceci permettra au navigateur de s'apercevoir d'un changement futur des propriétés CSS.
  window.getComputedStyle(i).top;
  // Changer les propriétés CSS qui transitionnent. 
  // Le navigateur s'aperçoit du changement et déclenche la transition.
  if(event.pageX<26 || event.pageX>484||event.pageY<26 || event.pageY >484){
    return(0)
  }
  i.style.top =(event.pageY-16)+'px';
  i.style.left=(event.pageX-16)+'px';
  i.style.transform='scale(1)';
}


