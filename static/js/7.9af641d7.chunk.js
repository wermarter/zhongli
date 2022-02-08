(this.webpackJsonpclient_admin=this.webpackJsonpclient_admin||[]).push([[7],{291:function(e,t,n){"use strict";var r=n(39),a=n.n(r),c=n(53),o=n(10),u=n(346),i=n(283),s=n(286),d=n(0),l=n(1);t.a=function(e){var t=e.show,n=e.handleClose,r=e.handleSubmit,j=e.handleError,b=e.title,p=e.content,m=Object(d.useState)(!1),h=Object(o.a)(m,2),f=h[0],O=h[1],v=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=10;break}return O(!0),e.prev=2,e.next=5,r();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),j&&j(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(u.a,{show:t,onHide:n,children:[Object(l.jsx)(u.a.Header,{closeButton:!0,children:Object(l.jsx)(u.a.Title,{children:b})}),Object(l.jsx)(u.a.Body,{children:p}),Object(l.jsxs)(u.a.Footer,{children:[Object(l.jsx)(i.a,{variant:"secondary",onClick:n,children:"Cancel"}),Object(l.jsxs)(i.a,{variant:"primary",onClick:v,children:[f&&Object(l.jsx)(s.a,{animation:"border",as:"span",role:"status",size:"sm"}),"OK"]})]})]})}},292:function(e,t,n){"use strict";var r=n(39),a=n.n(r),c=n(53),o=n(72),u=n(54),i=n(346),s=n(71),d=n(283),l=n(286),j=n(294),b=n(1),p=o.b().shape({itemId:o.c().required("This field is required.")}),m={itemId:""};t.a=function(e){var t=e.title,n=e.show,r=e.handleClose,o=e.handleSubmit,h=e.handleSearchItems,f=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o(t.itemId);case 3:r(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(b.jsxs)(i.a,{show:n,onHide:r,children:[Object(b.jsx)(i.a.Header,{closeButton:!0,children:Object(b.jsx)(i.a.Title,{children:t})}),Object(b.jsx)(u.c,{initialValues:m,onSubmit:f,validationSchema:p,children:function(e){return Object(b.jsxs)(s.a,{noValidate:!0,onSubmit:e.handleSubmit,onReset:e.handleReset,children:[Object(b.jsx)(i.a.Body,{children:Object(b.jsx)(u.b,{name:"itemId",component:j.a,loadOptions:h})}),Object(b.jsxs)(i.a.Footer,{children:[Object(b.jsx)(d.a,{variant:"secondary",onClick:r,children:"Cancel"}),Object(b.jsxs)(d.a,{variant:"primary",type:"submit",children:[e.isSubmitting&&Object(b.jsx)(l.a,{animation:"border",as:"span",role:"status",size:"sm"}),"Submit"]})]})]})}})]})}},293:function(e,t,n){"use strict";n.d(t,"i",(function(){return c})),n.d(t,"g",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"h",(function(){return l})),n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return b}));var r=n(37),a=n(64).a.injectEndpoints({endpoints:function(e){return{searchLecturers:e.mutation({query:function(e){return{url:"/user",method:"GET",params:{role:"LECTURER",query:e||""}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return{type:r.d,id:e.id}}))}}),getLecturerInfo:e.query({query:function(e){return{url:"/user/info",method:"GET",params:{userId:e}}},providesTags:function(e,t,n){return[{type:r.d,id:n}]}}),getLecturerMentorGroups:e.query({query:function(e){return{url:"/lecturer/mentor",method:"GET",params:{lecturerId:e}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>2?arguments[2]:void 0;return e.map((function(e){return{type:r.f,id:e.groupId}})).concat([{type:r.g,id:t}])}}),getLecturerFaculty:e.query({query:function(e){return{url:"/user/faculty",method:"GET",params:{userId:e}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>2?arguments[2]:void 0;return[{type:r.c,id:e.groupId},{type:r.d,id:t}]}}),getLecturerCourses:e.query({query:function(e){return{url:"/lecturer/course",method:"GET",params:{lecturerId:e}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>2?arguments[2]:void 0;return e.map((function(e){return{type:r.a,id:e.groupId}})).concat([{type:r.b,id:t}])}}),addNewLecturer:e.mutation({query:function(e){return{url:"/user",method:"POST",body:{name:e.name,password:e.password,role:"LECTURER",address:e.address,facultyId:e.facultyId,displayId:e.displayId}}},invalidatesTags:function(e,t,n){return[{type:r.e,id:n.facultyId}]}}),removeLecturer:e.mutation({query:function(e){return{url:"/user",method:"DELETE",params:{userId:e.userId}}},invalidatesTags:function(){var e=arguments.length>2?arguments[2]:void 0;return[{type:r.d,id:e.userId}]}}),changeLecturerInfo:e.mutation({query:function(e){return{url:"/user",method:"PUT",body:{id:e.id,name:e.name,address:e.address,displayId:e.displayId}}},invalidatesTags:function(e,t,n){return[{type:r.d,id:n.id}]}}),changeLecturerFaculty:e.mutation({query:function(e){return{url:"/user/group",method:"PUT",body:{userId:e.id,currentGroupId:e.currentFacultyId,newGroupId:e.newFacultyId}}},invalidatesTags:function(e,t,n){return[{type:r.d,id:n.id},{type:r.e,id:n.currentFacultyId},{type:r.e,id:n.newFacultyId}]}})}}}),c=a.useSearchLecturersMutation,o=a.useGetLecturerMentorGroupsQuery,u=a.useGetLecturerCoursesQuery,i=a.useGetLecturerFacultyQuery,s=a.useGetLecturerInfoQuery,d=a.useAddNewLecturerMutation,l=a.useRemoveLecturerMutation,j=a.useChangeLecturerInfoMutation,b=a.useChangeLecturerFacultyMutation},294:function(e,t,n){"use strict";var r=n(54),a=n(71),c=n(305),o=n(1);t.a=function(e){var t=e.field,n=e.form,u=e.label,i=e.placeholder,s=e.disabled,d=e.loadOptions,l=t.name,j=t.onBlur,b=n.errors,p=n.touched,m=b[l]&&p[l];return Object(o.jsxs)(a.a.Group,{className:"mb-3",children:[u&&Object(o.jsx)(a.a.Label,{htmlFor:l,children:u}),Object(o.jsx)(c.a,{id:l,onChange:function(e){var n=e?e.value:e,r={target:{name:l,value:n}};t.onChange(r)},onBlur:j,placeholder:i,loadOptions:d,disabled:s,className:m?"is-invalid":""}),Object(o.jsx)(r.a,{name:l,render:function(e){return Object(o.jsx)(a.a.Control.Feedback,{type:"invalid",children:e})}})]})}},296:function(e,t,n){"use strict";var r=n(10),a=n(0),c=n(352),o=n(288),u=n(156),i=n(71),s=n(283),d=n(1);t.a=function(e){var t=e.label,n=e.items,l=void 0===n?[]:n,j=e.selectedItemKey,b=e.keySelector,p=e.nameSelector,m=e.showKey,h=e.onSearch,f=e.onAdd,O=e.onSelect;Object(a.useEffect)((function(){j||h(j)}),[]);var v=Object(a.useState)(""),x=Object(r.a)(v,2),g=x[0],y=x[1],I=l.filter((function(e){return b(e).toUpperCase().includes(g.toUpperCase())||p(e).toUpperCase().includes(g.toUpperCase())})).map((function(e){var t=b(e),n=p(e);return Object(d.jsx)(c.a.Item,{active:t===j,action:!0,onClick:function(){return O(e)},className:"user-select-none",children:Object(d.jsxs)("div",{className:"d-flex justify-content-between",children:[n,m?Object(d.jsx)("div",{children:t}):null]})},t)}));return Object(d.jsxs)(o.a,{border:"secondary",children:[Object(d.jsxs)(o.a.Header,{className:"d-flex justify-content-between",children:[Object(d.jsx)(u.a,{className:"flex-grow-1",label:t,children:Object(d.jsx)(i.a.Control,{placeholder:"placeholder",value:g,onChange:function(e){return y(e.target.value)}})}),Object(d.jsx)(s.a,{variant:"secondary",className:"mx-1",onClick:function(){h(g),y("")},children:"Find"}),Object(d.jsx)(s.a,{variant:"secondary",onClick:f,children:"Add"})]}),0!==I.length?Object(d.jsx)(c.a,{variant:"flush",children:I}):null,Object(d.jsx)(o.a.Footer,{className:"text-muted text-center",children:"Found ".concat(I.length," ").concat(t.toLowerCase())})]})}},297:function(e,t,n){"use strict";var r=n(352),a=n(288),c=n(343),o=n(337),u=n(71),i=n(344),s=n(155),d=n(151),l=n(8),j=n(33),b=n(1);t.a=function(e){var t=e.label,n=e.buttons,p=void 0===n?[]:n,m=e.fields,h=void 0===m?[]:m,f=e.links,O=void 0===f?[]:f,v=e.listItems,x=void 0===v?[]:v,g=e.listItemLabel,y=e.keySelector,I=e.nameSelector,w=e.linkSelector,S=Object(l.h)(),C=x.map((function(e){var t;return Object(b.jsx)(r.a.Item,{children:Object(b.jsxs)("div",{className:"d-flex justify-content-between",children:[null!==(t=I(e))&&void 0!==t?t:"[unnamed ".concat(g.toLowerCase(),"]"),Object(b.jsx)(j.c,{to:w(e),children:"Go to ".concat(g.toLowerCase())})]})},y(e))}));return Object(b.jsxs)(a.a,{border:"secondary",children:[Object(b.jsxs)(a.a.Header,{className:"d-flex justify-content-between align-items-center",children:[Object(b.jsxs)("h1",{className:"display-6 flex-grow-1",children:[t," details"]}),Object(b.jsx)(c.a,{variant:"secondary",title:"Options",children:p.map((function(e){var t=e.label,n=e.onClick;return Object(b.jsx)(o.a.Item,{onClick:n,children:t},t)}))})]}),Object(b.jsxs)(a.a.Body,{children:[h.map((function(e){var t=e.label,n=e.content;return Object(b.jsxs)(u.a.Group,{as:i.a,className:"mb-1",children:[Object(b.jsxs)(u.a.Label,{column:!0,sm:"3",children:[t,":"]}),Object(b.jsx)(s.a,{sm:"9",children:Object(b.jsx)(u.a.Control,{plaintext:!0,readOnly:!0,className:n?"":"text-muted",value:null!==n&&void 0!==n?n:"[not available]"})})]},t)})),O.map((function(e){var t=e.label,n=e.content,r=e.destination;return Object(b.jsxs)(u.a.Group,{as:i.a,className:"mb-1",children:[Object(b.jsxs)(u.a.Label,{column:!0,sm:"3",children:[t,":"]}),Object(b.jsx)(s.a,{sm:"9",children:n?Object(b.jsx)(d.a,{className:"px-0",onClick:function(){return S(r)},children:n}):Object(b.jsx)(d.a,{className:"text-muted px-0",children:"[not available]"})})]},t)}))]}),0!==C.length?Object(b.jsx)(r.a,{variant:"flush",children:C}):null]})}},298:function(e,t,n){"use strict";var r=n(39),a=n.n(r),c=n(53),o=n(10),u=n(0),i=n(352),s=n(288),d=n(156),l=n(71),j=n(283),b=n(33),p=n(291),m=n(292),h=n(1);t.a=function(e){var t=e.label,n=e.items,r=e.keySelector,f=e.nameSelector,O=e.linkSelector,v=e.showButtons,x=e.handleRemove,g=e.handleAdd,y=e.handleSearchItems,I=Object(u.useState)(""),w=Object(o.a)(I,2),S=w[0],C=w[1],T=Object(u.useState)({}),k=Object(o.a)(T,2),N=k[0],M=k[1],q=Object(u.useState)(!1),G=Object(o.a)(q,2),L=G[0],F=G[1],E=Object(u.useState)(!1),R=Object(o.a)(E,2),U=R[0],B=R[1],H=Object(u.useState)(),P=Object(o.a)(H,2),A=P[0],D=P[1],V=n.map((function(e){return r(e)})),K=n.filter((function(e){return r(e).toUpperCase().includes(S.toUpperCase())||f(e).toUpperCase().includes(S.toUpperCase())})).map((function(e){var n=r(e),a=f(e),c=n===r(N);return Object(h.jsx)(i.a.Item,{action:!0,className:"user-select-none",onClick:function(){return M(e)},active:c,children:Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[a,Object(h.jsx)(b.c,{style:c?{color:"#fff"}:{},to:O(e),children:"Go to ".concat(t.toLowerCase())})]})},n)}));return Object(h.jsxs)(u.Fragment,{children:[Object(h.jsxs)(s.a,{border:"secondary",children:[Object(h.jsxs)(s.a.Header,{className:"d-flex justify-content-between",children:[Object(h.jsx)(d.a,{className:"flex-grow-1",label:t,children:Object(h.jsx)(l.a.Control,{placeholder:"placeholder",value:S,onChange:function(e){return C(e.target.value)}})}),v?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a,{variant:"secondary",className:"mx-1",onClick:function(){return D(!0)},children:"Add"}),Object(h.jsx)(j.a,{variant:"secondary",onClick:function(){r(N)?B(!0):F(!0)},children:"Remove"})]}):null]}),0!==K.length?Object(h.jsx)(i.a,{variant:"flush",children:K}):null,Object(h.jsx)(s.a.Footer,{className:"text-muted text-center",children:"Found ".concat(K.length," ").concat(t.toLowerCase())})]}),Object(h.jsx)(p.a,{title:"Warning",content:"Please select one ".concat(t.toLowerCase()," from the list."),show:L,handleClose:function(){return F(!1)}}),Object(h.jsx)(p.a,{title:"Remove ".concat(t.toLowerCase(),"?"),content:"This action cannot be undone. List will be updated.",show:U,handleClose:function(){return B(!1)},handleSubmit:Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(N);case 2:case"end":return e.stop()}}),e)})))}),Object(h.jsx)(m.a,{title:"Add new ".concat(t.toLowerCase()),show:A,handleClose:function(){return D(!1)},handleSubmit:g,handleSearchItems:function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:return n=e.sent,e.abrupt("return",n.filter((function(e){return!V.includes(e.value)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})]})}},299:function(e,t,n){"use strict";var r=n(0),a=n(8);var c=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e}),[e]),t.current};t.a=function(e){var t,n,o=e.selectedItemId,u=e.setSelectedItemId,i=Object(a.h)(),s=Object(a.g)("/:resource/:itemId"),d=null===s||void 0===s||null===(t=s.params)||void 0===t?void 0:t.itemId,l=null===s||void 0===s||null===(n=s.params)||void 0===n?void 0:n.resource,j=c(o);Object(r.useEffect)((function(){o?d?d!==o&&(j?d===j?i(o.toString()):console.log("Weird?",{itemIdParam:d,prevSelectedId:j,selectedItemId:o}):u(d)):i(o.toString()):j?j===d?i("/".concat(l)):console.log("Weird?",{itemIdParam:d,prevSelectedId:j,selectedItemId:o}):d&&u(d)}),[o,d])}},301:function(e,t,n){"use strict";n.d(t,"h",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return j}));var r=n(37),a=n(64).a.injectEndpoints({endpoints:function(e){return{searchMentors:e.mutation({query:function(e){return{url:"/group",method:"GET",params:{query:e||"",groupType:"MENTORGROUP"}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return{type:r.f,id:e.groupId}}))}}),getMentorInfo:e.query({query:function(e){return{url:"/mentor/info",method:"GET",params:{groupId:e}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{type:r.f,id:e.groupId}]}}),getMentorGroupStudents:e.query({query:function(e){return{url:"/group/user",method:"GET",params:{groupId:e,role:"STUDENT"}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>2?arguments[2]:void 0;return e.map((function(e){return{type:r.h,id:e.userId}})).concat([{type:r.i,id:t}])}}),addNewMentorGroup:e.mutation({query:function(e){return{url:"/mentor",method:"POST",body:{mentorId:e.mentorId,groupName:e.groupName,displayId:e.displayId}}},invalidatesTags:function(){var e=arguments.length>2?arguments[2]:void 0;return[{type:r.g,id:e.mentorId}]}}),removeMentorGroup:e.mutation({query:function(e){return{url:"/group",method:"DELETE",params:{groupId:e.groupId}}},invalidatesTags:function(){var e=arguments.length>2?arguments[2]:void 0;return[{type:r.f,id:e.groupId}]}}),changeGroupName:e.mutation({query:function(e){return{url:"/group/name",method:"PUT",body:{groupId:e.groupId,groupName:e.groupName}}},invalidatesTags:function(e,t,n){return[{type:r.f,id:n.groupId}]}}),changeGroupDisplayId:e.mutation({query:function(e){return{url:"/group/displayId",method:"PUT",body:{groupId:e.groupId,displayId:e.displayId}}},invalidatesTags:function(e,t,n){return[{type:r.f,id:n.groupId}]}}),changeMentorId:e.mutation({query:function(e){var t=e.groupId;e.currentMentorId;return{url:"/mentor",method:"PUT",body:{groupId:t,mentorId:e.newMentorId}}},invalidatesTags:function(e,t,n){return[{type:r.f,id:n.groupId},{type:r.g,id:n.currentMentorId},{type:r.g,id:n.newMentorId}]}})}}}),c=a.useSearchMentorsMutation,o=a.useGetMentorGroupStudentsQuery,u=a.useGetMentorInfoQuery,i=a.useAddNewMentorGroupMutation,s=a.useRemoveMentorGroupMutation,d=a.useChangeGroupNameMutation,l=a.useChangeMentorIdMutation,j=a.useChangeGroupDisplayIdMutation},303:function(e,t,n){"use strict";var r=n(39),a=n.n(r),c=n(53),o=n(72),u=n(54),i=n(346),s=n(71),d=n(283),l=n(286),j=n(95),b=n(1);t.a=function(e){var t=e.title,n=e.show,r=e.handleClose,p=e.handleSubmit,m=e.initialValues,h=void 0===m?"":m,f=e.isNumber,O=void 0!==f&&f,v=o.b().shape({singleField:O?o.a().required("This field is required."):o.c().required("This field is required.")}),x=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(t.singleField);case 3:r(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(b.jsxs)(i.a,{show:n,onHide:r,children:[Object(b.jsx)(i.a.Header,{closeButton:!0,children:Object(b.jsx)(i.a.Title,{children:t})}),Object(b.jsx)(u.c,{initialValues:{singleField:h},onSubmit:x,validationSchema:v,children:function(e){return Object(b.jsxs)(s.a,{noValidate:!0,onSubmit:e.handleSubmit,onReset:e.handleReset,children:[Object(b.jsx)(i.a.Body,{children:Object(b.jsx)(u.b,{name:"singleField",component:j.a,type:O?"number":"text"})}),Object(b.jsxs)(i.a.Footer,{children:[Object(b.jsx)(d.a,{variant:"secondary",onClick:r,children:"Cancel"}),Object(b.jsxs)(d.a,{variant:"primary",type:"submit",children:[e.isSubmitting&&Object(b.jsx)(l.a,{animation:"border",as:"span",role:"status",size:"sm"}),"Submit"]})]})]})}})]})}},349:function(e,t,n){"use strict";n.r(t);var r=n(299),a=n(40),c=n(344),o=n(155),u=n(10),i=n(0),s=n(15),d=n(301),l=n(296),j=n(39),b=n.n(j),p=n(53),m=n(72),h=n(54),f=n(346),O=n(71),v=n(283),x=n(286),g=n(95),y=n(294),I=n(293),w=n(1),S=m.b().shape({displayId:m.c().required("This field is required."),groupName:m.c().required("This field is required."),mentorId:m.c().required("This field is required.")}),C={displayId:"",groupName:"",mentorId:""},T=function(e){var t=e.show,n=e.handleClose,r=Object(I.i)(),c=Object(u.a)(r,1)[0],o=Object(d.a)(),i=Object(u.a)(o,1)[0],l=Object(s.d)(),j=function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t).unwrap();case 2:return n=e.sent,e.abrupt("return",n.map((function(e){return{value:e.id,label:e.name}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(p.a)(b.a.mark((function e(t,r){var c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(t).unwrap();case 3:c=e.sent,o=c.groupId,n(),l(Object(a.m)(o)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(w.jsxs)(f.a,{show:t,onHide:n,children:[Object(w.jsx)(f.a.Header,{closeButton:!0,children:Object(w.jsx)(f.a.Title,{children:"Add new mentor group"})}),Object(w.jsx)(h.c,{initialValues:C,onSubmit:m,validationSchema:S,children:function(e){return Object(w.jsxs)(O.a,{noValidate:!0,onSubmit:e.handleSubmit,onReset:e.handleReset,children:[Object(w.jsxs)(f.a.Body,{children:[Object(w.jsx)(h.b,{name:"groupName",component:g.a,label:"New group name",placeholder:"ITCS K18..."}),Object(w.jsx)(h.b,{name:"displayId",component:g.a,label:"New group ID",placeholder:"ITCSK18..."}),Object(w.jsx)(h.b,{name:"mentorId",component:y.a,loadOptions:j,label:"Select mentor"})]}),Object(w.jsxs)(f.a.Footer,{children:[Object(w.jsx)(v.a,{variant:"secondary",onClick:n,children:"Cancel"}),Object(w.jsxs)(v.a,{variant:"primary",type:"submit",children:[e.isSubmitting&&Object(w.jsx)(x.a,{animation:"border",as:"span",role:"status",size:"sm"}),"Submit"]})]})]})}})]})},k=function(){var e=Object(s.d)(),t=Object(d.h)(),n=Object(u.a)(t,2),r=n[0],c=n[1].data,o=Object(s.e)(a.h),j=Object(i.useState)(!1),b=Object(u.a)(j,2),p=b[0],m=b[1];return Object(w.jsxs)(i.Fragment,{children:[Object(w.jsx)(l.a,{label:"Mentor",items:c,selectedItemKey:o,keySelector:function(e){return e.groupId},nameSelector:function(e){return e.groupName},showKey:!1,onSearch:function(e){return r(e)},onAdd:function(){return m(!0)},onSelect:function(t){return e(Object(a.m)(t.groupId))}}),Object(w.jsx)(T,{show:p,handleClose:function(){return m(!1)}})]})},N=n(297),M=n(291),q=n(303),G=n(292),L=function(e){var t=e.selectedMentorId,n=Object(d.f)(t),r=n.data,c=n.isFetching,o=Object(d.g)(),l=Object(u.a)(o,1)[0],j=Object(d.c)(),m=Object(u.a)(j,1)[0],h=Object(d.d)(),f=Object(u.a)(h,1)[0],O=Object(I.i)(),v=Object(u.a)(O,1)[0],x=Object(d.b)(),g=Object(u.a)(x,1)[0],y=Object(i.useState)(!1),S=Object(u.a)(y,2),C=S[0],T=S[1],k=Object(i.useState)(!1),L=Object(u.a)(k,2),F=L[0],E=L[1],R=Object(i.useState)(!1),U=Object(u.a)(R,2),B=U[0],H=U[1],P=Object(i.useState)(!1),A=Object(u.a)(P,2),D=A[0],V=A[1],K=Object(s.d)();return c?Object(w.jsx)(w.Fragment,{}):Object(w.jsxs)(i.Fragment,{children:[Object(w.jsx)(N.a,{label:"Group",fields:[{label:"Group name",content:r.groupName},{label:"Group ID",content:r.displayId}],links:[{label:"Mentor",content:r.mentorName,destination:"/lecturer/".concat(r.mentorId||"")}],buttons:[{label:"Rename group",onClick:function(){E(!0)}},{label:"Change group ID",onClick:function(){H(!0)}},{label:"Change mentor",onClick:function(){V(!0)}},{label:"Remove group",onClick:function(){T(!0)}}]}),Object(w.jsx)(q.a,{title:"Change group name",show:F,handleClose:function(){E(!1)},handleSubmit:function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({groupId:r.groupId,groupName:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),initialValues:r.groupName}),Object(w.jsx)(q.a,{title:"Change group ID",show:B,handleClose:function(){H(!1)},handleSubmit:function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g({groupId:r.groupId,displayId:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),initialValues:r.displayId}),Object(w.jsx)(G.a,{title:"Change mentor",show:D,handleClose:function(){V(!1)},handleSubmit:function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f({groupId:r.groupId,currentMentorId:r.mentorId,newMentorId:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleSearchItems:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t).unwrap();case 2:return n=e.sent,e.abrupt("return",n.map((function(e){return{value:e.id,label:e.name}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Object(w.jsx)(M.a,{title:"Remove mentor group?",content:"All students and lecturers will be removed from this mentor group too.",show:C,handleClose:function(){return T(!1)},handleSubmit:Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(Object(a.m)(null)),e.next=3,l({groupId:r.groupId}).unwrap();case 3:case"end":return e.stop()}}),e)})))})]})},F=n(298),E=function(e){var t=e.selectedMentorId,n=Object(d.e)(t),r=n.data;return n.isFetching?Object(w.jsx)(w.Fragment,{}):Object(w.jsx)(F.a,{label:"Student",items:r,keySelector:function(e){return e.userId},nameSelector:function(e){return e.userName},linkSelector:function(e){return"/student/".concat(e.userId)},showButtons:!1})};t.default=function(){var e=Object(s.d)(),t=Object(s.e)(a.h);return Object(r.a)({selectedItemId:t,setSelectedItemId:function(t){e(Object(a.m)(t))}}),Object(w.jsxs)(c.a,{className:"justify-content-md-center my-3",children:[Object(w.jsx)(o.a,{md:"3",children:Object(w.jsx)(k,{})}),t?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(o.a,{md:"4",children:Object(w.jsx)(L,{selectedMentorId:t})}),Object(w.jsx)(o.a,{md:"4",children:Object(w.jsx)(E,{selectedMentorId:t})})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(o.a,{md:"4"}),Object(w.jsx)(o.a,{md:"4"})]})]})}}}]);
//# sourceMappingURL=7.9af641d7.chunk.js.map