webpackJsonp([3],{153:function(e,r,t){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function i(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var a=t(0),s=t.n(a),c=t(9),p=t(179),u=t(20),l=t(161),d=t(49),f=t(50),A=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),b=function(e){function r(){return n(this,r),o(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return i(r,e),A(r,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=s.a.createElement(f.a,null);return this.props.loading||(e=this.props.orders.map(function(e){return s.a.createElement(p.a,{key:e.id,ingredients:e.ingredients,price:e.price})})),s.a.createElement("div",null,e)}}]),r}(a.Component),h=function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},x=function(e){return{onFetchOrders:function(r,t){return e(d.d(r,t))}}};r.default=Object(c.b)(h,x)(Object(l.a)(b,u.a))},158:function(e,r,t){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function i(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}var a=t(0),s=t.n(a),c=t(162),p=t.n(c),u=t(19),l=t(51),d=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),f=function(e){function r(){return n(this,r),o(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return i(r,e),d(r,[{key:"shouldComponentUpdate",value:function(e,r){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement(l.a,{show:this.props.show,clicked:this.props.modalClosed}),s.a.createElement("div",{className:p.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),r}(a.Component);r.a=f},161:function(e,r,t){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function i(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}var a=t(0),s=t.n(a),c=t(158),p=t(19),u=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),l=function(e,r){return function(t){function a(){var e,r,t,i;n(this,a);for(var s=arguments.length,c=Array(s),p=0;p<s;p++)c[p]=arguments[p];return r=t=o(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(c))),t.state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},i=r,o(t,i)}return i(a,t),u(a,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=r.interceptors.request.use(function(r){return e.setState({error:null}),r}),this.resInterceptor=r.interceptors.response.use(function(e){return e},function(r){e.setState({error:r})})}},{key:"componentWillUnmount",value:function(){r.interceptors.request.eject(this.reqInterceptor),r.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return s.a.createElement(p.a,null,s.a.createElement(c.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),s.a.createElement(e,this.props))}}]),a}(a.Component)};r.a=l},162:function(e,r,t){var n=t(163);"string"===typeof n&&(n=[[e.i,n,""]]);var o={};o.transform=void 0;t(151)(n,o);n.locals&&(e.exports=n.locals)},163:function(e,r,t){r=e.exports=t(150)(!0),r.push([e.i,".Modal__Modal__cd320{position:fixed;z-index:500;background-color:#fff;width:70%;border:1px solid #ccc;-webkit-box-shadow:3px 3px 9px 6px rgba(0,0,0,.2);box-shadow:3px 3px 9px 6px rgba(0,0,0,.2);padding:16px;left:15%;top:25%;border-radius:12px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .3s ease-out;-o-transition:all .3s ease-out;transition:all .3s ease-out}@media (min-width:600px){.Modal__Modal__cd320{width:500px;left:calc(50% - 250px)}}","",{version:3,sources:["D:/Stefan/react/nice_burger/awesome_burger/src/components/UI/Modal/Modal.css"],names:[],mappings:"AAAA,qBACI,eAAgB,AAChB,YAAa,AACb,sBAAwB,AACxB,UAAW,AACX,sBAAuB,AACvB,kDAAsD,AAC9C,0CAA8C,AACtD,aAAc,AACd,SAAU,AACV,QAAS,AACT,mBAAoB,AACpB,8BAA+B,AACvB,sBAAuB,AAC/B,oCAAsC,AACtC,+BAAiC,AACjC,2BAA8B,CACjC,AAED,yBACI,qBACI,YAAa,AACb,sBAAwB,CAC3B,CACJ",file:"Modal.css",sourcesContent:[".Modal {\r\n    position: fixed;\r\n    z-index: 500;\r\n    background-color: white;\r\n    width: 70%;\r\n    border: 1px solid #ccc;\r\n    -webkit-box-shadow: 3px 3px 9px 6px rgba(0, 0, 0, .2);\r\n            box-shadow: 3px 3px 9px 6px rgba(0, 0, 0, .2);\r\n    padding: 16px;\r\n    left: 15%;\r\n    top: 25%;\r\n    border-radius: 12px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    -webkit-transition: all 0.3s ease-out;\r\n    -o-transition: all 0.3s ease-out;\r\n    transition: all 0.3s ease-out;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n    .Modal {\r\n        width: 500px;\r\n        left: calc(50% - 250px);\r\n    }\r\n}"],sourceRoot:""}]),r.locals={Modal:"Modal__Modal__cd320"}},179:function(e,r,t){"use strict";var n=t(0),o=t.n(n),i=t(180),a=t.n(i),s=function(e){var r=[];for(var t in e.ingredients)r.push({name:t,amount:e.ingredients[t]});var n=r.map(function(e){return o.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")});return o.a.createElement("div",{className:a.a.Order},o.a.createElement("p",null,"Ingredients: ",n),o.a.createElement("p",null,"Price: ",o.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))};r.a=s},180:function(e,r,t){var n=t(181);"string"===typeof n&&(n=[[e.i,n,""]]);var o={};o.transform=void 0;t(151)(n,o);n.locals&&(e.exports=n.locals)},181:function(e,r,t){r=e.exports=t(150)(!0),r.push([e.i,".Order__Order__W-Npf{width:80%;border:1px solid #eee;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;padding:10px;margin:10px auto;-webkit-box-sizing:border-box;box-sizing:border-box}","",{version:3,sources:["D:/Stefan/react/nice_burger/awesome_burger/src/components/Order/Order.css"],names:[],mappings:"AAAA,qBACI,UAAW,AACX,sBAAuB,AACvB,kCAAmC,AAC3B,0BAA2B,AACnC,aAAc,AACd,iBAAkB,AAClB,8BAA+B,AACvB,qBAAuB,CAClC",file:"Order.css",sourcesContent:[".Order {\r\n    width: 80%;\r\n    border: 1px solid #eee;\r\n    -webkit-box-shadow: 0 2px 3px #ccc;\r\n            box-shadow: 0 2px 3px #ccc;\r\n    padding: 10px;\r\n    margin: 10px auto;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}"],sourceRoot:""}]),r.locals={Order:"Order__Order__W-Npf"}}});
//# sourceMappingURL=3.ae91a6ec.chunk.js.map