function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=l||f||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var o,i,r,a,u,l,f=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,f=t,a=e.apply(r,n)}function S(e){return f=e,u=setTimeout(j,t),c?b(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=r}function j(){var e=m();if(h(e))return w(e);u=setTimeout(j,function(e){var n=t-(e-l);return s?v(n,r-(e-f)):n}(e))}function w(e){return u=void 0,g&&o?b(e):(o=i=void 0,a)}function O(){var e=m(),n=h(e);if(o=arguments,i=this,l=e,n){if(void 0===u)return S(l);if(s)return u=setTimeout(j,t),b(l)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=l=i=u=void 0},O.flush=function(){return void 0===u?a:w(m())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),S=document.querySelector("input"),h=document.querySelector("textarea");document.querySelector("button");if(0!=localStorage.length){const e=JSON.parse(localStorage.getItem("feedback-form-state"));var j,w;if(console.log(e),e)S.value=null!==(j=e.email)&&void 0!==j?j:"",h.value=null!==(w=e.message)&&void 0!==w?w:""}b.addEventListener("input",e(t)((()=>{const e={email:S.value,message:h.value};localStorage.setItem("feedback-form-state",JSON.stringify(e)),console.log(e)}),500));const O=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;b.addEventListener("submit",(e=>(e.preventDefault(),O.test(S.value)?(console.log({email:email.value,message:message.value}),""===email.value||""===message?alert("Input your email and feedback!"):(localStorage.removeItem("feedback-form-state"),void b.reset())):alert("Please enter a valid email address."))));
//# sourceMappingURL=03-feedback.33dd1e76.js.map