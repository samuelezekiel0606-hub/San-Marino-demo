function filterMenu(cat,btn){
 document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active')); btn.classList.add('active');
 document.querySelectorAll('.dish').forEach(d=>d.style.display=(cat==='all'||d.dataset.cat===cat)?'block':'none');
}
