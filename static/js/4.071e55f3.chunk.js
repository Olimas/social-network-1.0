/*! For license information please see 4.071e55f3.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-start"]=this["webpackJsonpreact-start"]||[]).push([[4],{297:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(5),o=n(49),s=n(50),i=n(52),u=n(51),a=n(0),c=n.n(a),l=n(11),f=n(22),p=n(1),g=function(e){return{isAuth:e.auth.isAuth}},h=function(e){var t=function(t){Object(i.a)(a,t);var n=Object(u.a)(a);function a(){return Object(o.a)(this,a),n.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(p.jsx)(e,Object(r.a)({},this.props)):Object(p.jsx)(l.a,{to:"/login"})}}]),a}(c.a.Component);return Object(f.b)(g)(t)}},299:function(e,t,n){"use strict";t.a=n.p+"static/media/user.f5bbe167.png"},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(91);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,s=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(a){o=!0,s=a}finally{try{r||null==u.return||u.return()}finally{if(o)throw s}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},304:function(e,t,n){e.exports={usersContainer:"Users_usersContainer__38bKu",users:"Users_users__MBUg0",user:"Users_user__2KJ2y",getUsers:"Users_getUsers__2F7od"}},305:function(e,t,n){e.exports={paginator:"Paginator_paginator__2Db8D",selectedPage:"Paginator_selectedPage__1A4Vg",currentPage:"Paginator_currentPage__28eYV",pageNumber:"Paginator_pageNumber__3PG2y"}},306:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var u in r)n.call(r,u)&&r[u]&&e.push(u);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},309:function(e,t,n){"use strict";n.r(t);var r=n(49),o=n(50),s=n(52),i=n(51),u=n(0),a=n.n(u),c=n(22),l=n(126),f=n(304),p=n.n(f),g=n(93),h=n(300),d=n(305),j=n.n(d),b=n(306),v=n.n(b),O=n(1),y=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,o=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,a=Math.ceil(t/n),c=[],l=1;l<=a;l++)c.push(l);var f=Math.ceil(a/i),p=Object(u.useState)(1),d=Object(h.a)(p,2),b=d[0],y=d[1],P=(b-1)*i+1,w=b*i;return Object(O.jsxs)("div",{className:j.a.paginator,children:[b>1&&Object(O.jsx)("button",{onClick:function(){y(b-1)},children:"PREV"}),c.filter((function(e){return e>=P&&e<=w})).map((function(e){return Object(O.jsx)("span",{className:v()(Object(g.a)({},j.a.selectedPage,r===e),j.a.pageNumber),onClick:function(t){o(e)},children:e},e)})),f>b&&Object(O.jsx)("button",{onClick:function(){y(b+1)},children:"NEXT"})]})},P=n(299),w=n(20),x=function(e){var t=e.user;return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:Object(O.jsx)(w.b,{to:"/profile/"+t.id,children:Object(O.jsx)("img",{src:null!=t.photos.small?t.photos.small:P.a})})}),Object(O.jsx)("div",{children:t.followed?Object(O.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(O.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:t.name}),Object(O.jsx)("div",{children:t.status})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"u.location.country"}),Object(O.jsx)("div",{children:"u.location.city"})]})]})]})},m=function(e){return Object(O.jsxs)("div",{className:p.a.usersContainer,children:[Object(O.jsx)(y,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize}),Object(O.jsx)("div",{className:p.a.users,children:e.users.map((function(t){return Object(O.jsx)(x,{user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow},t.id)}))})]})},C=n(43),_=n(10),S=n(297);function U(e,t){return e===t}function A(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}function I(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var k=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var s=0,i=r.pop(),u=I(r),a=e.apply(void 0,[function(){return s++,i.apply(null,arguments)}].concat(n)),c=e((function(){for(var e=[],t=u.length,n=0;n<t;n++)e.push(u[n].apply(null,arguments));return a.apply(null,e)}));return c.resultFunc=i,c.dependencies=u,c.recomputations=function(){return s},c.resetRecomputations=function(){return s=0},c}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U,n=null,r=null;return function(){return A(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var z=k((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),F=function(e){return e.usersPage.pageSize},N=function(e){return e.usersPage.totalUsersCount},E=function(e){return e.usersPage.currentPage},M=function(e){return e.usersPage.isFetching},D=function(e){return e.usersPage.followingInProgress},J=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.props.isFetching?Object(O.jsx)(C.a,{}):null,Object(O.jsx)(m,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component);t.default=Object(_.d)(S.a,Object(c.b)((function(e){return{users:z(e),pageSize:F(e),totalUsersCount:N(e),currentPage:E(e),isFetching:M(e),followingInProgress:D(e)}}),{follow:l.b,unfollow:l.f,setCurrentPage:l.d,toggleFollowingProgress:l.e,getUsers:l.c}))(J)}}]);
//# sourceMappingURL=4.071e55f3.chunk.js.map