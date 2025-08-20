import{a as p,S as m,i as n}from"./assets/vendor-9md0t_4N.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function y(i){const r="51879561-dd43d0ef22fd8f83e88d07dfd",o="https://pixabay.com/api/",s=new URLSearchParams({key:r,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await p.get(`${o}?${s}`)).data}const l=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function h(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:a,comments:u,downloads:f})=>`
    <li class="gallery-item">
      <a href="${s}">
        <img src="${o}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t}</p>
        <p><b>Views:</b> ${a}</p>
        <p><b>Comments:</b> ${u}</p>
        <p><b>Downloads:</b> ${f}</p>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",r),g.refresh()}function b(){l.innerHTML=""}function L(){d.classList.remove("is-hidden")}function w(){d.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",async i=>{i.preventDefault();const r=i.target.elements.query.value.trim();if(!r){n.warning({title:"Warning",message:"Search query cannot be empty!",position:"topRight"});return}b(),L();try{const o=await y(r);o.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(o.hits)}catch(o){console.error("Error fetching images:",o),n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w(),c.reset()}});
//# sourceMappingURL=index.js.map
