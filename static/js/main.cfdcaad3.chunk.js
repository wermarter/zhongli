(this.webpackJsonpclient_admin=this.webpackJsonpclient_admin||[]).push([[2],{179:function(e,t,n){},282:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(30),i=n.n(a),d=n(15),s=n(29),o=n(8),u=n(287),l=n(285),j=n(289),b=n(283),f=n(33),h=n(1),O=function(){var e=Object(d.d)();return Object(h.jsx)(u.a,{bg:"dark",variant:"dark",children:Object(h.jsxs)(l.a,{className:"d-flex justify-content-between",children:[Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)(u.a.Brand,{href:"https://github.com/haminhchien/zhongli",target:"_blank",rel:"noreferrer noopener",children:"ADMIN WEB"}),Object(h.jsxs)(j.a,{variant:"pills",className:"me-auto",children:[Object(h.jsx)(j.a.Link,{as:f.d,to:"/student",children:"Student"}),Object(h.jsx)(j.a.Link,{as:f.d,to:"/lecturer",children:"Lecturer"}),Object(h.jsx)(j.a.Link,{as:f.d,to:"/mentor",children:"Mentor"}),Object(h.jsx)(j.a.Link,{as:f.d,to:"/course",children:"Course"}),Object(h.jsx)(j.a.Link,{as:f.d,to:"/faculty",children:"Faculty"})]})]}),Object(h.jsx)(b.a,{variant:"outline-light",onClick:function(){e(Object(s.c)())},children:"Logout"})]})})},p=n(290),m=n(40),x=(n(179),n(39)),v=n.n(x),S=n(53),g=n(54),y=n(288),I=n(71),L=n(286),T=n(95),k=n(72),w=k.b().shape({userId:k.c().required("This field is required."),password:k.c().required("This field is required.")}),C=function(){var e,t,n=Object(d.d)(),r=Object(o.h)(),c=(null===(e=Object(o.f)().state)||void 0===e||null===(t=e.from)||void 0===t?void 0:t.pathname)||"/",a=function(){var e=Object(S.a)(v.a.mark((function e(t,a){var i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(Object(s.a)(t)).unwrap();case 3:(null===(i=e.sent)||void 0===i?void 0:i.message)?a.setFieldError("password",i.message):r(c,{replace:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(h.jsxs)(y.a,{border:"secondary",className:"my-5 mx-auto",style:{width:"350px"},children:[Object(h.jsx)(y.a.Header,{className:"text-center text-white bg-primary",children:Object(h.jsx)("h3",{children:"Login"})}),Object(h.jsx)(y.a.Body,{children:Object(h.jsx)(g.c,{initialValues:{userId:"",password:""},onSubmit:a,validationSchema:w,children:function(e){return Object(h.jsxs)(I.a,{noValidate:!0,onSubmit:e.handleSubmit,onReset:e.handleReset,children:[Object(h.jsx)(g.b,{name:"userId",label:"User ID:",component:T.a}),Object(h.jsx)(g.b,{name:"password",label:"Password:",type:"password",component:T.a}),Object(h.jsxs)(b.a,{variant:"primary",type:"submit",children:[e.isSubmitting&&Object(h.jsx)(L.a,{animation:"border",as:"span",role:"status",size:"sm"}),"Submit"]})]})}})})]})},E=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,347))})),R=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,348))})),_=c.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,349))})),P=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,350))})),N=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,351))})),U=c.a.lazy((function(){return n.e(10).then(n.bind(null,345))}));function z(e){var t=e.children,n=!!Object(d.e)(s.d),r=Object(o.f)();return n?t:Object(h.jsx)(o.a,{to:"/login",state:{from:r}})}var A,F=function(){var e=Object(d.e)(m.d)>0;return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)(O,{}),Object(h.jsx)(p.a,{variant:"secondary",animated:!0,now:e?100:0}),Object(h.jsxs)(o.d,{children:[Object(h.jsx)(o.b,{path:"/",element:Object(h.jsx)(z,{children:Object(h.jsx)(o.a,{replace:!0,to:"/student"})})}),Object(h.jsx)(o.b,{path:"student/*",element:Object(h.jsx)(z,{children:Object(h.jsx)(E,{})})}),Object(h.jsx)(o.b,{path:"lecturer/*",element:Object(h.jsx)(z,{children:Object(h.jsx)(R,{})})}),Object(h.jsx)(o.b,{path:"mentor/*",element:Object(h.jsx)(z,{children:Object(h.jsx)(_,{})})}),Object(h.jsx)(o.b,{path:"course/*",element:Object(h.jsx)(z,{children:Object(h.jsx)(P,{})})}),Object(h.jsx)(o.b,{path:"faculty/*",element:Object(h.jsx)(z,{children:Object(h.jsx)(N,{})})}),Object(h.jsx)(o.b,{path:"login",element:Object(h.jsx)(C,{})}),Object(h.jsx)(o.b,{path:"*",element:Object(h.jsx)(U,{})})]})]})},D=n(7),M=n(19),V=n(3),B=n(160),W=n.n(B),H=n(46),q=n(64),G=n(162),J=Object(M.combineReducers)((A={},Object(D.a)(A,q.a.reducerPath,q.a.reducer),Object(D.a)(A,s.b.name,s.b.reducer),Object(D.a)(A,m.c.name,m.c.reducer),A)),K={key:"root",storage:W.a,blacklist:[q.a.reducerPath,m.c.name]},Q=Object(H.g)(K,(function(e,t){return t.type===s.c.toString()&&(e=void 0),J(e,t)})),Y=Object(V.configureStore)({reducer:Q,middleware:function(e){return e({serializableCheck:{ignoredActions:[H.a,H.f,H.b,H.c,H.d,H.e]}}).concat(q.a.middleware)}}),X=Object(H.h)(Y);Object(G.setupListeners)(Y.dispatch);var Z=n(163),$=n(51);n(281);$.a.checkEnvVariables();var ee=$.a.isProduction?f.b:f.a;i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(d.a,{store:Y,children:Object(h.jsx)(Z.a,{loading:Object(h.jsx)("div",{children:"Loading redux state..."}),persistor:X,children:Object(h.jsx)(ee,{children:Object(h.jsx)(r.Suspense,{fallback:Object(h.jsx)("div",{children:"Loading route..."}),children:Object(h.jsx)(F,{})})})})})}),document.getElementById("root"))},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return l}));var r=n(39),c=n.n(r),a=n(53),i=n(3),d=n(51),s=Object(i.createAsyncThunk)("auth/adminLogin",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.userId,a=t.password,e.next=3,fetch("".concat(d.a.apiUrl,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:r,password:a})});case 3:return(i=e.sent).ok||n.rejectWithValue(i),e.abrupt("return",i.json());case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),o=Object(i.createSlice)({name:"auth",initialState:{user:{id:null,psid:null,name:null,role:null,displayId:null},jwt:null},reducers:{logout:function(e,t){}},extraReducers:function(e){e.addCase(s.fulfilled,(function(e,t){var n=t.payload;e.jwt=n.accessToken,e.user={id:n.id,psid:n.psid,name:n.name,role:n.role,displayId:n.displayId}}))}}),u=function(e){return e[o.name].jwt},l=o.actions.logout},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"h",(function(){return d})),n.d(t,"g",(function(){return s})),n.d(t,"i",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return l}));var r="COURSE",c="FACULTY",a="MENTORGROUP",i="LECTURER",d="STUDENT",s="MENTORGROUP_LIST",o="STUDENT_LIST",u="LECTURER_LIST",l="COURSE_LIST"},40:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"i",(function(){return d})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return f})),n.d(t,"n",(function(){return h})),n.d(t,"l",(function(){return O})),n.d(t,"m",(function(){return p})),n.d(t,"j",(function(){return m})),n.d(t,"k",(function(){return x}));var r=n(3),c={selectedStudentId:void 0,selectedLecturerId:void 0,selectedMentorId:void 0,selectedCourseId:void 0,selectedFacultyId:void 0,loadingCount:0},a=Object(r.createSlice)({name:"page",initialState:c,reducers:{loadingStarted:function(e,t){e.loadingCount++},loadingDone:function(e,t){e.loadingCount--},setSelectedStudentId:function(e,t){e.selectedStudentId=t.payload},setSelectedLecturerId:function(e,t){e.selectedLecturerId=t.payload},setSelectedMentorId:function(e,t){e.selectedMentorId=t.payload},setSelectedCourseId:function(e,t){e.selectedCourseId=t.payload},setSelectedFacultyId:function(e,t){e.selectedFacultyId=t.payload}}}),i=function(e){return e[a.name].loadingCount},d=function(e){return e[a.name].selectedStudentId},s=function(e){return e[a.name].selectedLecturerId},o=function(e){return e[a.name].selectedMentorId},u=function(e){return e[a.name].selectedCourseId},l=function(e){return e[a.name].selectedFacultyId},j=a.actions,b=j.loadingStarted,f=j.loadingDone,h=j.setSelectedStudentId,O=j.setSelectedLecturerId,p=j.setSelectedMentorId,m=j.setSelectedCourseId,x=j.setSelectedFacultyId},51:function(e,t,n){"use strict";var r=n(150);n.n(r).a.config();var c=["REACT_APP_API_URL","NODE_ENV"],a={apiUrl:"https://zhongli-server.herokuapp.com",isProduction:!0,checkEnvVariables:function(){c.forEach((function(e){Object({NODE_ENV:"production",PUBLIC_URL:"/zhongli",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://zhongli-server.herokuapp.com"})[e]||console.warn("WARNING: Missing the environment variable "+e)}))}};t.a=a},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(39),c=n.n(r),a=n(53),i=n(24),d=n(161),s=n(51),o=n(29),u=n(37),l=n(40),j=Object(i.d)({baseUrl:"".concat(s.a.apiUrl,"/api"),prepareHeaders:function(e,t){var n=t.getState,r=Object(o.d)(n());return r&&e.set("authorization","Bearer ".concat(r)),e}}),b=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(Object(l.b)()),e.next=3,j(t,n,r);case 3:return a=e.sent,n.dispatch(Object(l.a)()),a.error&&401===a.error.status&&n.dispatch(Object(o.c)()),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),f=Object(d.a)({baseQuery:b,refetchOnReconnect:!0,tagTypes:[u.a,u.c,u.f,u.d,u.h,u.g,u.i,u.e,u.b],endpoints:function(){return{}}})},95:function(e,t,n){"use strict";var r=n(2),c=n(71),a=n(54),i=n(1);t.a=function(e){var t=e.field,n=e.form,d=e.type,s=e.label,o=e.placeholder,u=e.disabled,l=n.errors,j=n.touched,b=t.name,f=l[b]&&j[b];return Object(i.jsxs)(c.a.Group,{className:"mb-3",children:[s&&Object(i.jsx)(c.a.Label,{htmlFor:b,children:s}),Object(i.jsx)(c.a.Control,Object(r.a)(Object(r.a)({id:b},t),{},{placeholder:o,type:d,disabled:u,isInvalid:f})),Object(i.jsx)(a.a,{name:b,render:function(e){return Object(i.jsx)(c.a.Control.Feedback,{type:"invalid",children:e})}})]})}}},[[282,3,4]]]);
//# sourceMappingURL=main.cfdcaad3.chunk.js.map