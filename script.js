const menu=document.querySelector('.menu'), nav=document.querySelector('.nav-links'), langBtn=document.querySelector('#langBtn');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
let lang='km';
function setLang(next){
  lang=next;
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-km]').forEach(el=>el.innerHTML=el.dataset[lang]);
  langBtn.textContent=lang==='km'?'EN':'ខ្មែរ';
}
langBtn.addEventListener('click',()=>setLang(lang==='km'?'en':'km'));
document.querySelector('#year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
document.querySelectorAll('.service,.pricing-card,.about-points div,.hero-card').forEach(e=>{e.classList.add('fade');observer.observe(e)});
