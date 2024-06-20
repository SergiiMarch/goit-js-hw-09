(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const c=document.querySelector(".form-js"),u=`  <form class="feedback-form" autocomplete="off">
<label>
  Email
  <input type="email" name="email" autofocus />
</label>
<label>
  Message
  <textarea name="message" rows="8"></textarea>
</label>
<button type="submit">Submit</button>
</form>; `;c.insertAdjacentHTML("beforeend",u);const l=document.querySelector(".feedback-form");let n={email:"",message:""};const m="feedback_form_state";function f(){let t=localStorage.getItem(m);t&&(t=JSON.parse(t),l.elements.email.value=t.email||"",l.elements.message.value=t.message||"",n=t)}f();l.addEventListener("input",d);function d(t){t.preventDefault(),n[t.target.name]=t.target.value,localStorage.setItem("LOCAL_KEY",JSON.stringify(n))}console.log("hello");
//# sourceMappingURL=commonHelpers2.js.map
