(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(2),c=n.n(a),i=(n(14),n(3)),l=n(4),s=n(5),d=n(7),u=n(6),p=n(8);n(15);var h=function(e){return r.a.createElement("div",{className:"todo-item",style:e.todo.completed?{textDecoration:"line-through",color:"#A9A9A9",fontStyle:"italic"}:null},r.a.createElement("input",{type:"checkbox",onChange:function(){return e.changeHandler(e.todo.id)},checked:e.todo.completed}),r.a.createElement("div",null,e.todo.task))};var m=function(e){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"ToDo List App"))},f=[{id:1,task:"Do the Laundry",completed:!1},{id:2,task:"Wash the Dishes",completed:!1},{id:3,task:"Buy the Grocery",completed:!1},{id:4,task:"Catch up on Web Development",completed:!0}];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).state={todos:f},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"changeHandler",value:function(e){var t=this;this.setState((function(n){var o=n.todos.map((function(t){return t.id===e?(console.log(t.id),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{completed:!t.completed})):t}));return console.log(t.state.todos),console.log(o),{todos:o}}))}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return r.a.createElement(h,{changeHandler:e.changeHandler.bind(e),key:t.id,todo:t})}));return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement("div",{className:"todo-list"},t))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.c67d2c3d.chunk.js.map