document.getElementById('year').textContent=new Date().getFullYear();
const t=document.getElementById('menuToggle'),n=document.getElementById('nav');
if(t){t.onclick=()=>{n.style.display=n.style.display==='flex'?'none':'flex';n.style.flexDirection='column';}}
