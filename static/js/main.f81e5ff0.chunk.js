(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,a){e.exports=a(77)},77:function(e,t,a){"use strict";a.r(t);a(41);var n=a(1),l=a.n(n),r=a(17),c=a.n(r),i=a(8),o=a(37),u=a(15),m=a(85),s=a(78),d=a(79),E=a(80),p=a(81),h=a(82),f=a(83),v=a(84);var g=function(e){var t=e.img,a=e.cap,n=e.title,r=e.subtitle,c=e.body,i=e.button;return l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement(d.a,{top:!0,width:"100%",height:"300vh",src:t,alt:a}),l.a.createElement(E.a,null,l.a.createElement(p.a,null,n),l.a.createElement(h.a,null,r),l.a.createElement(f.a,null,c),l.a.createElement(v.a,null,i))))},b=function(e){return l.a.createElement(g,{img:"https://workiz.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-13-at-21.36.23.png",cap:"Card image cap",title:"Why us?",subtitle:"We are a very COOL company aha",body:"please buy our airconditioners im going to lose the house",button:"Button"})},y=function(e){return l.a.createElement(g,{img:"https://moula.com.au/wp-content/uploads/2017/06/Tradie-Business-Loans-Moula-Feature.jpg",cap:"Card image cap",title:"Not sure?",subtitle:"Not sure? Contact us for a free quote, whats the harm?",body:"Click here for your free quote!",button:"Quote!"})},w=function(e){return l.a.createElement(g,{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-8h6dXDypByKfrEkNo1fVGCgJHsbufXqFweayqaKT1-aT7Nlrw&s",cap:"Card image cap",title:"Our Promise.",subtitle:"As a small business we pride our selves on our quality of service",body:"Come give us a call or an email.",button:"Contact us"})},x=function(e){return l.a.createElement(g,{img:"http://refcon.com.au/images/asc_logo.png",cap:"Card image cap",title:"REFCON Group",subtitle:"The affordable specialists in commercial and residential air-conditioning solutions. We are specialised in all type of commercial and residential air-conditioning including cold rooms, freezer rooms, cold display cabinets, drink fridges, related electrical works and much more. We will guarantee high quality service with affordable solutions that keep our clients coming back. We offer regular and general maintenance and repair work on most common makes and models including but not limited to Carrier, Daikin, Toshiba, Fujitsu, Mitsubishi, Samsung, and LG etc. System types include ducted unit, high-wall split systems, room air conditioners and much more.",body:"Come give us a call or an email.",button:"Contact us"})},O=(s.a,function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,1)[0];return l.a.createElement("div",null,l.a.createElement(m.a,{in:a},l.a.createElement(x,null)))}),k=a(86),C=a(87),N=function(e){var t=e.service;return l.a.createElement(g,{img:"http://refcon.com.au/images/asc_logo.png",cap:"Card image cap",title:t.name,subtitle:t.description,body:t.brief,button:"GET A QUOTE TODAY!!!"})},T=function(e){var t=e.services,a=Object(n.useState)(!0),r=Object(i.a)(a,1)[0];return l.a.createElement("div",null,l.a.createElement(m.a,{in:r},l.a.createElement("h3",null,"Our Services"),l.a.createElement(k.a,{fluid:!0},l.a.createElement(C.a,null,t[0]?t.map((function(e,t){return l.a.createElement("div",{class:"col-md-6",style:{padding:15}},l.a.createElement(N,{key:t,service:e}))})):null))))},j=a(88),S=a(89),A=a(90),q=a(91),B=function(e){return l.a.createElement("div",null,l.a.createElement(j.a,null,l.a.createElement(k.a,{fluid:"xl",style:{backgroundColor:"#AFFFF0"}},l.a.createElement(S.a,{style:{paddingTop:20}},l.a.createElement(A.a,{for:"userEmail"},"GET A QUOTE TODAY!!!"),l.a.createElement(q.a,{type:"email",name:"email",id:"userEmail",placeholder:"E-Mail"})),l.a.createElement(S.a,null,l.a.createElement(q.a,{type:"string",name:"number",id:"phNumber",placeholder:"Phone Number"})),l.a.createElement(S.a,null,l.a.createElement(q.a,{type:"select",name:"select",id:"selector"},l.a.createElement("option",null,"choose a service..."),l.a.createElement("option",null,"Air-Conditioning"),l.a.createElement("option",null,"Refrigeration"))),l.a.createElement(S.a,null,l.a.createElement(q.a,{type:"textarea",name:"text",id:"textField",placeholder:"Provide a brief description of what you would like installed and the size of the space",style:{paddingBottom:"32vh"}}),l.a.createElement(A.a,null)))))},F=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,1)[0];return l.a.createElement("div",null,l.a.createElement(m.a,{in:a},l.a.createElement("h3",null,"Contact Us"),l.a.createElement(B,null)))},D=a(35),G=a(92),H=a(93),U=a(94),W=a(95),L=[{src:"https://www.daikin.com.au/sites/default/files/Humidification%20Blog.png   ",altText:"Slide 1",caption:"Enjoy the perfect temperature for your home.",width:"100%",height:"500vh"},{src:"https://www.climatastic.com/wp-content/uploads/2018/10/air-con-unit.jpg",altText:"Stock image 2",caption:"ahah i love this cold!",width:"100%",height:"500vh"},{src:"https://www.hhaircon.com.au/wp-content/uploads/2014/11/shutterstock_156704747.jpg",altText:"Yes",caption:"Keepin it cool since 2014",width:"100%",height:"500vh"}],P=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!1),u=Object(i.a)(o,2),m=u[0],s=u[1],d=function(){if(!m){var e=r===L.length-1?0:r+1;c(e)}},E=function(){if(!m){var e=0===r?L.length-1:r-1;c(e)}},p=L.map((function(e){return l.a.createElement(D.a,{onExiting:function(){return s(!0)},onExited:function(){return s(!1)},key:e.src},l.a.createElement("img",{src:e.src,alt:e.altText,width:e.width,height:e.height}),l.a.createElement(G.a,{captionText:e.caption,captionHeader:e.caption}))}));return l.a.createElement(H.a,{activeIndex:r,next:d,previous:E},l.a.createElement(U.a,{items:L,activeIndex:r,onClickHandler:function(e){m||c(e)}}),p,l.a.createElement(W.a,{direction:"prev",directionText:"Previous",onClickHandler:E}),l.a.createElement(W.a,{direction:"next",directionText:"Next",onClickHandler:d}))};var R=function(){return l.a.createElement("div",null,l.a.createElement(P,null),l.a.createElement(k.a,{fluid:!0},l.a.createElement("div",{style:{paddingTop:15}},l.a.createElement(C.a,{style:{width:"125"}},l.a.createElement("div",{className:"col-xs-6 col-sm-3",style:{padding:15}},l.a.createElement(b,null)),l.a.createElement("div",{className:"col-xs-6 col-sm-3",style:{padding:15}},l.a.createElement(y,null)),l.a.createElement("div",{className:"col-xs-6 col-sm-3",style:{padding:15}},l.a.createElement(w,null)),l.a.createElement("div",{className:"col-xs-6 col-sm-3",style:{padding:15}},l.a.createElement(B,null))))))},I=a(98),z=a(96),J=a(97),K=function(e){return l.a.createElement(z.a,null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"}),l.a.createElement("td",null,"Phone"),l.a.createElement("td",null,"+61 420 691 337")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"}),l.a.createElement("td",null,"Email"),l.a.createElement("td",null,"epicgames@gmail.com"))))},M=function(e){var t=e.service;return l.a.createElement(z.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Brief"),l.a.createElement("th",null))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},t.name),l.a.createElement("td",null,t.brief),l.a.createElement("td",null,l.a.createElement(J.a,null,l.a.createElement(v.a,null,l.a.createElement("p",null,"EDIT")),l.a.createElement(v.a,null,l.a.createElement("p",null,"DELETE")))))))},Q=(z.a,function(e){var t=e.services,a=Object(n.useState)(!0),r=Object(i.a)(a,1)[0];return l.a.createElement("div",null,l.a.createElement(m.a,{in:r},l.a.createElement(s.a,null,l.a.createElement(E.a,null,l.a.createElement("h1",null,"Welcome Admin!"),l.a.createElement(v.a,null,"Create a new Service"))),l.a.createElement("h3",null,"Our Services"),l.a.createElement(k.a,null,l.a.createElement(C.a,null,t[0]?t.map((function(e,t){return l.a.createElement(I.a,{xs:"6"},l.a.createElement(M,{key:t,service:e}))})):null))))}),Y=function(e){var t=e.addNewService;return l.a.createElement("form",{onSubmit:function(a){return t(a,e)}},l.a.createElement("label",{className:"label"},"Name"),l.a.createElement("input",{type:"text",className:"input",name:"name",placeholder:"Name of serivce",required:!0}),l.a.createElement("label",{className:"label"},"Brief"),l.a.createElement("input",{type:"text",className:"input",name:"brief",placeholder:"Brief Summary of service"}),l.a.createElement("label",{className:"label"},"Description"),l.a.createElement("textarea",{className:"input",name:"description",placeholder:"Any information you wish to provide about the service",required:!0}),l.a.createElement("input",{type:"submit",value:"Create Service",className:"button is-info"}))},_=a(99),X=a(100),V=a(101),Z=a(102),$=a(103),ee=a(104),te=a(105),ae=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],c=a[1];return l.a.createElement("div",null,l.a.createElement(_.a,{color:"light",light:!0,expand:"md"},l.a.createElement(X.a,{href:"/"},"Refcon Group Refrigeration"),l.a.createElement(V.a,{onClick:function(){return c(!r)}}),l.a.createElement(Z.a,{isOpen:r,navbar:!0},l.a.createElement($.a,{className:"mr-auto",navbar:!0},l.a.createElement(ee.a,null,l.a.createElement(te.a,{href:"/contact"},"Contact Us")),l.a.createElement(ee.a,null,l.a.createElement(te.a,{href:"/about"},"About Us")),l.a.createElement(ee.a,null,l.a.createElement(te.a,{href:"/services"},"All Services"))))))},ne=a(16),le=a.n(ne),re=a(36),ce=a.n(re).a.create({baseURL:"https://refcongroupsite.herokuapp.com/",timeout:5e3}),ie=function(){var e;return le.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,le.a.awrap(ce.get("/services"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),console.log("got an error from the server fetching services",t.t0),t.t0;case 11:case"end":return t.stop()}}),null,null,[[0,7]])},oe=function(e){var t,a;return le.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={name:e.name,brief:e.brief,description:e.description},n.prev=1,n.next=4,le.a.awrap(ce.post("/services",t));case 4:return a=n.sent,n.abrupt("return",a.data);case 8:throw n.prev=8,n.t0=n.catch(1),console.log("Error adding service:",n.t0),n.t0;case 12:case"end":return n.stop()}}),null,null,[[1,8]])},ue=a(106);function me(){return l.a.createElement(ue.a,null,l.a.createElement(k.a,null,l.a.createElement(C.a,null,l.a.createElement(I.a,null),l.a.createElement(I.a,null,l.a.createElement(K,null)),l.a.createElement(I.a,null))))}var se=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];function c(e,t){e.preventDefault();var a=e.target,n={name:a.name.value,brief:a.brief.value,description:a.description.value};oe(n).then((function(e){var a=e;console.log(a),t.history.push("/services")})).catch((function(e){console.log("An error occurred adding the service: ".concat(e))}))}return Object(n.useEffect)((function(){return ie().then((function(e){return r(e)})).catch((function(e){console.log("Oops theres something wrong with this request. The error we got is : ".concat(e))})),console.log(a),function(){}})),l.a.createElement(o.a,null,l.a.createElement(ae,null),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",component:R}),l.a.createElement("div",null,l.a.createElement(u.a,{exact:!0,path:"/services",render:function(){return l.a.createElement(T,{services:a})}}),l.a.createElement(u.a,{exact:!0,path:"/services/new",render:function(e){return l.a.createElement(Y,Object.assign({},e,{addNewService:c}))}}),l.a.createElement(u.a,{exact:!0,path:"/contact",component:F}),l.a.createElement(u.a,{exact:!0,path:"/about",component:O}),l.a.createElement(u.a,{exact:!0,path:"/admin",render:function(){return l.a.createElement(Q,{services:a})}}))),l.a.createElement(me,null))};c.a.render(l.a.createElement(se,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f81e5ff0.chunk.js.map