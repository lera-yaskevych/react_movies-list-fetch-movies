(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},18:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){},23:function(e,t,i){},24:function(e,t,i){"use strict";i.r(t);var s=i(8),a=i.n(s),c=(i(17),i(2)),n=i(1),l=(i(18),i(5)),o=(i(19),i(20),i(0)),r=function(e){var t=e.title,i=e.description,s=void 0===i?"":i,a=e.imgUrl,c=e.imdbUrl;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:a,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t})})]}),Object(o.jsxs)("div",{className:"content",children:[s,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:c,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies,i=void 0===t?[]:t;return Object(o.jsx)("div",{className:"movies",children:i.map((function(e){return Object(o.jsx)(r,Object(l.a)({},e),e.imdbId)}))})},m=i(12),j=i(7),b=i.n(j),h=i(9),u=i(10),p=i.n(u),O=(i(23),function(e){var t=e.addMovie,i=e.movies,s=Object(n.useState)(""),a=Object(c.a)(s,2),d=a[0],j=a[1],u=Object(n.useState)(!1),O=Object(c.a)(u,2),g=O[0],v=O[1],f=Object(n.useState)({}),w=Object(c.a)(f,2),x=w[0],M=w[1],N=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d,t=fetch("".concat("https://www.omdbapi.com/?i=tt3896198&apikey=91e17a04&t=").concat(i)).then((function(e){return e.json()})),e.t0=M,e.next=4,t.then((function(e){return{title:e.Title,description:e.Plot,imgUrl:e.Poster,imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID,"/"),imdbId:e.imdbID}}));case 4:e.t1=e.sent,(0,e.t0)(e.t1),v(!0);case 7:case"end":return e.stop()}var i}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"find-movie",children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:p()("input",{"is-danger":!x.imdbId&&g}),value:d,onChange:function(e){j(e.target.value),v(!1)}})}),!x.imdbId&&g&&Object(o.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"button",className:"button is-light",onClick:N,children:"Find a movie"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"button",className:"button is-primary",disabled:!x.imdbId||!(i.findIndex((function(e){return e.imdbId===x.imdbId}))<0),onClick:function(){t([x].concat(Object(m.a)(i))),j(""),v(!1)},children:"Add to the list"})})]})]}),x.imdbId&&Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"title",children:"Preview"}),Object(o.jsx)(r,Object(l.a)({},x))]})]})}),g=i(11),v=function(){var e=Object(n.useState)(g),t=Object(c.a)(e,2),i=t[0],s=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(d,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(O,{addMovie:s,movies:i})})]})};a.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.9b41eaa0.chunk.js.map