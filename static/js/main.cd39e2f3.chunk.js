(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r);a(12),a(13);function o(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"# "},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"})),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode"))))))}function s(e){const[t,a]=Object(n.useState)("");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:t,onChange:e=>{console.log("On change"),a(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"10"})),l.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:()=>{let n=t.toUpperCase();a(n),e.showAlert("Converted to uppercase!","success")}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:()=>{let n=t.toLowerCase();a(n),e.showAlert("Converted to lowercase!","success")}},"Convert to Lowercase"),l.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:()=>{a(""),e.showAlert("Cleared the text!","success")}},"Clear Text"),l.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:()=>{var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied the text!","success")}},"Copy Text"),l.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:()=>{let n=t.split(/[ ]+/);a(n.join(" ")),e.showAlert("Removed extra spaces!","success")}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-4",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("p",null,t.split(" ").length," words and ",t.length," characters"),l.a.createElement("p",null,.008*t.split(" ").length," Minutes"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,t.length>0?t:"Enter something above to preview it here")))}var m=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,e.alert.type)," : ",e.alert.msg)};var i=function(){const[e,t]=Object(n.useState)("light"),[a,r]=Object(n.useState)(null),c=(e,t)=>{r({msg:e,type:t}),setTimeout(()=>{r(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,{title:"Textme",about:"About us",mode:e,toggleMode:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="#001133",c("Dark mode has been enabled","success"),document.title="Textme - DarkMode"):(t("light"),document.body.style.backgroundColor="white",c("Light mode has been enabled","success"),document.title="Textme - LightMode")}}),l.a.createElement(m,{alert:a}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(s,{showAlert:c,heading:"Enter your text to analyze",mode:e})))};var u=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:c}=t;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null))),u()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.cd39e2f3.chunk.js.map