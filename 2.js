(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{112:function(e,t,n){"use strict";n.d(t,"d",(function(){return r}));var a=n(139);n.d(t,"a",(function(){return a.a})),n.d(t,"b",(function(){return a.b})),n.d(t,"c",(function(){return a.c})),n.d(t,"e",(function(){return a.d})),n.d(t,"f",(function(){return a.e})),n.d(t,"g",(function(){return a.f})),n.d(t,"h",(function(){return a.g})),n.d(t,"i",(function(){return a.h})),n.d(t,"j",(function(){return a.i})),n.d(t,"k",(function(){return a.j})),n.d(t,"l",(function(){return a.k})),n.d(t,"m",(function(){return a.l}));var r=function(e){return e.children}},122:function(e,t,n){"use strict";n(52);var a=n(130),r=n.n(a);n.d(t,"a",(function(){return r.a}));Date.now()},140:function(e,t,n){"use strict";n.d(t,"e",(function(){return v.a})),n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return C})),n.d(t,"c",(function(){return H})),n.d(t,"f",(function(){return S})),n.d(t,"d",(function(){return z}));var a=n(52),r=n.n(a),o=n(114),i=n.n(o),l=n(121),c=n.n(l),u=n(2),s=n.n(u),d=n(192),f=(n(154),n(180)),p=n.n(f),m=n(186),b=n.n(m),h=n(122),v=n(54),_=n(53),x=n(188),g=n.n(x),w=function(e){var t=e.children,n=e.legend,a=c()(e,["children","legend"]),o=(Object(_.b)(),Object(u.useState)(!1)),l=r()(o,2),d=l[0];l[1];return s.a.createElement("form",i()({style:{position:"relative"},onSubmit:function(e){e.target.focus(),e.preventDefault()}},a),void 0!==n&&s.a.createElement(k,null,n),t," ",d&&s.a.createElement(Mask,null))};Object.assign((function(e){var t=e.children,n=e.errors,a=(e.items,e.label),o=e.value,i=e.name,l=c()(e,["children","errors","items","label","value","name"]),d=Object(u.useState)(!1),f=r()(d,2),p=f[0],m=f[1],b=Object(u.useRef)(null),v=function(){return m(b.current.contains(document.activeElement))};return s.a.createElement("div",{ref:b,className:Object(h.a)(g.a.Field,p&&g.a.Field__Focus),onFocus:v,onBlur:function(e){return requestAnimationFrame(v)}},s.a.createElement("label",l,[!0,!1].includes(o)?s.a.createElement(M,{value:o,disabled:!0}):void 0!==o&&s.a.createElement(j,null,o),t,void 0!==a&&s.a.createElement(y,null,a),s.a.createElement("span",{className:g.a.Under}),n&&s.a.createElement(E,n[i])))}),{Group:function(e){var t=e.children,n=c()(e,["children"]);return s.a.createElement("div",i()({className:g.a.Group},n),t)}});var E=function(e){var t=e.message,n=c()(e,["message"]);return t?s.a.createElement("span",i()({className:g.a.Error},n),t):null},y=function(e){var t=e.children,n=c()(e,["children"]);return s.a.createElement("span",i()({className:g.a.Label},n),t)},M=Object(u.forwardRef)((function(e,t){var n=e.value,a=e.defaultValue,o=void 0===a?n:a,l=e.items,u=e.rows,d=e.type,f=void 0===d?[!0,!1].includes(o)?"checkbox":"text":d,p=e.checked,m=void 0===p?[!0,!1].includes(o)?o:void 0:p,b=e.defaultChecked,h=void 0===b?m:b,v=c()(e,["value","defaultValue","items","rows","type","checked","defaultChecked"]);return void 0===u?s.a.createElement(s.a.Fragment,null,"search"===f&&s.a.createElement("svg",{focusable:"false",height:"24px",viewBox:"0 0 24 24",width:"24px",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"}),s.a.createElement("path",{d:"M0,0h24v24H0V0z",fill:"none"})),l?s.a.createElement("select",i()({className:g.a.Select},{ref:t,defaultValue:o},v),Object.entries(l).map((function(e){var t=r()(e,2),n=t[0],a=t[1];return s.a.createElement("option",{key:n,value:n},a)}))):s.a.createElement("input",i()({className:"checkbox"===f?g.a.Check:g.a.Input},{ref:t,defaultChecked:h,defaultValue:o,type:f},v))):s.a.createElement("textarea",i()({className:g.a.Input},{ref:t,defaultValue:o,rows:u,type:f},v))}));Object.assign(M,{Calendar:function(e){var t=e.children,n=c()(e,["children"]);return s.a.createElement("div",i()({className:g.a.Calendar},n),t)},Picker:function(e){var t=e.children,n=c()(e,["children"]);return s.a.createElement("div",i()({className:g.a.Picker},n),t)}});var j=function(e){var t=i()({},e);return s.a.createElement("div",i()({className:g.a.Value},t))},k=function(e){var t=i()({},e);return s.a.createElement("h2",i()({className:g.a.Legend},t))},C=(n(190),function(e){var t=e.name,n=c()(e,["name"]);return s.a.createElement("i",i()({className:Object(h.a)(p.a.pi,p.a["pi-".concat(t)])},n))}),H=function(e){var t=e.href,n=void 0===t?"":t,a=c()(e,["href"]);return s.a.createElement("a",i()({href:"#".concat(n),className:b.a.Link},a))},S=function(e){var t=i()({},e);return s.a.createElement("div",t)},W=function(e){var t=e.children,n=void 0===t?"Zamknij":t,a=c()(e,["children"]);return s.a.createElement("button",i()({className:b.a.Close,"aria-label":n},a),s.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24"},s.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),s.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})))},X=function(e){var t=e.in,n=e.onExited,a=e.onClose,r=e.children,o=c()(e,["in","onExited","onClose","children"]),l=Object(d.b)({from:{opacity:0,left:100},delay:0,to:t?{opacity:1,left:0}:{opacity:0,left:100},config:{mass:.1,tension:500,friction:t?30:50},onRest:n}),u=(l.opacity,l.left);return s.a.createElement(d.a.div,i()({style:n?{transform:u.interpolate((function(e){return"translateX(".concat(e,"%)")}))}:{},className:b.a.Layer},o),a&&s.a.createElement(W,{onClick:function(e){return a()}}),s.a.createElement("div",{className:b.a.Scroll},s.a.createElement("div",{className:b.a.Inner},r)))},z=function(e){e.onClose;var t=e.children,n=c()(e,["onClose","children"]),a=Object(u.useState)((function(){return Math.random().toString()})),o=r()(a,1)[0],l=Object(u.useState)(!1),d=r()(l,2),f=d[0],p=d[1];return s.a.createElement("div",i()({className:b.a.Menu},n),s.a.createElement("input",{id:o,className:b.a.Trigger,type:"checkbox",checked:f,onChange:function(e){return p(e.target.checked)}}),s.a.createElement(X,null,s.a.createElement("label",{className:b.a.Bars,htmlFor:o},s.a.createElement("svg",{focusable:"false",viewBox:"0 0 24 24"},s.a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}))),s.a.createElement("div",{onClick:function(e){return p(!1)}},t)))}},186:function(e,t,n){var a=n(77),r=n(187);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);e.exports=r.locals||{}},187:function(e,t,n){"use strict";n.r(t);var a=n(51),r=n.n(a)()(!1);r.push([e.i,'body{font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;background-color:#fff}a{text-decoration:none}._1cfXugEmaOcZM0_eh7MWz3{background-color:#1a73e8;color:#fff;font-family:"Google Sans",Roboto,Arial,sans-serif;font-size:.875rem;font-weight:400;border-radius:4px;margin:0 8px;padding:0 24px;height:36px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none}._1cfXugEmaOcZM0_eh7MWz3:hover{box-shadow:0 1px 2px 0 var(--gm-fillbutton-keyshadow-color, rgba(60, 64, 67, 0.3)),0 1px 3px 1px var(--gm-fillbutton-ambientshadow-color, rgba(60, 64, 67, 0.15))}.-CdZj0QoZpB_avrR-7wTR,.Ehl2pikMkuqGscPeJYAKT{letter-spacing:.01428571em;font-family:Roboto,Arial,sans-serif;font-size:.675em;font-weight:400;line-height:1em;color:#5f6368;width:100%;word-break:break-word;text-decoration:none}.yPci1KSmF8ruHtJDvJrag,._3429SzfB9jUbRXtZqxN3OA{cursor:pointer;border:0;padding:0;background-color:transparent}._3u6Pe5dU9S4pWnG2pX5I1a{width:24px;height:24px}._3gKejxMN7LzeztyBbu--Io{position:relative;top:-0.5em}._3gKejxMN7LzeztyBbu--Io h2{display:inline-block}._1WapfvA0UeBXIioZCbMT22{position:fixed;z-index:2;top:0;right:0;bottom:0;width:90%;background-color:#fff;box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.2)}._1WapfvA0UeBXIioZCbMT22 .yPci1KSmF8ruHtJDvJrag{position:absolute;z-index:1;top:0;right:0;padding:10px}._1WapfvA0UeBXIioZCbMT22 ._2X2e7iQVspM_LyEUULM7m{overflow-y:scroll;width:100%;height:100%}._1WapfvA0UeBXIioZCbMT22 .Ayvy63wyxrtbdoG8yfYix{padding:0em 0 1.75em}.bEppjVOuK8M5ChiXW1l8Y{position:relative;z-index:3}.bEppjVOuK8M5ChiXW1l8Y ._2ItmTWe5tJUGEACZRFA1wr{display:none}.bEppjVOuK8M5ChiXW1l8Y ._2ItmTWe5tJUGEACZRFA1wr~._1WapfvA0UeBXIioZCbMT22{left:-90%}.bEppjVOuK8M5ChiXW1l8Y ._2ItmTWe5tJUGEACZRFA1wr:checked~._1WapfvA0UeBXIioZCbMT22{left:0}.bEppjVOuK8M5ChiXW1l8Y ._3-r1zx4t614B_w7ZjLMsd0{cursor:pointer;position:fixed;z-index:2;left:1em;top:1.25em;width:24px;height:24px}.bEppjVOuK8M5ChiXW1l8Y ._1WapfvA0UeBXIioZCbMT22{left:0;top:0;bottom:0;width:70%;transition:left .3s cubic-bezier(0.4, 0, 0.2, 1)}.bEppjVOuK8M5ChiXW1l8Y ._3DMBPH6zs1w3tvHW3Dljfu{display:block;margin:1em}.bEppjVOuK8M5ChiXW1l8Y .Ayvy63wyxrtbdoG8yfYix{padding:2.75em 0}',""]),r.locals={Button:"_1cfXugEmaOcZM0_eh7MWz3",Helper:"-CdZj0QoZpB_avrR-7wTR",Time:"Ehl2pikMkuqGscPeJYAKT",Close:"yPci1KSmF8ruHtJDvJrag",More:"_3429SzfB9jUbRXtZqxN3OA",Icon:"_3u6Pe5dU9S4pWnG2pX5I1a",Navi:"_3gKejxMN7LzeztyBbu--Io",Layer:"_1WapfvA0UeBXIioZCbMT22",Scroll:"_2X2e7iQVspM_LyEUULM7m",Inner:"Ayvy63wyxrtbdoG8yfYix",Menu:"bEppjVOuK8M5ChiXW1l8Y",Trigger:"_2ItmTWe5tJUGEACZRFA1wr",Bars:"_3-r1zx4t614B_w7ZjLMsd0",Link:"_3DMBPH6zs1w3tvHW3Dljfu"},t.default=r},188:function(e,t,n){var a=n(77),r=n(189);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);e.exports=r.locals||{}},189:function(e,t,n){"use strict";n.r(t);var a=n(51),r=n.n(a)()(!1);r.push([e.i,'@keyframes _3NPGWqwYIYaxFSEmUt7Kav{0%{transform:scaleX(1);opacity:1}to{transform:scaleX(1);opacity:0}}@keyframes CWDb1eGal4jHlLLL8lOAw{0%{transform:scaleX(0)}to{transform:scaleX(1)}}._3_FrtCyTlH3MSh7UG49_TX{padding:0 .5em 0 1.75em}._1wEVTMHbYj52r-Smc3M8ov,._2GBtJeeu6x_Bdpj-8eCN4h{display:flex}._2GBtJeeu6x_Bdpj-8eCN4h ._1wEVTMHbYj52r-Smc3M8ov{width:40%}._1wEVTMHbYj52r-Smc3M8ov{box-sizing:border-box;display:flex;position:relative;width:100%}._1wEVTMHbYj52r-Smc3M8ov label{display:flex;flex-grow:1;flex-shrink:1;position:relative;margin:1em;font:400 14px/20px Roboto,RobotoDraft,Helvetica,Arial,sans-serif}._1wEVTMHbYj52r-Smc3M8ov ._1Ge-_1fyHXLtS6SILAPXWd,._1wEVTMHbYj52r-Smc3M8ov ._3-KUHgxwkBsqkzCk0jMpBW,._1wEVTMHbYj52r-Smc3M8ov .MjzY-ZQIMoCnf9vi0Y9XS{line-height:24px;padding:4px 4px;min-height:20px;font:400 16px Roboto,RobotoDraft,Helvetica,Arial,sans-serif}._1wEVTMHbYj52r-Smc3M8ov ._1Ge-_1fyHXLtS6SILAPXWd{padding:3px 0 4px}._1wEVTMHbYj52r-Smc3M8ov ._1Ge-_1fyHXLtS6SILAPXWd,._1wEVTMHbYj52r-Smc3M8ov ._3-KUHgxwkBsqkzCk0jMpBW{display:block;flex-grow:1;flex-shrink:1;border:0;background:rgba(0,0,0,.01);min-width:0%;outline:none}._1wEVTMHbYj52r-Smc3M8ov ._1Ge-_1fyHXLtS6SILAPXWd~._1A1jOTATy1lHEic3XueALN,._1wEVTMHbYj52r-Smc3M8ov ._3-KUHgxwkBsqkzCk0jMpBW~._1A1jOTATy1lHEic3XueALN,._1wEVTMHbYj52r-Smc3M8ov .MjzY-ZQIMoCnf9vi0Y9XS~._1A1jOTATy1lHEic3XueALN{position:absolute;padding:0 6px;transform:scale(0.75) translateY(-27px);transform-origin:bottom left;color:rgba(0,0,0,.38)}._1wEVTMHbYj52r-Smc3M8ov ._1Ge-_1fyHXLtS6SILAPXWd:focus~._39-uhgGWGwcbZavIW50Qj2:before,._1wEVTMHbYj52r-Smc3M8ov ._3-KUHgxwkBsqkzCk0jMpBW:focus~._39-uhgGWGwcbZavIW50Qj2:before{transform:scaleX(1);opacity:1}._1wEVTMHbYj52r-Smc3M8ov ._1Ge-_1fyHXLtS6SILAPXWd~._39-uhgGWGwcbZavIW50Qj2:before,._1wEVTMHbYj52r-Smc3M8ov ._3-KUHgxwkBsqkzCk0jMpBW~._39-uhgGWGwcbZavIW50Qj2:before{content:"";display:block;opacity:0;background-color:#4285f4;bottom:-1px;height:2px;left:0;margin:0;padding:0;position:absolute;width:100%;transition:opacity .3s cubic-bezier(0.4, 0, 0.2, 1)}._1wEVTMHbYj52r-Smc3M8ov ._1Ge-_1fyHXLtS6SILAPXWd~._39-uhgGWGwcbZavIW50Qj2,._1wEVTMHbYj52r-Smc3M8ov ._3-KUHgxwkBsqkzCk0jMpBW~._39-uhgGWGwcbZavIW50Qj2{position:absolute;left:0;right:0;bottom:0;height:1px;background-color:rgba(0,0,0,.12)}._3EqPoCjq3wo6s_arRkWsEA,._2NUHzXrO06uICwa3zxy22w{position:absolute;z-index:1;top:calc(100% + 0.5em);left:0;width:240px;border-radius:.5em;background-color:#fff;box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.2);display:none}._1485pe5-IbCa5Jb0e6j1Vv ._3EqPoCjq3wo6s_arRkWsEA,._1485pe5-IbCa5Jb0e6j1Vv ._2NUHzXrO06uICwa3zxy22w{display:block}._2NUHzXrO06uICwa3zxy22w{width:240px;display:none}._1485pe5-IbCa5Jb0e6j1Vv ._2NUHzXrO06uICwa3zxy22w{display:block}._3EqPoCjq3wo6s_arRkWsEA{width:240px;display:none}._1485pe5-IbCa5Jb0e6j1Vv ._3EqPoCjq3wo6s_arRkWsEA{display:block}',""]),r.locals={Legend:"_3_FrtCyTlH3MSh7UG49_TX",Field:"_1wEVTMHbYj52r-Smc3M8ov",Group:"_2GBtJeeu6x_Bdpj-8eCN4h",Select:"_1Ge-_1fyHXLtS6SILAPXWd",Input:"_3-KUHgxwkBsqkzCk0jMpBW",Value:"MjzY-ZQIMoCnf9vi0Y9XS",Label:"_1A1jOTATy1lHEic3XueALN",Under:"_39-uhgGWGwcbZavIW50Qj2",Picker:"_3EqPoCjq3wo6s_arRkWsEA",Calendar:"_2NUHzXrO06uICwa3zxy22w",Field__Focus:"_1485pe5-IbCa5Jb0e6j1Vv",quantumWizPaperInputRemoveUnderline:"_3NPGWqwYIYaxFSEmUt7Kav",quantumWizPaperInputAddUnderline:"CWDb1eGal4jHlLLL8lOAw"},t.default=r},190:function(e,t,n){var a=n(77),r=n(191);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);e.exports=r.locals||{}},191:function(e,t,n){"use strict";n.r(t);var a=n(51),r=n.n(a)()(!1);r.push([e.i,".lyKBMfHNUeuiZDu3dVJW0{letter-spacing:.07272727em;font-family:Roboto,Arial,sans-serif;font-size:.6875rem;font-weight:500;line-height:1rem;text-transform:uppercase;color:#5f6368;display:flex;padding:10px 0 10px 10px;max-height:20px}._1K4LpyxfcUBsAPS4V_L5d- ._2F7v2-HU8vCBIy-496OmX7{background:#fff;box-sizing:border-box;display:table;height:56px;table-layout:fixed;transition:.1s all;width:100%;border-top:1px solid #f5f5f5;padding:0 1em}._1K4LpyxfcUBsAPS4V_L5d- ._2F7v2-HU8vCBIy-496OmX7:hover{background:#f5f5f5;cursor:pointer}._1K4LpyxfcUBsAPS4V_L5d- ._2YKeCI5HGl4HyyegBOGgrn{box-sizing:border-box;display:table-cell;overflow:hidden;padding:4px;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}",""]),r.locals={Group:"lyKBMfHNUeuiZDu3dVJW0",Table:"_1K4LpyxfcUBsAPS4V_L5d-",Tr:"_2F7v2-HU8vCBIy-496OmX7",Td:"_2YKeCI5HGl4HyyegBOGgrn"},t.default=r},205:function(e,t){},257:function(e){e.exports=JSON.parse("{}")},265:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(152),r=n.n(a),o=n(52),i=n.n(o),l=n(2),c=n.n(l),u=n(53),s=(n(128),n(30)),d=n(140),f=n(112),p=(n(257),n(31));function m(){var e=r()(["\n      mutation logout {\n        logout\n      }\n    "]);return m=function(){return e},e}function b(){var e=Object(u.c)((function(e){return e.current})),t={"/auth/":c.a.lazy((function(){return n.e(3).then(n.t.bind(null,261,7))})),"/home/":c.a.lazy((function(){return n.e(6).then(n.bind(null,262))})),"/bookings/":c.a.lazy((function(){return n.e(4).then(n.t.bind(null,263,7))})),"/contacts/":c.a.lazy((function(){return n.e(5).then(n.t.bind(null,264,7))}))}[e],a=Object(u.b)(),r=Object(p.useMutation)(Object(p.gql)(m()),{onCompleted:function(e){var t=e.logout;console.log(["onCompleted"],t),a(Object(s.c)("/auth/"))}}),o=i()(r,1)[0];return c.a.createElement(f.j,{theme:f.m},c.a.createElement(d.d,null,c.a.createElement(d.c,{href:"/auth/"},c.a.createElement(d.b,{name:"unlock"})," Auth"),c.a.createElement(d.c,{href:"/home/"},c.a.createElement(d.b,{name:"home"})," Home"),c.a.createElement(d.c,{href:"/bookings/"},c.a.createElement(d.b,{name:"calendar-times"})," Terminy"),c.a.createElement(d.c,{href:"/contacts/"},c.a.createElement(d.b,{name:"users"})," Klienci"),c.a.createElement(d.c,{onClick:function(e){return e.preventDefault()||o()}},c.a.createElement(d.b,{name:"sign-out"})," Logout")),c.a.createElement(l.Suspense,{fallback:c.a.createElement(d.e,null)},c.a.createElement(t,null)))}}}]);