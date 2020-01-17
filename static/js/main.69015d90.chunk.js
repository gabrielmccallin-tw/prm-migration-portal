(this["webpackJsonpmigration-portal"]=this["webpackJsonpmigration-portal"]||[]).push([[0],{20:function(e,a,t){e.exports={content:"App_content__tFr1T"}},23:function(e,a,t){e.exports=t(46)},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(17),c=t.n(r),l=t(7),i=t(5),u="prm-migration-portal",o="patients",m="patientinfo",h=function(){var e=Object(n.useState)(!0),a=Object(i.a)(e,2),t=a[0],r=a[1],c=function(){r(!t)};return s.a.createElement("header",{className:"nhsuk-header nhsuk-header--transactional",role:"banner","data-testid":"header"},s.a.createElement("div",{className:"nhsuk-width-container nhsuk-header__container"},s.a.createElement("div",{className:"nhsuk-header__logo"},s.a.createElement(l.b,{className:"nhsuk-header__link",to:"/".concat(u),"aria-label":"NHS homepage"},s.a.createElement("svg",{className:"nhsuk-logo nhsuk-logo--white",xmlns:"http://www.w3.org/2000/svg",focusable:"false",viewBox:"0 0 40 16"},s.a.createElement("path",{fill:"#fff",d:"M0 0h40v16H0z"}),s.a.createElement("path",{fill:"#005eb8",d:"M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"}),s.a.createElement("img",{alt:"nhs-logo",src:"https://assets.nhs.uk/images/nhs-logo.png"})))),s.a.createElement("div",{className:"nhsuk-header__transactional-service-name"},s.a.createElement("a",{className:"nhsuk-header__transactional-service-name--link",href:"/"},"Migration Portal")),s.a.createElement("div",{className:"nhsuk-header__content",id:"content-header"},s.a.createElement("div",{className:"nhsuk-header__menu nhsuk-header__menu--only"},s.a.createElement("button",{className:"nhsuk-header__menu-toggle",id:"toggle-menu",onClick:c,"aria-controls":"header-navigation","aria-label":"Open menu"},"Menu")))),s.a.createElement("nav",{className:t?"nhsuk-header__navigation":"nhsuk-header__navigation js-show",id:"header-navigation",role:"navigation","aria-label":"Primary navigation","aria-labelledby":"label-navigation"},s.a.createElement("div",{className:"nhsuk-width-container"},s.a.createElement("p",{className:"nhsuk-header__navigation-title"},s.a.createElement("span",{id:"label-navigation"},"Menu"),s.a.createElement("button",{className:"nhsuk-header__navigation-close",id:"close-menu"},s.a.createElement("svg",{className:"nhsuk-icon nhsuk-icon__close",onClick:c,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},s.a.createElement("path",{d:"M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"})),s.a.createElement("span",{className:"nhsuk-u-visually-hidden"},"Close menu"))),s.a.createElement("ul",{className:"nhsuk-header__navigation-list nhsuk-header__navigation-list--tight"},s.a.createElement("li",{className:"nhsuk-header__navigation-item"},s.a.createElement(l.b,{className:"nhsuk-header__navigation-link",to:"/".concat(u)},"Find patient",s.a.createElement("svg",{className:"nhsuk-icon nhsuk-icon__chevron-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},s.a.createElement("path",{d:"M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"})))),s.a.createElement("li",{className:"nhsuk-header__navigation-item"},s.a.createElement(l.b,{className:"nhsuk-header__navigation-link",to:"/".concat(u,"/activity")},"Pending transfer",s.a.createElement("svg",{className:"nhsuk-icon nhsuk-icon__chevron-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},s.a.createElement("path",{d:"M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"}))))))))},d=t(20),p=t.n(d),_=t(21),b=t(1),k=t.n(b),N=t(8),v=function(e){var a=new Date(e);return"".concat(a.getDate(),"/").concat(a.getMonth()+1,"/").concat(a.getFullYear())},E=function(e){var a=e.confirmDeduction,t=e.data,n=t.nhsNumber,r=t.patientName,c=t.dob,i=t.practice,u=t.telephone,o=t.email;return s.a.createElement("div",{"data-testid":"confirmation"},s.a.createElement("dl",{className:"nhsuk-summary-list"},s.a.createElement("div",{className:"nhsuk-summary-list__row"},s.a.createElement("dt",{className:"nhsuk-summary-list__key"},"NHS Number"),s.a.createElement("dd",{className:"nhsuk-summary-list__value"},n)),s.a.createElement("div",{className:"nhsuk-summary-list__row"},s.a.createElement("dt",{className:"nhsuk-summary-list__key"},"Name"),s.a.createElement("dd",{className:"nhsuk-summary-list__value"},r)),s.a.createElement("div",{className:"nhsuk-summary-list__row"},s.a.createElement("dt",{className:"nhsuk-summary-list__key"},"Date of birth"),s.a.createElement("dd",{className:"nhsuk-summary-list__value"},v(c))),s.a.createElement("div",{className:"nhsuk-summary-list__row"},s.a.createElement("dt",{className:"nhsuk-summary-list__key"},"Current GP Practice"),s.a.createElement("dd",{className:"nhsuk-summary-list__value"},i)),s.a.createElement("div",{className:"nhsuk-summary-list__row"},s.a.createElement("dt",{className:"nhsuk-summary-list__key"},"Telephone"),s.a.createElement("dd",{className:"nhsuk-summary-list__value"},u)),s.a.createElement("div",{className:"nhsuk-summary-list__row"},s.a.createElement("dt",{className:"nhsuk-summary-list__key"},"Email address"),s.a.createElement("dd",{className:"nhsuk-summary-list__value"},o))),s.a.createElement("button",{className:"nhsuk-button",onClick:function(){return a()}},"Add to transfer list"),s.a.createElement("div",{className:"nhsuk-back-link"},s.a.createElement(l.b,{className:"nhsuk-back-link__link",to:"/home"},s.a.createElement("svg",{className:"nhsuk-icon nhsuk-icon__chevron-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},s.a.createElement("path",{d:"M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"})),"Go back")))},f=function(e){var a=e.submitDeduction,t=Object(n.useState)(""),r=Object(i.a)(t,2),c=r[0],l=r[1],u=Object(n.useState)(""),o=Object(i.a)(u,1)[0];return s.a.createElement("div",null,s.a.createElement("form",{"data-testid":"deduction-form",onSubmit:function(e){e.preventDefault(),a(c)},autoComplete:"off"},s.a.createElement("div",{className:"nhsuk-form-group"},s.a.createElement("label",{className:"nhsuk-label",id:"nhs-number-input",htmlFor:"nhs-number"},"NHS Number"),s.a.createElement("input",{className:o?"nhsuk-input nhsuk-input--error":"nhsuk-input",id:"nhs-number","aria-labelledby":"nhs-number-input",name:"nhs-number",type:"text",onChange:function(e){return l(e.target.value)}})),s.a.createElement("span",{className:"nhsuk-error-message","data-testid":"error"},o),s.a.createElement("button",{className:"nhsuk-button",type:"submit"},"Find patient")))},g=t(22),w=t(10),y="stub",x="prod",j="none",O={api:j},P=function(){var e;return(e={},Object(w.a)(e,y,"http://localhost:5001"),Object(w.a)(e,x,"https://dev.prm.patient-deductions.nhs.uk"),Object(w.a)(e,j,""),e)[O.api]},S=[{patientName:"Richard Grayson",practice:"GP Practice 1",telephone:"07700 900457",email:"richard.grayson@example.com",dob:"1978-01-05T00:00:00",nhsNumber:"1234567890"},{patientName:"Rachel Roth",practice:"GP Practice 2",telephone:"07700 900457",email:"rachel.roth@example.com",dob:"1978-01-05T00:00:00",nhsNumber:"2234567890"},{patientName:"Donna Troy",practice:"GP Practice 3",telephone:"07700 900457",email:"donna.troy@example.com",dob:"1978-01-05T00:00:00",nhsNumber:"3234567890"},{patientName:"Kory Anders",practice:"GP Practice 4",telephone:"07700 900457",email:"Kory.Anders@example.com",dob:"1978-01-05T00:00:00",nhsNumber:"4234567890"},{patientName:"Garfield Logan",practice:"GP Practice 5",telephone:"07700 900457",email:"garfield.logan@example.com",dob:"1978-01-05T00:00:00",nhsNumber:"5234567890"}],D=[],M=function(e){return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k.a.awrap(fetch("".concat(P(),"/").concat(o),{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}));case 2:return a.abrupt("return",!0);case 3:case"end":return a.stop()}}))},T=function(e){return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",""===P()?D.push(Object(g.a)({},e,{status:"Success",requestDate:"2019-12-05T00:00:00"})):M(e));case 1:case"end":return a.stop()}}))},B=function(e){var a;return k.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.awrap(fetch("".concat(P(),"/").concat(m,"/").concat(e)));case 2:return a=t.sent,t.next=5,k.a.awrap(a.json());case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}))},G=function(e){return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",""===P()?S.find((function(a){return a.nhsNumber===e})):B(e));case 1:case"end":return a.stop()}}))},C=function(e){var a=e.patients;return s.a.createElement("div",null,s.a.createElement("div",{"data-testid":"status-list",className:"nhsuk-table__panel-with-heading-tab"},s.a.createElement("div",{className:"nhsuk-table-responsive"},s.a.createElement("table",{className:"nhsuk-table"},s.a.createElement("caption",{className:"nhsuk-table__caption"},"Other possible causes of your symptoms"),s.a.createElement("thead",{className:"nhsuk-table__head"},s.a.createElement("tr",{className:"nhsuk-table__row"},s.a.createElement("th",{className:"nhsuk-table__header",scope:"col"},"NHS Number"),s.a.createElement("th",{className:"nhsuk-table__header",scope:"col"},"Patient Name"),s.a.createElement("th",{className:"nhsuk-table__header",scope:"col"},"Requested By"),s.a.createElement("th",{className:"nhsuk-table__header",scope:"col"},"Requested Date"),s.a.createElement("th",{className:"nhsuk-table__header",scope:"col"},"Status"))),s.a.createElement("tbody",{className:"nhsuk-table__body"},a.map((function(e){var a=e.nhsNumber,t=e.patientName,n=e.requester,r=e.requestDate,c=e.status;return s.a.createElement("tr",{className:"nhsuk-table__row"},s.a.createElement("td",{className:"nhsuk-table__cell"},a),s.a.createElement("td",{className:"nhsuk-table__cell "},t),s.a.createElement("td",{className:"nhsuk-table__cell "},n),s.a.createElement("td",{className:"nhsuk-table__cell "},v(r)),s.a.createElement("td",{className:"nhsuk-table__cell "},c))})))))),s.a.createElement("button",{className:"nhsuk-button nhsuk-u-align-right"},"Transfer all patients"))},H=function(e){var a;return k.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.awrap(fetch("".concat(P(),"/").concat(o)));case 2:return a=e.sent,e.next=5,k.a.awrap(a.json());case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}))},q=function(){var e=Object(N.f)(),a=Object(n.useState)(),t=Object(i.a)(a,2),r=t[0],c=t[1],l=Object(n.useState)([]),o=Object(i.a)(l,2),m=o[0],h=o[1],d=function(){var e;return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k.a.awrap(k.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",""===P()?D:H());case 1:case"end":return e.stop()}})));case 2:e=a.sent,h(e);case 4:case"end":return a.stop()}}))};return Object(n.useEffect)((function(){d()}),[]),s.a.createElement(N.c,null,s.a.createElement(N.a,{exact:!0,path:"/".concat(u)},s.a.createElement(f,{submitDeduction:function(a){var t;return k.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.a.awrap(G(a));case 2:t=n.sent,c(t),e.push("/".concat(u,"/confirmation"));case 5:case"end":return n.stop()}}))},validateNhsNumber:F})),s.a.createElement(N.a,{path:"/".concat(u,"/confirmation")},s.a.createElement(E,{data:r,confirmDeduction:function(){var a,t;return k.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a=r.patientName,t=r.nhsNumber,n.next=3,k.a.awrap(T({patientName:a,nhsNumber:t,requester:"3945873948567"}));case 3:d(),e.push("/".concat(u,"/activity"));case 5:case"end":return n.stop()}}))}})),s.a.createElement(N.a,{path:"/".concat(u,"/activity")},s.a.createElement(C,{patients:m})))},F=function(e){return/^\d{10}$/.test(e)?"9"===e.charAt(0)?"Patient is not in your practice":"":"No Patient found with that NHS Number"},z=function(){var e;return e=Object(_.parse)(window.location.search,{parseBooleans:!0}),Object.entries(e).forEach((function(e){var a=Object(i.a)(e,2),t=a[0],n=a[1];O[t]=n})),s.a.createElement(n.Fragment,null,s.a.createElement(h,null),s.a.createElement("div",{className:p.a.content},s.a.createElement(q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(45);c.a.render(s.a.createElement(l.a,null,s.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.69015d90.chunk.js.map