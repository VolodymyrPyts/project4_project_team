!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return o.apply(null,arguments)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=i()?Reflect.construct:function(e,t,r){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return r&&n.default(i,r.prototype),i}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=a("fVNic"))&&r.__esModule?r:{default:r}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.4f544a1b.js","4scEk":"defaultImage.eb2c73c4.jpg","4rBnk":"no-poster.a6b725b4.webp","bEMvD":"myLibrary.0704706d.js"}')),a("5xtVg"),a("5xtVg");var i=a("bpxeT"),o=a("2TvXO"),s=a("dIxxU"),u=a("fKcg4"),c=(i=a("bpxeT"),o=a("2TvXO"),i=a("bpxeT"),a("8MBJY")),l=a("a2hTj");o=a("2TvXO");a("dIxxU");var f,d=function(){"use strict";function t(){e(c)(this,t),this.searchQuery="",this.page=1,this.list="home",this.baseUrl="https://api.themoviedb.org/3/",this.language="en-US",this.key="f70abac86533d424df79b342ee8b9ff4"}return e(l)(t,[{key:"pageNumber",get:function(){return this.page},set:function(e){this.page=e}},{key:"currentSearchQuery",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"fetchGenres",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n,a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t.baseUrl,"genre/movie/list?api_key=").concat(t.key,"&language=").concat(t.language),e.prev=1,e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return i=e.sent,e.abrupt("return",i);case 11:e.prev=11,e.t0=e.catch(1),e.t0;case 14:case"end":return e.stop()}}),r,null,[[1,11]])})))()}},{key:"fetchTrendingWeekFilmsByPage",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t.baseUrl,"trending/movie/week?api_key=").concat(t.key,"&language=").concat(t.language,"&page=").concat(t.page),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),r)})))()}},{key:"fetchPopularFilmsByPage",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t.baseUrl,"movie/popular?api_key=").concat(t.key,"&language=").concat(t.language,"&page=").concat(t.page),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),r)})))()}},{key:"fetchSearchFilms",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n,a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(t.baseUrl,"search/movie?api_key=").concat(t.key,"&language=").concat(t.language,"&page=").concat(t.page,"&include_adult=false&query=").concat(t.searchQuery));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.next=9,a;case 9:return i=e.sent,e.abrupt("return",i);case 13:e.prev=13,e.t0=e.catch(0),e.t0;case 16:case"end":return e.stop()}}),r,null,[[0,13]])})))()}},{key:"resetPage",value:function(){this.page=1}}]),t}();f=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("4scEk");var p=function(t){return t.map((function(t){var r=t.id,n=t.title,a=t.poster_path,i=t.genre_ids,o=t.vote_average,s=t.release_date,u=F(i).join(", "),c=a?"https://image.tmdb.org/t/p/w500".concat(a):e(f);return'<div class="movie__card" id='.concat(r,'>\n    <img class="movie__poster" src="').concat(c,'" alt="').concat(n,'" loading="lazy">\n    <div class="movie__info">\n       <p class="movie__name">').concat(V(n),'</p>\n      <div class="movie__data">\n       <span class="movie__genre">').concat(u,'</span>\n       <span class="movie__year">').concat(s.slice(0,4),'</span>\n       <span class="movie__rating">').concat(o.toFixed(1),"</span>\n       </div>\n       </div>\n       </div>\n       ")})).join("")},h=a("iU1Pc");function v(){h.Loading.circle({svgColor:"#FF001B",svgSize:"90px",cssAnimation:!0}),document.querySelector("body").style.overflow="hidden"}function m(){setTimeout((function(){h.Loading.remove(),document.querySelector("body").style.overflow="visible"}),300)}var g,y=a("5xtVg"),k=document.querySelector(".container-movie-card"),b=document.querySelector(".pagination__wrapper"),_=document.querySelector(".pagination__button--prev"),w=document.querySelector(".pagination__button--next"),x="films-request-result",I=new d;function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";I.pageNumber=1,I.searchQuery=t,g=e,N(I.pageNumber-2,I.pageNumber+2),C()}function S(){return E.apply(this,arguments)}function E(){return(E=e(i)(e(o).mark((function t(){var r,n,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.fetchTrendingWeekFilmsByPage();case 2:r=e.sent,n=r.total_pages,a=r.results,g=n,localStorage.setItem(x,JSON.stringify(a)),k.innerHTML=p(a);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function O(){return R.apply(this,arguments)}function R(){return(R=e(i)(e(o).mark((function t(){var r,n,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.fetchSearchFilms();case 2:r=e.sent,n=r.total_pages,a=r.results,g=n,localStorage.setItem(x,JSON.stringify(a)),k.innerHTML=p(a);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function N(e,t){window.innerWidth>767&&g>=9?(e<3&&(e=3,t=7),t>=g&&(e=g-6,t=g-2)):(e<1&&(e=1,t=5),t>g&&(t=g,(e=g-4)<1&&(e=1))),window.innerWidth>767&&g<9&&(e=1,t=g);var r=[];window.innerWidth>767&&g>=9&&(r.push('<button type="button" class="'.concat(1===I.pageNumber?"pagination__button pagination__button--current":"pagination__button",'" data-page="1">1</button>')),e-1>2?r.push('<button type="button" class="pagination__button" data-page="'.concat(e-3,'">...</button>')):r.push('<button type="button" class="'.concat(2===I.pageNumber?"pagination__button pagination__button--current":"pagination__button",'" data-page="2">2</button>')),g-t==1&&(e--,t--));for(var n=e;n<=t;n++)r.push('<button type="button" class="'.concat(n===I.pageNumber?"pagination__button pagination__button--current":"pagination__button",'" data-page="').concat(n,'">').concat(n,"</button>"));window.innerWidth>767&&g>=9&&(g-t>2?r.push('<button type="button" class="pagination__button" data-page="'.concat(t+3,'">...</button>')):r.push('<button type="button" class="'.concat(I.pageNumber===g-1?"pagination__button pagination__button--current":"pagination__button",'" data-page="').concat(g-1,'">').concat(g-1,"</button>")),r.push('<button type="button" class="'.concat(I.pageNumber===g?"pagination__button pagination__button--current":"pagination__button",'" data-page="').concat(g,'">').concat(g,"</button>"))),b.innerHTML=r.join("")}function C(){if(0===g)return _.style.display="none",void(w.style.display="none");_.style.display="flex",w.style.display="flex",1===I.pageNumber?_.setAttribute("disabled","true"):_.removeAttribute("disabled"),I.pageNumber===g?w.setAttribute("disabled","true"):w.removeAttribute("disabled")}function A(){return P.apply(this,arguments)}function P(){return(P=e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v(),!I.searchQuery){e.next=6;break}return e.next=4,O();case 4:e.next=8;break;case 6:return e.next=8,S();case 8:m(),(0,y.modal)(),N(I.pageNumber-2,I.pageNumber+2),C(),L();case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function L(){k.scrollIntoView()}_.addEventListener("click",(function(){I.pageNumber>1&&(I.pageNumber--,A())})),w.addEventListener("click",(function(){I.pageNumber<g&&(I.pageNumber++,A())})),b.addEventListener("click",(function(e){I.pageNumber=Number(e.target.dataset.page),A()})),window.addEventListener("resize",(function(){N(I.pageNumber-2,I.pageNumber+2)}));y=a("5xtVg");var D="https://api.themoviedb.org/3/",M="f70abac86533d424df79b342ee8b9ff4";function U(){return(U=e(i)(e(o).mark((function t(){var r;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(s).get("".concat(D,"/trending/movie/week?api_key=").concat(M,"&page=").concat(1));case 3:return r=t.sent.data,t.abrupt("return",r);case 7:t.prev=7,t.t0=t.catch(0),console.error("ERROR");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var j=document.querySelector(".container-movie-card");function F(e){var t=u.genres.reduce((function(t,r){var n=r.id,a=r.name;return e.includes(n)&&t.push(a),t}),[]);return t.length>3&&(t=t.slice(0,2)).push("Other"),t}function V(e){return e.length>30?"".concat(e.substring(0,30)," <span>...</span>"):e}(function(){return U.apply(this,arguments)})().then((function(t){var r;r=t.results.map((function(t){var r=t.id,n=t.title,a=t.poster_path,i=t.genre_ids,o=t.vote_average,s=t.release_date,u=F(i).join(", "),c=a?"https://image.tmdb.org/t/p/w500".concat(a):e(f);return'<div class="movie__card" id='.concat(r,'>\n    <img class="movie__poster" src="').concat(c,'" alt="').concat(n,'" loading="lazy">\n    <div class="movie__info">\n       <p class="movie__name">').concat(V(n),'</p>\n      <div class="movie__data">\n       <span class="movie__genre">').concat(u,'</span>\n       <span class="movie__year">').concat(s.slice(0,4),'</span>\n       <span class="movie__rating">').concat(o.toFixed(1),"</span>\n       </div>\n       </div>\n       </div>\n       ")})).join(""),j.insertAdjacentHTML("beforeend",r),T(t.total_pages),localStorage.setItem("films-request-result",JSON.stringify(t.results)),(0,y.modal)()}));var B;i=a("bpxeT"),o=a("2TvXO"),y=a("5xtVg");B=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("4rBnk"),a("dIxxU");var H=new d,q={form:document.querySelector(".form"),markupMuvieForKeyword:document.querySelector(".container-movie-card"),boxError:document.querySelector(".cap__box-error")};document.querySelector(".container-movie-card");function z(){return(z=e(i)(e(o).mark((function t(r){var n,a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),v(),H.searchQuery=r.currentTarget.elements.searchQuery.value.trim(),r.currentTarget.reset(),H.resetPage(),""!==H.searchQuery){e.next=9;break}return q.boxError.classList.remove("is-hidden"),K(),e.abrupt("return",m());case 9:return e.prev=9,e.next=12,H.fetchSearchFilms();case 12:if(n=e.sent,a=n.total_pages,0!==(i=n.results).length){e.next=20;break}return m(),K(),T(0),e.abrupt("return",q.boxError.classList.remove("is-hidden"));case 20:K(),W(i),q.boxError.classList.add("is-hidden"),T(a,H.searchQuery),localStorage.setItem("films-request-result",JSON.stringify(i)),(0,y.modal)(),m(),e.next=33;break;case 29:e.prev=29,e.t0=e.catch(9),console.log(e.t0.message),m();case 33:case"end":return e.stop()}}),t,null,[[9,29]])})))).apply(this,arguments)}function W(e){q.markupMuvieForKeyword.innerHTML=p(e)}function K(){q.markupMuvieForKeyword.innerHTML="<img src=".concat(e(B),' class="library-container__img" alt="nothing to show">')}q.form.addEventListener("submit",(function(e){return z.apply(this,arguments)}));var J={modal:document.querySelector(".modalTeams"),closeBtn:document.querySelector(".modalTeamClose"),openModalTeam:document.querySelectorAll(".modalTeamOpen")};function G(e){"Escape"===e.code&&Q()}function X(){document.body.style.overflow="hidden",window.addEventListener("keydown",G),J.modal.classList.remove("is-hidden")}function Q(){document.body.style.overflow="",window.removeEventListener("keydown",G),J.modal.classList.add("is-hidden")}J.openModalTeam.forEach((function(e){e.addEventListener("click",X)})),J.closeBtn.addEventListener("click",Q),J.modal.addEventListener("click",(function(e){e.currentTarget===e.target&&Q()}));var Y=a("hKHmD"),$=(i=a("bpxeT"),c=a("8MBJY"),l=a("a2hTj"),Y=a("hKHmD"),{});Object.defineProperty($,"__esModule",{value:!0}),$.default=function(e){return Z.default(e)||ee.default(e)||re.default(e)||te.default()};var Z=ne(a("kMC0W")),ee=ne(a("7AJDX")),te=ne(a("8CtQK")),re=ne(a("auk6i"));function ne(e){return e&&e.__esModule?e:{default:e}}o=a("2TvXO"),i=a("bpxeT"),c=a("8MBJY"),l=a("a2hTj");var ae={};Object.defineProperty(ae,"__esModule",{value:!0}),ae.default=function(e,t){return ie.default(e)||oe.default(e,t)||ue.default(e,t)||se.default()};var ie=ce(a("8slrw")),oe=ce(a("7AJDX")),se=ce(a("ifqQW")),ue=ce(a("auk6i"));function ce(e){return e&&e.__esModule?e:{default:e}}o=a("2TvXO");var le=a("ds8z5"),fe=(c=a("8MBJY"),l=a("a2hTj"),a("eYQtU")),de={};Object.defineProperty(de,"__esModule",{value:!0}),de.default=function(e){return ye(e)};var pe=ge(a("ge8co")),he=ge(a("cZGw3")),ve=ge(a("fVNic")),me=ge(a("gD1JV"));function ge(e){return e&&e.__esModule?e:{default:e}}function ye(e){var t="function"==typeof Map?new Map:void 0;return ye=function(e){if(null===e||!he.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return pe.default(e,arguments,ve.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),me.default(r,e)},ye(e)}var ke=a("2MbLg"),be=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var a=e.charCodeAt(n);a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=63&a|128):55296==(64512&a)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=63&a|128):(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=63&a|128)}return t},_e={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],a=0;a<e.length;a+=3){var i=e[a],o=a+1<e.length,s=o?e[a+1]:0,u=a+2<e.length,c=u?e[a+2]:0,l=i>>2,f=(3&i)<<4|s>>4,d=(15&s)<<2|c>>6,p=63&c;u||(p=64,o||(d=64)),n.push(r[l],r[f],r[d],r[p])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(be(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var a=e[r++];if(a<128)t[n++]=String.fromCharCode(a);else if(a>191&&a<224){var i=e[r++];t[n++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){var o=((7&a)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&a)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],a=0;a<e.length;){var i=r[e.charAt(a++)],o=a<e.length?r[e.charAt(a)]:0,s=++a<e.length?r[e.charAt(a)]:64,u=++a<e.length?r[e.charAt(a)]:64;if(++a,null==i||null==o||null==s||null==u)throw Error();var c=i<<2|o>>4;if(n.push(c),64!==s){var l=o<<4&240|s>>2;if(n.push(l),64!==u){var f=s<<6&192|u;n.push(f)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},we=function(e){return function(e){var t=be(e);return _e.encodeByteArray(t,!0)}(e).replace(/\./g,"")},xe=function(e){try{return _e.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ie=function(){"use strict";function t(){var r=this;e(c)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t}))}return e(l)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Te(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Se=function(t){"use strict";e(fe)(n,t);var r=e(ke)(n);function n(t,a,i){var o;return e(c)(this,n),(o=r.call(this,a)).code=t,o.customData=i,o.name="FirebaseError",Object.setPrototypeOf(e(le)(o),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(le)(o),Ee.prototype.create),o}return n}(e(de)(Error)),Ee=function(){"use strict";function t(r,n,a){e(c)(this,t),this.service=r,this.serviceName=n,this.errors=a}return e(l)(t,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=r[0]||{},i="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?Oe(o,a):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(i,")."),c=new Se(i,u,a);return c}}]),t}();function Oe(e,t){return e.replace(Re,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var Re=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ce(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),a=!0,i=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var c=s.value;if(!n.includes(c))return!1;var l=e[c],f=t[c];if(Ae(l)&&Ae(f)){if(!Ce(l,f))return!1}else if(l!==f)return!1}}catch(e){i=!0,o=e}finally{try{a||null==u.return||u.return()}finally{if(i)throw o}}var d=!0,p=!1,h=void 0;try{for(var v,m=n[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var g=v.value;if(!r.includes(g))return!1}}catch(e){p=!0,h=e}finally{try{d||null==m.return||m.return()}finally{if(p)throw h}}return!0}function Ae(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pe(t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=function(t,n){var a=e(ae)(n.value,2),i=a[0],o=a[1];Array.isArray(o)?o.forEach((function(e){r.push(encodeURIComponent(i)+"="+encodeURIComponent(e))})):r.push(encodeURIComponent(i)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0)s(0,o)}catch(e){a=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return r.length?"&"+r.join("&"):""}function Le(t){var r={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var n=e(ae)(t.split("="),2),a=n[0],i=n[1];r[decodeURIComponent(a)]=decodeURIComponent(i)}})),r}function De(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me=function(){"use strict";function t(r,n){var a=this;e(c)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){r(a)})).catch((function(e){a.error(e)}))}return e(l)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,a=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var s=i.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){n=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=Ue),void 0===n.error&&(n.error=Ue),void 0===n.complete&&(n.complete=Ue);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{a.finalError?n.error(a.finalError):n.complete()}catch(e){}})),this.observers.push(n),i}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function Ue(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function je(e){return e&&e._delegate?e._delegate:e}var Fe=function(){"use strict";function t(r,n,a){e(c)(this,t),this.name=r,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(l)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),Ve="[DEFAULT]",Be=function(){"use strict";function t(r,n){e(c)(this,t),this.name=r,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(l)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new Ie;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:Ve})}catch(e){}var r=!0,n=!1,a=void 0;try{for(var i,o=this.instancesDeferred.entries()[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var s=e(ae)(i.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){n=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Array.from(t.instances.values()),r.next=3,Promise.all(e($)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e($)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return r.stop()}}),r)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.options,n=void 0===r?{}:r,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error("".concat(this.name,"(").concat(a,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var i=this.getOrInitializeService({instanceIdentifier:a,options:n}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=e(ae)(c.value,2),d=f[0],p=f[1],h=this.normalizeInstanceIdentifier(d);a===h&&p.resolve(i)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return i}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),a=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;a.add(e),this.onInitCallbacks.set(n,a);var i=this.instances.get(n);return i&&e(i,n),function(){a.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,a=!1,i=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){a=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,a=void 0===n?{}:n,i=this.instances.get(r);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===Ve?void 0:t),options:a}),this.instances.set(r,i),this.instancesOptions.set(r,a),this.invokeOnInitCallbacks(i,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,i)}catch(e){}return i||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve;return this.component?this.component.multipleInstances?e:Ve:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,qe,ze=function(){"use strict";function t(r){e(c)(this,t),this.name=r,this.providers=new Map}return e(l)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Be(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),We=(c=a("8MBJY"),l=a("a2hTj"),Y=a("hKHmD"),[]);(qe=He||(He={}))[qe.DEBUG=0]="DEBUG",qe[qe.VERBOSE=1]="VERBOSE",qe[qe.INFO=2]="INFO",qe[qe.WARN=3]="WARN",qe[qe.ERROR=4]="ERROR",qe[qe.SILENT=5]="SILENT";var Ke,Je={debug:He.DEBUG,verbose:He.VERBOSE,info:He.INFO,warn:He.WARN,error:He.ERROR,silent:He.SILENT},Ge=He.INFO,Xe=(Ke={},e(Y)(Ke,He.DEBUG,"log"),e(Y)(Ke,He.VERBOSE,"log"),e(Y)(Ke,He.INFO,"info"),e(Y)(Ke,He.WARN,"warn"),e(Y)(Ke,He.ERROR,"error"),Ke),Qe=function(t,r){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];var o;if(!(r<t.logLevel)){var s=(new Date).toISOString(),u=Xe[r];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e($)(a)))}},Ye=function(){"use strict";function t(r){e(c)(this,t),this.name=r,this._logLevel=Ge,this._logHandler=Qe,this._userLogHandler=null,We.push(this)}return e(l)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in He))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Je[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,He.DEBUG].concat(e($)(r))),this._logHandler.apply(this,[this,He.DEBUG].concat(e($)(r)))}},{key:"log",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,He.VERBOSE].concat(e($)(r))),this._logHandler.apply(this,[this,He.VERBOSE].concat(e($)(r)))}},{key:"info",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,He.INFO].concat(e($)(r))),this._logHandler.apply(this,[this,He.INFO].concat(e($)(r)))}},{key:"warn",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,He.WARN].concat(e($)(r))),this._logHandler.apply(this,[this,He.WARN].concat(e($)(r)))}},{key:"error",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,He.ERROR].concat(e($)(r))),this._logHandler.apply(this,[this,He.ERROR].concat(e($)(r)))}}]),t}();i=a("bpxeT");var $e={};Object.defineProperty($e,"__esModule",{value:!0}),$e.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){et.default(e,t,r[t])}))}return e};var Ze,et=(Ze=a("hKHmD"))&&Ze.__esModule?Ze:{default:Ze};var tt,rt;o=a("2TvXO");var nt=new WeakMap,at=new WeakMap,it=new WeakMap,ot=new WeakMap,st=new WeakMap;var ut={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return at.get(e);if("objectStoreNames"===t)return e.objectStoreNames||it.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ft(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function ct(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(rt||(rt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(dt(this),r),ft(nt.get(this))}:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return ft(t.apply(dt(this),r))}:function(r){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];var o,s=(o=t).call.apply(o,[dt(this),r].concat(e($)(a)));return it.set(s,r.sort?r.sort():[r]),ft(s)}}function lt(e){return"function"==typeof e?ct(e):(e instanceof IDBTransaction&&function(e){if(!at.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=function(){t(),n()},i=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));at.set(e,t)}}(e),t=e,(tt||(tt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,ut):e);var t}function ft(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",a),t.removeEventListener("error",i)},a=function(){e(ft(t.result)),n()},i=function(){r(t.error),n()};t.addEventListener("success",a),t.addEventListener("error",i)}))).then((function(e){e instanceof IDBCursor&&nt.set(e,t)})).catch((function(){})),st.set(r,t),r;var t,r;if(ot.has(e))return ot.get(e);var n=lt(e);return n!==e&&(ot.set(e,n),st.set(n,e)),n}var dt=function(e){return st.get(e)};function pt(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,a=r.upgrade,i=r.blocking,o=r.terminated,s=indexedDB.open(e,t),u=ft(s);return a&&s.addEventListener("upgradeneeded",(function(e){a(ft(s.result),e.oldVersion,e.newVersion,ft(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),i&&e.addEventListener("versionchange",(function(){return i()}))})).catch((function(){})),u}var ht=["get","getKey","getAll","getAllKeys","count"],vt=["put","add","delete","clear"],mt=new Map;function gt(t,r){if(t instanceof IDBDatabase&&!(r in t)&&"string"==typeof r){if(mt.get(r))return mt.get(r);var n=r.replace(/FromIndex$/,""),a=r!==n,s=vt.includes(n);if(n in(a?IDBIndex:IDBObjectStore).prototype&&(s||ht.includes(n))){var u,c=(u=e(i)(e(o).mark((function t(r){var i,u,c,l,f,d,p=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=p.length,u=new Array(i>1?i-1:0),c=1;c<i;c++)u[c-1]=p[c];return f=this.transaction(r,s?"readwrite":"readonly"),d=f.store,a&&(d=d.index(u.shift())),t.next=7,Promise.all([(l=d)[n].apply(l,e($)(u)),s&&f.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return u.apply(this,arguments)});return mt.set(r,c),c}}}ut=function(t){return e($e)({},t,{get:function(e,r,n){return gt(e,r)||t.get(e,r,n)},has:function(e,r){return!!gt(e,r)||t.has(e,r)}})}(ut);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yt=function(){"use strict";function t(r){e(c)(this,t),this.container=r}return e(l)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var kt,bt,_t="@firebase/app",wt="0.7.28",xt=new Ye("@firebase/app"),It="[DEFAULT]",Tt=(kt={},e(Y)(kt,_t,"fire-core"),e(Y)(kt,"@firebase/app-compat","fire-core-compat"),e(Y)(kt,"@firebase/analytics","fire-analytics"),e(Y)(kt,"@firebase/analytics-compat","fire-analytics-compat"),e(Y)(kt,"@firebase/app-check","fire-app-check"),e(Y)(kt,"@firebase/app-check-compat","fire-app-check-compat"),e(Y)(kt,"@firebase/auth","fire-auth"),e(Y)(kt,"@firebase/auth-compat","fire-auth-compat"),e(Y)(kt,"@firebase/database","fire-rtdb"),e(Y)(kt,"@firebase/database-compat","fire-rtdb-compat"),e(Y)(kt,"@firebase/functions","fire-fn"),e(Y)(kt,"@firebase/functions-compat","fire-fn-compat"),e(Y)(kt,"@firebase/installations","fire-iid"),e(Y)(kt,"@firebase/installations-compat","fire-iid-compat"),e(Y)(kt,"@firebase/messaging","fire-fcm"),e(Y)(kt,"@firebase/messaging-compat","fire-fcm-compat"),e(Y)(kt,"@firebase/performance","fire-perf"),e(Y)(kt,"@firebase/performance-compat","fire-perf-compat"),e(Y)(kt,"@firebase/remote-config","fire-rc"),e(Y)(kt,"@firebase/remote-config-compat","fire-rc-compat"),e(Y)(kt,"@firebase/storage","fire-gcs"),e(Y)(kt,"@firebase/storage-compat","fire-gcs-compat"),e(Y)(kt,"@firebase/firestore","fire-fst"),e(Y)(kt,"@firebase/firestore-compat","fire-fst-compat"),e(Y)(kt,"fire-js","fire-js"),e(Y)(kt,"firebase","fire-js-all"),kt),St=new Map,Et=new Map;function Ot(e,t){try{e.container.addComponent(t)}catch(r){xt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function Rt(e){var t=e.name;if(Et.has(t))return xt.debug("There were multiple attempts to register component ".concat(t,".")),!1;Et.set(t,e);var r=!0,n=!1,a=void 0;try{for(var i,o=St.values()[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){Ot(i.value,e)}}catch(e){n=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}return!0}function Nt(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ct=(bt={},e(Y)(bt,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(Y)(bt,"bad-app-name","Illegal App name: '{$appName}"),e(Y)(bt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(Y)(bt,"app-deleted","Firebase App named '{$appName}' already deleted"),e(Y)(bt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(Y)(bt,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(Y)(bt,"storage-open","Error thrown when opening storage. Original error: {$originalErrorMessage}."),e(Y)(bt,"storage-get","Error thrown when reading from storage. Original error: {$originalErrorMessage}."),e(Y)(bt,"storage-set","Error thrown when writing to storage. Original error: {$originalErrorMessage}."),e(Y)(bt,"storage-delete","Error thrown when deleting from storage. Original error: {$originalErrorMessage}."),bt),At=new Ee("app","Firebase",Ct),Pt=function(){"use strict";function t(r,n,a){var i=this;e(c)(this,t),this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Fe("app",(function(){return i}),"PUBLIC"))}return e(l)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}]),t}(),Lt="9.9.0";function Dt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,t=St.get(e);if(!t)throw At.create("no-app",{appName:e});return t}function Mt(e,t,r){var n,a=null!==(n=Tt[e])&&void 0!==n?n:e;r&&(a+="-".concat(r));var i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){var s=['Unable to register library "'.concat(a,'" with version "').concat(t,'":')];return i&&s.push('library name "'.concat(a,'" contains illegal characters (whitespace or "/")')),i&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void xt.warn(s.join(" "))}Rt(new Fe("".concat(a,"-version"),(function(){return{library:a,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ut="firebase-heartbeat-store",jt=null;function Ft(){return jt||(jt=pt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Ut)}}).catch((function(e){throw At.create("storage-open",{originalErrorMessage:e.message})}))),jt}function Vt(e){return Bt.apply(this,arguments)}function Bt(){return(Bt=e(i)(e(o).mark((function t(r){var n,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Ft();case 4:return a=e.sent,e.abrupt("return",a.transaction(Ut).objectStore(Ut).get(zt(r)));case 8:throw e.prev=8,e.t0=e.catch(1),At.create("storage-get",{originalErrorMessage:null===(n=e.t0)||void 0===n?void 0:n.message});case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function Ht(e,t){return qt.apply(this,arguments)}function qt(){return(qt=e(i)(e(o).mark((function t(r,n){var a,i,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Ft();case 4:return i=e.sent,s=i.transaction(Ut,"readwrite"),u=s.objectStore(Ut),e.next=9,u.put(n,zt(r));case 9:return e.abrupt("return",s.done);case 12:throw e.prev=12,e.t0=e.catch(1),At.create("storage-set",{originalErrorMessage:null===(a=e.t0)||void 0===a?void 0:a.message});case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function zt(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt=function(){"use strict";function t(r){var n=this;e(c)(this,t),this.container=r,this._heartbeatsCache=null;var a=this.container.getProvider("app").getImmediate();this._storage=new Xt(a),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return e(l)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n,a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.container.getProvider("platform-logger").getImmediate(),a=n.getPlatformInfoString(),i=Kt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==i&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===i}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:i,agent:a});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),r)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n,a,i,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(n=Kt(),a=Jt(t._heartbeatsCache.heartbeats),i=a.heartbeatsToSend,s=a.unsentEntries,u=we(JSON.stringify({version:2,heartbeats:i})),t._heartbeatsCache.lastSentHeartbeatDate=n,!(s.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=s,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",u);case 17:case"end":return e.stop()}}),r)})))()}}]),t}();function Kt(){return(new Date).toISOString().substring(0,10)}function Jt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),a=!0,i=!1,o=void 0;try{for(var s,u=function(e,a){var i=a.value,o=r.find((function(e){return e.agent===i.agent}));if(o){if(o.dates.push(i.date),Qt(r)>t)return o.dates.pop(),"break"}else if(r.push({agent:i.agent,dates:[i.date]}),Qt(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var l=u(c,s);if("break"===l)break}}catch(e){i=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}return{heartbeatsToSend:r,unsentEntries:n}}var Gt,Xt=function(){"use strict";function t(r){e(c)(this,t),this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(l)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=function(){a.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=function(){r=!1},a.onerror=function(){var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,Vt(t.app);case 9:return n=e.sent,e.abrupt("return",n||{heartbeats:[]});case 11:case"end":return e.stop()}}),r)})))()}},{key:"overwrite",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,r.read();case 10:return i=e.sent,e.abrupt("return",Ht(r.app,{lastSentHeartbeatDate:null!==(a=t.lastSentHeartbeatDate)&&void 0!==a?a:i.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),n)})))()}},{key:"add",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a,i;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,r._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r.read();case 10:return i=n.sent,n.abrupt("return",Ht(r.app,{lastSentHeartbeatDate:null!==(a=t.lastSentHeartbeatDate)&&void 0!==a?a:i.lastSentHeartbeatDate,heartbeats:e($)(i.heartbeats).concat(e($)(t.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),t}();function Qt(e){return we(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt="",Rt(new Fe("platform-logger",(function(e){return new yt(e)}),"PRIVATE")),Rt(new Fe("heartbeat",(function(e){return new Wt(e)}),"PRIVATE")),Mt(_t,wt,Gt),Mt(_t,wt,"esm2017"),Mt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Mt("firebase","9.9.0","app");le=a("ds8z5"),i=a("bpxeT"),c=a("8MBJY"),l=a("a2hTj"),Y=a("hKHmD");var Yt={};Object.defineProperty(Yt,"__esModule",{value:!0}),Yt.default=function(e,t,r){return Zt(e,t,r)};var $t=function(e){return e&&e.__esModule?e:{default:e}}(a("2mz0K"));function Zt(e,t,r){return(Zt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=$t.default(e,t);if(n){var a=Object.getOwnPropertyDescriptor(n,t);return a.get?a.get.call(r||e):a.value}})(e,t,r)}var er=a("fVNic");fe=a("eYQtU"),ke=a("2MbLg"),o=a("2TvXO");function tr(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}Object.create;Object.create;function rr(){return e(Y)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var nr=rr,ar=new Ee("auth","Firebase",rr()),ir=new Ye("@firebase/auth");function or(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];var i;ir.logLevel<=He.ERROR&&(i=ir).error.apply(i,["Auth (".concat(Lt,"): ").concat(t)].concat(e($)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];throw lr.apply(void 0,[t].concat(e($)(n)))}function ur(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return lr.apply(void 0,[t].concat(e($)(n)))}function cr(t,r,n){var a=Object.assign(Object.assign({},nr()),e(Y)({},r,n));return new Ee("auth","Firebase",a).create(r,{appName:t.name})}function lr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];var i;if("string"!=typeof t){var o,s=n[0],u=e($)(n.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e($)(u)))}return(i=ar).create.apply(i,[t].concat(e($)(n)))}function fr(t,r){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];if(!t)throw lr.apply(void 0,[r].concat(e($)(a)))}function dr(e){var t="INTERNAL ASSERTION FAILED: "+e;throw or(t),new Error(t)}function pr(e,t){e||dr(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hr=new Map;function vr(e){pr(e instanceof Function,"Expected a class definition");var t=hr.get(e);return t?(pr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,hr.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e,t){var r=Nt(e,"auth");if(r.isInitialized()){var n=r.getImmediate();if(Ce(r.getOptions(),null!=t?t:{}))return n;sr(n,"already-initialized")}return r.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function yr(){return"http:"===kr()||"https:"===kr()}function kr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!yr()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _r=function(){"use strict";function t(r,n){e(c)(this,t),this.shortDelay=r,this.longDelay=n,pr(n>r,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())||"object"==typeof navigator&&"ReactNative"===navigator.product}return e(l)(t,[{key:"get",value:function(){return br()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(e,t){pr(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xr,Ir=function(){"use strict";function t(){e(c)(this,t)}return e(l)(t,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),Tr=(xr={},e(Y)(xr,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(Y)(xr,"MISSING_CUSTOM_TOKEN","internal-error"),e(Y)(xr,"INVALID_IDENTIFIER","invalid-email"),e(Y)(xr,"MISSING_CONTINUE_URI","internal-error"),e(Y)(xr,"INVALID_PASSWORD","wrong-password"),e(Y)(xr,"MISSING_PASSWORD","internal-error"),e(Y)(xr,"EMAIL_EXISTS","email-already-in-use"),e(Y)(xr,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(Y)(xr,"INVALID_IDP_RESPONSE","invalid-credential"),e(Y)(xr,"INVALID_PENDING_TOKEN","invalid-credential"),e(Y)(xr,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(Y)(xr,"MISSING_REQ_TYPE","internal-error"),e(Y)(xr,"EMAIL_NOT_FOUND","user-not-found"),e(Y)(xr,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(Y)(xr,"EXPIRED_OOB_CODE","expired-action-code"),e(Y)(xr,"INVALID_OOB_CODE","invalid-action-code"),e(Y)(xr,"MISSING_OOB_CODE","internal-error"),e(Y)(xr,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(Y)(xr,"INVALID_ID_TOKEN","invalid-user-token"),e(Y)(xr,"TOKEN_EXPIRED","user-token-expired"),e(Y)(xr,"USER_NOT_FOUND","user-token-expired"),e(Y)(xr,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(Y)(xr,"INVALID_CODE","invalid-verification-code"),e(Y)(xr,"INVALID_SESSION_INFO","invalid-verification-id"),e(Y)(xr,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(Y)(xr,"MISSING_SESSION_INFO","missing-verification-id"),e(Y)(xr,"SESSION_EXPIRED","code-expired"),e(Y)(xr,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(Y)(xr,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(Y)(xr,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(Y)(xr,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(Y)(xr,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(Y)(xr,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(Y)(xr,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(Y)(xr,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(Y)(xr,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(Y)(xr,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(Y)(xr,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),xr),Sr=new _r(3e4,6e4);function Er(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Or(e,t,r,n){return Rr.apply(this,arguments)}function Rr(){return Rr=e(i)(e(o).mark((function t(r,n,a,s){var u,c=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",Nr(r,u,e(i)(e(o).mark((function t(){var i,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={},u={},s&&("GET"===n?u=s:i={body:JSON.stringify(s)}),c=Pe(Object.assign({key:r.config.apiKey},u)).slice(1),e.next=6,r._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode),e.abrupt("return",Ir.fetch()(Lr(r,r.config.apiHost,a,c),Object.assign({method:n,headers:l,referrerPolicy:"no-referrer"},i)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Rr.apply(this,arguments)}function Nr(e,t,r){return Cr.apply(this,arguments)}function Cr(){return(Cr=e(i)(e(o).mark((function t(r,n,a){var i,s,u,c,l,f,d,p,h;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r._canInitEmulator=!1,i=Object.assign(Object.assign({},Tr),n),t.prev=2,s=new Dr(r),t.next=6,Promise.race([a(),s.promise]);case 6:return u=t.sent,s.clearNetworkTimeout(),t.next=10,u.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw Mr(r,"account-exists-with-different-credential",c);case 13:if(!u.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=u.ok?c.errorMessage:c.error.message,f=e(ae)(l.split(" : "),2),d=f[0],p=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){t.next=23;break}throw Mr(r,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==d){t.next=27;break}throw Mr(r,"email-already-in-use",c);case 27:if("USER_DISABLED"!==d){t.next=29;break}throw Mr(r,"user-disabled",c);case 29:if(h=i[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!p){t.next=34;break}throw cr(r,h,p);case 34:sr(r,h);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof Se)){t.next=41;break}throw t.t0;case 41:sr(r,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function Ar(e,t,r,n){return Pr.apply(this,arguments)}function Pr(){return Pr=e(i)(e(o).mark((function t(r,n,a,i){var s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,Or(r,n,a,i,s);case 3:return"mfaPendingCredential"in(u=e.sent)&&sr(r,"multi-factor-auth-required",{_serverResponse:u}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),t)}))),Pr.apply(this,arguments)}function Lr(e,t,r,n){var a="".concat(t).concat(r,"?").concat(n);return e.config.emulator?wr(e.config,a):"".concat(e.config.apiScheme,"://").concat(a)}var Dr=function(){"use strict";function t(r){var n=this;e(c)(this,t),this.auth=r,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(ur(r.auth,"network-request-failed"))}),Sr.get())}))}return e(l)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Mr(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var a=ur(e,t,n);return a.customData._tokenResponse=r,a}function Ur(e,t){return jr.apply(this,arguments)}function jr(){return(jr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(i)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Or(r,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Fr(e,t){return Vr.apply(this,arguments)}function Vr(){return(Vr=e(i)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Or(r,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(){return Hr=e(i)(e(o).mark((function t(r){var n,a,i,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]&&l[1],a=je(r),e.next=4,a.getIdToken(n);case 4:return i=e.sent,fr((s=zr(i))&&s.exp&&s.auth_time&&s.iat,a.auth,"internal-error"),u="object"==typeof s.firebase?s.firebase:void 0,c=null==u?void 0:u.sign_in_provider,e.abrupt("return",{claims:s,token:i,authTime:Br(qr(s.auth_time)),issuedAtTime:Br(qr(s.iat)),expirationTime:Br(qr(s.exp)),signInProvider:c||null,signInSecondFactor:(null==u?void 0:u.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),Hr.apply(this,arguments)}function qr(e){return 1e3*Number(e)}function zr(t){var r,n=e(ae)(t.split("."),3),a=n[0],i=n[1],o=n[2];if(void 0===a||void 0===i||void 0===o)return or("JWT malformed, contained fewer than 3 sections"),null;try{var s=xe(i);return s?JSON.parse(s):(or("Failed to decode base64 JWT payload"),null)}catch(e){return or("Caught error parsing JWT payload as JSON",null===(r=e)||void 0===r?void 0:r.toString()),null}}function Wr(e,t){return Kr.apply(this,arguments)}function Kr(){return Kr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(i)(e(o).mark((function t(r,n){var a=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.length>2&&void 0!==a[2]&&a[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof Se&&Jr(e.t0))){e.next=15;break}if(r.auth.currentUser!==r){e.next=15;break}return e.next=15,r.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Kr.apply(this,arguments)}function Jr(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gr=function(){"use strict";function t(r){e(c)(this,t),this.user=r,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(l)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var r=this.getInterval(t),n=this;this.timerId=setTimeout(e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),t)}))),r)}}},{key:"iteration",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,t.user.getIdToken(!0);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(n=e.t0)||void 0===n?void 0:n.code)&&t.schedule(!0),e.abrupt("return");case 10:t.schedule();case 11:case"end":return e.stop()}}),r,null,[[1,6]])})))()}}]),t}(),Xr=function(){"use strict";function t(r,n){e(c)(this,t),this.createdAt=r,this.lastLoginAt=n,this._initializeTime()}return e(l)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Br(this.lastLoginAt),this.creationTime=Br(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e){return Yr.apply(this,arguments)}function Yr(){return(Yr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(i)(e(o).mark((function t(r){var n,a,i,s,u,c,l,f,d,p,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.auth,e.next=4,r.getIdToken();case 4:return i=e.sent,e.next=7,Wr(r,Fr(a,{idToken:i}));case 7:fr(null==(s=e.sent)?void 0:s.users.length,a,"internal-error"),u=s.users[0],r._notifyReloadListener(u),c=(null===(n=u.providerUserInfo)||void 0===n?void 0:n.length)?en(u.providerUserInfo):[],l=Zr(r.providerData,c),f=r.isAnonymous,d=!(r.email&&u.passwordHash||(null==l?void 0:l.length)),p=!!f&&d,h={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:l,metadata:new Xr(u.createdAt,u.lastLoginAt),isAnonymous:p},Object.assign(r,h);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $r(){return($r=e(i)(e(o).mark((function t(r){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=je(r),e.next=3,Qr(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Zr(t,r){var n=t.filter((function(e){return!r.some((function(t){return t.providerId===e.providerId}))}));return e($)(n).concat(e($)(r))}function en(e){return e.map((function(e){var t=e.providerId,r=tr(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function tn(e,t){return rn.apply(this,arguments)}function rn(){return(rn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(i)(e(o).mark((function t(r,n){var a;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Nr(r,{},e(i)(e(o).mark((function t(){var a,i,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Pe({grant_type:"refresh_token",refresh_token:n}).slice(1),i=r.config,s=i.tokenApiHost,u=i.apiKey,c=Lr(r,s,"/v1/token","key=".concat(u)),e.next=5,r._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Ir.fetch()(c,{method:"POST",headers:l,body:a}));case 8:case"end":return e.stop()}}),t)}))));case 2:return a=t.sent,t.abrupt("return",{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nn=function(){"use strict";function t(){e(c)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(l)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){fr(e.idToken,"internal-error"),fr(void 0!==e.idToken,"internal-error"),fr(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,fr(r=zr(t),"internal-error"),fr(void 0!==r.exp,"internal-error"),fr(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(i)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(fr(!n.accessToken||n.refreshToken,t,"user-token-expired"),r||!n.accessToken||n.isExpired){e.next=3;break}return e.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){e.next=7;break}return e.next=6,n.refresh(t,n.refreshToken);case 6:return e.abrupt("return",n.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),a)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,r){var n=this;return e(i)(e(o).mark((function a(){var i,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,tn(t,r);case 2:i=e.sent,s=i.accessToken,u=i.refreshToken,c=i.expiresIn,n.updateTokensAndExpiration(s,u,Number(c));case 7:case"end":return e.stop()}}),a)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return dr("not implemented")}}],[{key:"fromJSON",value:function(e,r){var n=r.refreshToken,a=r.accessToken,i=r.expirationTime,o=new t;return n&&(fr("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),a&&(fr("string"==typeof a,"internal-error",{appName:e}),o.accessToken=a),i&&(fr("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e,t){fr("string"==typeof e||void 0===e,"internal-error",{appName:t})}var on=function(){"use strict";function t(r){e(c)(this,t);var n=r.uid,a=r.auth,i=r.stsTokenManager,o=tr(r,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=a,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e($)(o.providerData):[],this.metadata=new Xr(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(l)(t,[{key:"getIdToken",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Wr(r,r.stsTokenManager.getToken(r.auth,t));case 2:if(fr(a=e.sent,r.auth,"internal-error"),r.accessToken===a){e.next=9;break}return r.accessToken=a,e.next=8,r.auth._persistUserIfCurrent(r);case 8:r.auth._notifyListenersIfCurrent(r);case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Hr.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return $r.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(fr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){fr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(i)(e(o).mark((function a(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=!1,t.idToken&&t.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(t),i=!0),!r){e.next=5;break}return e.next=5,Qr(n);case 5:return e.next=7,n.auth._persistUserIfCurrent(n);case 7:i&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return e.stop()}}),a)})))()}},{key:"delete",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return n=e.sent,e.next=5,Wr(t,Ur(t.auth,{idToken:n}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),r)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,r){var n,a,i,o,s,u,c,l,f=null!==(n=r.displayName)&&void 0!==n?n:void 0,d=null!==(a=r.email)&&void 0!==a?a:void 0,p=null!==(i=r.phoneNumber)&&void 0!==i?i:void 0,h=null!==(o=r.photoURL)&&void 0!==o?o:void 0,v=null!==(s=r.tenantId)&&void 0!==s?s:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=r.createdAt)&&void 0!==c?c:void 0,y=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,k=r.uid,b=r.emailVerified,_=r.isAnonymous,w=r.providerData,x=r.stsTokenManager;fr(k&&x,e,"internal-error");var I=nn.fromJSON(this.name,x);fr("string"==typeof k,e,"internal-error"),an(f,e.name),an(d,e.name),fr("boolean"==typeof b,e,"internal-error"),fr("boolean"==typeof _,e,"internal-error"),an(p,e.name),an(h,e.name),an(v,e.name),an(m,e.name),an(g,e.name),an(y,e.name);var T=new t({uid:k,auth:e,email:d,emailVerified:b,displayName:f,isAnonymous:_,photoURL:h,phoneNumber:p,tenantId:v,stsTokenManager:I,createdAt:g,lastLoginAt:y});return w&&Array.isArray(w)&&(T.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(T._redirectEventId=m),T}},{key:"_fromIdTokenResponse",value:function(r,n){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(i)(e(o).mark((function i(){var s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new nn).updateFromServerResponse(n),u=new t({uid:n.localId,auth:r,stsTokenManager:s,isAnonymous:a}),e.next=5,Qr(u);case 5:return e.abrupt("return",u);case 6:case"end":return e.stop()}}),i)})))()}}]),t}(),sn=function(){"use strict";function t(){e(c)(this,t),this.type="NONE",this.storage={}}return e(l)(t,[{key:"_isAvailable",value:function(){return e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,r){var n=this;return e(i)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.storage[t]=r;case 1:case"end":return e.stop()}}),a)})))()}},{key:"_get",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.storage[t],e.abrupt("return",void 0===a?null:a);case 2:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(i)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete r.storage[t];case 1:case"end":return e.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.type="NONE";var un=sn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var ln=function(){"use strict";function t(r,n,a){e(c)(this,t),this.persistence=r,this.auth=n,this.userKey=a;var i=this.auth,o=i.config,s=i.name;this.fullUserKey=cn(this.userKey,o.apiKey,s),this.fullPersistenceKey=cn("persistence",o.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(l)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return n=e.sent,e.abrupt("return",n?on._fromJSON(t.auth,n):null);case 4:case"end":return e.stop()}}),r)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.getCurrentUser();case 4:return a=e.sent,e.next=7,r.removeCurrentUser();case 7:if(r.persistence=t,!a){e.next=10;break}return e.abrupt("return",r.setCurrentUser(a));case 10:case"end":return e.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(r,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(i)(e(o).mark((function s(){var u,c,l,f,d,p,h,v,m,g,y,k,b;return e(o).wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(n.length){s.next=2;break}return s.abrupt("return",new t(vr(un),r,a));case 2:return s.next=4,Promise.all(n.map(function(){var t=e(i)(e(o).mark((function t(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",r);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:u=s.sent.filter((function(e){return e})),c=u[0]||vr(un),l=cn(a,r.config.apiKey,r.name),f=null,d=!0,p=!1,h=void 0,s.prev=9,v=n[Symbol.iterator]();case 11:if(d=(m=v.next()).done){s.next=29;break}return g=m.value,s.prev=13,s.next=16,g._get(l);case 16:if(!(y=s.sent)){s.next=22;break}return k=on._fromJSON(r,y),g!==c&&(f=k),c=g,s.abrupt("break",29);case 22:s.next=26;break;case 24:s.prev=24,s.t0=s.catch(13);case 26:d=!0,s.next=11;break;case 29:s.next=35;break;case 31:s.prev=31,s.t1=s.catch(9),p=!0,h=s.t1;case 35:s.prev=35,s.prev=36,d||null==v.return||v.return();case 38:if(s.prev=38,!p){s.next=41;break}throw h;case 41:return s.finish(38);case 42:return s.finish(35);case 43:if(b=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&b.length){s.next=46;break}return s.abrupt("return",new t(c,r,a));case 46:if(c=b[0],!f){s.next=50;break}return s.next=50,c._set(l,f.toJSON());case 50:return s.next=52,Promise.all(n.map(function(){var t=e(i)(e(o).mark((function t(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r===c){e.next=8;break}return e.prev=1,e.next=4,r._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return s.abrupt("return",new t(c,r,a));case 53:case"end":return s.stop()}}),s,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(vn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(dn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(gn(t))return"Blackberry";if(yn(t))return"Webos";if(pn(t))return"Safari";if((t.includes("chrome/")||hn(t))&&!t.includes("edge/"))return"Chrome";if(mn(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function dn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te();return/firefox\//i.test(e)}function pn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function hn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te();return/crios\//i.test(e)}function vn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te();return/iemobile/i.test(e)}function mn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te();return/android/i.test(e)}function gn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te();return/blackberry/i.test(e)}function yn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te();return/webos/i.test(e)}function kn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function bn(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te();return kn(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function _n(){return((e=Te()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function wn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te();return kn(e)||mn(e)||yn(e)||gn(e)||/windows phone/i.test(e)||vn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xn(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=fn(Te());break;case"Worker":t="".concat(fn(Te()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Lt,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var In=function(){"use strict";function t(r){e(c)(this,t),this.auth=r,this.queue=[]}return e(l)(t,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var a=this.queue.length-1;return function(){r.queue[a]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a,i,s,u,c,l,f,d,p,h,v,m,g,y;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:i=[],e.prev=4,s=!0,u=!1,c=void 0,e.prev=6,l=r.queue[Symbol.iterator]();case 8:if(s=(f=l.next()).done){e.next=16;break}return d=f.value,e.next=12,d(t);case 12:d.onAbort&&i.push(d.onAbort);case 13:s=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),u=!0,c=e.t0;case 22:e.prev=22,e.prev=23,s||null==l.return||l.return();case 25:if(e.prev=25,!u){e.next=28;break}throw c;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),i.reverse(),p=!0,h=!1,v=void 0,e.prev=36,m=i[Symbol.iterator]();!(p=(g=m.next()).done);p=!0){y=g.value;try{y()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),h=!0,v=e.t2;case 44:e.prev=44,e.prev=45,p||null==m.return||m.return();case 47:if(e.prev=47,!h){e.next=50;break}throw v;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw r.auth._errorFactory.create("login-blocked",{originalMessage:null===(a=e.t1)||void 0===a?void 0:a.message});case 53:case"end":return e.stop()}}),n,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),Tn=function(){"use strict";function t(r,n,a){e(c)(this,t),this.app=r,this.heartbeatServiceProvider=n,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new En(this),this.idTokenSubscription=new En(this),this.beforeStateQueue=new In(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ar,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=r.name,this.clientVersion=a.sdkClientVersion}return e(l)(t,[{key:"_initializeWithPersistence",value:function(t,r){r&&(this._popupRedirectResolver=vr(r));var n=this;return this._initializationPromise=this.queue(e(i)(e(o).mark((function a(){var i,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,ln.create(n,t);case 5:if(n.persistenceManager=e.sent,!n._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(i=n._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,n._popupRedirectResolver._initialize(n);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,n.initializeCurrentUser(r);case 18:if(n.lastNotifiedUid=(null===(s=n.currentUser)||void 0===s?void 0:s.uid)||null,!n._deleted){e.next=21;break}return e.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return e.stop()}}),a,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(n=e.sent,t.currentUser||n){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!n||t.currentUser.uid!==n.uid){e.next=12;break}return t._currentUser._assign(n),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(n,!0);case 14:case"end":return e.stop()}}),r)})))()}},{key:"initializeCurrentUser",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a,i,s,u,c,l,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r.assertedPersistence.getCurrentUser();case 3:if(i=e.sent,s=i,u=!1,!t||!r.config.authDomain){e.next=15;break}return e.next=9,r.getOrInitRedirectPersistenceManager();case 9:return c=null===(a=r.redirectUser)||void 0===a?void 0:a._redirectEventId,l=null==s?void 0:s._redirectEventId,e.next=13,r.tryRedirectSignIn(t);case 13:f=e.sent,c&&c!==l||!(null==f?void 0:f.user)||(s=f.user,u=!0);case 15:if(s){e.next=17;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 17:if(s._redirectEventId){e.next=33;break}if(!u){e.next=28;break}return e.prev=19,e.next=22,r.beforeStateQueue.runMiddleware(s);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),s=i,r._popupRedirectResolver._overrideRedirectResult(r,(function(){return Promise.reject(e.t0)}));case 28:if(!s){e.next=32;break}return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(s));case 32:return e.abrupt("return",r.directlySetCurrentUser(null));case 33:return fr(r._popupRedirectResolver,r,"argument-error"),e.next=36,r.getOrInitRedirectPersistenceManager();case 36:if(!r.redirectUser||r.redirectUser._redirectEventId!==s._redirectEventId){e.next=38;break}return e.abrupt("return",r.directlySetCurrentUser(s));case 38:return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(s));case 39:case"end":return e.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,e.prev=1,e.next=4,r._popupRedirectResolver._completeRedirectFn(r,t,!0);case 4:a=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,r._setRedirectUser(null);case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Qr(t);case 4:e.next=10;break;case 6:if(e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(a=e.t0)||void 0===a?void 0:a.code)){e.next=10;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 10:return e.abrupt("return",r.directlySetCurrentUser(t));case 11:case"end":return e.stop()}}),n,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(i)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),r)})))()}},{key:"updateCurrentUser",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=t?je(t):null)&&fr(a.auth.config.apiKey===r.config.apiKey,r,"invalid-user-token"),e.abrupt("return",r._updateCurrentUser(a&&a._clone(r)));case 3:case"end":return e.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(i)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!n._deleted){a.next=2;break}return a.abrupt("return");case 2:if(t&&fr(n.tenantId===t.tenantId,n,"tenant-id-mismatch"),r){a.next=6;break}return a.next=6,n.beforeStateQueue.runMiddleware(t);case 6:return a.abrupt("return",n.queue(e(i)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.directlySetCurrentUser(t);case 2:n.notifyAuthListeners();case 3:case"end":return e.stop()}}),r)})))));case 7:case"end":return a.stop()}}),a)})))()}},{key:"signOut",value:function(){var t=this;return e(i)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),r)})))()}},{key:"setPersistence",value:function(t){var r=this;return this.queue(e(i)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.assertedPersistence.setPersistence(vr(t));case 2:case"end":return e.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new Ee("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,r){var n=this;return e(i)(e(o).mark((function a(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getOrInitRedirectPersistenceManager(r);case 2:return i=e.sent,e.abrupt("return",null===t?i.removeCurrentUser():i.setCurrentUser(t));case 4:case"end":return e.stop()}}),a)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.redirectPersistenceManager){e.next=9;break}return fr(a=t&&vr(t)||r._popupRedirectResolver,r,"argument-error"),e.next=5,ln.create(r,[vr(a._redirectPersistence)],"redirectUser");case 5:return r.redirectPersistenceManager=e.sent,e.next=8,r.redirectPersistenceManager.getCurrentUser();case 8:r.redirectUser=e.sent;case 9:return e.abrupt("return",r.redirectPersistenceManager);case 10:case"end":return e.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a,s;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._isInitialized){n.next=4;break}return n.next=4,r.queue(e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(a=r._currentUser)||void 0===a?void 0:a._redirectEventId)!==t){n.next=6;break}return n.abrupt("return",r._currentUser);case 6:if((null===(s=r.redirectUser)||void 0===s?void 0:s._redirectEventId)!==t){n.next=8;break}return n.abrupt("return",r.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(t){var r=this;return e(i)(e(o).mark((function n(){return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t!==r.currentUser){n.next=2;break}return n.abrupt("return",r.queue(e(i)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var a=this;if(this._deleted)return function(){};var i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return fr(o,this,"internal-error"),o.then((function(){return i(a.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var r=this;return e(i)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.currentUser&&r.currentUser!==t&&(r._currentUser._stopProactiveRefresh(),t&&r.isProactiveRefreshEnabled&&t._startProactiveRefresh()),r.currentUser=t,!t){e.next=7;break}return e.next=5,r.assertedPersistence.setCurrentUser(t);case 5:e.next=9;break;case 7:return e.next=9,r.assertedPersistence.removeCurrentUser();case 9:case"end":return e.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return fr(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xn(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n,a,i;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e(Y)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(a["X-Firebase-gmpid"]=t.app.options.appId),r.next=5,null===(n=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(i=r.sent)&&(a["X-Firebase-Client"]=i),r.abrupt("return",a);case 8:case"end":return r.stop()}}),r)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(e){return je(e)}var En=function(){"use strict";function t(r){var n,a,i=this;e(c)(this,t),this.auth=r,this.observer=null,this.addObserver=(a=new Me((function(e){return i.observer=e}),n)).subscribe.bind(a)}return e(l)(t,[{key:"next",get:function(){return fr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var On=function(){"use strict";function t(r,n){e(c)(this,t),this.providerId=r,this.signInMethod=n}return e(l)(t,[{key:"toJSON",value:function(){return dr("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return dr("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return dr("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return dr("not implemented")}}]),t}();function Rn(e,t){return Nn.apply(this,arguments)}function Nn(){return(Nn=e(i)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Or(r,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Cn(e,t){return An.apply(this,arguments)}function An(){return(An=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(i)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ar(r,"POST","/v1/accounts:signInWithPassword",Er(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Pn(e,t){return Ln.apply(this,arguments)}function Ln(){return(Ln=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(i)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ar(r,"POST","/v1/accounts:signInWithEmailLink",Er(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Dn(e,t){return Mn.apply(this,arguments)}function Mn(){return(Mn=e(i)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ar(r,"POST","/v1/accounts:signInWithEmailLink",Er(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Un=function(t){"use strict";e(fe)(n,t);var r=e(ke)(n);function n(t,a,i){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(c)(this,n),(o=r.call(this,"password",i))._email=t,o._password=a,o._tenantId=s,o}return e(l)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var r=this;return e(i)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Cn(t,{returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",Pn(t,{email:r._email,oobCode:r._password}));case 5:sr(t,"internal-error");case 6:case"end":return e.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(t,r){var n=this;return e(i)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Rn(t,{idToken:r,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",Dn(t,{idToken:r,email:n._email,oobCode:n._password}));case 5:sr(t,"internal-error");case 6:case"end":return e.stop()}}),a)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(On);function jn(e,t){return Fn.apply(this,arguments)}function Fn(){return(Fn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(i)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ar(r,"POST","/v1/accounts:signInWithIdp",Er(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vn=function(t){"use strict";e(fe)(n,t);var r=e(ke)(n);function n(){var t;return e(c)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(l)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return jn(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,jn(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,jn(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pe(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):sr("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,a=t.signInMethod,i=tr(t,["providerId","signInMethod"]);if(!r||!a)return null;var o=new n(r,a);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}}]),n}(On);function Bn(e,t){return Hn.apply(this,arguments)}function Hn(){return(Hn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(i)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Or(r,"POST","/v1/accounts:sendVerificationCode",Er(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function qn(){return(qn=e(i)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ar(r,"POST","/v1/accounts:signInWithPhoneNumber",Er(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function zn(){return(zn=e(i)(e(o).mark((function t(r,n){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ar(r,"POST","/v1/accounts:signInWithPhoneNumber",Er(r,n));case 2:if(!(a=e.sent).temporaryProof){e.next=5;break}throw Mr(r,"account-exists-with-different-credential",a);case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Wn=e(Y)({},"USER_NOT_FOUND","user-not-found");function Kn(){return(Kn=e(i)(e(o).mark((function t(r,n){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",Ar(r,"POST","/v1/accounts:signInWithPhoneNumber",Er(r,a),Wn));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jn=function(t){"use strict";e(fe)(n,t);var r=e(ke)(n);function n(t){var a;return e(c)(this,n),(a=r.call(this,"phone","phone")).params=t,a}return e(l)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return qn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return zn.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Kn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,a=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:a}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,a=e.phoneNumber,i=e.temporaryProof;return r||t||a||i?new n({verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:i}):null}}]),n}(On);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn=function(){"use strict";function t(r){var n,a,i,o,s,u;e(c)(this,t);var l=Le(De(r)),f=null!==(n=l.apiKey)&&void 0!==n?n:null,d=null!==(a=l.oobCode)&&void 0!==a?a:null,p=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=l.mode)&&void 0!==i?i:null);fr(f&&d&&p,"argument-error"),this.apiKey=f,this.operation=p,this.code=d,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=l.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=l.tenantId)&&void 0!==u?u:null}return e(l)(t,null,[{key:"parseLink",value:function(e){var r=function(e){var t=Le(De(e)).link,r=t?Le(De(t)).deep_link_id:null,n=Le(De(e)).deep_link_id;return(n?Le(De(n)).link:null)||n||r||t||e}(e);try{return new t(r)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xn=function(){"use strict";function t(){e(c)(this,t),this.providerId=t.PROVIDER_ID}return e(l)(t,null,[{key:"credential",value:function(e,t){return Un._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=Gn.parseLink(t);return fr(r,"argument-error"),Un._fromEmailAndCode(e,r.code,r.tenantId)}}]),t}();Xn.PROVIDER_ID="password",Xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Qn=function(){"use strict";function t(r){e(c)(this,t),this.providerId=r,this.defaultLanguageCode=null,this.customParameters={}}return e(l)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),Yn=function(t){"use strict";e(fe)(n,t);var r=e(ke)(n);function n(){var t;return e(c)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(l)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e($)(this.scopes)}}]),n}(Qn),$n=function(t){"use strict";e(fe)(n,t);var r=e(ke)(n);function n(){return e(c)(this,n),r.call(this,"facebook.com")}return e(l)(n,null,[{key:"credential",value:function(e){return Vn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(Yn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n.FACEBOOK_SIGN_IN_METHOD="facebook.com",$n.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Zn=function(t){"use strict";e(fe)(n,t);var r=e(ke)(n);function n(){var t;return e(c)(this,n),(t=r.call(this,"google.com")).addScope("profile"),t}return e(l)(n,null,[{key:"credential",value:function(e,t){return Vn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,a=t.oauthAccessToken;if(!r&&!a)return null;try{return n.credential(r,a)}catch(e){return null}}}]),n}(Yn);Zn.GOOGLE_SIGN_IN_METHOD="google.com",Zn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ea=function(t){"use strict";e(fe)(n,t);var r=e(ke)(n);function n(){return e(c)(this,n),r.call(this,"github.com")}return e(l)(n,null,[{key:"credential",value:function(e){return Vn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(Yn);ea.GITHUB_SIGN_IN_METHOD="github.com",ea.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ta=function(t){"use strict";e(fe)(n,t);var r=e(ke)(n);function n(){return e(c)(this,n),r.call(this,"twitter.com")}return e(l)(n,null,[{key:"credential",value:function(e,t){return Vn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,a=t.oauthTokenSecret;if(!r||!a)return null;try{return n.credential(r,a)}catch(e){return null}}}]),n}(Yn);function ra(e,t){return na.apply(this,arguments)}function na(){return(na=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(i)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ar(r,"POST","/v1/accounts:signUp",Er(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ta.TWITTER_SIGN_IN_METHOD="twitter.com",ta.PROVIDER_ID="twitter.com";var aa=function(){"use strict";function t(r){e(c)(this,t),this.user=r.user,this.providerId=r.providerId,this._tokenResponse=r._tokenResponse,this.operationType=r.operationType}return e(l)(t,null,[{key:"_fromIdTokenResponse",value:function(r,n,a){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(i)(e(o).mark((function i(){var u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,on._fromIdTokenResponse(r,a,s);case 2:return u=e.sent,c=ia(a),l=new t({user:u,providerId:c,_tokenResponse:a,operationType:n}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),i)})))()}},{key:"_forOperation",value:function(r,n,a){return e(i)(e(o).mark((function i(){var s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._updateTokensIfNecessary(a,!0);case 2:return s=ia(a),e.abrupt("return",new t({user:r,providerId:s,_tokenResponse:a,operationType:n}));case 4:case"end":return e.stop()}}),i)})))()}}]),t}();function ia(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var oa=function(t){"use strict";e(fe)(n,t);var r=e(ke)(n);function n(t,a,i,o){var s,u;return e(c)(this,n),(s=r.call(this,a.code,a.message)).operationType=i,s.user=o,Object.setPrototypeOf(e(le)(s),n.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:a.customData._serverResponse,operationType:i},s}return e(l)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,a){return new n(e,t,r,a)}}]),n}(Se);function sa(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw oa._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(e,t){return ca.apply(this,arguments)}function ca(){return ca=e(i)(e(o).mark((function t(r,n){var a,i,s=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>2&&void 0!==s[2]&&s[2],e.t0=Wr,e.t1=r,e.t2=n,e.t3=r.auth,e.next=7,r.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=a,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return i=e.sent,e.abrupt("return",aa._forOperation(r,"link",i));case 14:case"end":return e.stop()}}),t)}))),ca.apply(this,arguments)}function la(e,t){return fa.apply(this,arguments)}function fa(){return fa=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(i)(e(o).mark((function t(r,n){var a,i,s,u,c,l,f,d=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>2&&void 0!==d[2]&&d[2],s=r.auth,u="reauthenticate",e.prev=4,e.next=7,Wr(r,sa(s,u,n,r),a);case 7:return fr((c=e.sent).idToken,s,"internal-error"),fr(l=zr(c.idToken),s,"internal-error"),f=l.sub,fr(r.uid===f,s,"user-mismatch"),e.abrupt("return",aa._forOperation(r,u,c));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(i=e.t0)||void 0===i?void 0:i.code)&&sr(s,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),t,null,[[4,16]])}))),fa.apply(this,arguments)}function da(e,t){return pa.apply(this,arguments)}function pa(){return pa=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(i)(e(o).mark((function t(r,n){var a,i,s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]&&c[2],i="signIn",e.next=4,sa(r,i,n);case 4:return s=e.sent,e.next=7,aa._fromIdTokenResponse(r,i,s);case 7:if(u=e.sent,a){e.next=11;break}return e.next=11,r._updateCurrentUser(u.user);case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),t)}))),pa.apply(this,arguments)}function ha(e,t){return va.apply(this,arguments)}function va(){return(va=e(i)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",da(Sn(r),n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ma(e,t,r){return ga.apply(this,arguments)}function ga(){return(ga=e(i)(e(o).mark((function t(r,n,a){var i,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Sn(r),e.next=3,ra(i,{returnSecureToken:!0,email:n,password:a});case 3:return s=e.sent,e.next=6,aa._fromIdTokenResponse(i,"signIn",s);case 6:return u=e.sent,e.next=9,i._updateCurrentUser(u.user);case 9:return e.abrupt("return",u);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ya(e,t,r){return ha(je(e),Xn.credential(t,r))}function ka(e,t){return ba.apply(this,arguments)}function ba(){return(ba=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(i)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Or(r,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function _a(e,t){return wa.apply(this,arguments)}function wa(){return(wa=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(i)(e(o).mark((function t(r,n){var a,i,s,u,c,l,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.displayName,i=n.photoURL,void 0!==a||void 0!==i){e.next=3;break}return e.abrupt("return");case 3:return s=je(r),e.next=6,s.getIdToken();case 6:return u=e.sent,c={idToken:u,displayName:a,photoUrl:i,returnSecureToken:!0},e.next=10,Wr(s,ka(s.auth,c));case 10:return l=e.sent,s.displayName=l.displayName||null,s.photoURL=l.photoUrl||null,(f=s.providerData.find((function(e){return"password"===e.providerId})))&&(f.displayName=s.displayName,f.photoURL=s.photoURL),e.next=17,s._updateTokensIfNecessary(l);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function xa(e){return je(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ia(e,t){return Or(e,"POST","/v2/accounts/mfaEnrollment:start",Er(e,t))}new WeakMap;var Ta="__sak",Sa=function(){"use strict";function t(r,n){e(c)(this,t),this.storageRetriever=r,this.type=n}return e(l)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Ta,"1"),this.storage.removeItem(Ta),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ea=function(t){"use strict";e(fe)(n,t);var r=e(ke)(n);function n(){var t,a;return e(c)(this,n),(t=r.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,r){return t.onStorageEvent(e,r)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(pn(a=Te())||kn(a))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=wn(),t._shouldAllowMigration=!0,t}return e(l)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var a,i=Object.keys(this.listeners)[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=a.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){r=!0,n=e}finally{try{t||null==i.return||i.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var a=this.storage.getItem(n);if(e.newValue!==a)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var i=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},o=this.storage.getItem(n);_n()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}else{var s=this;this.forAllChangedKeys((function(e,t,r){s.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,a=!1,i=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){a=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,r){var a=this,s=this;return e(i)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e(Yt)(e(er)(n.prototype),"_set",a).call(s,t,r);case 2:s.localCache[t]=JSON.stringify(r);case 3:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this,a=this;return e(i)(e(o).mark((function i(){var s;return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e(Yt)(e(er)(n.prototype),"_get",r).call(a,t);case 2:return s=i.sent,a.localCache[t]=JSON.stringify(s),i.abrupt("return",s);case 5:case"end":return i.stop()}}),i)})))()}},{key:"_remove",value:function(t){var r=this,a=this;return e(i)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e(Yt)(e(er)(n.prototype),"_remove",r).call(a,t);case 2:delete a.localCache[t];case 3:case"end":return i.stop()}}),i)})))()}}]),n}(Sa);Ea.type="LOCAL";var Oa=Ea,Ra=function(t){"use strict";e(fe)(n,t);var r=e(ke)(n);function n(){return e(c)(this,n),r.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(l)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(Sa);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ra.type="SESSION";var Na=Ra;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t){return Promise.all(t.map((r=e(i)(e(o).mark((function t(r){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return r.apply(this,arguments)})));var r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Aa=function(){"use strict";function t(r){e(c)(this,t),this.eventTarget=r,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(l)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a,s,u,c,l,f,d,p;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s=(a=t).data,u=s.eventId,c=s.eventType,l=s.data,null==(f=r.handlersMap[c])?void 0:f.size){n.next=5;break}return n.abrupt("return");case 5:return a.ports[0].postMessage({status:"ack",eventId:u,eventType:c}),d=Array.from(f).map(function(){var t=e(i)(e(o).mark((function t(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(a.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.next=9,Ca(d);case 9:p=n.sent,a.ports[0].postMessage({status:"done",eventId:u,eventType:c,response:p});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var r=this.receivers.find((function(t){return t.isListeningto(e)}));if(r)return r;var n=new t(e);return this.receivers.push(n),n}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pa(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Aa.receivers=[];var La=function(){"use strict";function t(r){e(c)(this,t),this.target=r,this.handlers=new Set}return e(l)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,a=this;return e(i)(e(o).mark((function i(){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,i){var o=Pa("",20);s.port1.start();var l=setTimeout((function(){i(new Error("unsupported_event"))}),n);c={messageChannel:s,onMessage:function(t){var r=t;if(r.data.eventId===o)switch(r.data.status){case"ack":clearTimeout(l),u=setTimeout((function(){i(new Error("timeout"))}),3e3);break;case"done":clearTimeout(u),e(r.data.response);break;default:clearTimeout(l),clearTimeout(u),i(new Error("invalid_response"))}}},a.handlers.add(c),s.port1.addEventListener("message",c.onMessage),a.target.postMessage({eventType:t,eventId:o,data:r},[s.port2])})).finally((function(){c&&a.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),i)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ma(){return void 0!==Da().WorkerGlobalScope&&"function"==typeof Da().importScripts}function Ua(){return ja.apply(this,arguments)}function ja(){return(ja=e(i)(e(o).mark((function t(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return r=e.sent,e.abrupt("return",r.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fa="firebaseLocalStorageDb",Va="firebaseLocalStorage",Ba="fbase_key",Ha=function(){"use strict";function t(r){e(c)(this,t),this.request=r}return e(l)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),t}();function qa(e,t){return e.transaction([Va],t?"readwrite":"readonly").objectStore(Va)}function za(){var e=indexedDB.deleteDatabase(Fa);return new Ha(e).toPromise()}function Wa(){var t=indexedDB.open(Fa,1);return new Promise((function(r,n){t.addEventListener("error",(function(){n(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Va,{keyPath:Ba})}catch(e){n(e)}})),t.addEventListener("success",e(i)(e(o).mark((function n(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=t.result).objectStoreNames.contains(Va)){e.next=12;break}return a.close(),e.next=5,za();case 5:return e.t0=r,e.next=8,Wa();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:r(a);case 13:case"end":return e.stop()}}),n)}))))}))}function Ka(e,t,r){return Ja.apply(this,arguments)}function Ja(){return(Ja=e(i)(e(o).mark((function t(r,n,a){var i,s;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=qa(r,!0).put((i={},e(Y)(i,Ba,n),e(Y)(i,"value",a),i)),t.abrupt("return",new Ha(s).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Ga(e,t){return Xa.apply(this,arguments)}function Xa(){return(Xa=e(i)(e(o).mark((function t(r,n){var a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=qa(r,!1).get(n),e.next=3,new Ha(a).toPromise();case 3:return i=e.sent,e.abrupt("return",void 0===i?null:i.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Qa(e,t){var r=qa(e,!0).delete(t);return new Ha(r).toPromise()}var Ya=function(){"use strict";function t(){e(c)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(l)(t,[{key:"_openDb",value:function(){var t=this;return e(i)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Wa();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),r)})))()}},{key:"_withRetries",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:return e.prev=2,e.next=5,r._openDb();case 5:return i=e.sent,e.next=8,t(i);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(a++>3)){e.next=15;break}throw e.t0;case 15:r.db&&(r.db.close(),r.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(i)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ma()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),r)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(i)(e(o).mark((function r(){return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.receiver=Aa._getInstance(Ma()?self:null),t.receiver._subscribe("keyChanged",function(){var r=e(i)(e(o).mark((function r(n,a){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return i=e.sent,e.abrupt("return",{keyProcessed:i.includes(a.key)});case 4:case"end":return e.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(i)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()}},{key:"initializeSender",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n,a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Ua();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new La(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(i=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(n=i[0])||void 0===n?void 0:n.fulfilled)&&(null===(a=i[0])||void 0===a?void 0:a.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),r)})))()}},{key:"notifyServiceWorker",value:function(t){var r=this;return e(i)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.sender&&r.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===r.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,r.sender._send("keyChanged",{key:t},r.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(i)(e(o).mark((function t(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Wa();case 5:return r=e.sent,e.next=8,Ka(r,Ta,"1");case 8:return e.next=10,Qa(r,Ta);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var r=this;return e(i)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,r.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,r){var n=this;return e(i)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",n._withPendingWrite(e(i)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Ka(e,t,r)}));case 2:return n.localCache[t]=r,e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),a)})))));case 1:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Ga(e,t)}));case 2:return a=e.sent,r.localCache[t]=a,e.abrupt("return",a);case 5:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(i)(e(o).mark((function n(){return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",r._withPendingWrite(e(i)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Qa(e,t)}));case 2:return delete r.localCache[t],e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n,a,i,s,u,c,l,f,d,p,h,v,m,g,y,k,b;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=qa(e,!1).getAll();return new Ha(t).toPromise()}));case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(a=[],i=new Set,s=!0,u=!1,c=void 0,e.prev=10,l=n[Symbol.iterator]();!(s=(f=l.next()).done);s=!0)d=f.value,p=d.fbase_key,h=d.value,i.add(p),JSON.stringify(t.localCache[p])!==JSON.stringify(h)&&(t.notifyListeners(p,h),a.push(p));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),u=!0,c=e.t0;case 18:e.prev=18,e.prev=19,s||null==l.return||l.return();case 21:if(e.prev=21,!u){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,m=!1,g=void 0,e.prev=27,y=Object.keys(t.localCache)[Symbol.iterator]();!(v=(k=y.next()).done);v=!0)b=k.value,t.localCache[b]&&!i.has(b)&&(t.notifyListeners(b,null),a.push(b));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,g=e.t1;case 35:e.prev=35,e.prev=36,v||null==y.return||y.return();case 38:if(e.prev=38,!m){e.next=41;break}throw g;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",a);case 44:case"end":return e.stop()}}),r,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,a=!1,i=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t)}}catch(e){a=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(i)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),r)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Ya.type="LOCAL";var $a=Ya;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(e,t){return Or(e,"POST","/v2/accounts/mfaSignIn:start",Er(e,t))}function ei(e){return new Promise((function(t,r){var n,a,i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=function(e){var t=ur("internal-error");t.customData=e,r(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(a=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==a?a:document).appendChild(i)}))}function ti(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ti("rcb"),new _r(3e4,6e4);var ri="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e,t,r){return ai.apply(this,arguments)}function ai(){return(ai=e(i)(e(o).mark((function t(r,n,a){var i,s,u,c,l,f,d,p;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,a.verify();case 3:if(s=e.sent,e.prev=4,fr("string"==typeof s,r,"argument-error"),fr(a.type===ri,r,"argument-error"),!("session"in(u="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(c=u.session,!("phoneNumber"in u)){e.next=19;break}return fr("enroll"===c.type,r,"internal-error"),e.next=15,Ia(r,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:s}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return fr("signin"===c.type,r,"internal-error"),fr(f=(null===(i=u.multiFactorHint)||void 0===i?void 0:i.uid)||u.multiFactorUid,r,"missing-multi-factor-info"),e.next=24,Za(r,{mfaPendingCredential:c.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:s}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Bn(r,{phoneNumber:u.phoneNumber,recaptchaToken:s});case 30:return p=e.sent.sessionInfo,e.abrupt("return",p);case 32:return e.prev=32,a._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ii=function(){"use strict";function t(r){e(c)(this,t),this.providerId=t.PROVIDER_ID,this.auth=Sn(r)}return e(l)(t,[{key:"verifyPhoneNumber",value:function(e,t){return ni(this.auth,e,je(t))}}],[{key:"credential",value:function(e,t){return Jn._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var r=e;return t.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?Jn._fromTokenResponse(r,n):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oi(e,t){return t?vr(t):(fr(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ii.PROVIDER_ID="phone",ii.PHONE_SIGN_IN_METHOD="phone";var si=function(t){"use strict";e(fe)(n,t);var r=e(ke)(n);function n(t){var a;return e(c)(this,n),(a=r.call(this,"custom","custom")).params=t,a}return e(l)(n,[{key:"_getIdTokenResponse",value:function(e){return jn(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return jn(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return jn(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(On);function ui(e){return da(e.auth,new si(e),e.bypassAuthState)}function ci(e){var t=e.auth,r=e.user;return fr(r,t,"internal-error"),la(r,new si(e),e.bypassAuthState)}function li(e){return fi.apply(this,arguments)}function fi(){return(fi=e(i)(e(o).mark((function t(r){var n,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.auth,fr(a=r.user,n,"internal-error"),e.abrupt("return",ua(a,new si(r),r.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var di=function(){"use strict";function t(r,n,a,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(c)(this,t),this.auth=r,this.resolver=a,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return e(l)(t,[{key:"execute",value:function(){var t,r=this;return new Promise((t=e(i)(e(o).mark((function t(n,a){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingPromise={resolve:n,reject:a},e.prev=1,e.next=4,r.resolver._initialize(r.auth);case 4:return r.eventManager=e.sent,e.next=7,r.onExecution();case 7:r.eventManager.registerConsumer(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,r){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a,i,s,u,c,l,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.urlResponse,i=t.sessionId,s=t.postBody,u=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return r.reject(c),e.abrupt("return");case 4:return f={auth:r.auth,requestUri:a,sessionId:i,tenantId:u||void 0,postBody:s||void 0,user:r.user,bypassAuthState:r.bypassAuthState},e.prev=5,e.t0=r,e.next=9,r.getIdpTask(l)(f);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),r.reject(e.t2);case 16:case"end":return e.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ui;case"linkViaPopup":case"linkViaRedirect":return li;case"reauthViaPopup":case"reauthViaRedirect":return ci;default:sr(this.auth,"internal-error")}}},{key:"resolve",value:function(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),pi=new _r(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hi=function(t){"use strict";e(fe)(n,t);var r=e(ke)(n);function n(t,a,i,o,s){var u;return e(c)(this,n),(u=r.call(this,t,a,o,s)).provider=i,u.authWindow=null,u.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=e(le)(u),u}return e(l)(n,[{key:"executeNotNull",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return fr(n=e.sent,t.auth,"internal-error"),e.abrupt("return",n);case 5:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){var t=this;return e(i)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return pr(1===t.filter.length,"Popup operations only handle one event"),n=Pa(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],n);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=n,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(ur(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),r)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(ur(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var a=e;e.pollId=window.setTimeout((function(){a.pollId=null,a.reject(ur(a.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,pi.get())};t()}}]),n}(di);hi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vi=new Map,mi=function(t){"use strict";e(fe)(n,t);var r=e(ke)(n);function n(t,a){var i,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(c)(this,n),(i=r.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,o)).eventId=null,i}return e(l)(n,[{key:"execute",value:function(){var t=this,r=this;return e(i)(e(o).mark((function a(){var i,s;return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i=vi.get(r.auth._key())){a.next=21;break}return a.prev=2,a.next=5,gi(r.resolver,r.auth);case 5:if(!a.sent){a.next=12;break}return a.next=9,e(Yt)(e(er)(n.prototype),"execute",t).call(r);case 9:a.t0=a.sent,a.next=13;break;case 12:a.t0=null;case 13:s=a.t0,i=function(){return Promise.resolve(s)},a.next=20;break;case 17:a.prev=17,a.t1=a.catch(2),i=function(){return Promise.reject(a.t1)};case 20:vi.set(r.auth._key(),i);case 21:return r.bypassAuthState||vi.set(r.auth._key(),(function(){return Promise.resolve(null)})),a.abrupt("return",i());case 23:case"end":return a.stop()}}),a,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var r=this,a=this,s=function(){return e(Yt)(e(er)(n.prototype),"onAuthEvent",r)};return e(i)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",s().call(a,t));case 4:if("unknown"!==t.type){e.next=7;break}return a.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,a.auth._redirectUserForId(t.eventId);case 10:if(!(n=e.sent)){e.next=16;break}return a.user=n,e.abrupt("return",s().call(a,t));case 16:a.resolve(null);case 17:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){return e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),n}(di);function gi(e,t){return yi.apply(this,arguments)}function yi(){return(yi=e(i)(e(o).mark((function t(r,n){var a,i,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=_i(n),i=bi(r),e.next=4,i._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,i._get(a);case 8:return e.t0=e.sent,s="true"===e.t0,e.next=12,i._remove(a);case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ki(e,t){vi.set(e._key(),t)}function bi(e){return vr(e._redirectPersistence)}function _i(e){return cn("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(e,t){return xi.apply(this,arguments)}function xi(){return xi=e(i)(e(o).mark((function t(r,n){var a,i,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>2&&void 0!==l[2]&&l[2],i=Sn(r),s=oi(i,n),u=new mi(i,s,a),e.next=6,u.execute();case 6:if(!(c=e.sent)||a){e.next=13;break}return delete c.user._redirectEventId,e.next=11,i._persistUserIfCurrent(c.user);case 11:return e.next=13,i._setRedirectUser(null,n);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),xi.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ii=function(){"use strict";function t(r){e(c)(this,t),this.auth=r,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(l)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Si(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!Si(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(ur(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ti(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Ti(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function Ti(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Si(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function Ei(e){return Oi.apply(this,arguments)}function Oi(){return Oi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(i)(e(o).mark((function t(r){var n,a=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.abrupt("return",Or(r,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),t)}))),Oi.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ri=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ni=/^https?/;function Ci(){return(Ci=e(i)(e(o).mark((function t(r){var n,a,i,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Ei(r);case 4:n=e.sent.authorizedDomains,a=!0,i=!1,s=void 0,e.prev=6,u=n[Symbol.iterator]();case 8:if(a=(c=u.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!Ai(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:a=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),i=!0,s=e.t1;case 26:e.prev=26,e.prev=27,a||null==u.return||u.return();case 29:if(e.prev=29,!i){e.next=32;break}throw s;case 32:return e.finish(29);case 33:return e.finish(26);case 34:sr(r,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Ai(e){var t=gr(),r=new URL(t),n=r.protocol,a=r.hostname;if(e.startsWith("chrome-extension://")){var i=new URL(e);return""===i.hostname&&""===a?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===a}if(!Ni.test(n))return!1;if(Ri.test(e))return a===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pi=new _r(3e4,6e4);function Li(){var t=Da().___jsl,r=!0,n=!1,a=void 0;if(null==t?void 0:t.H)try{for(var i,o=Object.keys(t.H)[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var s=i.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e($)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){n=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}}var Di=null;function Mi(e){return Di=Di||function(e){return new Promise((function(t,r){var n,a,i;function o(){Li(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Li(),r(ur(e,"network-request-failed"))},timeout:Pi.get()})}if(null===(a=null===(n=Da().gapi)||void 0===n?void 0:n.iframes)||void 0===a?void 0:a.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Da().gapi)||void 0===i?void 0:i.load)){var s=ti("iframefcb");return Da()[s]=function(){gapi.load?o():r(ur(e,"network-request-failed"))},ei("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return r(e)}))}o()}})).catch((function(e){throw Di=null,e}))}(e),Di}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ui=new _r(5e3,15e3),ji={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vi(e){var t=e.config;fr(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?wr(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:Lt},a=Fi.get(e.config.apiHost);a&&(n.eid=a);var i=e._getFrameworks();return i.length&&(n.fw=i.join(",")),"".concat(r,"?").concat(Pe(n).slice(1))}function Bi(e){return Hi.apply(this,arguments)}function Hi(){return Hi=e(i)(e(o).mark((function t(r){var n,a;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Mi(r);case 2:return n=t.sent,fr(a=Da().gapi,r,"internal-error"),t.abrupt("return",n.open({where:document.body,url:Vi(r),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ji,dontclear:!0},(function(t){return new Promise((n=e(i)(e(o).mark((function n(a,i){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){Da().clearTimeout(u),a(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:s=ur(r,"network-request-failed"),u=Da().setTimeout((function(){i(s)}),Ui.get()),t.ping(c).then(c,(function(){i(s)}));case 7:case"end":return e.stop()}}),n)}))),function(e,t){return n.apply(this,arguments)}));var n})));case 6:case"end":return t.stop()}}),t)}))),Hi.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zi="_blank",Wi="http://localhost",Ki=function(){"use strict";function t(r){e(c)(this,t),this.window=r,this.associatedEvent=null}return e(l)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function Ji(t,r,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-a)/2,0).toString(),u="",c=Object.assign(Object.assign({},qi),{width:a.toString(),height:i.toString(),top:o,left:s}),l=Te().toLowerCase();n&&(u=hn(l)?zi:n),dn(l)&&(r=r||Wi,c.scrollbars="yes");var f=Object.entries(c).reduce((function(t,r){var n=e(ae)(r,2),a=n[0],i=n[1];return"".concat(t).concat(a,"=").concat(i,",")}),"");if(bn(l)&&"_self"!==u)return Gi(r||"",u),new Ki(null);var d=window.open(r||"",u,f);fr(d,t,"popup-blocked");try{d.focus()}catch(e){}return new Ki(d)}function Gi(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xi="__/auth/handler",Qi="emulator/auth/handler";function Yi(t,r,n,a,i,o){fr(t.config.authDomain,t,"auth-domain-config-required"),fr(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:a,v:Lt,eventId:i};if(r instanceof Qn){r.setDefaultLanguage(t.languageCode),s.providerId=r.providerId||"",Ne(r.getCustomParameters())||(s.customParameters=JSON.stringify(r.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,d=Object.entries(o||{})[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var p=e(ae)(f.value,2),h=p[0],v=p[1];s[h]=v}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(r instanceof Yn){var m=r.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}t.tenantId&&(s.tid=t.tenantId);var g,y,k=s,b=!0,_=!1,w=void 0;try{for(var x,I=Object.keys(k)[Symbol.iterator]();!(b=(x=I.next()).done);b=!0){var T=x.value;void 0===k[T]&&delete k[T]}}catch(e){_=!0,w=e}finally{try{b||null==I.return||I.return()}finally{if(_)throw w}}return"".concat((g=t,y=g.config,y.emulator?wr(y,Qi):"https://".concat(y.authDomain,"/").concat(Xi)),"?").concat(Pe(k).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var $i="webStorageSupport",Zi=function(){"use strict";function t(){e(c)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Na,this._completeRedirectFn=wi,this._overrideRedirectResult=ki}return e(l)(t,[{key:"_openPopup",value:function(t,r,n,a){var s=this;return e(i)(e(o).mark((function i(){var u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return pr(null===(u=s.eventManagers[t._key()])||void 0===u?void 0:u.manager,"_initialize() not called before _openPopup()"),c=Yi(t,r,n,gr(),a),e.abrupt("return",Ji(t,c,Pa()));case 4:case"end":return e.stop()}}),i)})))()}},{key:"_openRedirect",value:function(t,r,n,a){var s=this;return e(i)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s._originValidation(t);case 2:return i=Yi(t,r,n,gr(),a),Da().location.href=i,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var i}),i)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],a=n.manager,i=n.promise;return a?Promise.resolve(a):(pr(i,"If manager is not set, promise should be"),i)}var o=this.initAndGetManager(e);return this.eventManagers[r]={promise:o},o.catch((function(){delete t.eventManagers[r]})),o}},{key:"initAndGetManager",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Bi(t);case 2:return a=e.sent,i=new Ii(t),a.register("authEvent",(function(e){return fr(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:i.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),r.eventManagers[t._key()]={manager:i},r.iframes[t._key()]=a,e.abrupt("return",i);case 8:case"end":return e.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send($i,{type:$i},(function(r){var n,a=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==a&&t(!!a),sr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Ci.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return wn()||pn()||kn()}}]),t}(),eo=Zi,to=function(){"use strict";function t(r){e(c)(this,t),this.factorId=r}return e(l)(t,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return dr("unexpected MultiFactorSessionType")}}}]),t}(),ro=function(t){"use strict";e(fe)(n,t);var r=e(ke)(n);function n(t){var a;return e(c)(this,n),(a=r.call(this,"phone")).credential=t,a}return e(l)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return Or(e,"POST","/v2/accounts/mfaEnrollment:finalize",Er(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Or(e,"POST","/v2/accounts/mfaSignIn:finalize",Er(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(to);(function(){"use strict";function t(){e(c)(this,t)}return e(l)(t,null,[{key:"assertion",value:function(e){return ro._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var no,ao="@firebase/auth",io="0.20.5",oo=function(){"use strict";function t(r){e(c)(this,t),this.auth=r,this.internalListeners=new Map}return e(l)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var r=this;return e(i)(e(o).mark((function n(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.assertAuthConfigured(),e.next=3,r.auth._initializationPromise;case 3:if(r.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,r.auth.currentUser.getIdToken(t);case 7:return a=e.sent,e.abrupt("return",{accessToken:a});case 9:case"end":return e.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var r;e((null===(r=t)||void 0===r?void 0:r.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){fr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function so(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt(),t=Nt(e,"auth");return t.isInitialized()?t.getImmediate():mr(e,{popupRedirectResolver:eo,persistence:[$a,Oa,Na]})}no="Browser",Rt(new Fe("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),i=n.options,o=i.apiKey,s=i.authDomain;return function(e,t){fr(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),fr(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var n={apiKey:o,authDomain:s,clientPlatform:no,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xn(no)},a=new Tn(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(vr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(a,r),a}(n,a)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),Rt(new Fe("auth-internal",(function(e){var t=Sn(e.getProvider("auth").getImmediate());return new oo(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(ao,io,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(no)),Mt(ao,io,"esm2017");h=a("iU1Pc"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var r=t;t={name:r}}var n=Object.assign({name:It,automaticDataCollectionEnabled:!1},t),a=n.name;if("string"!=typeof a||!a)throw At.create("bad-app-name",{appName:String(a)});var i=St.get(a);if(i){if(Ce(e,i.options)&&Ce(n,i.config))return i;throw At.create("duplicate-app",{appName:a})}var o=new ze(a),s=!0,u=!1,c=void 0;try{for(var l,f=Et.values()[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var d=l.value;o.addComponent(d)}}catch(e){u=!0,c=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}var p=new Pt(e,n,o);St.set(a,p)}(e(Y)({apiKey:"AIzaSyAxvy-kRmO18p88DbRL6ba9fTyATtzOT8U",authDomain:"filmoteka-2e504.firebaseapp.com",projectId:"filmoteka-2e504",storageBucket:"filmoteka-2e504.appspot.com",messagingSenderId:"311618596259",appId:"1:311618596259:web:2f33e73ca3143963f63e16",measurementId:"G-1VPD45H77P"},"storageBucket","gs://filmoteka-2e504.appspot.com"));var uo,co,lo,fo=so(),po=document.querySelector(".form-login"),ho=document.querySelector(".singUp__form"),vo=document.querySelector(".form__register"),mo=document.querySelector(".modal__login"),go=document.querySelector(".btn__form-login"),yo=document.querySelector(".logOut__btn"),ko=document.querySelector(".bacekdrop_box"),bo=document.querySelector(".modal-login__back-btn");function _o(e){e.reset(),po.classList.remove("oldForm"),vo.classList.remove("newForm"),bo.classList.add("hidden"),mo.classList.remove("newFormJS")}uo=function(e){e&&(e.uid,go.classList.add("hidden"),yo.classList.remove("hidden"))},je(fo).onAuthStateChanged(uo,co,lo),ho.addEventListener("submit",(function(t){t.preventDefault(),function(t,r,n){ya(fo,t,r).then((function(r){r.user;e(h).Notify.success("Welcome ".concat(t)),mo.classList.remove("is-hidd"),go.classList.add("hidden"),yo.classList.remove("hidden"),ko.classList.remove("bacekdrop"),_o(n)})).catch((function(t){t.code;var r=t.message;e(h).Notify.failure("Can not Login ".concat(r))}))}(ho.elements.email.value,ho.elements.text.value,ho)})),vo.addEventListener("submit",(function(t){t.preventDefault();var r=vo.elements.firstName.value+" "+vo.elements.secondName.value,n=vo.elements.reg_email.value,a=vo.elements.reg_password.value;a===vo.elements.register_check.value?(!function(t,r,n,a){ma(fo,t,r).then((function(r){r.user;e(h).Notify.success("Add new user ".concat(t)),mo.classList.remove("is-hidd"),go.classList.add("hidden"),yo.classList.remove("hidden"),ko.classList.remove("bacekdrop"),function(e,t){_a(e,{displayName:t}).then((function(){var e=fo.currentUser;if(null!==e){var t=e.displayName,r=e.email,n=e.emailVerified;console.log("displayName - ".concat(t)),console.log("email - ".concat(r)),console.log("emailVerified -".concat(n));e.uid}})).catch((function(e){}))}(fo.currentUser,n),_o(a)})).catch((function(t){t.code;var r=t.message;e(h).Notify.failure("Can not finish registration ".concat(r))}))}(n,a,r,vo),vo.elements.register_check.classList.remove("error")):(e(h).Notify.failure("Passwords do not match!"),vo.elements.register_check.classList.add("error"))})),yo.addEventListener("click",(function(){xa(so()).then((function(){e(h).Notify.info("success LogOut"),go.classList.remove("hidden"),yo.classList.add("hidden")})).catch((function(e){}))})),bo.addEventListener("click",(function(){bo.classList.add("hidden"),mo.classList.remove("newFormJS"),po.classList.remove("oldForm"),vo.classList.remove("newForm")})),e(h).Notify.init({width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#ffffff",textColor:"#000",childClassName:"notiflix-notify-success",notiflixIconColor:"#00ff00",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"#00ff00",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ffffff",textColor:"#000",childClassName:"notiflix-notify-success",notiflixIconColor:"#ff0000",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"#ff0000",backOverlayColor:"rgba(50,198,130,0.2)"},info:{background:"#ffffff",textColor:"#000",childClassName:"notiflix-notify-info",notiflixIconColor:"#0000ff",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"#0000ff",backOverlayColor:"rgba(38,192,211,0.2)"}});var wo=document.querySelector(".isShowBtn");window.onscroll=function(){window.scrollY>300?wo.classList.remove("isShowBtn_hide"):wo.classList.add("isShowBtn_hide"),wo.onclick=function(){window.scrollTo(0,0)}};var xo,Io=a("27i3Y"),To=document.querySelector(".btn__to-register"),So=document.querySelector(".form-login"),Eo=document.querySelector(".form__register"),Oo=document.querySelector(".modal-login__back-btn"),Ro=document.querySelector(".modal__login");document.querySelector(".singUp__form"),document.querySelector(".singUp__form-second");To.addEventListener("click",(function(){So.classList.add("oldForm"),Eo.classList.add("newForm"),Oo.classList.remove("hidden"),Ro.classList.add("newFormJS")})),(0,Io.fonNightDay)(),(xo={checkModalBtn:document.querySelector(".btn__form-login-check"),openModalBtn:document.querySelector(".btn__form-login"),closeModalBtn:document.querySelector(".modal-login__close-btn"),modal:document.querySelector(".modal__login"),modalBackdrop:document.querySelector(".bacekdrop_box")}).checkModalBtn.style.display="none",xo.openModalBtn.addEventListener("click",(function(){So.classList.remove("oldForm"),Eo.classList.remove("newForm"),Oo.classList.add("hidden"),Ro.classList.remove("newFormJS"),xo.modal.classList.toggle("is-hidd"),xo.modalBackdrop.classList.add("bacekdrop")})),xo.closeModalBtn.addEventListener("click",(function(){So.classList.remove("oldForm"),Eo.classList.remove("newForm"),Oo.classList.add("hidden"),Ro.classList.remove("newFormJS"),xo.modal.classList.toggle("is-hidd"),xo.modalBackdrop.classList.remove("bacekdrop")})),v(),window.addEventListener("load",(function(){m()}))}();
//# sourceMappingURL=index.4f544a1b.js.map
