(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,a,t){},26:function(e,a,t){e.exports=t(44)},44:function(e,a,t){"use strict";t.r(a);for(var n=t(0),l=t.n(n),r=t(23),c=t.n(r),i=t(16),o=t(7),s=t(8),m=t(10),u=t(9),d=t(12),E=(t(14),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"ui centered grid"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{className:"navigation-title",id:"top"},"Johnny Li")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"ui text menu"},l.a.createElement("div",{class:"item"},l.a.createElement(d.b,{exact:!0,to:"/",className:"nav-link",activeStyle:{textDecoration:"underline",color:"black"}},"Books")),l.a.createElement("div",{class:"item"},l.a.createElement(d.b,{exact:!0,to:"/about",className:"nav-link",activeStyle:{textDecoration:"underline",color:"black"}},"Biography")),l.a.createElement("div",{class:"item"},l.a.createElement(d.b,{exact:!0,to:"/contact",className:"nav-link",activeStyle:{textDecoration:"underline",color:"black"}},"Contact"))))))}}]),t}(l.a.Component)),b=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"ui centered grid"},l.a.createElement("div",{class:"row"},l.a.createElement("a",{href:"#top",style:{color:"black"}},l.a.createElement("i",{class:"hand point up outline huge icon"}))),l.a.createElement("i",{class:"copyright outline icon"}),"Johnny Li"),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(l.a.Component),p=function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"app background-about"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"ui card"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:"headShot.jpg",alt:"author"})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"header-text"},"Hi, I'm Johnny"),l.a.createElement("br",null),l.a.createElement("div",{className:"description"},"I'm"," ",l.a.createElement(i.a,{steps:["an author \u270d\ufe0f",1500,"a developer \u2615",1500,"a student \ud83d\udcda",1500],loop:1/0,wrapper:"b"}))))),l.a.createElement(b,null))},h=t(46),v=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={mood:"happy"},e.onClick=function(){"shocked"!==e.state.mood?e.setState({mood:"shocked"}):e.setState({mood:"happy"})},e.onMouseEnter=function(){e.setState({mood:"blissful"})},e.onMouseLeave=function(){e.setState({mood:"happy"})},e.submit=function(){document.getElementById("formTitle").innerHTML="Submitted! Thanks for your interest.",document.getElementById("form").reset()},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({mood:"happy"})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"app background-contact"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{onClick:this.onClick,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},l.a.createElement(h.a,{size:300,mood:this.state.mood,color:"#83D1FB",text:"Hello!"})),l.a.createElement("br",null),l.a.createElement("div",{className:"contact-title"},l.a.createElement(i.a,{steps:["Hello",1e3],loop:"1",wrapper:"b"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{class:"ui segment container",style:{textAlign:"left",width:"370px",paddingTop:"3em"}},l.a.createElement("label",{id:"formTitle",class:"ui top attached green huge label"},"Questions? Drop me a line"),l.a.createElement("form",{id:"form",class:"ui form",style:{fontSize:"17px"},action:"mailto:johnny@ualberta.ca",method:"post"},l.a.createElement("div",{class:"field"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",placeholder:"Name"})),l.a.createElement("div",{class:"field"},l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"text",name:"email",placeholder:"Email"})),l.a.createElement("div",{class:"field"},l.a.createElement("label",null,"Comment"),l.a.createElement("textarea",{name:"comment",rows:"4"})),l.a.createElement("button",{class:"ui primary button",onClick:this.submit,type:"submit"},"Submit"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement(b,null))}}]),t}(l.a.Component),g=t(20),f=t.n(g),k=[],y=0;y<20;y++){var w="./pages/p"+y.toString()+".jpg",j="./thumbnails/p"+y.toString()+".jpg";k.push({original:w,thumbnail:j})}for(var O=[],B=0;B<7;B++){var x="./pages2/p"+B.toString()+".jpg";O.push({original:x,thumbnail:x})}var N=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{class:"ui grid"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"ui container raised segment",id:"101Animals"},l.a.createElement("a",{class:"ui orange ribbon huge label",target:"_blank",rel:"noopener noreferrer",href:"https://www.amazon.com/dp/B07D4LX1LY"},"101 Animals"),l.a.createElement(f.a,{items:k}))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"ui container raised segment",id:"worldBreaker"},l.a.createElement("a",{class:"ui red ribbon huge label",target:"_blank",rel:"noopener noreferrer",href:"https://www.amazon.com/dp/B07CJ29VPJ"},"World Breaker"),l.a.createElement("div",{class:"ui two column stackable center aligned grid"},l.a.createElement("div",{class:"ui vertical divider"}),l.a.createElement("div",{class:"middle aligned row"},l.a.createElement("div",{class:"column"},l.a.createElement("img",{class:"ui huge image",src:"worldBreakerCover.jpg",alt:"cover"})),l.a.createElement("div",{class:"column"},l.a.createElement("img",{class:"ui huge image",src:"worldBreakerBack.jpg",alt:"back"})))))),l.a.createElement("div",{class:"row"},l.a.createElement("br",null),l.a.createElement("div",{class:"ui container raised segment",id:"namesOfFruitsAndVegetables"},l.a.createElement("a",{class:"ui blue ribbon huge label",target:"_blank",rel:"noopener noreferrer",href:"https://www.amazon.com/dp/B07GDCXYZ6"},"Names of Fruits and Vegetables"),l.a.createElement(f.a,{items:O}))),l.a.createElement("div",{class:"row"},l.a.createElement("br",null),l.a.createElement("div",{class:"ui container raised segment",id:"myFirstBookOfThingsThatMove"},l.a.createElement("a",{class:"ui purple ribbon huge label",target:"_blank",rel:"noopener noreferrer",href:"https://www.amazon.com/dp/B07G721HP3"},"My First Book of Things that Move"),l.a.createElement("img",{class:"ui fluid image",src:"thingsThatMoveCover.jpg",alt:"cover"}))),l.a.createElement("div",{class:"centered row"},l.a.createElement("div",{class:"ui text menu"},l.a.createElement("h3",{class:"item",style:{color:"black",fontWeight:"bold"}},"BOOKS"),l.a.createElement("a",{class:"item",href:"#101Animals"},"101 Animals"),l.a.createElement("a",{class:"item",href:"#worldBreaker"},"World Breaker"),l.a.createElement("a",{class:"item",href:"#namesOfFruitsAndVegetables"},"Names of Fruits and Vegetables"),l.a.createElement("a",{class:"item",href:"#myFirstBookOfThingsThatMove"},"My First Book of Things that Move")))),l.a.createElement(b,null))}}]),t}(l.a.Component),S=t(11),M=function(){return l.a.createElement(S.c,null,l.a.createElement(S.a,{exact:!0,path:"/"},l.a.createElement(N,null)),l.a.createElement(S.a,{exact:!0,path:"/about"},l.a.createElement(p,null)),l.a.createElement(S.a,{exact:!0,path:"/contact"},l.a.createElement(v,null)))};c.a.render(l.a.createElement(d.a,{basename:window.location.pathname||""},l.a.createElement(M,null)),document.querySelector("#root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.8bb445e9.chunk.js.map