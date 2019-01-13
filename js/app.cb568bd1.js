(function(t){function e(e){for(var n,a,d=e[0],l=e[1],c=e[2],u=0,f=[];u<d.length;u++)a=d[u],r[a]&&f.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);s&&s(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,d=1;d<o.length;d++){var l=o[d];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},i=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var c=0;c<d.length;c++)e(d[c]);var s=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("addTodo",{on:{"add-todo":t.addTodo}}),o("TodoList",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},i=[],a=o("75fc"),d=o("f499"),l=o.n(d),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"title"},[o("h1",[t._v("Hello from the TodoApp")])])}],u={name:"Header"},f=u,p=(o("98a9"),o("2877")),m=Object(p["a"])(f,c,s,!1,null,"562fafa0",null);m.options.__file="Header.vue";var v=m.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",t._l(t.todos,function(e){return o("li",{key:e.id,staticClass:"todoList"},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){t.$emit("del-todo",e.id)}}})],1)}),0)},_=[],b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo--item"},[o("div",{on:{click:t.completeTodo}},[o("p",{class:{"is-done":t.todo.completed}},[t._v(t._s(t.todo.title))])]),o("button",{staticClass:"del",on:{click:function(e){t.$emit("del-todo",t.todo.id)}}},[t._v("X")])])},T=[],y={name:"TodoItem",props:["todo"],methods:{completeTodo:function(){this.todo.completed=!this.todo.completed}}},j=y,g=(o("6959"),Object(p["a"])(j,b,T,!1,null,null,null));g.options.__file="TodoItem.vue";var O=g.exports,x={name:"TodoList",props:["todos"],components:{TodoItem:O}},w=x,$=(o("69f4"),Object(p["a"])(w,h,_,!1,null,"9e9275e0",null));$.options.__file="TodoList.vue";var P=$.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{staticClass:"form",on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"add Todo"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"add Todo"}})])])},k=[],E={name:"addTodo",data:function(){return{title:""}},methods:{addTodo:function(t){if(t.preventDefault(),this.title&&" "!==this.title){var e={title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}}},S=E,H=(o("bfdf"),Object(p["a"])(S,C,k,!1,null,"5a8a978e",null));H.options.__file="addTodo.vue";var L=H.exports,I={name:"app",components:{TodoList:P,Header:v,addTodo:L},data:function(){return{todos:[]}},methods:{deleteTodo:function(t){this.todos=this.todos.filter(function(e){return e.id!==t})},addTodo:function(t){var e=this,o=t.title,n=t.completed;fetch("https://jsonplaceholder.typicode.com/todos",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:l()({title:o,completed:n})}).then(function(t){return t.json()}).then(function(t){e.todos=[].concat(Object(a["a"])(e.todos),[t])}).catch(function(t){return console.log(t)})}},created:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/todos").then(function(t){return t.json()}).then(function(e){return t.todos=e})}},M=I,A=(o("034f"),Object(p["a"])(M,r,i,!1,null,null,null));A.options.__file="App.vue";var J=A.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(J)}}).$mount("#app")},"64a9":function(t,e,o){},6959:function(t,e,o){"use strict";var n=o("e074"),r=o.n(n);r.a},"69f4":function(t,e,o){"use strict";var n=o("b3ea"),r=o.n(n);r.a},"718e":function(t,e,o){},7635:function(t,e,o){},"98a9":function(t,e,o){"use strict";var n=o("7635"),r=o.n(n);r.a},b3ea:function(t,e,o){},bfdf:function(t,e,o){"use strict";var n=o("718e"),r=o.n(n);r.a},e074:function(t,e,o){}});
//# sourceMappingURL=app.cb568bd1.js.map