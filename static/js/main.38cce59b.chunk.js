(this.webpackJsonpspa=this.webpackJsonpspa||[]).push([[0],{19:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(31),c=n.n(s),r=(n(41),n(19),n(42),n(8)),i=n(12),o=n(13),l=new(function(){function e(){Object(i.a)(this,e),this.authenticated=!1}return Object(o.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}()),u=n(2),_=n.p+"static/media/pin.2c68b237.svg",j=n(0);var d=Object(u.g)((function(e){return Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)("nav",{className:"header__nav",children:[Object(j.jsxs)("ul",{className:"header__nav__ul",children:[Object(j.jsx)("li",{className:"header__nav__ul__item",children:Object(j.jsx)("img",{className:"header__nav__ul__item__logo",src:_,alt:""})}),Object(j.jsx)(r.b,{to:"/",className:"header__nav__ul__item",children:Object(j.jsx)("li",{children:"\u041f\u043e\u0438\u0441\u043a"})}),Object(j.jsx)(r.b,{to:"/favorites",className:"header__nav__ul__item",children:Object(j.jsx)("li",{children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})})]}),Object(j.jsx)("ul",{className:"header__nav__ul",children:Object(j.jsx)("li",{onClick:function(){return l.logout((function(){e.history.push("/signin")}))},className:"header__nav__ul__item",children:"\u0412\u044b\u0439\u0442\u0438"})})]})})})),m=(n(52),n(35)),b=function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("input",{className:"input-group__input",placeholder:"\u0427\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c?",onChange:t}),Object(j.jsx)(r.b,{to:"/addToFav",className:"input-group__addToFav",children:Object(j.jsx)(m.a,{})}),Object(j.jsx)("button",{className:"input-group__button",type:"button",onClick:n,children:"\u041d\u0430\u0439\u0442\u0438"})]})},h=(n(53),function(e){var t=e.video;return Object(j.jsxs)("div",{className:"videoCard",children:[Object(j.jsx)("img",{className:"videoCard__img",src:t.snippet.thumbnails.medium.url,alt:t.snippet.description}),Object(j.jsxs)("div",{className:"videoCard__text",children:[Object(j.jsx)("a",{href:"https://www.youtube.com/watch?v=".concat(t.id.videoId),className:"videoCard__text__title",children:t.snippet.title}),Object(j.jsx)("a",{href:"https://www.youtube.com/watch?v=".concat(t.snippet.channelId),className:"videoCard__text__channelName",children:t.snippet.channelTitle})]})]})}),p=(n(54),function(e){var t=e.videos.map((function(e){return Object(j.jsx)(h,{video:e,url:e.id.videoId},e.id.videoId)}));return Object(j.jsx)("div",{className:"videoContainer",children:t})});var v=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})})},f=n(10),O=n.n(f),x=n(14),C=n(36),N=n(34),g=(n(56),n(15)),y=n.n(g),k=y.a.create({baseURL:"https://www.googleapis.com/youtube/v3/",params:{part:"snippet",maxResults:12,key:"AIzaSyCv8Do_zhzv1l4FoXVvLmD3C6FRRTjubg0"}}),w=function(e){Object(C.a)(n,e);var t=Object(N.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onInputChange=function(t){console.log(t.target.value),e.setState({input:t.target.value})},e.onButtonSubmit=Object(x.a)(O.a.mark((function t(){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.get("/search",{params:{q:e.state.input}});case 2:n=t.sent,console.log(n.data),e.setState({videos:n.data.items});case 5:case"end":return t.stop()}}),t)}))),e.state={input:"",videoQuery:"",videos:[]},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"searchComponent",children:[Object(j.jsxs)("div",{className:"searchComponent__searchBlock",children:[Object(j.jsx)("h1",{className:"searchComponent__searchBlock__title",children:"\u041f\u043e\u0438\u0441\u043a \u0432\u0438\u0434\u0435\u043e"}),Object(j.jsx)(b,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit})]}),Object(j.jsx)("div",{className:"searchComponent__videoBlock",children:Object(j.jsx)(p,{videos:this.state.videos})})]})}}]),n}(a.Component),B=(n(75),function(e){return Object(j.jsx)("div",{className:"saveCardContainer",children:Object(j.jsxs)("form",{className:"saveCardContainer__form",children:[Object(j.jsx)("h1",{className:"saveCardContainer__form__title",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"}),Object(j.jsxs)("div",{className:"saveCardContainer__form__inputs",children:[Object(j.jsxs)("div",{className:"saveCardContainer__form__input-form",children:[Object(j.jsx)("label",{htmlFor:"request",className:"saveCardContainer__form__input-form__label",children:"\u0417\u0430\u043f\u0440\u043e\u0441"}),Object(j.jsx)("input",{className:"saveCardContainer__form__input-form__input",type:"text",disabled:"disabled"})]}),Object(j.jsxs)("div",{className:"saveCardContainer__form__input-form",children:[Object(j.jsx)("label",{htmlFor:"title",className:"saveCardContainer__form__input-form__label",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(j.jsx)("input",{className:"saveCardContainer__form__input-form__input",placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text"})]}),Object(j.jsxs)("div",{className:"saveCardContainer__form__input-form",children:[Object(j.jsx)("label",{htmlFor:"sortBy",className:"saveCardContainer__form__input-form__label",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e"}),Object(j.jsx)("input",{className:"saveCardContainer__form__input-form__input",placeholder:"\u0411\u0435\u0437 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438",type:"text"})]})]}),Object(j.jsxs)("div",{className:"saveCardContainer__form__btnBlock",children:[Object(j.jsx)("button",{className:"saveCardContainer__form__btnBlock__btn",onClick:function(){e.history.push("/")},children:"\u041d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c"}),Object(j.jsx)("button",{className:"saveCardContainer__form__btnBlock__btn",onClick:function(){e.history.push("/")},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c"})]})]})})}),I=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{}),Object(j.jsx)("div",{className:"appContainer",children:Object(j.jsx)("div",{className:"appContainer__app",children:Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.b,{path:"/",exact:!0,component:w}),Object(j.jsx)(u.b,{path:"/favorites",component:v})]})})})]})},S=n(22),F=(n(76),function(e){var t=Object(a.useState)(""),n=Object(S.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(""),i=Object(S.a)(r,2),o=i[0],u=i[1],_=function(){var t=Object(x.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,y.a.post("https://salty-atoll-46513.herokuapp.com/signin",{login:s,password:o});case 3:a=t.sent,console.log(a.data.token),"success"===a.data.status&&(l.login((function(){e.history.push("/")})),localStorage.setItem("authToken",a.data.token));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"formContainer",children:Object(j.jsxs)("form",{onSubmit:_,className:"formContainer__form",children:[Object(j.jsx)("h1",{className:"formContainer__form__title",children:"\u0412\u0445\u043e\u0434"}),Object(j.jsxs)("div",{className:"formContainer__form__input-form",children:[Object(j.jsx)("label",{htmlFor:"login",className:"formContainer__form__label",children:"\u041b\u043e\u0433\u0438\u043d"}),Object(j.jsx)("input",{className:"formContainer__form__input",onChange:function(e){c(e.target.value)},type:"text"})]}),Object(j.jsxs)("div",{className:"formContainer__form__input-form",children:[Object(j.jsx)("label",{htmlFor:"password",className:"formContainer__form__label",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(j.jsx)("input",{className:"formContainer__form__input",onChange:function(e){u(e.target.value)},type:"password"})]}),Object(j.jsxs)("button",{className:"formContainer__form__button",type:"submit",children:[" ",Object(j.jsx)("span",{children:"\u0412\u043e\u0439\u0442\u0438"})," "]})]})})}),T=n(16),D=n(33),R=function(e){var t=e.component,n=Object(D.a)(e,["component"]);return Object(j.jsx)(u.b,Object(T.a)(Object(T.a)({},n),{},{render:function(e){return localStorage.getItem("authToken")?Object(j.jsx)(t,Object(T.a)({},e)):Object(j.jsx)(u.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))};var z=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.b,{exact:!0,path:"/signin",component:F}),Object(j.jsx)(u.b,{exact:!0,path:"/addToFav",component:B}),Object(j.jsx)(R,{exact:!0,component:I}),Object(j.jsx)(u.b,{path:"*",component:function(){return"404 NOT FOUND"}})]})})};c.a.render(Object(j.jsx)(r.a,{children:Object(j.jsx)(z,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.38cce59b.chunk.js.map