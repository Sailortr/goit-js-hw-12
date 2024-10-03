import{S as p,a as f,i as c}from"./assets/vendor-CRCB-GUD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=document.querySelector(".search-input"),d=document.getElementById("gallery"),u=document.getElementById("search-form"),y=new p(".gallery li > a",{captionsData:"alt",captionDelay:250}),g=document.getElementById("load-more");let i=1,l="";async function h(){const s=m.value.trim();let r;s!==""&&s!==l?(i=1,l=s,d.innerHTML="",r=document.getElementById("loader-container")):r=document.getElementById("loader-more-container");const n=`https://pixabay.com/api/?key=46270894-c6cf89269c02f6d41aef898e4&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${i}&per_page=12`;try{r.classList.remove("hidden");const t=(await f.get(n)).data;t.hits.length===0?c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(b(t.hits),g.classList.remove("hidden"),i++)}catch(e){c.error({title:"",message:`Sorry, ${e.message}! Please try again!`,position:"topRight"}),console.error("Hata:",e)}finally{r.classList.add("hidden")}}function b(s){const r=s.map(o=>`
    <li class="card">
  <a href="${o.largeImageURL}">
    <img src="${o.webformatURL}" alt="${o.tags}" />
  </a>
  <div class="info">
    <p class="info-text"><b>Likes</b> ${o.likes}</p>
    <p class="info-text"><b>Views</b> ${o.views}</p>
    <p class="info-text"><b>Comments</b> ${o.comments}</p>
    <p class="info-text"><b>Downloads</b> ${o.downloads}</p>
  </div>
</li>
    
    `);d.innerHTML+=r.join(""),y.refresh()}u.addEventListener("submit",async s=>{s.preventDefault(),await h()});
//# sourceMappingURL=index.js.map
