(this.webpackJsonp=this.webpackJsonp||[]).push([[12,6,13,20,22,24],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n(5),a=n(29),s=n(9),o=n(16),r=n(33),l=n(15),c=n(34),d=n(36);let u,h=!1;function p(e){h||(u||(u=r.a.getConfig().then(e=>e.suggested_lang_code!==o.default.lastRequestedLangCode?Promise.all([e,o.default.getStrings(e.suggested_lang_code,["Login.ContinueOnLanguage"]),o.default.getCacheLangPack()]):[]))).then(([t,n])=>{if(!t)return;const r=[];n.forEach(e=>{const t=o.default.strings.get(e.key);t&&(r.push(t),o.default.strings.set(e.key,e))});const u=Object(c.a)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.ContinueOnLanguage"});u.lastElementChild.classList.remove("i18n"),Object(s.a)().then(()=>{window.requestAnimationFrame(()=>{e.append(u)})}),l.default.addEventListener("language_change",()=>{u.remove()},{once:!0}),r.forEach(e=>{o.default.strings.set(e.key,e)}),Object(a.b)(u,e=>{Object(i.a)(e),h=!0,u.disabled=!0,Object(d.f)(u),o.default.getLangPack(t.suggested_lang_code)})})}},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n(73),a=n(92),s=n(95);function o(e){return function(e){return Object(s.a)(e,"readAsArrayBuffer")}(e).then(e=>new Uint8Array(e))}var r=function(e,t,n,i){return new(n||(n=Promise))((function(a,s){function o(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}l((i=i.apply(e,t||[])).next())}))};var l=new class{constructor(){this.blobSupported=!0;try{Object(a.a)([],"")}catch(e){this.blobSupported=!1}}isAvailable(){return this.blobSupported}write(e,t){return t instanceof Blob?o(t).then(t=>e.write(t)):e.write(t)}getFakeFileWriter(e,t){const n=[];return{write:e=>r(this,void 0,void 0,(function*(){if(!this.blobSupported)throw!1;n.push(e)})),truncate:()=>{n.length=0},finalize:(i=!0)=>{const s=Object(a.a)(n,e);return i&&t&&t(s),s}}}},c=function(e,t,n,i){return new(n||(n=Promise))((function(a,s){function o(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}l((i=i.apply(e,t||[])).next())}))};class d{constructor(e){this.dbName=e,this.useStorage=!0,i.a.test&&(this.dbName+="_test"),d.STORAGES.length&&(this.useStorage=d.STORAGES[0].useStorage),this.openDatabase(),d.STORAGES.push(this)}openDatabase(){var e;return null!==(e=this.openDbPromise)&&void 0!==e?e:this.openDbPromise=caches.open(this.dbName)}delete(e){return this.timeoutOperation(t=>t.delete("/"+e))}deleteAll(){return caches.delete(this.dbName)}get(e){return this.timeoutOperation(t=>t.match("/"+e))}save(e,t){return this.timeoutOperation(n=>n.put("/"+e,t))}getFile(e,t="blob"){return this.get(e).then(e=>{if(!e)throw"NO_ENTRY_FOUND";return e[t]()})}saveFile(e,t){t instanceof Blob||(t=Object(a.a)(t));const n=new Response(t,{headers:{"Content-Length":""+t.size}});return this.save(e,n).then(()=>t)}timeoutOperation(e){return this.useStorage?new Promise((t,n)=>c(this,void 0,void 0,(function*(){let i=!1;const a=setTimeout(()=>{n(),i=!0},15e3);try{const n=yield this.openDatabase();if(!n)throw this.useStorage=!1,this.openDbPromise=void 0,"no cache?";const a=yield e(n);if(i)return;t(a)}catch(e){n(e)}clearTimeout(a)}))):Promise.reject("STORAGE_OFFLINE")}getFileWriter(e,t){const n=l.getFakeFileWriter(t,t=>this.saveFile(e,t).catch(()=>t));return Promise.resolve(n)}static toggleStorage(e){return Promise.all(this.STORAGES.map(t=>{if(t.useStorage=e,!e)return t.deleteAll()}))}}d.STORAGES=[]},109:function(e,t,n){"use strict";function i(e,t){return t?e.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=+$/,""):e.replace(/-/g,"+").replace(/_/g,"/")}n.d(t,"a",(function(){return i}))},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(85),a=n(91),s=n(0),o=n(37);class r extends o.b{constructor(e={}){super(Object.assign({label:"Contacts.PhoneNumber.Placeholder",name:"phone"},e)),this.pasted=!1,this.lastValue="",this.container.classList.add("input-field-phone");let t=this.input;if(t instanceof HTMLInputElement)t.type="tel",t.autocomplete="rr55RandomRR55";else{t.inputMode="decimal";const e=window.devicePixelRatio;if(e>1){let n;s.IS_APPLE?n=-.16*e:s.IS_ANDROID&&(n=0),t.style.setProperty("--letter-spacing",n+"px")}const n=this.setValueSilently.bind(this);this.setValueSilently=e=>{n(e),Object(i.a)(this.input,!0)}}t.addEventListener("input",()=>{t.classList.remove("error");const n=this.value;let i;Math.abs(n.length-this.lastValue.length)>1&&!this.pasted&&s.IS_APPLE_MOBILE&&this.setValueSilently(this.lastValue+n),this.pasted=!1,this.setLabel();let o,r,l,c="";"+"===this.value.replace(/\++/,"+")?this.setValueSilently("+"):(i=Object(a.a)(this.value),o=i.formatted,r=i.country,c=i.leftPattern,l=i.code,this.setValueSilently(this.lastValue=o?"+"+o:"")),t.dataset.leftPattern=c,e.onInput&&e.onInput(i)}),t.addEventListener("paste",()=>{this.pasted=!0}),t.addEventListener("keypress",e=>{const t=e.key;if(/\D/.test(t)&&!e.metaKey&&!e.ctrlKey&&"Backspace"!==t&&("+"!==t||!e.shiftKey))return e.preventDefault(),!1})}}},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(52);class a{constructor(e,t){this.inputField=e,this.size=t,this.max=45,this.needFrame=0,this.container=document.createElement("div"),this.container.classList.add("media-sticker-wrapper");const n=e.input;n.addEventListener("blur",()=>{this.playAnimation(0)}),n.addEventListener("input",t=>{this.playAnimation(e.value.length)})}playAnimation(e){if(!this.animation)return;let t;(e=Math.min(e,30))?(t=Math.round(Math.min(this.max,e)*(165/this.max)+11.33),this.idleAnimation&&(this.idleAnimation.stop(!0),this.idleAnimation.canvas.style.display="none"),this.animation.canvas.style.display=""):t=0;const n=this.needFrame>t?-1:1;this.animation.setDirection(n),0!==this.needFrame&&0===t&&this.animation.setSpeed(7),this.needFrame=t,this.animation.play()}load(){return this.loadPromise?this.loadPromise:this.loadPromise=Promise.all([i.a.loadAnimationAsAsset({container:this.container,loop:!0,autoplay:!0,width:this.size,height:this.size},"TwoFactorSetupMonkeyIdle").then(e=>(this.idleAnimation=e,this.inputField.value.length||e.play(),i.a.waitForFirstFrame(e))),i.a.loadAnimationAsAsset({container:this.container,loop:!1,autoplay:!1,width:this.size,height:this.size},"TwoFactorSetupMonkeyTracking").then(e=>(this.animation=e,this.inputField.value.length||(this.animation.canvas.style.display="none"),this.animation.addEventListener("enterFrame",e=>{(1===this.animation.direction&&e>=this.needFrame||-1===this.animation.direction&&e<=this.needFrame)&&(this.animation.setSpeed(1),this.animation.pause()),0===e&&0===this.needFrame&&this.idleAnimation&&(this.idleAnimation.canvas.style.display="",this.idleAnimation.play(),this.animation.canvas.style.display="none")}),i.a.waitForFirstFrame(e)))])}remove(){this.animation&&this.animation.remove(),this.idleAnimation&&this.idleAnimation.remove()}}},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(37);class a extends i.b{constructor(e){super(Object.assign({plainText:!0},e));const t=this.input;t.type="tel",t.setAttribute("required",""),t.autocomplete="off";let n=0;this.input.addEventListener("input",t=>{this.input.classList.remove("error"),this.setLabel();const i=this.value.replace(/\D/g,"").slice(0,e.length);this.setValueSilently(i);const a=this.value.length;if(a===e.length)e.onFill(this.value);else if(a===n)return;n=a})}}},20:function(e,t,n){"use strict";n.r(t);var i=n(36),a=n(45),s=n(17),o=n(33),r=n(31),l=n(66),c=n(37),d=n(47),u=n(34),h=n(84),p=n(1),m=n(7),f=n(16),g=n(52),b=n(18),v=n(59),y=n(6),E=n(67),L=n(100),S=n(108),w=n(22),O=n(103),k=n(5),_=n(29),T=n(35),A=n(54),x=n(72),j=n(85),P=n(102),C=n(78),N=n(87),D=n(15),F=n(115),R=n(10),M=function(e,t,n,i){return new(n||(n=Promise))((function(a,s){function o(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}l((i=i.apply(e,t||[])).next())}))};let H,I=null;const V=new l.a("page-sign",!0,()=>{const e=()=>{t=f.default.countriesList.filter(e=>{var t;return!(null===(t=e.pFlags)||void 0===t?void 0:t.hidden)}).sort((e,t)=>(e.name||e.default_name).localeCompare(t.name||t.default_name))};let t;e(),D.default.addEventListener("language_change",()=>{e()});const l=new Map;let b,U;const B=document.createElement("div");B.classList.add("input-wrapper");const q=new c.b({label:"Login.CountrySelectorLabel",name:Object(E.b)()});q.container.classList.add("input-select");const z=q.input,$=document.createElement("div");$.classList.add("select-wrapper","z-depth-3","hide");const W=document.createElement("span");W.classList.add("arrow","arrow-down"),q.container.append(W);const Q=document.createElement("ul");$.appendChild(Q);new a.b($);let K=()=>{K=null,t.forEach(e=>{const t=Object(P.c)(e.iso2),n=[];e.country_codes.forEach(i=>{const a=document.createElement("li");let s=r.a.wrapEmojiText(t);if(R.a){const e=document.createElement("span");e.innerHTML=s,a.append(e)}else a.innerHTML=s;const o=Object(f.i18n)(e.default_name);o.dataset.defaultName=e.default_name,a.append(o);const l=document.createElement("span");l.classList.add("phone-code"),l.innerText="+"+i.country_code,a.appendChild(l),n.push(a),Q.append(a)}),l.set(e.iso2,n)}),Q.addEventListener("mousedown",e=>{if(0!==e.button)return;const t=Object(v.a)(e.target,"LI");G(t)}),q.container.appendChild($)};const G=e=>{const n=e.childNodes[1].dataset.defaultName,i=e.querySelector(".phone-code").innerText,a=i.replace(/\D/g,"");Object(T.a)(z,Object(f.i18n)(n)),Object(C.a)(z,"input"),b=t.find(e=>e.default_name===n),U=b.country_codes.find(e=>e.country_code===a),ee.value=ee.lastValue=i,Z(),setTimeout(()=>{te.focus(),Object(j.a)(te,!0)},0)};let X;K(),z.addEventListener("focus",(function(e){K?K():t.forEach(e=>{l.get(e.iso2).forEach(e=>e.style.display="")}),clearTimeout(X),X=void 0,$.classList.remove("hide"),$.offsetWidth,$.classList.add("active"),q.select(),Object(h.b)({container:V.pageEl.parentElement.parentElement,element:z,position:"start",margin:4}),setTimeout(()=>{Y||(document.addEventListener("mousedown",J,{capture:!0}),Y=!0)},0)}));let Y=!1;const J=e=>{Object(y.a)(e.target,"input-select")||e.target!==z&&(Z(),document.removeEventListener("mousedown",J,{capture:!0}),Y=!1)},Z=()=>{void 0===X&&($.classList.remove("active"),X=window.setTimeout(()=>{$.classList.add("hide"),X=void 0},200))};z.addEventListener("keyup",e=>{const n=e.key;if(e.ctrlKey||"Control"===n)return!1;let i=q.value.toLowerCase(),a=[];t.forEach(e=>{const t=[e.name,e.default_name,e.iso2];t.filter(Boolean).forEach(e=>{const n=e.split(" ").filter(e=>/\w/.test(e)).map(e=>e[0]).join("");n.length>1&&t.push(n)});let n=!!t.filter(Boolean).find(e=>-1!==e.toLowerCase().indexOf(i));l.get(e.iso2).forEach(e=>e.style.display=n?"":"none"),n&&a.push(e)}),0===a.length?t.forEach(e=>{l.get(e.iso2).forEach(e=>e.style.display="")}):1===a.length&&"Enter"===n&&G(l.get(a[0].iso2)[0])}),W.addEventListener("mousedown",(function(e){e.cancelBubble=!0,e.preventDefault(),z.matches(":focus")?z.blur():z.focus()}));const ee=new F.a({onInput:e=>{g.a.loadLottieWorkers();const{country:t,code:n}=e||{};let i=t?t.name||t.default_name:"";i===q.value||b&&t&&n&&(b===t||U.country_code===n.country_code)||(Object(T.a)(z,t?Object(f.i18n)(t.default_name):i),b=t,U=n),t||ee.value.length-1>1?I.style.visibility="":I.style.visibility="hidden"}}),te=ee.input;te.addEventListener("keypress",e=>{if(!I.style.visibility&&"Enter"===e.key)return ie()});const ne=new d.a({text:"Login.KeepSigned",name:"keepSession",withRipple:!0,checked:!0});ne.input.addEventListener("change",()=>{const e=ne.checked;s.default.pushToState("keepSigned",e),L.a.toggleStorage(e),S.a.toggleStorage(e),o.a.toggleStorage(e),x.a.toggleStorage(e)}),s.default.getState().then(e=>{s.default.storage.isAvailable()?ne.checked=e.keepSigned:(ne.checked=!1,ne.label.classList.add("checkbox-disabled"))}),I=Object(u.a)("btn-primary btn-color-primary",{text:"Login.Next"}),I.style.visibility="hidden";const ie=e=>{e&&Object(k.a)(e);const t=Object(A.a)([I,H],!0);Object(T.a)(I,Object(f.i18n)("PleaseWait")),Object(i.f)(I);let a=ee.value;o.a.invokeApi("auth.sendCode",{phone_number:a,api_id:m.a.id,api_hash:m.a.hash,settings:{_:"codeSettings"}}).then(e=>{n.e(22).then(n.bind(null,23)).then(t=>t.default.mount(Object.assign(e,{phone_number:a})))}).catch(e=>{switch(t(),e.type){case"PHONE_NUMBER_INVALID":ee.setError(),Object(T.a)(ee.label,Object(f.i18n)("Login.PhoneLabelInvalid")),te.classList.add("error"),Object(T.a)(I,Object(f.i18n)("Login.Next"));break;default:console.error("auth.sendCode error:",e),I.innerText=e.type}})};Object(_.b)(I,ie),H=Object(u.a)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Login"});H.addEventListener("click",()=>{w.default.mount()}),B.append(q.container,ee.container,ne.label,I,H);const ae=document.createElement("h4");ae.classList.add("text-center"),Object(f._i18n)(ae,"Login.Title");const se=document.createElement("div");se.classList.add("subtitle","text-center"),Object(f._i18n)(se,"Login.StartText"),V.pageEl.querySelector(".container").append(ae,se,B);p.IS_TOUCH_SUPPORTED||setTimeout(()=>{te.focus()},0),Object(O.a)(B),o.a.invokeApi("help.getNearestDc").then(e=>{var t;const n=N.a.getFromCache("langPack");n&&!(null===(t=n.countries)||void 0===t?void 0:t.hash)&&f.default.getLangPack(n.lang_code).then(()=>{Object(C.a)(te,"input")});const i=new Set([1,2,3,4,5]),a=[e.this_dc];let s;return e.nearest_dc!==e.this_dc&&(s=o.a.getNetworker(e.nearest_dc).then(()=>{a.push(e.nearest_dc)})),(s||Promise.resolve()).then(()=>{a.forEach(e=>{i.delete(e)});const e=[...i],t=()=>M(void 0,void 0,void 0,(function*(){const n=e.shift();if(!n)return;const i=`dc${n}_auth_key`;if(yield x.a.get(i))return t();setTimeout(()=>{o.a.getNetworker(n).finally(t)},3e3)}));t()}),e}).then(e=>{q.value.length||ee.value.length||G(l.get(e.country)[0])})},()=>{I&&(Object(T.a)(I,Object(f.i18n)("Login.Next")),Object(b.ripple)(I,void 0,void 0,!0),I.removeAttribute("disabled")),H&&H.removeAttribute("disabled"),s.default.pushToState("authState",{_:"authStateSignIn"})});t.default=V},22:function(e,t,n){"use strict";n.r(t);var i=n(33),a=n(66),s=n(77),o=n(82),r=n(7),l=n(34),c=n(16),d=n(17),u=n(15),h=n(36),p=n(103),m=n(83),f=n(109),g=function(e,t,n,i){return new(n||(n=Promise))((function(a,s){function o(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}l((i=i.apply(e,t||[])).next())}))};let b;const v=new a.a("page-signQR",!0,()=>b,()=>{b||(b=g(void 0,void 0,void 0,(function*(){const e=v.pageEl.querySelector(".auth-image");let t=Object(h.f)(e,!0);const a=document.createElement("div");a.classList.add("input-wrapper");const d=Object(l.a)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Cancel"});a.append(d),Object(p.a)(a);const y=e.parentElement,E=document.createElement("h4");Object(c._i18n)(E,"Login.QR.Title");const L=document.createElement("ol");L.classList.add("qr-description"),["Login.QR.Help1","Login.QR.Help2","Login.QR.Help3"].forEach(e=>{const t=document.createElement("li");t.append(Object(c.i18n)(e)),L.append(t)}),y.append(E,L,a),d.addEventListener("click",()=>{Promise.all([n.e(6),n.e(24)]).then(n.bind(null,20)).then(e=>e.default.mount()),w=!0});const S=(yield Promise.all([n.e(11).then(n.t.bind(null,144,7))]))[0].default;let w=!1;u.default.addEventListener("user_auth",()=>{w=!0,b=null},{once:!0});let O,k={ignoreErrors:!0};const _=a=>g(void 0,void 0,void 0,(function*(){try{let l=yield i.a.invokeApi("auth.exportLoginToken",{api_id:r.a.id,api_hash:r.a.hash,except_ids:[]},{ignoreErrors:!0});if("auth.loginTokenMigrateTo"===l._&&(k.dcId||(k.dcId=l.dc_id,i.a.setBaseDcId(l.dc_id)),l=yield i.a.invokeApi("auth.importLoginToken",{token:l.token},k)),"auth.loginTokenSuccess"===l._){const e=l.authorization;return i.a.setUser(e.user),n.e(4).then(n.bind(null,19)).then(e=>e.default.mount()),!0}if(!O||!Object(o.b)(O,l.token)){O=l.token;let n=Object(o.d)(l.token),i="tg://login?token="+Object(f.a)(n,!0);const a=window.getComputedStyle(document.documentElement),s=a.getPropertyValue("--surface-color").trim(),r=a.getPropertyValue("--primary-text-color").trim(),c=a.getPropertyValue("--primary-color").trim(),d=yield fetch("assets/img/logo_padded.svg").then(e=>e.text()).then(e=>{e=e.replace(/(fill:).+?(;)/,`$1${c}$2`);const t=new Blob([e],{type:"image/svg+xml;charset=utf-8"});return new Promise(e=>{const n=new FileReader;n.onload=t=>{e(t.target.result)},n.readAsDataURL(t)})}),u=new S({width:240*window.devicePixelRatio,height:240*window.devicePixelRatio,data:i,image:d,dotsOptions:{color:r,type:"rounded"},cornersSquareOptions:{type:"extra-rounded"},imageOptions:{imageSize:1,margin:0},backgroundOptions:{color:s},qrOptions:{errorCorrectionLevel:"L"}});let h;u.append(e),e.lastChild.classList.add("qr-canvas"),h=u._drawingPromise?u._drawingPromise:Promise.race([Object(m.a)(1e3),new Promise(e=>{u._canvas._image.addEventListener("load",()=>{window.requestAnimationFrame(()=>e())},{once:!0})})]),yield h.then(()=>{if(t){t.style.animation="hide-icon .4s forwards";const n=e.children[1];n.style.display="none",n.style.animation="grow-icon .4s forwards",setTimeout(()=>{n.style.display=""},150),setTimeout(()=>{n.style.animation=""},500),t=void 0}else Array.from(e.children).slice(0,-1).forEach(e=>{e.remove()})})}if(a){let e=Date.now()/1e3,t=l.expires-e-s.a.serverTimeOffset;yield Object(m.a)(t>3?3e3:1e3*t|0)}}catch(e){switch(e.type){case"SESSION_PASSWORD_NEEDED":console.warn("pageSignQR: SESSION_PASSWORD_NEEDED"),e.handled=!0,n.e(16).then(n.bind(null,21)).then(e=>e.default.mount()),w=!0,b=null;break;default:console.error("pageSignQR: default error:",e),w=!0}return!0}return!1}));return()=>g(void 0,void 0,void 0,(function*(){for(w=!1;!w&&!(yield _(!0)););}))}))),b.then(e=>{e()}),d.default.pushToState("authState",{_:"authStateSignQr"})});t.default=v},23:function(e,t,n){"use strict";n.r(t);var i=n(39),a=n(17),s=n(33),o=n(66),r=n(20),l=n(122),c=n(123),d=n(16),u=n(67),h=n(35),p=function(e,t,n,i){return new(n||(n=Promise))((function(a,s){function o(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}l((i=i.apply(e,t||[])).next())}))};let m,f=null,g=null,b=null;const v=new o.a("page-authCode",!0,()=>{const e=f.type.length,t=new c.a({label:"Code",name:Object(u.b)(),length:e,onFill:e=>{o(e)}});m=t.input,v.pageEl.querySelector(".input-wrapper").append(t.container);v.pageEl.querySelector(".phone-edit").addEventListener("click",(function(){return r.default.mount()}));const a=()=>{setTimeout(()=>{y.remove()},300)},o=e=>{m.setAttribute("disabled","true");const i={phone_number:f.phone_number,phone_code_hash:f.phone_code_hash,phone_code:e};s.a.invokeApi("auth.signIn",i,{ignoreErrors:!0}).then(e=>{switch(e._){case"auth.authorization":s.a.setUser(e.user),n.e(4).then(n.bind(null,19)).then(e=>{e.default.mount()}),a();break;case"auth.authorizationSignUpRequired":Promise.all([n.e(7),n.e(25)]).then(n.bind(null,25)).then(e=>{e.default.mount({phone_number:f.phone_number,phone_code_hash:f.phone_code_hash})}),a()}}).catch(e=>p(void 0,void 0,void 0,(function*(){let i=!1;switch(e.type){case"SESSION_PASSWORD_NEEDED":i=!0,e.handled=!0,yield(yield n.e(19).then(n.bind(null,21))).default.mount(),setTimeout(()=>{m.value=""},300);break;case"PHONE_CODE_EXPIRED":m.classList.add("error"),Object(h.a)(t.label,Object(d.i18n)("PHONE_CODE_EXPIRED"));break;case"PHONE_CODE_EMPTY":case"PHONE_CODE_INVALID":m.classList.add("error"),Object(h.a)(t.label,Object(d.i18n)("PHONE_CODE_INVALID"));break;default:t.label.innerText=e.type}i||t.select(),m.removeAttribute("disabled")})))},g=v.pageEl.querySelector(".auth-image"),b=i.b.isMobile?100:166,y=new l.a(t,b);return g.append(y.container),y.load()},e=>{if(f=e,g){m.value="";const e=document.createEvent("HTMLEvents");e.initEvent("input",!1,!0),m.dispatchEvent(e)}else g=v.pageEl.getElementsByClassName("phone")[0],b=v.pageEl.getElementsByClassName("sent-type")[0];let t,n;switch(g.innerText=f.phone_number,f.type._){case"auth.sentCodeTypeSms":t="Login.Code.SentSms";break;case"auth.sentCodeTypeApp":t="Login.Code.SentInApp";break;case"auth.sentCodeTypeCall":t="Login.Code.SentCall";break;default:t="Login.Code.SentUnknown",n=[f.type._]}Object(h.a)(b,Object(d.i18n)(t,n)),a.default.pushToState("authState",{_:"authStateAuthCode",sentCode:e})},()=>{m.focus()});t.default=v},35:function(e,t,n){"use strict";function i(e,t){if("string"==typeof t)return void(e.innerHTML=t);const n=e.firstChild;n?e.lastChild===n?n.replaceWith(t):(e.textContent="",e.append(t)):e.append(t)}n.d(t,"a",(function(){return i}))},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n(78),a=n(68),s=n(57),o=n(76);var r=n(16),l=n(31),c=n(50);let d=()=>{document.addEventListener("paste",e=>{if(!Object(a.a)(e.target,'contenteditable="true"'))return;let t,n;e.preventDefault();let i=(e.originalEvent||e).clipboardData.getData("text/plain"),o=!0,r=(e.originalEvent||e).clipboardData.getData("text/html");if(r.trim()){r=r.replace(/<style([\s\S]*)<\/style>/,""),r=r.replace(/<!--([\s\S]*)-->/,"");const e=r.match(/<body>([\s\S]*)<\/body>/);e&&(r=e[1].trim());let a=document.createElement("span");a.innerHTML=r;let c=a.firstChild;for(;c;){let e=c.nextSibling;3===c.nodeType&&(c.nodeValue.trim()||c.remove()),c=e}const d=Object(s.a)(a,!0);if(d.value.replace(/\s/g,"").length===i.replace(/\s/g,"").length){t=d.value,n=d.entities,o=!1;let e=l.b.parseEntities(t);e=e.filter(e=>"messageEntityEmoji"===e._||"messageEntityLinebreak"===e._),l.b.mergeEntities(n,e)}}o&&(t=i,n=l.b.parseEntities(t),n=n.filter(e=>"messageEntityEmoji"===e._||"messageEntityLinebreak"===e._)),t=l.b.wrapDraftText(t,{entities:n}),window.document.execCommand("insertHTML",!1,t)}),d=null};var u;!function(e){e[e.Neutral=0]="Neutral",e[e.Valid=1]="Valid",e[e.Error=2]="Error"}(u||(u={}));t.b=class{constructor(e={}){this.options=e,this.container=document.createElement("div"),this.container.classList.add("input-field"),this.required=e.required,this.validate=e.validate,void 0!==e.maxLength&&void 0===e.showLengthOn&&(e.showLengthOn=Math.min(40,Math.round(e.maxLength/3)));const{placeholder:t,maxLength:n,showLengthOn:i,name:a,plainText:l,canBeEdited:c=!0}=e;let u,h,p=e.label||e.labelText;if(l)this.container.innerHTML=`\n      <input type="text" ${a?`name="${a}"`:""} autocomplete="off" ${p?'required=""':""} class="input-field-input">\n      `,u=this.container.firstElementChild;else{d&&d(),this.container.innerHTML=`\n      <div contenteditable="${String(!!c)}" class="input-field-input"></div>\n      `,u=this.container.firstElementChild;const t=new MutationObserver(()=>{h&&h()});u.addEventListener("input",()=>{Object(o.a)(u)&&(u.innerHTML=""),this.inputFake&&(this.inputFake.innerHTML=u.innerHTML,this.onFakeInput())}),t.observe(u,{characterData:!0,childList:!0,subtree:!0}),e.animate&&(u.classList.add("scrollable","scrollable-y"),this.inputFake=document.createElement("div"),this.inputFake.setAttribute("contenteditable","true"),this.inputFake.className=u.className+" input-field-input-fake")}if(u.setAttribute("dir","auto"),t&&(Object(r._i18n)(u,t,void 0,"placeholder"),this.inputFake&&Object(r._i18n)(this.inputFake,t,void 0,"placeholder")),p||t){const e=document.createElement("div");e.classList.add("input-field-border"),this.container.append(e)}if(p&&(this.label=document.createElement("label"),this.setLabel(),this.container.append(this.label)),n){const e=this.container.lastElementChild;let t=!1;h=()=>{const a=u.classList.contains("error"),o=l?u.value.length:[...Object(s.a)(u,!1).value].length,r=n-o,c=r<0;u.classList.toggle("error",c),c||r<=i?(this.setLabel(),e.append(` (${n-o})`),t||(t=!0)):(a&&!c||t)&&(this.setLabel(),t=!1)},u.addEventListener("input",h)}this.input=u}select(){this.value&&(this.options.plainText?this.input.select():function(e){const t=document.createRange();t.selectNodeContents(e);const n=window.getSelection();n.removeAllRanges(),n.addRange(t)}(this.input))}setLabel(){this.label.textContent="",this.options.labelText?this.label.innerHTML=this.options.labelText:this.label.append(Object(r.i18n)(this.options.label,this.options.labelOptions))}onFakeInput(e=!0){const{scrollHeight:t}=this.inputFake,n=+this.input.style.height.replace("px","");if(n===t)return;const i=Math.round(50*Math.log(Math.abs(t-n)));this.input.style.transitionDuration=i+"ms",e&&(this.input.style.height=t?t+"px":"");Object(c.a)(this.input,"is-changing-height",!0,i,()=>{this.input.classList.remove("is-changing-height")})}get value(){return this.options.plainText?this.input.value:Object(s.a)(this.input,!1).value}set value(e){this.setValueSilently(e,!1),Object(i.a)(this.input,"input")}setValueSilently(e,t=!0){this.options.plainText?this.input.value=e:(this.input.innerHTML=e,this.inputFake&&(this.inputFake.innerHTML=e,t&&this.onFakeInput()))}isChanged(){return this.value!==this.originalValue}isValid(){return!this.input.classList.contains("error")&&(!this.validate||this.validate())&&(!this.required||!Object(o.a)(this.input))}isValidToChange(){return this.isValid()&&this.isChanged()}setDraftValue(e="",t=!1){this.options.plainText||(e=l.b.wrapDraftText(e)),t?this.setValueSilently(e,!1):this.value=e}setOriginalValue(e="",t=!1){this.originalValue=e,this.setDraftValue(e,t)}setState(e,t){t&&(this.label.textContent="",this.label.append(Object(r.i18n)(t,this.options.labelOptions))),this.input.classList.toggle("error",!!(e&u.Error)),this.input.classList.toggle("valid",!!(e&u.Valid))}setError(e){this.setState(u.Error,e)}}},45:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return d}));var i=n(1),a=n(42),s=n(84),o=n(79),r=n(5);class l{constructor(e,t="",n=document.createElement("div")){this.el=e,this.container=n,this.onScrollMeasure=0,this.lastScrollPosition=0,this.lastScrollDirection=0,this.isHeavyAnimationInProgress=!1,this.needCheckAfterAnimation=!1,this.onScroll=()=>{if(this.isHeavyAnimationInProgress)return this.onScrollMeasure&&window.cancelAnimationFrame(this.onScrollMeasure),void(this.needCheckAfterAnimation=!0);(this.onScrolledTop||this.onScrolledBottom||this.splitUp||this.onAdditionalScroll)&&(this.onScrollMeasure&&window.cancelAnimationFrame(this.onScrollMeasure),this.onScrollMeasure=window.requestAnimationFrame(()=>{this.onScrollMeasure=0;const e=this.container[this.scrollProperty];this.lastScrollDirection=this.lastScrollPosition===e?0:this.lastScrollPosition<e?1:-1,this.lastScrollPosition=e,this.onAdditionalScroll&&0!==this.lastScrollDirection&&this.onAdditionalScroll(),this.checkForTriggers&&this.checkForTriggers()}))},this.container.classList.add("scrollable"),this.log=Object(a.b)("SCROLL"+(t?"-"+t:""),a.a.Error),e&&(Array.from(e.children).forEach(e=>this.container.append(e)),e.append(this.container))}setListeners(){this.removeHeavyAnimationListener||(window.addEventListener("resize",this.onScroll,{passive:!0}),this.container.addEventListener("scroll",this.onScroll,{passive:!0,capture:!0}),this.removeHeavyAnimationListener=Object(o.a)(()=>{this.isHeavyAnimationInProgress=!0,this.onScrollMeasure&&(this.needCheckAfterAnimation=!0,window.cancelAnimationFrame(this.onScrollMeasure))},()=>{this.isHeavyAnimationInProgress=!1,this.needCheckAfterAnimation&&(this.onScroll(),this.needCheckAfterAnimation=!1)}))}removeListeners(){this.removeHeavyAnimationListener&&(window.removeEventListener("resize",this.onScroll),this.container.removeEventListener("scroll",this.onScroll,{capture:!0}),this.removeHeavyAnimationListener())}append(e){this.container.append(e)}scrollIntoViewNew(e){return Object(s.b)(Object.assign(Object.assign({},e),{container:this.container}))}}class c extends l{constructor(e,t="",n=300,i){super(e,t),this.onScrollOffset=n,this.loadedAll={top:!0,bottom:!1},this.checkForTriggers=()=>{if(!this.onScrolledTop&&!this.onScrolledBottom)return;if(this.isHeavyAnimationInProgress)return void this.onScroll();const e=this.container.scrollHeight;if(!e)return;const t=e-this.container.clientHeight,n=this.lastScrollPosition;this.onScrolledTop&&n<=this.onScrollOffset&&this.lastScrollDirection<=0&&this.onScrolledTop(),this.onScrolledBottom&&t-n<=this.onScrollOffset&&this.lastScrollDirection>=0&&this.onScrolledBottom()},this.container.classList.add("scrollable-y"),this.setListeners(),this.scrollProperty="scrollTop"}setVirtualContainer(e){this.splitUp=e,this.log("setVirtualContainer:",e,this)}prepend(...e){(this.splitUp||this.padding||this.container).prepend(...e)}append(...e){(this.splitUp||this.padding||this.container).append(...e)}getDistanceToEnd(){return this.scrollHeight-Math.round(this.scrollTop+this.container.offsetHeight)}get isScrolledDown(){return this.getDistanceToEnd()<=1}set scrollTop(e){this.container.scrollTop=e}get scrollTop(){return this.container.scrollTop}get scrollHeight(){return this.container.scrollHeight}}class d extends l{constructor(e,t="",n=300,a=15,s=document.createElement("div")){if(super(e,t,s),this.onScrollOffset=n,this.splitCount=a,this.container=s,this.container.classList.add("scrollable-x"),!i.IS_TOUCH_SUPPORTED){const e=e=>{!e.deltaX&&this.container.scrollWidth>this.container.clientWidth&&(this.container.scrollLeft+=e.deltaY/4,Object(r.a)(e))};this.container.addEventListener("wheel",e,{passive:!1})}this.scrollProperty="scrollLeft"}}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(17),a=n(32),s=n(18),o=n(16);class r{constructor(e={}){const t=this.label=document.createElement("label");t.classList.add("checkbox-field"),e.restriction&&t.classList.add("checkbox-field-restriction"),e.round&&t.classList.add("checkbox-field-round"),e.disabled&&this.toggleDisability(!0);const n=this.input=document.createElement("input");let r;if(n.classList.add("checkbox-field-input"),n.type="checkbox",e.name&&(n.id="input-"+e.name),e.checked&&(n.checked=!0),e.stateKey&&i.default.getState().then(t=>{const s=Object(a.d)(t,e.stateKey);let o;o=e.stateValues?1===e.stateValues.indexOf(s):s,this.setValueSilently(o),n.addEventListener("change",()=>{let t;t=e.stateValues?e.stateValues[n.checked?1:0]:n.checked,i.default.setByKey(e.stateKey,t)})}),e.text?(r=this.span=document.createElement("span"),r.classList.add("checkbox-caption"),Object(o._i18n)(r,e.text,e.textArgs)):t.classList.add("checkbox-without-caption"),t.append(n),e.toggle){t.classList.add("checkbox-field-toggle");const e=document.createElement("div");e.classList.add("checkbox-toggle"),t.append(e)}else{const e=document.createElement("div");e.classList.add("checkbox-box");const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.classList.add("checkbox-box-check"),n.setAttributeNS(null,"viewBox","0 0 24 24");const i=document.createElementNS("http://www.w3.org/2000/svg","use");i.setAttributeNS(null,"href","#check"),i.setAttributeNS(null,"x","-1"),n.append(i);const a=document.createElement("div");a.classList.add("checkbox-box-background");const s=document.createElement("div");s.classList.add("checkbox-box-border"),e.append(s,a,n),t.append(e)}r&&t.append(r),e.withRipple?(t.classList.add("checkbox-ripple","hover-effect"),Object(s.ripple)(t,void 0,void 0,!0)):e.withHover&&t.classList.add("hover-effect")}get checked(){return this.input.checked}set checked(e){this.setValueSilently(e);const t=new Event("change",{bubbles:!0,cancelable:!0});this.input.dispatchEvent(t)}setValueSilently(e){this.input.checked=e}toggleDisability(e){return this.label.classList.toggle("checkbox-disabled",e),()=>this.toggleDisability(!e)}}},50:function(e,t,n){"use strict";var i=n(15);const a=(e,t,n,s,o,r)=>{const{timeout:l,raf:c}=e.dataset;if(void 0!==l&&clearTimeout(+l),void 0!==c&&(window.cancelAnimationFrame(+c),r||delete e.dataset.raf),r&&i.default.settings.animationsEnabled&&s)return void(e.dataset.raf=""+window.requestAnimationFrame(()=>{delete e.dataset.raf,a(e,t,n,s,o,r-1)}));n&&t&&e.classList.add(t);const d=()=>{delete e.dataset.timeout,!n&&t&&e.classList.remove("backwards",t),e.classList.remove("animating"),o&&o()};if(!i.default.settings.animationsEnabled||!s)return e.classList.remove("animating","backwards"),void d();e.classList.add("animating"),e.classList.toggle("backwards",!n),e.dataset.timeout=""+setTimeout(d,s)};t.a=a},54:function(e,t,n){"use strict";function i(e,t){return t?e.forEach(e=>e.setAttribute("disabled","true")):e.forEach(e=>e.removeAttribute("disabled")),()=>i(e,!t)}n.d(t,"a",(function(){return i}))},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(30),a=n(31),s=n(69);function o(e,t=!0){const n=[],i=[],o=t?[]:void 0;Object(s.a)(e,n,i,void 0,void 0,o),i.length&&n.push(i.join(""));let r=n.join("\n");return r=r.replace(/\u00A0/g," "),(null==o?void 0:o.length)&&(a.b.combineSameEntities(o),a.b.sortEntities(o)),{value:r,entities:o}}i.a.getRichValue=o},59:function(e,t,n){"use strict";function i(e,t){return e.closest(t)}n.d(t,"a",(function(){return i}))},68:function(e,t,n){"use strict";function i(e,t){return e.closest(`[${t}]`)}n.d(t,"a",(function(){return i}))},69:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));const i={bold:{match:'[style*="bold"], [style*="font-weight: 700"], [style*="font-weight: 600"], [style*="font-weight:700"], [style*="font-weight:600"], b, strong',entityName:"messageEntityBold"},underline:{match:'[style*="underline"], u, ins',entityName:"messageEntityUnderline"},italic:{match:'[style*="italic"], i, em',entityName:"messageEntityItalic"},monospace:{match:'[style*="monospace"], [face="monospace"], pre',entityName:"messageEntityPre"},strikethrough:{match:'[style*="line-through"], strike, del, s',entityName:"messageEntityStrike"},link:{match:"A:not(.follow)",entityName:"messageEntityTextUrl"},mentionName:{match:"A.follow",entityName:"messageEntityMentionName"},spoiler:{match:'[style*="spoiler"]',entityName:"messageEntitySpoiler"}},a=new Set(["DIV","P","BR","LI","SECTION","H6","H5","H4","H3","H2","H1","TR"]);function s(e,t,n,o,r,l,c={offset:0}){if(3===e.nodeType){let t=e.nodeValue;if(o===e?n.push(t.substr(0,r)+""+t.substr(r)):n.push(t),l&&t.length&&e.parentNode){const n=e.parentElement;for(const e in i){const a=i[e],s=n.closest(a.match+", [contenteditable]");null===(null==s?void 0:s.getAttribute("contenteditable"))&&("messageEntityTextUrl"===a.entityName?l.push({_:a.entityName,url:s.href,offset:c.offset,length:t.length}):"messageEntityMentionName"===a.entityName?l.push({_:a.entityName,offset:c.offset,length:t.length,user_id:s.dataset.follow.toUserId()}):l.push({_:a.entityName,offset:c.offset,length:t.length}))}}return void(c.offset+=t.length)}if(1!==e.nodeType)return;const d=o===e,u=a.has(e.tagName);if(u&&n.length)t.push(n.join("")),n.splice(0,n.length),++c.offset;else if(e instanceof HTMLImageElement){const t=e.alt;t&&(n.push(t),c.offset+=t.length)}d&&!r&&n.push("");const h=e.matches('[style*="table-cell"], th, td'),p=null==l?void 0:l.length;let m=e.firstChild;for(;m;)s(m,t,n,o,r,l,c),m=m.nextSibling;if(d&&r&&n.push(""),h&&e.nextSibling&&(n.push(" "),++c.offset,void 0!==p))for(let e=p,t=l.length;e<t;++e)++l[e].length;const f=n.length;u&&f&&(t.push(n.join("")),n.splice(0,f),++c.offset),f&&"P"===e.tagName&&e.nextSibling&&(t.push(""),++c.offset)}},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(57);function a(e){return e.hasAttribute("contenteditable")||"INPUT"!==e.tagName?!Object(i.a)(e,!1).value.trim():!e.value.trim()}},77:function(e,t,n){"use strict";var i=n(30),a=n(72),s=n(33);const o=new class{constructor(){this.serverTimeOffset=0,a.a.get("server_time_offset").then(e=>{e&&(this.serverTimeOffset=e)}),s.a.addTaskListener("applyServerTimeOffset",e=>{this.serverTimeOffset=e.payload})}};i.a&&(i.a.serverTimeManager=o),t.a=o},82:function(e,t,n){"use strict";function i(e){const t=e.length,n=new Array(t);for(let i=0;i<t;++i)n[i]=(e[i]<16?"0":"")+(e[i]||0).toString(16);return n.join("")}function a(e){const t=e.length,n=new Uint8Array(Math.ceil(t/2));let i=0;t%2&&(n[i++]=parseInt(e.charAt(0),16));for(let a=i;a<t;a+=2)n[i++]=parseInt(e.substr(a,2),16);return n}function s(e){let t,n="";for(let i=e.length,a=0,s=0;s<i;++s)t=s%3,a|=e[s]<<(16>>>t&24),2!==t&&i-s!=1||(n+=String.fromCharCode(o(a>>>18&63),o(a>>>12&63),o(a>>>6&63),o(63&a)),a=0);return n.replace(/A(?=A$|$)/g,"=")}function o(e){return e<26?e+65:e<52?e+71:e<62?e-4:62===e?43:63===e?47:65}function r(e,t){const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;++i)if(e[i]!==t[i])return!1;return!0}function l(...e){const t=e.reduce((e,t)=>e+(t.byteLength||t.length),0),n=new Uint8Array(t);let i=0;return e.forEach(e=>{n.set(e instanceof ArrayBuffer?new Uint8Array(e):e,i),i+=e.byteLength||e.length}),n}n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l}))},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(1);function a(e,t=!1){if(!i.IS_TOUCH_SUPPORTED||t&&document.activeElement===e)if(e.focus(),void 0!==window.getSelection&&void 0!==document.createRange){var n=document.createRange();n.selectNodeContents(e),n.collapse(!1);var a=window.getSelection();a.removeAllRanges(),a.addRange(n)}else if(void 0!==document.body.createTextRange){var s=document.body.createTextRange();s.moveToElementText(e),s.collapse(!1),s.select()}}},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(16);const a=new Map;let s=0;const o=(e,t,n="")=>{n=t.country_code+n,s=Math.max(s,n.length),a.set(n,{country:e,code:t})};function r(e){e=e||"",a.size||i.default.countriesList.forEach(e=>{e.country_codes.forEach(t=>{t.prefixes?t.prefixes.forEach(n=>{o(e,t,n)}):o(e,t)})});let t,n=e.replace(/\D/g,""),r=n.slice(0,s);for(let e=r.length-1;e>=0&&(t=a.get(r.slice(0,e+1)),!t);--e);if(!t)return{formatted:n,country:void 0,code:void 0,leftPattern:""};const l=t.country,c=t.code.patterns||[],d=n.slice(t.code.country_code.length);let u="",h=0,p="";for(let e=c.length-1;e>=0;--e){u=c[e];const t=u.replace(/ /g,"");let n=0;for(let e=0,i=Math.min(d.length,t.length);e<i;++e){if(d[e]!==t[e]&&"X"!==t[e]){n=0;break}++n}n>h&&(h=n,p=u)}u=p||u,u=u.replace(/\d/g,"X"),u=t.code.country_code+" "+u,u.split("").forEach((e,t)=>{" "===e&&" "!==n[t]&&n.length>t&&(n=n.slice(0,t)+" "+n.slice(t))});let m=u&&u.length>n.length?u.slice(n.length):"";return m&&(m=m.replace(/X/g,"‒")),{formatted:n,country:l,code:t.code,leftPattern:m}}},95:function(e,t,n){"use strict";function i(e,t){return new Promise(n=>{const i=new FileReader;i.addEventListener("loadend",e=>{n(e.target.result)}),i[t](e)})}n.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=12.b0eb2cc20d8ea19c2bad.chunk.js.map