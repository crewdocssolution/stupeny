document.addEventListener("DOMContentLoaded",()=>{
const nav=document.querySelector(".nav"),t=document.querySelector(".menu");
if(t&&nav)t.onclick=()=>nav.classList.toggle("open");
const m=document.getElementById("cb");
document.querySelectorAll("[data-cb]").forEach(b=>b.onclick=e=>{e.preventDefault();m&&m.classList.add("open")});
document.querySelectorAll("[data-x]").forEach(b=>b.onclick=()=>m&&m.classList.remove("open"));
if(m)m.onclick=e=>{if(e.target===m)m.classList.remove("open")};
const f=document.getElementById("cbf");
if(f)f.onsubmit=e=>{e.preventDefault();const n=f.name.value.trim(),p=f.phone.value.trim();
location.href="mailto:info@stupeny.org?subject="+encodeURIComponent("Zayavka")+"&body="+encodeURIComponent(n+"\n"+p);};
if(!document.querySelector(".callbar")){
  const ru=location.pathname.indexOf("/ru")===0;
  const a=document.createElement("a");
  a.className="callbar";
  a.href="tel:+380977741874";
  a.textContent=ru?"Позвонить":"Зателефонувати";
  document.body.appendChild(a);
}
});
