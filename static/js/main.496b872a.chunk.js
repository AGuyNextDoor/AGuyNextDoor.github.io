(this["webpackJsonpa-blog-nextdoor"]=this["webpackJsonpa-blog-nextdoor"]||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(34),r=a.n(c),o=(a(41),a(1)),i=a(9);var m=a(3),s=function(){return l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{class:"navbar-brand",href:"#"},"A Blog Next Door"),l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavDropdown"},l.a.createElement("ul",{class:"navbar-nav"},l.a.createElement("li",{class:"nav-item active"},l.a.createElement(m.b,{class:"nav-link",to:"/",href:"#"},"Home")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(m.b,{class:"nav-link",to:"/Reflections",href:"Reflections"},"Reflections")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(m.b,{class:"nav-link",to:"/article",href:"#"},"Article")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(m.b,{class:"nav-link",to:"/Drawings",href:"#"},"Drawings"))))))},u=(a(17),a(47),function(e){var t=e.match;return l.a.createElement("div",null,l.a.createElement("h2",null,"Topics"),l.a.createElement("ul",{class:"navbar-nav"},l.a.createElement("li",{class:"nav-item"},l.a.createElement(m.b,{to:"".concat(t.url,"/rendering")},"Rendering with React")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(m.b,{to:"".concat(t.url,"/components")},"Components")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(m.b,{to:"".concat(t.url,"/props-v-state")},"Props v. State"))),l.a.createElement(o.a,{path:"".concat(t.url,"/:topicId"),component:E}),l.a.createElement(o.a,{exact:!0,path:t.url,render:function(){return l.a.createElement("h3",null,"Please select a topic.")}}))}),E=function(e){var t=e.match;return l.a.createElement("div",null,l.a.createElement("h3",null,t.params.topicId))},v=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Home"),l.a.createElement("div",{id:"target"}))},d=(a(27),a(48),function(e){var t=e.match,a=Object(n.useState)(),c=Object(i.a)(a,2),r=c[0],o=c[1],m="Loading...",s=function(){fetch("/api/getArticle/"+t.params.articleId).then((function(e){return e.json()})).then((function(e){m=t.params.articleId,o(e[1])}))};return Object(n.useEffect)((function(){s()}),[r,m,t.params.articleId]),s(),l.a.createElement("div",null,r?l.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}):l.a.createElement("div",null,m))}),h=function(e){var t=e.match,a=Object(n.useState)([]),c=Object(i.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){fetch("/api/getList").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"List of Items"),r.length?l.a.createElement("div",null,l.a.createElement("ul",null,r.map((function(e){return l.a.createElement("li",null,l.a.createElement(m.b,{to:"/article/".concat(e)},e))})))):l.a.createElement("div",null,"Loading..."),l.a.createElement(o.a,{path:"".concat(t.url,"/:articleId"),component:d}))},p=function(e){e.match;var t=Object(n.useState)(),a=Object(i.a)(t,2),c=a[0],r=a[1],o=function(){fetch("/api/getImages").then((function(e){return e.json()})).then((function(e){r(e)}))};return Object(n.useEffect)((function(){o()}),[c,"Loading..."]),o(),l.a.createElement("div",null,c?l.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}}):l.a.createElement("div",null,"Loading..."))},f=function(e){var t=e.match,a=Object(n.useState)([]),c=Object(i.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){fetch("/api/getImages").then((function(e){return console.log("here"),console.log(e),console.log(e.body),e})).then((function(e){return s(e)}))}),[r]),l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"List of Items"),l.a.createElement("h2",null,"Plop"),r?l.a.createElement("div",null,"Images",r,l.a.createElement(m.b,{src:r}),l.a.createElement("img",{src:r})):l.a.createElement("div",null,"Loading..."),l.a.createElement(o.a,{path:"".concat(t.url,"/:articleId"),component:p}))};var g=function(){return l.a.createElement("p",null,l.a.createElement("div",{className:"Body"},l.a.createElement(s,null)),l.a.createElement(o.a,{exact:!0,path:"/",component:v}),l.a.createElement(o.a,{path:"/Reflections",component:u}),l.a.createElement(o.a,{path:"/article",component:h}),l.a.createElement(o.a,{path:"/Drawings",component:f}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(128);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m.a,null,l.a.createElement(g,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,a){e.exports=a(129)},41:function(e,t,a){}},[[36,1,2]]]);
//# sourceMappingURL=main.496b872a.chunk.js.map