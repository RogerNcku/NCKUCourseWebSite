
const grid=document.getElementById('bookGrid');
const q=document.getElementById('bookSearch');
let mode='ALL';
function render(){
 const term=(q?.value||'').trim().toLowerCase();
 const list=window.BOOKS.filter(b=>(mode==='ALL'||b.testament===mode)&&(`${b.no} ${b.zh} ${b.en}`.toLowerCase().includes(term)));
 grid.innerHTML=list.map(b=>`<a class="book" href="${b.file}" target="_blank" rel="noopener"><span class="no">${b.no.toString().padStart(2,'0')} · ${b.testament==='OT'?'舊約':'新約'}</span><strong>${b.zh}</strong><small>${b.en}</small></a>`).join('');
 document.getElementById('bookCount').textContent=`顯示 ${list.length} / 66 卷`;
}
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');mode=btn.dataset.mode;render()}));
q?.addEventListener('input',render);render();
