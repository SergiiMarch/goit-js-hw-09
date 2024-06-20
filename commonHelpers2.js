(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const m=document.querySelector(".form-js"),u=`  <form class="feedback-form" autocomplete="off">
<label>
  Email
  <input type="email" name="email" autofocus />
</label>
<label>
  Message
  <textarea name="message" rows="8"></textarea>
</label>
<button type="submit">Submit</button>
</form>; `;m.insertAdjacentHTML("beforeend",u);const a=document.querySelector(".feedback-form");let o={email:"",message:""};const i="feedback-form-state";function f(){let t=localStorage.getItem(i);t&&(t=JSON.parse(t),a.elements.email.value=t.email||"",a.elements.message.value=t.message||"",o=t)}f();a.addEventListener("input",d);function d(t){t.preventDefault(),o[t.target.name]=t.target.value.trim(),localStorage.setItem(i,JSON.stringify(o))}a.addEventListener("submit",t=>{t.preventDefault();const{email:s,message:l}=o;if(!s||!l){alert("Fill please all fields");return}console.log("formData:",o),localStorage.removeItem(i),a.reset(),o={email:"",message:""}});
//# sourceMappingURL=commonHelpers2.js.map
