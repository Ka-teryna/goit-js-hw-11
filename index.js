import{a as f,S as m,i}from"./assets/vendor-9md0t_4N.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function y(s){const r="51879561-dd43d0ef22fd8f83e88d07dfd",o="https://pixabay.com/api/",a=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await f.get(`${o}?${a}`)).data}const l=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:p,downloads:u})=>`
    <li class="gallery-item">
      <a href="${a}">
        <img src="${o}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes</b><span>${t}</span></p>
        <p><b>Views</b><span>${n}</span></p>
        <p><b>Comments</b><span>${p}</span></p>
        <p><b>Downloads</b><span>${u}</span></p>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",r),g.refresh()}function b(){l.innerHTML=""}function L(){d.classList.remove("is-hidden")}function w(){d.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements.query.value.trim();if(!r){i.warning({title:"Warning",message:"Search query cannot be empty!",position:"topRight"});return}b(),L();try{const o=await y(r);o.hits.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(o.hits)}catch(o){console.error("Error fetching images:",o),i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w(),c.reset()}});
//# sourceMappingURL=index.js.map
