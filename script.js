document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{}));
const year=document.createElement('span');
// Subtle pointer depth effect on the hero creator card; disabled for touch/reduced-motion users.
const card=document.querySelector('.creator-card');
if(card && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches){
  document.querySelector('.hero-art').addEventListener('pointermove',e=>{
    const r=e.currentTarget.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`rotate(5deg) rotateY(${x*8}deg) rotateX(${-y*8}deg)`;
  });
  document.querySelector('.hero-art').addEventListener('pointerleave',()=>card.style.transform='rotate(5deg)');
}