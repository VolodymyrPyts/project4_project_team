!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a("5xtVg"),a("5xtVg");var o=a("bpxeT"),c=a("2TvXO"),i=a("dIxxU"),s=a("fKcg4"),u=(o=a("bpxeT"),c=a("2TvXO"),o=a("bpxeT"),a("8MBJY")),l=a("a2hTj");c=a("2TvXO");a("dIxxU");var d=function(){"use strict";function t(){e(u)(this,t),this.searchQuery="",this.page=1,this.list="home",this.baseUrl="https://api.themoviedb.org/3/",this.language="en-US",this.key="f70abac86533d424df79b342ee8b9ff4"}return e(l)(t,[{key:"pageNumber",get:function(){return this.page},set:function(e){this.page=e}},{key:"currentSearchQuery",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"fetchGenres",value:function(){var t=this;return e(o)(e(c).mark((function n(){var r,a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t.baseUrl,"genre/movie/list?api_key=").concat(t.key,"&language=").concat(t.language),e.prev=1,e.next=4,fetch(r);case 4:return a=e.sent,e.next=7,a.json();case 7:return o=e.sent,e.abrupt("return",o);case 11:e.prev=11,e.t0=e.catch(1),e.t0;case 14:case"end":return e.stop()}}),n,null,[[1,11]])})))()}},{key:"fetchTrendingWeekFilmsByPage",value:function(){var t=this;return e(o)(e(c).mark((function n(){var r,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t.baseUrl,"trending/movie/week?api_key=").concat(t.key,"&language=").concat(t.language,"&page=").concat(t.page),e.next=3,fetch(r);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),n)})))()}},{key:"fetchPopularFilmsByPage",value:function(){var t=this;return e(o)(e(c).mark((function n(){var r,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t.baseUrl,"movie/popular?api_key=").concat(t.key,"&language=").concat(t.language,"&page=").concat(t.page),e.next=3,fetch(r);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),n)})))()}},{key:"fetchSearchFilms",value:function(){var t=this;return e(o)(e(c).mark((function n(){var r,a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(t.baseUrl,"search/movie?api_key=").concat(t.key,"&language=").concat(t.language,"&page=").concat(t.page,"&include_adult=false&query=").concat(t.searchQuery));case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.next=9,a;case 9:return o=e.sent,e.abrupt("return",o);case 13:e.prev=13,e.t0=e.catch(0),e.t0;case 16:case"end":return e.stop()}}),n,null,[[0,13]])})))()}},{key:"resetPage",value:function(){this.page=1}}]),t}(),p=function(e){return e.map((function(e){var t=e.id,n=e.title,r=e.poster_path,a=e.genre_ids,o=e.vote_average,c=e.release_date,i=I(a).join(", "),s=r?"https://image.tmdb.org/t/p/w500".concat(r):"https://placehold.jp/aaabb1/ffffff/395x574.png?text=This%20movie%20has%20no%20poster%20%3A(";return'<div class="movie__card" id='.concat(t,'>\n    <img class="movie__poster" src="').concat(s,'" alt="').concat(n,'" loading="lazy">\n    <div class="movie__info">\n       <p class="movie__name">').concat(P(n),'</p>\n      <div class="movie__data">\n       <span class="movie__genre">').concat(i,'</span>\n       <span class="movie__year">').concat(c.slice(0,4),'</span>\n       <span class="movie__rating">').concat(o.toFixed(1),"</span>\n       </div>\n       </div>\n       </div>\n       ")})).join("")},g=a("iU1Pc");function m(){g.Loading.circle({svgColor:"#FF001B",svgSize:"90px",cssAnimation:!0}),document.querySelector("body").style.overflow="hidden"}function f(){setTimeout((function(){g.Loading.remove(),document.querySelector("body").style.overflow="visible"}),300)}var v,b=a("5xtVg"),h=document.querySelector(".container-movie-card"),y=document.querySelector(".pagination__wrapper"),_=document.querySelector(".pagination__button--prev"),x=document.querySelector(".pagination__button--next"),k="films-request-result",w=new d;function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";w.pageNumber=1,w.searchQuery=t,v=e,E(w.pageNumber-2,w.pageNumber+2),M()}function T(){return L.apply(this,arguments)}function L(){return(L=e(o)(e(c).mark((function t(){var n,r,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.fetchTrendingWeekFilmsByPage();case 2:n=e.sent,r=n.total_pages,a=n.results,v=r,localStorage.setItem(k,JSON.stringify(a)),h.innerHTML=p(a);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function q(){return N.apply(this,arguments)}function N(){return(N=e(o)(e(c).mark((function t(){var n,r,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.fetchSearchFilms();case 2:n=e.sent,r=n.total_pages,a=n.results,v=r,localStorage.setItem(k,JSON.stringify(a)),h.innerHTML=p(a);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function E(e,t){window.innerWidth>767&&v>=9?(e<3&&(e=3,t=7),t>=v&&(e=v-6,t=v-2)):(e<1&&(e=1,t=5),t>v&&(t=v,(e=v-4)<1&&(e=1))),window.innerWidth>767&&v<9&&(e=1,t=v);var n=[];window.innerWidth>767&&v>=9&&(n.push('<button type="button" class="'.concat(1===w.pageNumber?"pagination__button pagination__button--current":"pagination__button",'" data-page="1">1</button>')),e-1>2?n.push('<button type="button" class="pagination__button" data-page="'.concat(e-3,'">...</button>')):n.push('<button type="button" class="'.concat(2===w.pageNumber?"pagination__button pagination__button--current":"pagination__button",'" data-page="2">2</button>')),v-t==1&&(e--,t--));for(var r=e;r<=t;r++)n.push('<button type="button" class="'.concat(r===w.pageNumber?"pagination__button pagination__button--current":"pagination__button",'" data-page="').concat(r,'">').concat(r,"</button>"));window.innerWidth>767&&v>=9&&(v-t>2?n.push('<button type="button" class="pagination__button" data-page="'.concat(t+3,'">...</button>')):n.push('<button type="button" class="'.concat(w.pageNumber===v-1?"pagination__button pagination__button--current":"pagination__button",'" data-page="').concat(v-1,'">').concat(v-1,"</button>")),n.push('<button type="button" class="'.concat(w.pageNumber===v?"pagination__button pagination__button--current":"pagination__button",'" data-page="').concat(v,'">').concat(v,"</button>"))),y.innerHTML=n.join("")}function M(){1===w.pageNumber?_.setAttribute("disabled","true"):_.removeAttribute("disabled"),w.pageNumber===v?x.setAttribute("disabled","true"):x.removeAttribute("disabled")}function B(){return F.apply(this,arguments)}function F(){return(F=e(o)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m(),!w.searchQuery){e.next=6;break}return e.next=4,q();case 4:e.next=8;break;case 6:return e.next=8,T();case 8:f(),(0,b.modal)(),E(w.pageNumber-2,w.pageNumber+2),M(),j();case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function j(){h.scrollIntoView()}_.addEventListener("click",(function(){w.pageNumber>1&&(w.pageNumber--,B())})),x.addEventListener("click",(function(){w.pageNumber<v&&(w.pageNumber++,B())})),y.addEventListener("click",(function(e){w.pageNumber=Number(e.target.dataset.page),B()})),window.addEventListener("resize",(function(){E(w.pageNumber-2,w.pageNumber+2)}));b=a("5xtVg");var O="https://api.themoviedb.org/3/",U="f70abac86533d424df79b342ee8b9ff4";function Q(){return(Q=e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(i).get("".concat(O,"/trending/movie/week?api_key=").concat(U,"&page=").concat(1));case 3:return n=t.sent.data,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.error("ERROR");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var A=document.querySelector(".container-movie-card");function I(e){var t=s.genres.reduce((function(t,n){var r=n.id,a=n.name;return e.includes(r)&&t.push(a),t}),[]);return t.length>3&&(t=t.slice(0,2)).push("Other"),t}function P(e){return e.length>30?"".concat(e.substring(0,30)," <span>...</span>"):e}(function(){return Q.apply(this,arguments)})().then((function(e){var t;t=e.results.map((function(e){var t=e.id,n=e.title,r=e.poster_path,a=e.genre_ids,o=e.vote_average,c=e.release_date,i=I(a).join(", "),s=r?"https://image.tmdb.org/t/p/w500".concat(r):"https://placehold.jp/aaabb1/ffffff/395x574.png?text=This%20movie%20has%20no%20poster%20%3A(";return'<div class="movie__card" id='.concat(t,'>\n    <img class="movie__poster" src="').concat(s,'" alt="').concat(n,'" loading="lazy">\n    <div class="movie__info">\n       <p class="movie__name">').concat(P(n),'</p>\n      <div class="movie__data">\n       <span class="movie__genre">').concat(i,'</span>\n       <span class="movie__year">').concat(c.slice(0,4),'</span>\n       <span class="movie__rating">').concat(o.toFixed(1),"</span>\n       </div>\n       </div>\n       </div>\n       ")})).join(""),A.insertAdjacentHTML("beforeend",t),S(e.total_pages),localStorage.setItem("films-request-result",JSON.stringify(e.results)),(0,b.modal)()}));o=a("bpxeT"),c=a("2TvXO"),b=a("5xtVg");a("dIxxU");var D=new d,H={form:document.querySelector(".form"),markupMuvieForKeyword:document.querySelector(".container-movie-card"),boxError:document.querySelector(".cap__box-error")};document.querySelector(".container-movie-card");function K(){return(K=e(o)(e(c).mark((function t(n){var r,a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),m(),D.searchQuery=n.currentTarget.elements.searchQuery.value.trim(),n.currentTarget.reset(),D.resetPage(),""!==D.searchQuery){e.next=9;break}return H.boxError.classList.remove("is-hidden"),V(),e.abrupt("return",f());case 9:return e.prev=9,e.next=12,D.fetchSearchFilms();case 12:if(r=e.sent,a=r.total_pages,0!==(o=r.results).length){e.next=19;break}return f(),V(),e.abrupt("return",H.boxError.classList.remove("is-hidden"));case 19:V(),R(o),H.boxError.classList.add("is-hidden"),S(a,D.searchQuery),localStorage.setItem("films-request-result",JSON.stringify(o)),(0,b.modal)(),f(),e.next=32;break;case 28:e.prev=28,e.t0=e.catch(9),console.log(e.t0.message),f();case 32:case"end":return e.stop()}}),t,null,[[9,28]])})))).apply(this,arguments)}function R(e){H.markupMuvieForKeyword.insertAdjacentHTML("beforeend",p(e))}function V(){H.markupMuvieForKeyword.innerHTML=""}H.form.addEventListener("submit",(function(e){return K.apply(this,arguments)}));var W={modal:document.querySelector(".modalTeams"),closeBtn:document.querySelector(".modalTeamClose"),openModalTeam:document.querySelectorAll(".modalTeamOpen")};function J(e){"Escape"===e.code&&X()}function z(){document.body.style.overflow="hidden",window.addEventListener("keydown",J),W.modal.classList.remove("is-hidden")}function X(){document.body.style.overflow="",window.removeEventListener("keydown",J),W.modal.classList.add("is-hidden")}W.openModalTeam.forEach((function(e){e.addEventListener("click",z)})),W.closeBtn.addEventListener("click",X),W.modal.addEventListener("click",(function(e){e.currentTarget===e.target&&X()}));var C=a("27i3Y"),Y=document.querySelector(".btn__to-register"),G=document.querySelector(".form-login"),Z=document.querySelector(".form__register"),$=document.querySelector(".singUp__form"),ee=document.querySelector(".singUp__form-second");Y.addEventListener("click",(function(){G.style.display="none",Z.style.display="block"})),(0,C.fonNightDay)(),function(){var e={checkModalBtn:document.querySelector(".btn__form-login-check"),openModalBtn:document.querySelector(".btn__form-login"),closeModalBtn:document.querySelector(".modal-login__close-btn"),modal:document.querySelector(".modal__login"),modalBackdrop:document.querySelector(".bacekdrop_box")};function t(){G.style.display="block",Z.style.display="none",e.modal.classList.toggle("is-hidd"),e.modalBackdrop.classList.remove("bacekdrop")}e.checkModalBtn.style.display="none",e.openModalBtn.addEventListener("click",(function(){e.modal.classList.toggle("is-hidd"),e.modalBackdrop.classList.add("bacekdrop")})),e.closeModalBtn.addEventListener("click",t),$.addEventListener("submit",(function(n){n.preventDefault();var r=n.currentTarget.email.value.trim(),a=n.currentTarget.text.value.trim();""===r||""===a?alert("Fill in the field!"):(console.log("Email:",r),console.log("Key:",a),$.reset(),t(),alert("You have successfully logged into your account"),e.openModalBtn.style.display="none",e.checkModalBtn.style.display="block")})),ee.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.email.value.trim(),r=e.currentTarget.text.value.trim();""===n||""===r?alert("Fill in the field!"):(console.log("Email:",n),console.log("Key:",r),t(),alert("Registration was successful"))}))}(),m(),window.addEventListener("load",(function(){f()}))}();
//# sourceMappingURL=index.c4b3f218.js.map