const s="feedback-form-state",a={email:"",message:""},t=document.querySelector(".feedback-form"),m=localStorage.getItem(s);if(m){const e=JSON.parse(m);e.email&&(t.email.value=e.email.trim(),a.email=e.email.trim()),e.message&&(t.message.value=e.message.trim(),a.message=e.message.trim())}t.addEventListener("input",e=>{const l=e.target.name;a[l]=e.target.value.trim(),localStorage.setItem(s,JSON.stringify(a))});t.addEventListener("submit",e=>{if(e.preventDefault(),!a.email||!a.message){alert("Fill please all fields");return}console.log(a),localStorage.removeItem(s),a.email="",a.message="",t.email.value="",t.message.value=""});
//# sourceMappingURL=2-form-722e5e53.js.map
