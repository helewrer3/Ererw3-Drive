(this["webpackJsonpfirebase-react-auth"]=this["webpackJsonpfirebase-react-auth"]||[]).push([[0],{102:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),a=r(38),s=r.n(a),i=r(24),l=r(20),o=r(18),d=r(29),j=r(77),u=(r(91),r(104),r(103),j.a.initializeApp({apiKey:"AIzaSyCh1l7oAP_Mp4CffNpFssrPqK61Sb5BVug",authDomain:"auth-development-87a60.firebaseapp.com",projectId:"auth-development-87a60",storageBucket:"auth-development-87a60.appspot.com",messagingSenderId:"968647233954",appId:"1:968647233954:web:9287cc45cb78fc03b722fb"})),b=u.firestore(),h={folders:b.collection("folders"),files:b.collection("files"),getCurrentTimeStamp:j.a.firestore.FieldValue.serverTimestamp,formatDoc:function(e){return Object(d.a)({id:e.id},e.data())}},O=u.auth(),f=u.storage(),x=r(5),p=n.a.createContext();function m(){return Object(c.useContext)(p)}function v(e){var t=e.children,r=Object(c.useState)(),n=Object(o.a)(r,2),a=n[0],s=n[1],i=Object(c.useState)(!0),l=Object(o.a)(i,2),d=l[0],j=l[1];Object(c.useEffect)((function(){return O.onAuthStateChanged((function(e){s(e),j(!1)}))}),[]);var u={currentUser:a,signup:function(e,t){return O.createUserWithEmailAndPassword(e,t)},login:function(e,t){return O.signInWithEmailAndPassword(e,t)},logout:function(){return O.signOut()},resetPassword:function(e){return O.sendPasswordResetEmail(e)},updateEmail:function(e){return a.updateEmail(e)},updatePassword:function(e){return a.updatePassword(e)}};return Object(x.jsx)(p.Provider,{value:u,children:!d&&t})}var g=r(0),w=r.n(g),y=r(2),N=r(116),F=r(108),k=r(111),S=r(109),C=r(107),P=function(e){var t=e.children;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(C.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(x.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:t})})})},I=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),r=Object(c.useRef)(),n=m().signup,a=Object(c.useState)(),s=Object(o.a)(a,2),d=s[0],j=s[1],u=Object(c.useState)(!1),b=Object(o.a)(u,2),h=b[0],O=b[1],f=Object(l.g)(),p=function(){var c=Object(y.a)(w.a.mark((function c(a){return w.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(a.preventDefault(),t.current.value!==r.current.value){c.next=17;break}return c.prev=2,j(""),O(!0),c.next=7,n(e.current.value,t.current.value);case 7:f.push("/"),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(2),j("Failed to create an account."),console.log(c.t0);case 14:O(!1),c.next=18;break;case 17:j("Passwords do no match.");case 18:case"end":return c.stop()}}),c,null,[[2,10]])})));return function(e){return c.apply(this,arguments)}}();return Object(x.jsxs)(P,{children:[Object(x.jsx)("h1",{className:"text-center m-4",children:"Ererw3 Drive"}),Object(x.jsx)(N.a,{children:Object(x.jsxs)(N.a.Body,{children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),d&&Object(x.jsx)(F.a,{variant:"danger",children:d}),Object(x.jsxs)(k.a,{onSubmit:p,children:[Object(x.jsxs)(k.a.Group,{id:"email",children:[Object(x.jsx)(k.a.Label,{children:"Email"}),Object(x.jsx)(k.a.Control,{type:"email",ref:e,required:!0})]}),Object(x.jsxs)(k.a.Group,{id:"password",children:[Object(x.jsx)(k.a.Label,{children:"Password"}),Object(x.jsx)(k.a.Control,{type:"password",ref:t,required:!0})]}),Object(x.jsxs)(k.a.Group,{id:"password-confirm",children:[Object(x.jsx)(k.a.Label,{children:"Password Confirmation"}),Object(x.jsx)(k.a.Control,{type:"password",ref:r,required:!0})]}),Object(x.jsx)(S.a,{disabled:h,className:"w-100 mt-2",type:"submit",children:"Sign Up"})]})]})}),Object(x.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(x.jsx)(i.b,{to:"/login",children:"Log In"})]})]})},E=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),r=t[0],n=t[1],a=m(),s=a.currentUser,d=a.logout,j=Object(l.g)(),u=function(){var e=Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(""),e.prev=1,e.next=4,d();case 4:j.push("/login"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),n("Failed to logout"),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(P,{children:[Object(x.jsx)(N.a,{children:Object(x.jsxs)(N.a.Body,{children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),r&&Object(x.jsx)(F.a,{variant:"danger",children:r}),Object(x.jsx)("strong",{children:"Email:"})," ",s.email,Object(x.jsx)(i.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(x.jsxs)("div",{className:"w-100 text-center mt-2",children:[Object(x.jsx)(S.a,{onClick:u,variant:"link",children:"Log Out"}),Object(x.jsx)(S.a,{onClick:function(){return j.push("/")},variant:"link",children:"To Drive"})]})]})},L=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),r=m().login,n=Object(c.useState)(),a=Object(o.a)(n,2),s=a[0],d=a[1],j=Object(c.useState)(!1),u=Object(o.a)(j,2),b=u[0],h=u[1],O=Object(l.g)(),f=function(){var c=Object(y.a)(w.a.mark((function c(n){return w.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,d(""),h(!0),c.next=6,r(e.current.value,t.current.value);case 6:O.push("/"),c.next=13;break;case 9:c.prev=9,c.t0=c.catch(1),d("Failed to login."),console.log(c.t0);case 13:h(!1);case 14:case"end":return c.stop()}}),c,null,[[1,9]])})));return function(e){return c.apply(this,arguments)}}();return Object(x.jsxs)(P,{children:[Object(x.jsx)("h1",{className:"text-center m-4",children:"Ererw3 Drive"}),Object(x.jsx)(N.a,{children:Object(x.jsxs)(N.a.Body,{children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(x.jsx)(F.a,{variant:"danger",children:s}),Object(x.jsxs)(k.a,{onSubmit:f,children:[Object(x.jsxs)(k.a.Group,{id:"email",children:[Object(x.jsx)(k.a.Label,{children:"Email"}),Object(x.jsx)(k.a.Control,{type:"email",ref:e,required:!0})]}),Object(x.jsxs)(k.a.Group,{id:"password",children:[Object(x.jsx)(k.a.Label,{children:"Password"}),Object(x.jsx)(k.a.Control,{type:"password",ref:t,required:!0})]}),Object(x.jsx)(S.a,{disabled:b,className:"w-100 mt-2",type:"submit",children:"Log In"})]}),Object(x.jsx)("div",{className:"w-100 text-center mt-3",children:Object(x.jsx)(i.b,{to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(x.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(x.jsx)(i.b,{to:"/signup",children:"Sign Up"})]})]})},D=r(84),U=["component"],R=function(e){var t=e.component,r=Object(D.a)(e,U),c=m().currentUser;return Object(x.jsx)(l.b,Object(d.a)(Object(d.a)({},r),{},{render:function(e){return c?Object(x.jsx)(t,Object(d.a)({},e)):Object(x.jsx)(l.a,{to:"/login"})}}))},B=function(){var e=Object(c.useRef)(),t=m().resetPassword,r=Object(c.useState)(),n=Object(o.a)(r,2),a=n[0],s=n[1],l=Object(c.useState)(!1),d=Object(o.a)(l,2),j=d[0],u=d[1],b=function(){var r=Object(y.a)(w.a.mark((function r(c){return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),r.prev=1,s(""),u(!0),r.next=6,t(e.current.value);case 6:s("Check your inbox for further instructions."),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),s("Failed to reset password."),console.log(r.t0);case 13:u(!1);case 14:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}();return Object(x.jsxs)(P,{children:[Object(x.jsx)(N.a,{children:Object(x.jsxs)(N.a.Body,{children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Reset Password"}),a&&Object(x.jsx)(F.a,{variant:"danger",children:a}),Object(x.jsxs)(k.a,{onSubmit:b,children:[Object(x.jsxs)(k.a.Group,{id:"email",children:[Object(x.jsx)(k.a.Label,{children:"Email"}),Object(x.jsx)(k.a.Control,{type:"email",ref:e,required:!0})]}),Object(x.jsx)(S.a,{disabled:j,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(x.jsx)("div",{className:"w-100 text-center mt-3",children:Object(x.jsx)(i.b,{to:"/login",children:"Login"})})]})}),Object(x.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(x.jsx)(i.b,{to:"/signup",children:"Sign Up"})]})]})},A=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),r=Object(c.useRef)(),n=m(),a=n.updateEmail,s=n.updatePassword,d=n.currentUser,j=Object(c.useState)(),u=Object(o.a)(j,2),b=u[0],h=u[1],O=Object(c.useState)(!1),f=Object(o.a)(O,2),p=f[0],v=f[1],g=Object(l.g)();return Object(x.jsxs)(P,{children:[Object(x.jsx)(N.a,{children:Object(x.jsxs)(N.a.Body,{children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),b&&Object(x.jsx)(F.a,{variant:"danger",children:b}),Object(x.jsxs)(k.a,{onSubmit:function(c){if(c.preventDefault(),t.current.value===r.current.value){var n=[];e.current.value!==d.email&&n.push(a(e.current.value)),t.current.value&&n.push(s(t.current.value)),h(""),v(!0),Promise.all(n).then((function(){g.push("/user")})).catch((function(e){h("Failed to create an account."),console.log(e)})).finally((function(){v(!1)}))}else h("Passwords do no match.")},children:[Object(x.jsxs)(k.a.Group,{id:"email",children:[Object(x.jsx)(k.a.Label,{children:"Email"}),Object(x.jsx)(k.a.Control,{type:"email",ref:e,defaultValue:d.email,required:!0})]}),Object(x.jsxs)(k.a.Group,{id:"password",children:[Object(x.jsx)(k.a.Label,{children:"Password"}),Object(x.jsx)(k.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(x.jsxs)(k.a.Group,{id:"password-confirm",children:[Object(x.jsx)(k.a.Label,{children:"Password Confirmation"}),Object(x.jsx)(k.a.Control,{type:"password",ref:r,placeholder:"Leave blank to keep the same"})]}),Object(x.jsx)(S.a,{disabled:p,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(x.jsxs)("div",{className:"w-100 text-center mt-2",children:["Don't want to change anything? ",Object(x.jsx)(i.b,{to:"/user",children:"Cancel"})]})]})},G="select-folder",q="update-folder",W="set-child-folders",T="set-child-files",z={name:"root",id:null,path:[]},H=function(e,t){var r=t.type,c=t.payload;switch(r){case G:return{childFiles:[],childFolders:[],folder:c.folder,folderId:c.folderId};case q:return Object(d.a)(Object(d.a)({},e),{},{folder:c.folder});case W:return Object(d.a)(Object(d.a)({},e),{},{childFolders:c.childFolders});case T:return Object(d.a)(Object(d.a)({},e),{},{childFiles:c.childFiles});default:return e}},M=r(23),V=r(46),_=r(45),J=r(115),K=r(113),Q=r(117),X=function(e){var t=e.currentFolder,r=Object(c.useState)([]),n=Object(o.a)(r,2),a=n[0],i=n[1],l=m().currentUser;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("label",{className:"btn btn-outline-success btn-sm m-0 mt-2 ms-2",children:[Object(x.jsx)(_.a,{icon:V.b}),Object(x.jsx)("input",{type:"file",onChange:function(e){var r=e.target.files[0];if(null!=t&&null!=r){var c=Object(J.a)();i((function(e){return[].concat(Object(M.a)(e),[{id:c,name:r.name,progress:0,error:!1}])}));var n="".concat([].concat(Object(M.a)(t.path.map((function(e){return e.name}))),[t.name,r.name]).join("/")),a=f.ref("/file/".concat(l.uid,"/").concat(n)).put(r);a.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes;i((function(e){return e.map((function(e){return e.id===c?Object(d.a)(Object(d.a)({},e),{},{progress:t}):e}))}))}),(function(){i((function(e){return e.map((function(e){return e.id===c?Object(d.a)(Object(d.a)({},e),{},{error:!0}):e}))}))}),(function(){i((function(e){return e.filter((function(e){return e.id!==c}))})),a.snapshot.ref.getDownloadURL().then((function(e){h.files.where("name","==",r.name).where("userId","==",l.uid).where("folderId","==",t.id).get().then((function(c){var n=c.docs[0];n?n.ref.update({url:e}):h.files.add({url:e,name:r.name,createdAt:h.getCurrentTimeStamp(),folderId:t.id,userId:l.uid})}))}))})),e.target.value=null}},style:{opacity:0,position:"absolute",left:"-9999px"}})]}),s.a.createPortal(Object(x.jsx)("div",{style:{position:"absolute",bottom:"1rem",right:"1rem",maxWidth:"250px"},children:a.map((function(e){return Object(x.jsxs)(K.a,{onClose:function(){i((function(t){return t.filter((function(t){return t.id!==e.id}))}))},children:[Object(x.jsx)(K.a.Header,{closeButton:e.error,className:"text-truncate w-100 d-block",children:e.name}),Object(x.jsx)(K.a.Body,{children:Object(x.jsx)(Q.a,{label:e.error?"Error":"".concat(Math.round(100*e.progress),"%"),now:e.error?100:100*e.progress,animated:!e.error,variant:e.error?"danger":"primary"})})]},e.id)}))}),document.body)]})},Y=r(110),Z=function(e){var t=e.currentFolder,r=Object(c.useState)(!1),n=Object(o.a)(r,2),a=n[0],s=n[1],i=Object(c.useState)(""),l=Object(o.a)(i,2),d=l[0],j=l[1],u=m().currentUser,b=function(){s(!1)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(S.a,{onClick:function(){s(!0)},variant:"outline-success mt-2",size:"sm",children:Object(x.jsx)(_.a,{icon:V.d})}),Object(x.jsx)(Y.a,{show:a,onHide:b,children:Object(x.jsxs)(k.a,{onSubmit:function(e){if(e.preventDefault(),null!=t){var r=Object(M.a)(t.path);t!==z&&r.push({name:t.name,id:t.id}),h.folders.add({name:d,parentId:t.id,userId:u.uid,path:r,createdAt:h.getCurrentTimeStamp()}),j(""),b()}},children:[Object(x.jsx)(Y.a.Body,{children:Object(x.jsxs)(k.a.Group,{children:[Object(x.jsx)(k.a.Label,{children:"Folder Name"}),Object(x.jsx)(k.a.Control,{type:"text",value:d,onChange:function(e){return j(e.target.value)},required:!0})]})}),Object(x.jsxs)(Y.a.Footer,{children:[Object(x.jsx)(S.a,{variant:"secondary",onClick:b,children:"Close"}),Object(x.jsx)(S.a,{variant:"success",type:"submit",children:"Add Folder"})]})]})})]})},$=function(e){var t=e.folder;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(S.a,{to:"/folder/".concat(t.id),as:i.b,variant:"outline-dark",className:"text-truncate w-100",children:[Object(x.jsx)(_.a,{icon:V.c,className:"me-2"}),t.name]})})},ee=function(e){var t=e.file;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("a",{href:t.url,target:"_blank",rel:"noreferrer",className:"btn btn-outline-dark text-truncate w-100",children:[Object(x.jsx)(_.a,{icon:V.a,className:"me-2"}),t.name]})})},te=r(118),re=function(e){var t=e.currentFolder,r=t===z?[]:[z];return t&&(r=[].concat(Object(M.a)(r),Object(M.a)(t.path))),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(te.a,{className:"flex-grow-1",listProps:{className:"bg-white m-0"},children:[r.map((function(e){return Object(x.jsx)(te.a.Item,{linkAs:i.b,linkProps:{to:null===e.id?"/":"/folder/".concat(e.id)},className:"text-truncate d-inline-block",style:{maxWidth:"150px"},children:e.name},e.id)})),Object(x.jsx)(te.a.Item,{className:"text-truncate d-inline-block",style:{maxWidth:"200px"},active:!0,children:t&&t.name})]})})},ce=r(114),ne=r(112),ae=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(ce.a,{bg:"light",expand:"",children:Object(x.jsxs)(C.a,{fluid:!0,children:[Object(x.jsx)(ce.a.Brand,{as:i.b,to:"/",children:"Ererw3 Drive"}),Object(x.jsx)(ne.a,{children:Object(x.jsx)(ne.a.Link,{as:i.b,to:"/user",children:"Profile"})})]})})})},se=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=m().currentUser,n=Object(c.useReducer)(H,{folderId:e,folder:t,childFolders:[],childFiles:[]}),a=Object(o.a)(n,2),s=a[0],i=a[1];return Object(c.useEffect)((function(){null==e?i({type:q,payload:{folder:z}}):h.folders.doc(e).get().then((function(e){i({type:q,payload:{folder:h.formatDoc(e)}})})).catch((function(){i({type:q,payload:{folder:z}})}))}),[e]),Object(c.useEffect)((function(){var t=h.folders.where("parentId","==",e).where("userId","==",r.uid).onSnapshot((function(e){i({type:W,payload:{childFolders:e.docs.map(h.formatDoc)}})}));return function(){return t()}}),[e,r]),Object(c.useEffect)((function(){var t=h.files.where("folderId","==",e).where("userId","==",r.uid).onSnapshot((function(e){i({type:T,payload:{childFiles:e.docs.map(h.formatDoc)}})}));return function(){return t()}}),[e,r]),s}(Object(l.h)().folderId),t=e.folder,r=e.childFolders,n=e.childFiles;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ae,{}),Object(x.jsxs)(C.a,{fluid:!0,children:[Object(x.jsxs)("div",{className:"d-flex align-items-center",children:[Object(x.jsx)(re,{currentFolder:t}),Object(x.jsx)(Z,{currentFolder:t}),Object(x.jsx)(X,{currentFolder:t})]}),Object(x.jsx)("div",{className:"d-flex flex-wrap",children:r.map((function(e){return Object(x.jsx)("div",{style:{maxWidth:"250px"},className:"p-2",children:Object(x.jsx)($,{folder:e})},e.id)}))}),Object(x.jsx)("div",{className:"d-flex flex-wrap",children:n.map((function(e){return Object(x.jsx)("div",{style:{maxWidth:"250px"},className:"p-2",children:Object(x.jsx)(ee,{file:e})},e.id)}))})]})]})},ie=function(){return Object(x.jsx)(i.a,{children:Object(x.jsx)(v,{children:Object(x.jsxs)(l.d,{children:[Object(x.jsx)(R,{path:"/",exact:!0,component:se}),Object(x.jsx)(R,{path:"/folder/:folderId",exact:!0,component:se}),Object(x.jsx)(R,{path:"/user",component:E}),Object(x.jsx)(R,{path:"/update-profile",exact:!0,component:A}),Object(x.jsx)(l.b,{path:"/signup",component:I}),Object(x.jsx)(l.b,{path:"/login",component:L}),Object(x.jsx)(l.b,{path:"/forgot-password",component:B})]})})})};r(101);s.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(ie,{})}),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.0c821039.chunk.js.map