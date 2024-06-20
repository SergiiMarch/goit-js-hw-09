import"./assets/styles-9bc15024.js";const r=document.querySelector(".form-js"),s=`  <form class="feedback-form" autocomplete="off">
<label>
  Email
  <input type="email" name="email" autofocus />
</label>
<label>
  Message
  <textarea name="message" rows="8"></textarea>
</label>
<button type="submit">Submit</button>
</form>; `;r.insertAdjacentHTML("beforeend",s);const a=document.querySelector(".feedback-form");let t={email:"",message:""};const l="feedback-form-state";function n(){let e=localStorage.getItem(l);e&&(e=JSON.parse(e),a.elements.email.value=e.email||"",a.elements.message.value=e.message||"",t=e)}n();a.addEventListener("input",i);function i(e){e.preventDefault(),t[e.target.name]=e.target.value.trim(),localStorage.setItem(l,JSON.stringify(t))}a.addEventListener("submit",e=>{e.preventDefault();const{email:m,message:o}=t;if(!m||!o){alert("Fill please all fields");return}console.log("formData:",t),localStorage.removeItem(l),a.reset(),t={email:"",message:""}});
//# sourceMappingURL=commonHelpers2.js.map
