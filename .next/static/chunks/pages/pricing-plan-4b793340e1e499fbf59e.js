_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=r,e.useAmp=function(){return r(a.default.useContext(o.AmpStateContext))};var i,a=(i=n("q1tI"))&&i.__esModule?i:{default:i},o=n("lwAK");function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,i=t.hybrid,a=void 0!==i&&i,o=t.hasQuery,r=void 0!==o&&o;return n||a&&r}},"48fX":function(t,e,n){var i=n("qhzo");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}},"5fIB":function(t,e,n){var i=n("7eYB");t.exports=function(t){if(Array.isArray(t))return i(t)}},"8Kt/":function(t,e,n){"use strict";n("oI91");e.__esModule=!0,e.defaultHead=d,e.default=void 0;var i,a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var o=i?Object.getOwnPropertyDescriptor(t,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=t[a]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),o=(i=n("Xuae"))&&i.__esModule?i:{default:i},r=n("lwAK"),l=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function d(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function s(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function f(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(s,[]).reverse().concat(d(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,i={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var r=a.key.slice(a.key.indexOf("$")+1);t.has(r)?o=!1:t.add(r)}switch(a.type){case"title":case"base":e.has(a.type)?o=!1:e.add(a.type);break;case"meta":for(var l=0,c=p.length;l<c;l++){var u=p[l];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var d=a.props[u],s=i[u]||new Set;s.has(d)?o=!1:(s.add(d),i[u]=s)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}function m(t){var e=t.children,n=(0,a.useContext)(r.AmpStateContext),i=(0,a.useContext)(l.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:f,headManager:i,inAmpMode:(0,c.isInAmpMode)(n)},e)}m.rewind=function(){};var g=m;e.default=g},FYa8:function(t,e,n){"use strict";var i;e.__esModule=!0,e.HeadManagerContext=void 0;var a=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});e.HeadManagerContext=a},T0f4:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},UQa5:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return q}));var i=n("q1tI"),a=n.n(i),o=n("8Kt/"),r=n.n(o),l=n("vOnD"),c=n("bC0J"),u=l.d.div.withConfig({displayName:"PriceCardstyle__PriceCardWrapper",componentId:"sc-19pfakv-0"})(["border-radius:6px;position:relative;border:1px solid ",";transition:box-shadow 0.3s ease;&:hover{border-color:0;box-shadow:0 0 30px ",";button{color:",";background-color:",";}}"],Object(c.a)("border.3","#E6E6E6"),Object(c.a)("boxShadow.1","rgba(0, 0, 0, 0.16)"),Object(c.a)("color.1","#ffffff"),Object(c.a)("primary.0","#008489")),d=l.d.div.withConfig({displayName:"PriceCardstyle__PricingHeader",componentId:"sc-19pfakv-1"})(["padding:27px 29px;border-top-left-radius:6px;border-top-right-radius:6px;background-color:",";"],Object(c.a)("color.2","#F7F7F7")),s=l.d.h2.withConfig({displayName:"PriceCardstyle__Title",componentId:"sc-19pfakv-2"})(["color:",";font-size:22px;line-height:1.2;font-weight:700;"],Object(c.a)("text.0","#2C2C2C")),p=l.d.p.withConfig({displayName:"PriceCardstyle__Price",componentId:"sc-19pfakv-3"})(["color:",";font-size:15px;line-height:18px;margin-bottom:0;"],Object(c.a)("text.0","#2C2C2C")),f=l.d.ul.withConfig({displayName:"PriceCardstyle__PricingList",componentId:"sc-19pfakv-4"})(["margin:0;padding:29px 30px 30px;margin-bottom:97px;li{margin-bottom:14px;color:",";font-size:13px;line-height:18px;> span{margin-left:15px;}.anticon-check-circle{color:",";}.anticon-close-circle{color:",";}&:last-child{margin-bottom:0;}}"],Object(c.a)("text.0","#2C2C2C"),Object(c.a)("primary.0","#008489"),Object(c.a)("color.4","#FC5C63")),m=l.d.div.withConfig({displayName:"PriceCardstyle__PriceAction",componentId:"sc-19pfakv-5"})(["padding:30px;width:100%;position:absolute;left:0;bottom:0;border-bottom-left-radius:6px;border-bottom-right-radius:6px;background-color:",";"],Object(c.a)("color.1","#ffffff")),g=l.d.button.withConfig({displayName:"PriceCardstyle__Button",componentId:"sc-19pfakv-6"})(["cursor:pointer;min-width:104px;min-height:37px;border:0;font-size:15px;line-height:18px;font-weight:700;border-radius:3px;color:",";background-color:",";transition:background-color 0.25s ease;"],Object(c.a)("text.0","#2C2C2C"),Object(c.a)("color.2","#F7F7F7")),h=u,y=a.a.createElement;function x(t){var e,n,i=t.className,a=t.data,o=t.buttonText;return"annually"===a.type?(e=12*Math.ceil(a.price),n="/per year"):(e=a.price,n="/per month"),y(h,{className:i},y(d,null,y(s,null,a.title),y(p,null,y("strong",null,"$",e," USD"),y("span",null,n))),y(f,null,a.features.map((function(t){return y("li",{key:t.title},t.icon,y("span",null,t.title))}))),y(m,null,y(g,null,o)))}var b=a.a.createElement;function v(t){return t.plans.map((function(t){return b(x,{className:"price_card",data:t,key:t.title,buttonText:"Select Plan"})}))}var k=l.d.div.withConfig({displayName:"Pricingstyle__PricingWrapper",componentId:"sc-8tkivk-0"})(["max-width:1140px;margin:0 auto;padding-bottom:30px;@media only screen and (max-width:1200px){padding-left:30px;padding-right:30px;}@media only screen and (max-width:480px){padding:0 25px;}"]),C=l.d.div.withConfig({displayName:"Pricingstyle__PricingHeader",componentId:"sc-8tkivk-1"})(["text-align:center;padding:60px 0;@media only screen and (max-width:480px){padding:40px 0;}"]),w=l.d.h2.withConfig({displayName:"Pricingstyle__Title",componentId:"sc-8tkivk-2"})(["color:",";font-size:25px;font-weight:700;margin-bottom:10px;"],Object(c.a)("text.0","#2C2C2C")),_=l.d.p.withConfig({displayName:"Pricingstyle__Description",componentId:"sc-8tkivk-3"})(["color:",";font-size:15px;line-height:18px;margin-bottom:30px;"],Object(c.a)("text.0","#2C2C2C")),P=l.d.div.withConfig({displayName:"Pricingstyle__PricingTableArea",componentId:"sc-8tkivk-4"})(["display:flex;flex-wrap:wrap;margin:0 -15px;.price_card{width:calc(100% / 3 - 30px);margin:0 15px;@media only screen and (max-width:767px){width:100%;margin-bottom:30px;}}"]),M=l.d.div.withConfig({displayName:"Pricingstyle__ButtonGroup",componentId:"sc-8tkivk-5"})(["width:244px;min-height:47px;padding:5px;border-radius:3px;background-color:",";margin:0 auto;display:flex;align-items:center;button{color:",";font-size:15px;min-width:117px;min-height:37px;display:flex;align-items:center;justify-content:center;border:none;background:none;cursor:pointer;&.active{font-weight:700;border-radius:3px;box-shadow:0 0 1px rgba(0,0,0,0.16);background-color:",";}&:hover,&:focus{text-decoration:none;outline:none;}}"],Object(c.a)("color.2","#F7F7F7"),Object(c.a)("text.0","#2C2C2C"),Object(c.a)("color.1","#ffffff")),O=l.d.button.withConfig({displayName:"Pricingstyle__Button",componentId:"sc-8tkivk-6"})([""]),E=k,j=n("/MOW"),I=n.n(j),B=n("bz9Y"),T=n.n(B),S=a.a.createElement,N=[{title:"Basic Plan",price:"0.00",type:"monthly",features:[{title:"Ultimate campaigns",icon:S(T.a,null)},{title:"Basic donner data",icon:S(T.a,null)},{title:"Team fundraising",icon:S(T.a,null)},{title:"Multi tasking",icon:S(T.a,null)},{title:"Multi team tasking",icon:S(I.a,null)},{title:"Basic registration & Ticketing",icon:S(I.a,null)},{title:"Basic theming",icon:S(I.a,null)},{title:"Email Reciept",icon:S(I.a,null)},{title:"Expensive donor data",icon:S(I.a,null)}]},{title:"Standard Plan",price:"75.80",type:"monthly",features:[{title:"Ultimate campaigns",icon:S(T.a,null)},{title:"Basic donner data",icon:S(T.a,null)},{title:"Team fundraising",icon:S(T.a,null)},{title:"Multi tasking",icon:S(T.a,null)},{title:"Multi team tasking",icon:S(T.a,null)},{title:"Basic registration & Ticketing",icon:S(T.a,null)},{title:"Basic theming",icon:S(I.a,null)},{title:"Email Reciept",icon:S(I.a,null)},{title:"Expensive donor data",icon:S(I.a,null)}]},{title:"Premium Plan",price:"175.00",type:"monthly",features:[{title:"Ultimate campaigns",icon:S(T.a,null)},{title:"Basic donner data",icon:S(T.a,null)},{title:"Team fundraising",icon:S(T.a,null)},{title:"Multi tasking",icon:S(T.a,null)},{title:"Multi team tasking",icon:S(T.a,null)},{title:"Basic registration & Ticketing",icon:S(T.a,null)},{title:"Basic theming",icon:S(T.a,null)},{title:"Email Reciept",icon:S(T.a,null)},{title:"Expensive donor data",icon:S(T.a,null)}]}],A=[{title:"Basic Plan",price:"0.00",type:"annually",features:[{title:"Ultimate campaigns",icon:S(T.a,null)},{title:"Basic donner data",icon:S(T.a,null)},{title:"Team fundraising",icon:S(T.a,null)},{title:"Multi tasking",icon:S(T.a,null)},{title:"Multi team tasking",icon:S(I.a,null)},{title:"Basic registration & Ticketing",icon:S(I.a,null)},{title:"Basic theming",icon:S(I.a,null)},{title:"Email Reciept",icon:S(I.a,null)},{title:"Expensive donor data",icon:S(I.a,null)}]},{title:"Standard Plan",price:"50.80",type:"annually",features:[{title:"Ultimate campaigns",icon:S(T.a,null)},{title:"Basic donner data",icon:S(T.a,null)},{title:"Team fundraising",icon:S(T.a,null)},{title:"Multi tasking",icon:S(T.a,null)},{title:"Multi team tasking",icon:S(T.a,null)},{title:"Basic registration & Ticketing",icon:S(T.a,null)},{title:"Basic theming",icon:S(I.a,null)},{title:"Email Reciept",icon:S(I.a,null)},{title:"Expensive donor data",icon:S(I.a,null)}]},{title:"Premium Plan",price:"150.00",type:"annually",features:[{title:"Ultimate campaigns",icon:S(T.a,null)},{title:"Basic donner data",icon:S(T.a,null)},{title:"Team fundraising",icon:S(T.a,null)},{title:"Multi tasking",icon:S(T.a,null)},{title:"Multi team tasking",icon:S(T.a,null)},{title:"Basic registration & Ticketing",icon:S(T.a,null)},{title:"Basic theming",icon:S(T.a,null)},{title:"Email Reciept",icon:S(T.a,null)},{title:"Expensive donor data",icon:S(T.a,null)}]}],H=a.a.createElement,F=function(){var t=Object(i.useState)("monthly"),e=t[0],n=t[1],a=[];return"monthly"===e&&(a=N),"annually"===e&&(a=A),H(E,null,H(C,null,H(w,null,"Select Your Pricing Plan"),H(_,null,"Simple Transparent pricing for everyone, whether you are local hotel owner or an agent."),H(M,null,H(O,{onClick:function(){return n("monthly")},className:"monthly"===e?"active":null},"Monthly"),H(O,{onClick:function(){return n("annually")},className:"annually"===e?"active":null},"Annually"))),H(P,null,H(v,{plans:a})))},R=a.a.createElement;function q(){return R(a.a.Fragment,null,R(r.a,null,R("title",null,"Pricing plan | TripFinder.")),R(F,null))}},Xuae:function(t,e,n){"use strict";var i=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),r=(n("qXWd"),n("48fX")),l=n("tCBg"),c=n("T0f4");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=c(t);if(e){var a=c(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return l(this,n)}}e.__esModule=!0,e.default=void 0;var d=n("q1tI"),s=function(t){r(n,t);var e=u(n);function n(t){var o;return a(this,n),(o=e.call(this,t))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(i(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);e.default=s},k996:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing-plan",function(){return n("UQa5")}])},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,n){"use strict";var i;e.__esModule=!0,e.AmpStateContext=void 0;var a=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});e.AmpStateContext=a},mPvQ:function(t,e,n){var i=n("5fIB"),a=n("rlHP"),o=n("KckH"),r=n("kG2m");t.exports=function(t){return i(t)||a(t)||o(t)||r()}},qXWd:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},tCBg:function(t,e,n){var i=n("C+bE"),a=n("qXWd");t.exports=function(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?a(t):e}}},[["k996",1,2,0,5,4]]]);