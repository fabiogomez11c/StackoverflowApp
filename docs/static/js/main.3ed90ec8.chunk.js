(this.webpackJsonpstackoverflowapp=this.webpackJsonpstackoverflowapp||[]).push([[0],{21:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(15),a=c.n(n),r=c(6),i=c(10),o=c(2),l=(c(21),c(0)),j=function(e){var t=e.section;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("li",{className:"navbar__button",children:Object(l.jsx)(i.b,{exact:!0,to:t.route,activeClassName:"active",className:"navbar__link",children:t.section})})})},d=c.p+"static/media/stackoverflow.87df81e9.svg",u=(c(31),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"navbar",children:[Object(l.jsx)("img",{alt:"stackoverflow_icon",src:d,className:"navbar__icon"}),Object(l.jsx)("ul",{className:"navbar__list",children:[{section:"Search",route:"/"},{section:"Tags",route:"/tags"},{section:"Top Users",route:"/users"}].map((function(e,t){return Object(l.jsx)(j,{section:e},t)}))})]})})}),b=c.p+"static/media/lupa.db0d55bc.svg",m=Object(s.createContext)(null),h=function(e){var t=Object(s.useContext)(m).setData,c=Object(s.useState)(!1),n=Object(r.a)(c,2),a=n[0],i=n[1];return Object(s.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){t(e),i(!0)}))}),[e,t]),a},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"enter":return"";case"change":return t.payload;default:return e}},f=(c(32),function(){var e=Object(s.useReducer)(O,""),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)("https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow"),i=Object(r.a)(a,2),o=i[0],j=i[1],d=h(o),u=function(e){if(e.preventDefault(),!(c.trim().length<=1)){!function(e,t){t("https://api.stackexchange.com/2.3/search?intitle=".concat(encodeURI(e),"&order=desc&sort=activity&site=stackoverflow"))}(c,j);n({type:"enter",payload:""})}};return Object(l.jsxs)("div",{className:"browser",children:[Object(l.jsx)("form",{onSubmit:u,children:Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",className:"browser__input",autoComplete:"off",placeholder:d?"Tell me what's wrong...":"Loading...",value:c,onChange:function(e){var t={type:"change",payload:e.target.value};n(t)}})})}),Object(l.jsx)("img",{alt:"browser__icon",className:"browser__icon",src:b,onClick:u})]})});c(33);var x=function(e){var t,c=e.title,s=e.nAnswers,n=e.fAnswer,a=e.tags,r=e.link,i=(t=c)?t.replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,">").replace(/>/g,"<").replace(/&gt;/g,">"):"";return Object(l.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h4",{children:i}),Object(l.jsxs)("div",{className:"card__info",children:[Object(l.jsxs)("div",{className:"card__text",children:[Object(l.jsx)("p",{children:"Answers:"}),Object(l.jsx)("span",{className:"card__bold",children:Object(l.jsx)("p",{children:s})})]}),Object(l.jsxs)("div",{className:"card__text",children:[Object(l.jsx)("p",{children:"Final Answer:"}),Object(l.jsx)("span",{className:"card__bold",children:Object(l.jsx)("p",{children:n?"YES":"NO"})})]})]}),Object(l.jsx)("div",{className:"card__tags",children:null===a||void 0===a?void 0:a.slice(0,3).map((function(e,t){return Object(l.jsx)("span",{className:"card__tag",children:Object(l.jsx)("p",{children:e})},t)}))})]})})},p=(c(34),function(){var e,t=null===(e=Object(s.useContext)(m).data.items)||void 0===e?void 0:e.slice(0,6);return Object(l.jsx)("div",{className:"cards",children:t?t.map((function(e,t){return Object(l.jsx)(x,{title:e.title,nAnswers:e.answer_count,fAnswer:e.is_answered,tags:e.tags,link:e.link},t)})):Object(l.jsx)("div",{})})}),v=(c(35),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"search",children:[Object(l.jsx)(f,{}),Object(l.jsx)(p,{})]})})}),g=(c(36),function(e){var t=e.item,c=e.urlHandler,s=e.btnActivate,n=e.btnState;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),document.getElementById(n).className="tags__btn",e.target.classList.add("clicked");var a="c#"===t.name?"c%23":"c++"===t.name?"c%2B%2B":t.name;s(t.name),c("https://api.stackexchange.com/2.3/search?order=desc&sort=activity&tagged=".concat(a,"&site=stackoverflow"))},id:t.name,className:"tags__btn",children:t.name})})}),_=(c(37),function(){var e=Object(s.useState)("python"),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)("https://api.stackexchange.com/2.3/search?order=desc&sort=activity&tagged=".concat(c,"&site=stackoverflow")),i=Object(r.a)(a,2),o=i[0],j=i[1];h(o);var d=Object(s.useState)({}),u=Object(r.a)(d,2),b=u[0],m=function(e,t){var c=Object(s.useState)(!1),n=Object(r.a)(c,2),a=n[0],i=n[1];return Object(s.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){t(e),i(!0)}))}),[e,t]),a}("https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow",u[1]);return Object(l.jsxs)("div",{className:"tag-section",children:[Object(l.jsx)("div",{className:"tags",children:m?b.items.slice(0,10).map((function(e){return Object(l.jsx)(g,{item:e,urlHandler:j,btnActivate:n,btnState:c},e.name)})):Object(l.jsx)("p",{children:"Loading..."})}),Object(l.jsx)(p,{})]})}),N=(c(38),function(e){var t=e.userName,c=e.profileImage,s=e.profileLink;return Object(l.jsxs)("div",{className:"user__info",children:[Object(l.jsx)("img",{alt:"user_name user_item",src:c,className:"user__image"}),Object(l.jsx)("div",{className:"user__name user_item",children:Object(l.jsx)("p",{children:t})}),Object(l.jsx)("div",{className:"user__profile user_item",children:Object(l.jsx)("a",{href:s,children:"Profile"})})]})}),k=(c(39),function(){var e=Object(s.useContext)(m).data,t=h("https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&site=stackoverflow");return Object(l.jsx)("div",{className:"user-section",children:Object(l.jsx)("div",{className:"users",children:t?e.items.slice(0,8).map((function(e){return Object(l.jsx)(N,{userName:e.display_name,profileImage:e.profile_image,profileLink:e.link},e.display_name)})):"Loading..."})})}),w=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:v}),Object(l.jsx)(o.a,{exact:!0,path:"/tags",component:_}),Object(l.jsx)(o.a,{exact:!0,path:"/users",component:k})]})]})})};var y=function(){var e=Object(s.useState)({type:"",data:[]}),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(m.Provider,{value:{data:c,setData:n},children:Object(l.jsx)(w,{})})})};a.a.render(Object(l.jsx)(y,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.3ed90ec8.chunk.js.map