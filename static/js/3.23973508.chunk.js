(this["webpackJsonpreact-start"]=this["webpackJsonpreact-start"]||[]).push([[3],{297:function(t,e,s){"use strict";s.d(e,"a",(function(){return f}));var o=s(5),n=s(49),i=s(50),r=s(52),c=s(51),a=s(0),l=s.n(a),p=s(11),u=s(22),d=s(1),j=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){Object(r.a)(a,e);var s=Object(c.a)(a);function a(){return Object(n.a)(this,a),s.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(t,Object(o.a)({},this.props)):Object(d.jsx)(p.a,{to:"/login"})}}]),a}(l.a.Component);return Object(u.b)(j)(e)}},299:function(t,e,s){"use strict";e.a=s.p+"static/media/user.f5bbe167.png"},300:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var o=s(91);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],o=!0,n=!1,i=void 0;try{for(var r,c=t[Symbol.iterator]();!(o=(r=c.next()).done)&&(s.push(r.value),!e||s.length!==e);o=!0);}catch(a){n=!0,i=a}finally{try{o||null==c.return||c.return()}finally{if(n)throw i}}return s}}(t,e)||Object(o.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},301:function(t,e,s){t.exports={profile:"ProfileInfo_profile__3BZsy",profileContainer:"ProfileInfo_profileContainer__2kObE",profileImg:"ProfileInfo_profileImg__cGAI5",profileContacts:"ProfileInfo_profileContacts__1lQrL",profileLogo:"ProfileInfo_profileLogo__12THs",profileDescription:"ProfileInfo_profileDescription__11enA",profileStatus:"ProfileInfo_profileStatus__1h9TX"}},302:function(t,e,s){t.exports={posts:"MyPosts_posts__1Ljvi",createPost:"MyPosts_createPost__20Cg1",descriptionPost:"MyPosts_descriptionPost__3IK_F",addPost:"MyPosts_addPost__1tV5G",removePost:"MyPosts_removePost__2VKOU"}},303:function(t,e,s){t.exports={post:"Post_post__3f7iu",postColumn:"Post_postColumn__1DoSo",postImg:"Post_postImg__46KAZ",postTitle:"Post_postTitle__2cmCB",postDescription:"Post_postDescription__Ck5O2",postMessage:"Post_postMessage__lR3rR",postLike:"Post_postLike__cMRti"}},308:function(t,e,s){"use strict";s.r(e);var o=s(5),n=s(49),i=s(50),r=s(52),c=s(51),a=s(0),l=s.n(a),p=s(301),u=s.n(p),d=s(43),j=s(299),f=s(300),b=s(1),h=function(t){var e=Object(a.useState)(!1),s=Object(f.a)(e,2),o=s[0],n=s[1],i=Object(a.useState)(t.status),r=Object(f.a)(i,2),c=r[0],l=r[1];Object(a.useEffect)((function(){l(t.status)}),[t.status]);return Object(b.jsxs)("div",{className:u.a.profileStatus,children:[!o&&Object(b.jsx)("div",{children:Object(b.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status||"status not added"})}),o&&Object(b.jsx)("div",{children:Object(b.jsx)("input",{value:c,onChange:function(t){l(t.currentTarget.value)},onBlur:function(){n(!1),t.updateStatus(c)},autoFocus:!0})})]})},O=function(t){return t.profile?Object(b.jsx)("div",{className:u.a.profile,children:Object(b.jsxs)("div",{className:u.a.profileContainer,children:[Object(b.jsxs)("div",{className:u.a.profileLogo,children:[Object(b.jsx)("img",{src:t.profile.photos.large?t.profile.photos.large:j.a,alt:"user not added image"}),Object(b.jsxs)("div",{className:u.a.profileContacts,children:[Object(b.jsx)("h3",{children:"Contacts:"}),Object(b.jsxs)("h4",{children:["Facebook: ",Object(b.jsx)("span",{children:t.profile.facebook?t.profile.facebook:"not added"})]}),Object(b.jsxs)("h4",{children:["Website: ",Object(b.jsx)("span",{children:t.profile.contacts.website?t.profile.contacts.website:"not added"})]}),Object(b.jsxs)("h4",{children:["Vk: ",Object(b.jsx)("span",{children:t.profile.contacts.vk?t.profile.contacts.vk:"not added"})]}),Object(b.jsxs)("h4",{children:["Twitter: ",Object(b.jsx)("span",{children:t.profile.contacts.twitter?t.profile.contacts.twitter:"not added"})]}),Object(b.jsxs)("h4",{children:["Instagram: ",Object(b.jsx)("span",{children:t.profile.contacts.instagram?t.profile.contacts.instagram:"not added"})]}),Object(b.jsxs)("h4",{children:["YouTube: ",Object(b.jsx)("span",{children:t.profile.contacts.youtube?t.profile.contacts.youtube:"not added"})]}),Object(b.jsxs)("h4",{children:["Github: ",Object(b.jsx)("span",{children:t.profile.contacts.github?t.profile.contacts.github:"not added"})]}),Object(b.jsxs)("h4",{children:["MainLink: ",Object(b.jsx)("span",{children:t.profile.contacts.mainLink?t.profile.contacts.mainLink:"not added"})]})]})]}),Object(b.jsxs)("div",{className:u.a.profileDescription,children:[Object(b.jsx)("h2",{children:"Profile description"}),Object(b.jsx)(h,{status:t.status,updateStatus:t.updateStatus}),Object(b.jsxs)("h3",{children:["AboutMe: ",Object(b.jsx)("span",{children:t.profile.aboutMe?t.profile.aboutMe:"not added"})]}),Object(b.jsxs)("h3",{children:["LookingForAJob: ",Object(b.jsx)("span",{children:t.profile.lookingForAJobDescription?t.profile.lookingForAJobDescription:"not added"})]}),Object(b.jsxs)("h3",{children:["FullName: ",Object(b.jsx)("span",{children:t.profile.fullName?t.profile.fullName:"not added"})]})]})]})}):Object(b.jsx)(d.a,{})},x=s(90),m=s(34),_=s(302),v=s.n(_),P=s(303),g=s.n(P),y=function(t){return Object(b.jsxs)("div",{className:g.a.post,children:[Object(b.jsxs)("div",{className:g.a.postColumn,children:[Object(b.jsxs)("div",{className:g.a.postImg,children:[Object(b.jsx)("img",{src:"https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png",alt:"profile"}),Object(b.jsxs)("span",{children:["Likes: ",t.likesCount]})]}),Object(b.jsx)("div",{className:g.a.postLike,children:Object(b.jsx)("span",{children:" Like"})})]}),Object(b.jsx)("div",{className:g.a.postColumn,children:Object(b.jsx)("div",{className:g.a.postDescription,children:Object(b.jsx)("p",{className:g.a.postMessage,children:t.message})})})]})},k=s(123),S=s(124),I=s(64),C=s(63),N=l.a.memo((function(t){var e=Object(m.a)(t.posts).reverse().map((function(t){return Object(b.jsx)(y,{id:t.id,message:t.message,likesCount:t.likesCount},t.id)}));return Object(b.jsxs)("div",{className:v.a.posts,children:[Object(b.jsx)("h2",{children:"My posts "}),Object(b.jsx)("div",{className:v.a.createPost,children:Object(b.jsx)(A,{onSubmit:function(e){t.addPost(e.newPostText)}})}),e]})})),w=Object(I.a)(10),A=Object(S.a)({form:"postAddForm"})((function(t){return Object(b.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(k.a,{className:v.a.descriptionPost,placeholder:"Enter your post text",name:"newPostText",component:C.b,validate:[I.b,w]})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:v.a.addPost,children:"Add post"})})]})})),M=N,L=s(22),D=Object(L.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(x.a)(e))}}}))(M),T=function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(b.jsx)(D,{})]})},F=s(11),U=s(297),J=s(10),E=function(t){Object(r.a)(s,t);var e=Object(c.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidUpdate",value:function(t,e,s){t.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(b.jsx)(T,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(l.a.Component);e.default=Object(J.d)(F.f,U.a,Object(L.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:x.d,getStatus:x.c,updateStatus:x.e}))(E)}}]);
//# sourceMappingURL=3.23973508.chunk.js.map