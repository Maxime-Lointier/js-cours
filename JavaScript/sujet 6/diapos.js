document.getElementById('dia-images').style.left='0px';

let diaDroite=document.getElementById('dia-droite');
diaDroite.addEventListener('click',function(){
  console.log('Flèche droite');
  let diaImages=document.getElementById('dia-images');
  let pos=parseInt(diaImages.style.left);
  if(pos <=-1800){return}
  pos-=600;
  diaImages.style.left=pos+'px';

});
let diaGauche=document.getElementById('dia-gauche');
diaGauche.addEventListener('click',function(){
    console.log('Flèche gauche')
    let diaImages=document.getElementById('dia-images');
    let pos=parseInt(diaImages.style.left);
    if(pos >=0){return}
    pos+=600;
    diaImages.style.left=pos+'px';
})