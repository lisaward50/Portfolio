(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),l=t.n(c),i=t(1),s=t(2),m=t(4),o=t(3),u=t(5),p=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"#"},r.a.createElement("i",{className:"fas fa-code"})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},r.a.createElement("i",{className:"fas fa-question"})," \xa0 ABOUT ME \xa0 \xa0 ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},r.a.createElement("i",{className:"far fa-lightbulb"})," \xa0 PROJECTS \xa0 \xa0 ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},r.a.createElement("i",{className:"far fa-envelope"})," \xa0 CONTACT / INFO"))))))}}]),a}(n.Component),d=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("h3",{className:"display-6 text-white"},"// LISA REBECCA WARD"),r.a.createElement("p",{id:"intro",className:"lead text-primary"},"Full stack web developer, based in NYC. I'm passionate about creating beautiful functional websites.")),r.a.createElement("div",{className:"col"},r.a.createElement("img",{id:"pic",className:"rounded float-right",src:"images/pic.jpeg"}))))))}}]),a}(n.Component),b=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.description,n=e.img;return r.a.createElement("div",{className:"col-sm-6 col-lg-4 mb-3"},r.a.createElement("div",{className:"card text-white bg-dark border-light"},r.a.createElement("img",{className:"card-img-top",src:n}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a),r.a.createElement("p",{className:"card-text"},t),r.a.createElement("a",{href:"#",className:"btn btn-sm btn-outline-primary"},r.a.createElement("i",{className:"fas fa-hammer"})," \xa0 Under Construction"))))}}]),a}(n.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"display-6 text-white"},"// PROJECTS"),r.a.createElement("br",null),r.a.createElement("div",{className:"row align-items-stretch"},r.a.createElement(b,{title:"Crypto Gold",description:"Cryptocurrency App",img:"images/proj1.jpg"}),r.a.createElement(b,{title:"Idea Factory",description:"Patent Check App",img:"images/proj3.jpeg"}),r.a.createElement(b,{title:"Bartender",description:"Cocktail App",img:"images/proj5.jpeg"}),r.a.createElement(b,{title:"Sushi Yasuda",description:"Restaurant App",img:"images/sushi_yasuda.png"}),r.a.createElement(b,{title:"Beerstorm",description:"Craft Beer App",img:"images/beerstorm.png"}),r.a.createElement(b,{title:"Elevate",description:"Networking App",img:"images/proj2.jpg"})))}}]),a}(n.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"contact_info",className:"container text-white"},r.a.createElement("h3",{className:"display-6 text-white"},"// CONTACT / INFO"),r.a.createElement("br",null),r.a.createElement("ul",{className:"nav flex-column align-items-center flex-sm-row justify-content-sm-between"},r.a.createElement("li",null,r.a.createElement("i",{className:"far fa-envelope"})," \xa0 lisa.ward50@gmail.com"),r.a.createElement("li",null,r.a.createElement("i",{className:"fab fa-linkedin"})," \xa0 lisa-ward-cfa-bb906954"),r.a.createElement("li",null,r.a.createElement("i",{className:"fab fa-github-square"})," \xa0 lisaward50")))}}]),a}(n.Component),g=(t(13),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-dark"},r.a.createElement(p,null),r.a.createElement(d,null),r.a.createElement(E,null),r.a.createElement(f,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.6457b95f.chunk.js.map