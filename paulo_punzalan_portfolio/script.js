const toggle=document.getElementById('themeToggle');
toggle.addEventListener('click',()=> {
    document.body.classList.toggle('dark');
toggle.textContent=document.body.classList.contains('dark')?'☼':'◐';
});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=> {
    if(entry.isIntersecting){entry.target.classList.add('visible');
observer.unobserve(entry.target)}}),{threshold:.14
});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const now=new Date();
document.getElementById('clock').textContent='PORTFOLIO / '+now.getFullYear();
