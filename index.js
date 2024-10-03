import{S as m,a as p,i}from"./assets/vendor-CRCB-GUD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=document.querySelector(".search-input"),d=document.getElementById("gallery"),f=document.getElementById("myForm"),y=new m(".gallery li > a",{captionsData:"alt",captionDelay:250}),g=document.getElementById("load-more");let l=1,c="";async function h(){const s=u.value.trim();let o;s!==""&&s!==c?(l=1,c=s,d.innerHTML="",o=document.getElementById("loader-container")):o=document.getElementById("loader-more-container");const n=`https://pixabay.com/api/?key=46270894-c6cf89269c02f6d41aef898e4&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;try{o.classList.remove("hidden");const t=(await p.get(n)).data;t.hits.length===0?i.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(b(t.hits),g.classList.remove("hidden"),l++)}catch(e){i.error({title:"",message:`Sorry, ${e.message}! Please try again!`,position:"topRight"}),console.error("Hata:",e)}finally{o.classList.add("hidden")}}function b(s){const o=s.map(r=>`
    <li class="card">
  <a href="${r.largeImageURL}">
    <img src="${r.webformatURL}" alt="${r.tags}" />
  </a>
  <div class="info">
    <p class="info-text"><b>Likes</b> ${r.likes}</p>
    <p class="info-text"><b>Views</b> ${r.views}</p>
    <p class="info-text"><b>Comments</b> ${r.comments}</p>
    <p class="info-text"><b>Downloads</b> ${r.downloads}</p>
  </div>
</li>
    
    `);d.innerHTML=o.join(""),y.refresh()}f.addEventListener("submit",async s=>{s.preventDefault(),await h()});
//# sourceMappingURL=index.js.map
