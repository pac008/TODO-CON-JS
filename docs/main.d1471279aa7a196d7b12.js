(()=>{"use strict";function c(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function d(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function b(e,a,b){return a&&d(e.prototype,a),b&&d(e,b),e}function g(i,a){var b;if("undefined"==typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(b=f(i))||a&&i&&"number"==typeof i.length){b&&(i=b);var c=0,d=function(){};return{s:d,n:function(){return c>=i.length?{done:!0}:{done:!1,value:i[c++]}},e:function(b){throw b},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var j,k=!0,g=!1;return{s:function(){b=i[Symbol.iterator]()},n:function(){var c=b.next();return k=c.done,c},e:function(b){g=!0,j=b},f:function a(){try{k||null==b["return"]||b["return"]()}finally{if(g)throw a}}}}function f(d,f){if(d){if("string"==typeof d)return e(d,f);var b=Object.prototype.toString.call(d).slice(8,-1);return"Object"===b&&d.constructor&&(b=d.constructor.name),"Map"===b||"Set"===b?Array.from(d):"Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?e(d,f):void 0}}function e(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}function h(j,a){var b;if("undefined"==typeof Symbol||null==j[Symbol.iterator]){if(Array.isArray(j)||(b=i(j))||a&&j&&"number"==typeof j.length){b&&(j=b);var c=0,d=function(){};return{s:d,n:function(){return c>=j.length?{done:!0}:{done:!1,value:j[c++]}},e:function(b){throw b},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var k,f=!0,g=!1;return{s:function(){b=j[Symbol.iterator]()},n:function(){var c=b.next();return f=c.done,c},e:function(b){g=!0,k=b},f:function a(){try{f||null==b["return"]||b["return"]()}finally{if(g)throw a}}}}function i(d,e){if(d){if("string"==typeof d)return j(d,e);var b=Object.prototype.toString.call(d).slice(8,-1);return"Object"===b&&d.constructor&&(b=d.constructor.name),"Map"===b||"Set"===b?Array.from(d):"Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?j(d,e):void 0}}function j(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}function k(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function l(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function m(d,a,b){return a&&l(d.prototype,a),b&&l(d,b),d}var a={};(()=>{a.d=(b,c)=>{for(var d in c)a.o(c,d)&&!a.o(b,d)&&Object.defineProperty(b,d,{enumerable:!0,get:c[d]})}})(),(()=>{a.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b)})();a.d({},{t:()=>x,L:()=>w});var n=function(){function h(a){c(this,h),this.tarea=a,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date}return b(h,[{key:"imprimirClase",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}],[{key:"fromJson",value:function(a){var b=a.id,c=a.tarea,d=a.completado,e=a.creado,f=new h(c);return f.id=b,f.completado=d,f.creado=e,f}}]),h}();var o=document.querySelector(".todo-list"),p=document.querySelector(".new-todo"),q=document.querySelector(".clear-completed"),r=document.querySelector(".filters"),s=document.querySelectorAll(".filtro"),t=function(d){var a="\n    <li class=\"".concat(d.completado?"completed":"","\" data-id=\"").concat(d.id,"\">\n    <div class=\"view\">\n            <input class=\"toggle\" type=\"checkbox\" ").concat(d.completado?"checked":"",">\n            <label>").concat(d.tarea,"</label>\n            <button class=\"destroy\"></button>\n        </div>\n        <input class=\"edit\" value=\"Create a TodoMVC template\">\n    </li>"),b=document.createElement("div");return b.innerHTML=a,o.append(b.firstElementChild),b};p.addEventListener("keyup",function(c){if(13===c.keyCode&&0<p.value.length){var a=new n(p.value);w.nuevoTodo(a),t(a),p.value=""}x()}),o.addEventListener("click",function(e){var a=e.target.localName,b=e.target.parentElement.parentElement,c=b.getAttribute("data-id");a.includes("input")?(w.marcarCompletado(c),b.classList.toggle("completed")):a.includes("button")&&(w.eliminarTodo(c),o.removeChild(b)),x()}),q.addEventListener("click",function(){w.eliminarCompletados();for(var c,a=o.children.length-1;0<=a;a--)c=o.children[a],c.classList.contains("completed")&&o.removeChild(c)}),r.addEventListener("click",function(h){var a=h.target.text;if(a){s.forEach(function(b){return b.classList.remove("selected")}),h.target.classList.add("selected");var b,c=g(o.children);try{for(c.s();!(b=c.n()).done;){var d=b.value;d.classList.remove("hidden");var e=d.classList.contains("completed");"Pendientes"===a?e&&d.classList.add("hidden"):"Completados"===a?e||d.classList.add("hidden"):void 0}}catch(b){c.e(b)}finally{c.f()}}});var u=function(){function b(){k(this,b),this.cargarLocalStorage()}return m(b,[{key:"nuevoTodo",value:function(b){this.todos.push(b),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(c){this.todos=this.todos.filter(function(a){return a.id!=c}),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(e){var a,b=h(this.todos);try{for(b.s();!(a=b.n()).done;){var c=a.value;if(c.id==e){c.completado=!c.completado,this.guardarLocalStorage();break}}}catch(c){b.e(c)}finally{b.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter(function(b){return!b.completado}),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(n.fromJson)}},{key:"contarPendientes",value:function(){var c=o.getElementsByClassName("completed").length,a=this.todos.length-c;return a}}]),b}();var v=document.querySelector("strong"),w=new u;w.todos.forEach(function(b){return t(b)});var x=function(){v.innerText="".concat(w.contarPendientes())};x()})();