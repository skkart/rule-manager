(this["webpackJsonprule-manager"]=this["webpackJsonprule-manager"]||[]).push([[0],{45:function(e,t,a){e.exports=a(81)},60:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c),l=a(19),i=a(13),s=a(17),u=a(43),m=Object(s.c)({rules:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_rules":return t.payload||[];default:return e}},formRule:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"set_rule":return e.payload||{};default:return null}}}),d=a(4),p=(a(54),a(12)),f=a.n(p),v=(a(58),a(59),a(60),a(3)),b=a.n(v),h=a(7),E=a(10),g=a(23),y=a.n(g),O="https://www.mocky.io/v2/5ebeac3c310000af05c5d4df",x="/api/rule",N=function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(O);case 3:(a=e.sent).data&&a.data.rules&&t({type:"fetch_rules",payload:a.data.rules}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){return function(){var t=Object(h.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"set_rule",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=[{value:">",label:">"},{value:"<",label:"<"},{value:">=",label:">="},{value:"<=",label:"<="},{value:"=",label:"="},{value:"!=",label:"!="},{value:"in",label:"in"},{value:"not in",label:"not in"},{value:"has",label:"has"}],w=function(e){return"CriteriaJoin"===e.type?e.join?" ".concat(e.join," "):"":e.key?"( ".concat(e.key," ").concat(e.opr," ").concat(e.value," )"):""},R=a(14),C=a(15);var I=Object(i.b)((function(e){return{rules:e.rules}}),{initRuleList:function(){return N},deleteRule:function(e){return function(){var t=Object(h.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!0,t.prev=1,t.next=4,y.a.delete("".concat(x,"/").concat(e));case 4:return t.next=6,N(a);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("Error",t.t0),n=!1;case 12:return t.prev=12,p.store.addNotification({title:n?"Success":"Error: Try Again later",message:n?"Rule Deleted":"Delete Request failed",type:n?"success":"danger",insert:"top",container:"top-center",animationIn:["animated","fadeIn","jackInTheBox"],animationOut:["animated","fadeOut"],dismiss:{duration:3e3,pauseOnHover:!0}}),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})));return function(e){return t.apply(this,arguments)}}()},setRule:j})((function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),c=a[0],o=a[1],l=function(){var t=Object(h.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,o(!0),e.rules&&e.rules.length){t.next=5;break}return t.next=5,e.initRuleList();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Failed to load user chats",t.t0);case 10:return t.prev=10,o(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){l()}),[]);var i=function(){var t=Object(h.a)(b.a.mark((function t(a,n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.deleteRule(a.id);case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"dashbord"},c?r.a.createElement("div",{className:"m-5 text-center"},r.a.createElement("div",{className:"spinner-border text-primary text-center",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):r.a.createElement("div",{className:"table-responsive-md mt-4"},r.a.createElement("table",{className:"table table-info table-hover table-bordered"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Rule Name"),r.a.createElement("th",{scope:"col"},"Conditions"),r.a.createElement("th",{scope:"col",style:{width:"80px"}},"Action"))),r.a.createElement("tbody",null,e.rules&&e.rules.map((function(t,a){return r.a.createElement("tr",{key:t.id},r.a.createElement("th",{scope:"row"},a),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.conditions.map((function(e,t){return r.a.createElement("span",{key:t,className:"m-1"},w(e))}))),r.a.createElement("td",null,r.a.createElement("span",{className:"m-1 mr-2 pointer",onClick:function(){return function(t,a){e.setRule(t),e.history.push("/edit")}(t)}},r.a.createElement(R.a,{icon:C.b,"aria-hidden":"true"})),r.a.createElement("span",{className:"m-1 pointer",onClick:function(){return i(t,a)}},r.a.createElement(R.a,{icon:C.d,"aria-hidden":"true"}))))}))))))}));var S=Object(i.b)(null,{setRule:j})(Object(d.f)((function(e){Object(n.useEffect)((function(){e.history.push("/dashboard")}),[]);var t=function(){var t=Object(h.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setRule({name:"",conditions:[]});case 2:e.history.push("/add");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=Object(d.e)().pathname;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(l.b,{className:"navbar-brand",to:"/dashboard"}," ",r.a.createElement(R.a,{icon:C.a,"aria-hidden":"true"})," Rule Manager"),-1===a.indexOf("/add")&&r.a.createElement("button",{type:"button",className:"btn btn-success float-right add-button",onClick:t},r.a.createElement(R.a,{icon:C.c,"aria-hidden":"true"})))}))),A=a(16),T=a(44),B=a(22),q=function(e){return e?"":"This Field is required!"};function H(e){var t=Object(n.useState)({key:e.rule.key,value:e.rule.value,opr:e.rule.opr}),a=Object(E.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)({key:"",value:"",opr:""}),i=Object(E.a)(l,2),s=i[0],u=i[1],m=function(e,t){var a="";switch(e){case"key":a=function(e){var t=q(e);if(!t){/^[a-zA-Z ]+$/.test(e)||(t="Should be simple word!")}return t}(t);break;default:a=q(t)}return u((function(t){return Object(A.a)(Object(A.a)({},t),{},Object(B.a)({},e,a))})),a},d=function(t){var a=t.target,n=a.name,r=a.value,l=Object(A.a)(Object(A.a)({},c),{},Object(B.a)({},n,r));o(l),m(n,r),e.onChange(e.index,l)};return Object(n.useEffect)((function(){for(var e in c)m(e,c[e])}),[]),r.a.createElement("div",{className:"form-row rule-row"},r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",null,"Config Attribute"),r.a.createElement("input",{type:"text",className:"form-control",name:"key",value:c.key,onChange:d}),s.key&&r.a.createElement("span",{className:"error"},s.key)),r.a.createElement("div",{className:"form-group col-md-3"},r.a.createElement("label",null,"Operation"),r.a.createElement("select",{className:"form-control",name:"opr",value:c.opr,onChange:d},r.a.createElement("option",{value:""},"Choose..."),k.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value,label:e.label})}))),s.opr&&r.a.createElement("span",{className:"error"},s.opr)),r.a.createElement("div",{className:"form-group col-md-3"},r.a.createElement("label",null,"Value"),r.a.createElement("input",{type:"text",className:"form-control",name:"value",value:c.value,onChange:d}),s.value&&r.a.createElement("span",{className:"error"},s.value)))}function P(e){var t=Object(n.useState)(e.join),a=Object(E.a)(t,2),c=a[0],o=a[1];return r.a.createElement("div",{className:"text-center m-5"},r.a.createElement("div",{className:"input-group ml-4"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text"},"Action")),r.a.createElement("select",{className:"custom-select",value:c,onChange:function(t){o(t.target.value),e.onChange(e.index,t.target.value)}},r.a.createElement("option",{value:""},"Choose ..."),r.a.createElement("option",{value:"and"},"AND"),r.a.createElement("option",{value:"or"},"OR"))),!c&&r.a.createElement("span",{className:"error ml-5 float-left"},"This condition is required!"))}var J=Object(i.b)((function(e){return{formRule:e.formRule}}),{editRule:function(e){return function(){var t=Object(h.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!0,t.prev=1,t.next=4,y.a.put("".concat(x,"/").concat(e.id),e);case 4:return t.next=6,N(a);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("Error",t.t0),n=!1;case 12:return t.prev=12,p.store.addNotification({title:n?"Success":"Error: Try Again later",message:n?"Rule Updated":"Update Request failed",type:n?"success":"danger",insert:"top",container:"top-center",animationIn:["animated","fadeIn","jackInTheBox"],animationOut:["animated","fadeOut"],dismiss:{duration:3e3,pauseOnHover:!0}}),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})));return function(e){return t.apply(this,arguments)}}()},addRule:function(e){return function(){var t=Object(h.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!0,t.prev=1,t.next=4,y.a.post(x,e);case 4:return t.next=6,N(a);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),n=!1,console.log("Error",t.t0);case 12:return t.prev=12,p.store.addNotification({title:n?"Success":"Error: Try Again later",message:n?"Rule Added":"Add Request failed",type:n?"success":"danger",insert:"top",container:"top-center",animationIn:["animated","fadeIn","jackInTheBox"],animationOut:["animated","fadeOut"],dismiss:{duration:3e3,pauseOnHover:!0}}),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object(n.useState)([]),a=Object(E.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),i=Object(E.a)(l,2),s=(i[0],i[1],Object(n.useState)("")),u=Object(E.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(!1),v=Object(E.a)(f,2),g=v[0],y=v[1];Object(n.useEffect)((function(){d(e.formRule&&e.formRule.name),o(e.formRule&&e.formRule.conditions)}),[]);var O=function(e,t){c[e]=Object(A.a)(Object(A.a)({},c[e]),t)},x=function(e,t){c[e].join=t},N=function(){var t=Object(h.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a={id:e.formRule.id,name:m,conditions:c},!e.formRule.id){t.next=6;break}return t.next=4,e.editRule(a);case 4:t.next=8;break;case 6:return t.next=8,e.addRule(a);case 8:e.history.push("/dashboard");case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},"Rule (",e.formRule&&e.formRule.id?"Edit":"Add",")"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group col-md-4 p-0"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Name")),r.a.createElement("input",{type:"text",className:"form-control","aria-describedby":"inputGroupPrepend",disabled:!!g,value:m,onChange:function(e){return d(e.target.value)}})),!m&&r.a.createElement("span",{className:"error ml-3 float-left"},"This field is required!")),r.a.createElement("div",{className:"ruleConfig mt-5 mb-5"},g?r.a.createElement("div",{className:"card bg-light mb-3"},r.a.createElement("div",{className:"card-header"},"Rule Conditions"),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},c.map((function(e,t){return r.a.createElement("span",{key:t,className:"m-1"},w(e))}))))):c.map((function(e,t){return"Criteria"===e.type?r.a.createElement(H,{rule:e,index:t,key:t,onChange:O}):r.a.createElement(P,{join:e.join,index:t,key:t,onChange:x})}))),!g&&r.a.createElement("a",{className:"btn btn-success",onClick:function(){if(document.getElementsByClassName("error").length)p.store.addNotification({message:"Please fix all the Error before new Criteria!!!",type:"warning",insert:"top",container:"top-center",animationIn:["animated","fadeIn","jackInTheBox"],animationOut:["animated","fadeOut"],dismiss:{duration:3e3,pauseOnHover:!0}});else{var e=[];c.length>0&&e.push({type:"CriteriaJoin",toString:function(){return this.join?" ".concat(this.join," "):""}}),e.push({type:"Criteria",key:"",value:"",opr:""}),o([].concat(Object(T.a)(c),e))}}},r.a.createElement(R.a,{icon:C.c,"aria-hidden":"true"})," Criteria")),r.a.createElement("div",{className:"card-footer text-muted"},g?[r.a.createElement("button",{key:3,type:"button",className:"btn btn-danger float-left",onClick:function(){return y(!1)}},"Back"),r.a.createElement("button",{key:4,type:"button",className:"btn btn-success float-right",onClick:N},"Submit")]:[r.a.createElement("button",{key:1,type:"button",className:"btn btn-danger float-left",onClick:function(){return e.history.push("/dashboard")}},"Cancel"),r.a.createElement("button",{key:2,type:"button",className:"btn btn-primary float-right",onClick:function(){document.getElementsByClassName("error").length?p.store.addNotification({message:"Please fix all the Error to Preview!!!",type:"danger",insert:"top",container:"top-center",animationIn:["animated","fadeIn","jackInTheBox"],animationOut:["animated","fadeOut"],dismiss:{duration:3e3,pauseOnHover:!0}}):c.length?y(!0):p.store.addNotification({message:"Atleast one criteria must exist to Preview!!!",type:"danger",insert:"top",container:"top-center",animationIn:["animated","fadeIn","jackInTheBox"],animationOut:["animated","fadeOut"],dismiss:{duration:3e3,pauseOnHover:!0}})}},"Preview")]))}));var _=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(f.a,null),r.a.createElement(S,null),r.a.createElement(d.a,{exact:!0,path:"/",component:I}),r.a.createElement(d.a,{exact:!0,path:"/dashboard",component:I}),r.a.createElement(d.a,{exact:!0,path:"/add",component:J}),r.a.createElement(d.a,{exact:!0,path:"/edit",component:J})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=Object(s.d)(m,{},Object(s.a)(u.a));o.a.render(r.a.createElement(i.a,{store:D},r.a.createElement(l.a,null,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.6254348b.chunk.js.map