(this.webpackJsonpclient_admin=this.webpackJsonpclient_admin||[]).push([[9],{132:function(e,t,r){"use strict";r.d(t,"i",(function(){return a})),r.d(t,"g",(function(){return u})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return i})),r.d(t,"f",(function(){return o})),r.d(t,"a",(function(){return d})),r.d(t,"h",(function(){return l})),r.d(t,"c",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(24),c=r(43).a.injectEndpoints({endpoints:function(e){return{searchLecturers:e.mutation({query:function(e){return{url:"/user",method:"GET",params:{role:"LECTURER",query:e||""}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return{type:n.d,id:e.id}}))}}),getLecturerInfo:e.query({query:function(e){return{url:"/user/info",method:"GET",params:{userId:e}}},providesTags:function(e,t,r){return[{type:n.d,id:r}]}}),getLecturerMentorGroups:e.query({query:function(e){return{url:"/lecturer/mentor",method:"GET",params:{lecturerId:e}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>2?arguments[2]:void 0;return e.map((function(e){return{type:n.f,id:e.groupId}})).concat([{type:n.g,id:t}])}}),getLecturerFaculty:e.query({query:function(e){return{url:"/user/faculty",method:"GET",params:{userId:e}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>2?arguments[2]:void 0;return[{type:n.c,id:e.groupId},{type:n.d,id:t}]}}),getLecturerCourses:e.query({query:function(e){return{url:"/lecturer/course",method:"GET",params:{lecturerId:e}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>2?arguments[2]:void 0;return e.map((function(e){return{type:n.a,id:e.groupId}})).concat([{type:n.b,id:t}])}}),addNewLecturer:e.mutation({query:function(e){return{url:"/user",method:"POST",body:{id:e.id,name:e.name,password:e.password,role:"LECTURER",address:e.address,facultyId:e.facultyId}}},invalidatesTags:function(e,t,r){return[{type:n.e,id:r.facultyId}]}}),removeLecturer:e.mutation({query:function(e){return{url:"/user",method:"DELETE",params:{userId:e.userId}}},invalidatesTags:function(){var e=arguments.length>2?arguments[2]:void 0;return[{type:n.d,id:e.userId}]}}),changeLecturerInfo:e.mutation({query:function(e){return{url:"/user",method:"PUT",body:{id:e.id,name:e.name,address:e.address}}},invalidatesTags:function(e,t,r){return[{type:n.d,id:r.id}]}}),changeLecturerFaculty:e.mutation({query:function(e){return{url:"/user/group",method:"PUT",body:{userId:e.id,currentGroupId:e.currentFacultyId,newGroupId:e.newFacultyId}}},invalidatesTags:function(e,t,r){return[{type:n.d,id:r.id},{type:n.e,id:r.currentFacultyId},{type:n.e,id:r.newFacultyId}]}})}}}),a=c.useSearchLecturersMutation,u=c.useGetLecturerMentorGroupsQuery,s=c.useGetLecturerCoursesQuery,i=c.useGetLecturerFacultyQuery,o=c.useGetLecturerInfoQuery,d=c.useAddNewLecturerMutation,l=c.useRemoveLecturerMutation,b=c.useChangeLecturerInfoMutation,f=c.useChangeLecturerFacultyMutation},347:function(e,t,r){"use strict";r.r(t);var n=r(140),c=r(35),a=r(343),u=r(209),s=r(12),i=r(135),o=r(11),d=r(132),l=r(0),b=r(34),f=r.n(b),j=r(46),p=r(126),m=r(125),h=r(345),O=r(159),y=r(210),g=r(341),v=r(127),w=r(129),I=r(134),x=r(1),L=p.b().shape({id:p.c().required("This field is required."),name:p.c().required("This field is required."),password:p.c().required("This field is required."),passwordConfirmation:p.c().test("passwords-match","Passwords must match",(function(e){return this.parent.password===e})),address:p.c().required("This field is required."),facultyId:p.c().required("This field is required.")}),S={id:"",name:"",password:"",passwordConfirmation:"",address:"",facultyId:""},C=function(e){var t=e.show,r=e.handleClose,n=Object(o.d)(),a=Object(I.g)(),u=Object(s.a)(a,1)[0],i=Object(d.a)(),l=Object(s.a)(i,1)[0],b=function(){var e=Object(j.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t).unwrap();case 2:return r=e.sent,e.abrupt("return",r.map((function(e){return{value:e.groupId,label:e.groupName}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(j.a)(f.a.mark((function e(t,a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(t);case 3:n(Object(c.k)(t.id)),r(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}();return Object(x.jsxs)(h.a,{show:t,onHide:r,children:[Object(x.jsx)(h.a.Header,{closeButton:!0,children:Object(x.jsx)(h.a.Title,{children:"Add new lecturer"})}),Object(x.jsx)(m.c,{initialValues:S,onSubmit:p,validationSchema:L,children:function(e){return Object(x.jsxs)(O.a,{noValidate:!0,onSubmit:e.handleSubmit,onReset:e.handleReset,children:[Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)(m.b,{name:"id",component:v.a,label:"Lecturer ID",placeholder:"lecturera..."}),Object(x.jsx)(m.b,{name:"name",component:v.a,label:"Name",placeholder:"Le Van A..."}),Object(x.jsx)(m.b,{name:"address",component:v.a,label:"Address",placeholder:"District 5, Ho Chi Minh City..."}),Object(x.jsx)(m.b,{name:"password",component:v.a,placeholder:"New password...",type:"password",label:"Password"}),Object(x.jsx)(m.b,{name:"passwordConfirmation",component:v.a,placeholder:"Type password again...",type:"password",label:"Password confirmation"}),Object(x.jsx)(m.b,{name:"facultyId",component:w.a,loadOptions:b,label:"Faculty"})]}),Object(x.jsxs)(h.a.Footer,{children:[Object(x.jsx)(y.a,{variant:"secondary",onClick:r,children:"Cancel"}),Object(x.jsxs)(y.a,{variant:"primary",type:"submit",children:[e.isSubmitting&&Object(x.jsx)(g.a,{animation:"border",as:"span",role:"status",size:"sm"}),"Submit"]})]})]})}})]})},T=function(){var e=Object(o.d)(),t=Object(d.i)(),r=Object(s.a)(t,2),n=r[0],a=r[1],u=a.data,b=a.isLoading,f=Object(o.e)(c.e),j=Object(l.useState)(!1),p=Object(s.a)(j,2),m=p[0],h=p[1];return Object(l.useEffect)((function(){e(Object(c.h)(b))}),[b,e]),Object(x.jsxs)(l.Fragment,{children:[Object(x.jsx)(i.a,{label:"Lecturer",items:u,selectedItemKey:f,keySelector:function(e){return e.id},nameSelector:function(e){return e.name},showKey:!0,onSearch:function(e){return n(e)},onAdd:function(){return h(!0)},onSelect:function(t){return e(Object(c.k)(t.id))}}),Object(x.jsx)(C,{show:m,handleClose:function(){return h(!1)}})]})},k=r(138),q=r(128),F=r(141),E=r(204),G=r(205),N=r(130),R=function(e){var t=e.selectedLecturerId,r=Object(d.g)(t),n=r.data,a=r.isFetching,u=Object(d.e)(t),i=u.data,b=u.isFetching,p=Object(d.f)(t),m=p.data,h=p.isFetching,O=Object(d.h)(),y=Object(s.a)(O,1)[0],g=Object(d.c)(),v=Object(s.a)(g,1)[0],w=Object(F.f)(),L=Object(s.a)(w,1)[0],S=Object(d.b)(),C=Object(s.a)(S,1)[0],T=Object(I.g)(),R=Object(s.a)(T,1)[0],M=Object(l.useState)(!1),P=Object(s.a)(M,2),A=P[0],D=P[1],Q=Object(l.useState)(!1),U=Object(s.a)(Q,2),V=U[0],B=U[1],H=Object(l.useState)(!1),J=Object(s.a)(H,2),K=J[0],_=J[1],z=Object(l.useState)(!1),W=Object(s.a)(z,2),X=W[0],Y=W[1],Z=a||b||h,$=Object(o.d)();return Object(l.useEffect)((function(){$(Z?Object(c.h)(!0):Object(c.h)(!1))}),[Z,$]),Z?Object(x.jsx)(x.Fragment,{}):Object(x.jsxs)(l.Fragment,{children:[Object(x.jsx)(k.a,{label:"Lecturer",fields:[{label:"Name",content:m.name},{label:"ID",content:m.id},{label:"PSID",content:m.psid},{label:"Address",content:m.address}],links:[{label:"Faculty",content:i.facultyName,destination:"/faculty/".concat(i.groupId)}],buttons:[{label:"Edit basic info",onClick:function(){B(!0)}},{label:"Change password",onClick:function(){_(!0)}},{label:"Change faculty",onClick:function(){Y(!0)}},{label:"Remove lecturer",onClick:function(){D(!0)}}],listItems:n,listItemLabel:"mentor group",nameSelector:function(e){return e.groupName},keySelector:function(e){return e.groupId},linkSelector:function(e){return"/mentor/".concat(e.groupId)}}),Object(x.jsx)(E.a,{title:"Edit lecturer info",show:V,handleClose:function(){B(!1)},handleSubmit:function(){var e=Object(j.a)(f.a.mark((function e(t){var r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,n=t.address,e.next=3,v({id:m.id,name:r,address:n});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),initialValues:{name:m.name,address:m.address}}),Object(x.jsx)(G.a,{title:"Change lecturer password",show:K,handleClose:function(){_(!1)},handleSubmit:function(){var e=Object(j.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({userId:m.id,password:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Object(x.jsx)(N.a,{title:"Change student faculty",show:X,handleClose:function(){Y(!1)},handleSubmit:function(){var e=Object(j.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C({id:m.id,currentFacultyId:i.groupId,newFacultyId:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleSearchItems:function(){var e=Object(j.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t).unwrap();case 2:return r=e.sent,e.abrupt("return",r.map((function(e){return{value:e.groupId,label:e.groupName}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Object(x.jsx)(q.a,{title:"Remove lecturer?",content:"Information related to this lecturer cannot be recovered.",show:A,handleClose:function(){return D(!1)},handleSubmit:Object(j.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return $(Object(c.k)(null)),e.next=3,y({userId:m.id}).unwrap();case 3:case"end":return e.stop()}}),e)})))})]})},M=r(139),P=function(e){var t=e.selectedLecturerId,r=Object(d.d)(t),n=r.data,a=r.isFetching,u=Object(o.d)();return Object(l.useEffect)((function(){u(a?Object(c.h)(!0):Object(c.h)(!1))}),[a,u]),a?Object(x.jsx)(x.Fragment,{}):Object(x.jsx)(M.a,{label:"Course",items:n,keySelector:function(e){return e.groupId},nameSelector:function(e){return e.courseName},linkSelector:function(e){return"/course/".concat(e.groupId)},showButtons:!1})};t.default=function(){var e=Object(o.d)(),t=Object(o.e)(c.e);return Object(n.a)({selectedItemId:t,setSelectedItemId:function(t){e(Object(c.k)(t))}}),Object(x.jsxs)(a.a,{className:"justify-content-md-center my-3",children:[Object(x.jsx)(u.a,{md:"3",children:Object(x.jsx)(T,{})}),t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u.a,{md:"4",children:Object(x.jsx)(R,{selectedLecturerId:t})}),Object(x.jsx)(u.a,{md:"4",children:Object(x.jsx)(P,{selectedLecturerId:t})})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u.a,{md:"4"}),Object(x.jsx)(u.a,{md:"4"})]})]})}}}]);
//# sourceMappingURL=9.0664fafa.chunk.js.map