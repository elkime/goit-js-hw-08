function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var r=o("8zd4h");const l=document.querySelector(".feedback-form"),s=l.querySelector('input[name="email"]'),i=l.querySelector('textarea[name="message"]');l.addEventListener("input",(function(){const e={email:s.value,message:i.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))})),document.addEventListener("DOMContentLoaded",(function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);s.value=t.email,i.value=t.message}})),l.addEventListener("submit",(function(e){e.preventDefault();const t={email:s.value,message:i.value};localStorage.removeItem("feedback-form-state"),console.log(t),s.value="",i.value=""}));const u=e(r)((function(){const e={email:s.value,message:i.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);l.addEventListener("input",u);
//# sourceMappingURL=03-feedback.d1d5c42a.js.map
