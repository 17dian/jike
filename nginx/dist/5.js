(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{18:function(n,t,e){var o=e(30);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,e(12).default)("4a3c824e",o,!0,{})},19:function(n,t,e){var o=e(32);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,e(12).default)("ca92bac0",o,!0,{})},29:function(n,t,e){"use strict";e(18)},30:function(n,t,e){(t=e(10)(!1)).push([n.i,".navmenu[data-v-5804f79c] {\n  padding: 10px;\n  width: 80px;\n  height: 400px;\n  float: left;\n}\n.navmenu .menu-item[data-v-5804f79c] {\n  display: block;\n  width: 80px;\n  height: 80px;\n  margin-top: 40px;\n  padding: 20px;\n  border: 1px #f0f0f0 solid;\n  background-color: #f0f0f0;\n  font-size: 30px;\n  margin-right: 10px;\n  color: #444;\n  cursor: pointer;\n  border-radius: 6px;\n}\n.navmenu .menu-item[data-v-5804f79c]:hover {\n  border: 1px #7598f8 solid;\n  background-color: #7598f8;\n  color: #fff;\n}\n",""]),n.exports=t},31:function(n,t,e){"use strict";e(19)},32:function(n,t,e){(t=e(10)(!1)).push([n.i,"#app[data-v-2b5b08e7] {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n",""]),n.exports=t},9:function(n,t,e){"use strict";e.r(t),e.d(t,"bootstrap",(function(){return p})),e.d(t,"mount",(function(){return f})),e.d(t,"unmount",(function(){return d}));var o=e(33),a=e(28),i={name:"navmenu",data:()=>({urls:[{title:"文章1",url:"id01"},{title:"文章2",url:"id02"},{title:"文章3",url:"id03"}]}),methods:{menuClick(n){this.$emit("change",n.url)}}},r=(e(29),e(11)),s=Object(r.a)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"navmenu"},n._l(n.urls,(function(t){return e("a",{key:t.url,staticClass:"menu-item",on:{click:function(e){return n.menuClick(t)}}},[n._v(n._s(t.title))])})),0)}),[],!1,null,"5804f79c",null).exports,u={name:"App",props:{singleSpa:{type:Object}},components:{NavMenu:s},methods:{change(n){console.log(this.hash),this.singleSpa&&history.pushState({state:n},n,"/#/page/"+n)}}},c=(e(31),Object(r.a)(u,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("NavMenu",{on:{change:this.change}})],1)}),[],!1,null,"2b5b08e7",null).exports);o.a.config.productionTip=!1;const l=Object(a.a)({Vue:o.a,appOptions:{render(n){return n(c,{props:{singleSpa:this.singleSpa}})}}});function p(){return console.log("nav bootstrap>>>"),l.bootstrap()}function f(n){return console.log("nav mount>>>"),l.mount(n)}function d(){return console.log("nav unmount>>>"),l.unmount()}}}]);
//# sourceMappingURL=5.js.map