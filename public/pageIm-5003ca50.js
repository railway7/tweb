import{a as o,e as t,g as r,_ as a,l as s}from"./index-af7d4b6e.js";import{P as l}from"./page-04776b95.js";const n=()=>(o.managers.appStateManager.pushToState("authState",{_:"authStateSignedIn"}),t.requestedServerLanguage||t.getCacheLangPack().then(e=>{e.local&&t.getLangPack(e.lang_code)}),i.pageEl.style.display="",r(),Promise.all([a(()=>import("./appDialogsManager-56d8861b.js"),["./appDialogsManager-56d8861b.js","./avatar-1b7a269d.js","./button-b068b140.js","./index-af7d4b6e.js","./index-d7836543.css","./page-04776b95.js","./wrapEmojiText-f4b82cc6.js","./scrollable-3961fd19.js","./putPreloader-df10b836.js","./htmlToSpan-7360079c.js","./countryInputField-e9cdd7a8.js","./textToSvgURL-c6ebb454.js","./toggleDisability-6f5940d7.js","./codeInputField-a7f9664a.js","./appDialogsManager-9f627a58.css"],import.meta.url),s(),"requestVideoFrameCallback"in HTMLVideoElement.prototype?Promise.resolve():a(()=>import("./requestVideoFrameCallbackPolyfill-d3040205.js"),[],import.meta.url)]).then(([e])=>{e.default.start(),setTimeout(()=>{document.getElementById("auth-pages").remove()},1e3)})),i=new l("page-chats",!1,n);export{i as default};
//# sourceMappingURL=pageIm-5003ca50.js.map