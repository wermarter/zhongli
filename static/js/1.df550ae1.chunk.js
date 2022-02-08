(this.webpackJsonpclient_admin=this.webpackJsonpclient_admin||[]).push([[1],{291:function(e,t,n){"use strict";var r=n(39),a=n.n(r),u=n(53),c=n(10),s=n(346),o=n(283),i=n(286),d=n(0),l=n(1);t.a=function(e){var t=e.show,n=e.handleClose,r=e.handleSubmit,p=e.handleError,h=e.title,m=e.content,j=Object(d.useState)(!1),b=Object(c.a)(j,2),f=b[0],y=b[1],v=function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=10;break}return y(!0),e.prev=2,e.next=5,r();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),p&&p(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(s.a,{show:t,onHide:n,children:[Object(l.jsx)(s.a.Header,{closeButton:!0,children:Object(l.jsx)(s.a.Title,{children:h})}),Object(l.jsx)(s.a.Body,{children:m}),Object(l.jsxs)(s.a.Footer,{children:[Object(l.jsx)(o.a,{variant:"secondary",onClick:n,children:"Cancel"}),Object(l.jsxs)(o.a,{variant:"primary",onClick:v,children:[f&&Object(l.jsx)(i.a,{animation:"border",as:"span",role:"status",size:"sm"}),"OK"]})]})]})}},292:function(e,t,n){"use strict";var r=n(39),a=n.n(r),u=n(53),c=n(72),s=n(54),o=n(346),i=n(71),d=n(283),l=n(286),p=n(294),h=n(1),m=c.b().shape({itemId:c.c().required("This field is required.")}),j={itemId:""};t.a=function(e){var t=e.title,n=e.show,r=e.handleClose,c=e.handleSubmit,b=e.handleSearchItems,f=function(){var e=Object(u.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(t.itemId);case 3:r(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(h.jsxs)(o.a,{show:n,onHide:r,children:[Object(h.jsx)(o.a.Header,{closeButton:!0,children:Object(h.jsx)(o.a.Title,{children:t})}),Object(h.jsx)(s.c,{initialValues:j,onSubmit:f,validationSchema:m,children:function(e){return Object(h.jsxs)(i.a,{noValidate:!0,onSubmit:e.handleSubmit,onReset:e.handleReset,children:[Object(h.jsx)(o.a.Body,{children:Object(h.jsx)(s.b,{name:"itemId",component:p.a,loadOptions:b})}),Object(h.jsxs)(o.a.Footer,{children:[Object(h.jsx)(d.a,{variant:"secondary",onClick:r,children:"Cancel"}),Object(h.jsxs)(d.a,{variant:"primary",type:"submit",children:[e.isSubmitting&&Object(h.jsx)(l.a,{animation:"border",as:"span",role:"status",size:"sm"}),"Submit"]})]})]})}})]})}},294:function(e,t,n){"use strict";var r=n(54),a=n(71),u=n(305),c=n(1);t.a=function(e){var t=e.field,n=e.form,s=e.label,o=e.placeholder,i=e.disabled,d=e.loadOptions,l=t.name,p=t.onBlur,h=n.errors,m=n.touched,j=h[l]&&m[l];return Object(c.jsxs)(a.a.Group,{className:"mb-3",children:[s&&Object(c.jsx)(a.a.Label,{htmlFor:l,children:s}),Object(c.jsx)(u.a,{id:l,onChange:function(e){var n=e?e.value:e,r={target:{name:l,value:n}};t.onChange(r)},onBlur:p,placeholder:o,loadOptions:d,disabled:i,className:j?"is-invalid":""}),Object(c.jsx)(r.a,{name:l,render:function(e){return Object(c.jsx)(a.a.Control.Feedback,{type:"invalid",children:e})}})]})}},295:function(e,t,n){"use strict";n.d(t,"h",(function(){return u})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return p}));var r=n(37),a=n(64).a.injectEndpoints({endpoints:function(e){return{searchFaculties:e.mutation({query:function(e){return{url:"/group",method:"GET",params:{query:e||"",groupType:"FACULTY"}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return{type:r.c,id:e.groupId}}))}}),getFacultyInfo:e.query({query:function(e){return{url:"/faculty/info",method:"GET",params:{groupId:e}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{type:r.c,id:e.groupId}]}}),getFacultyLecturers:e.query({query:function(e){return{url:"/group/user",method:"GET",params:{groupId:e,role:"LECTURER"}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>2?arguments[2]:void 0;return e.map((function(e){return{type:r.d,id:e.userId}})).concat([{type:r.e,id:t}])}}),addNewFaculty:e.mutation({query:function(e){return{url:"/faculty",method:"POST",body:{facultyName:e.facultyName,displayId:e.displayId}}}}),removeFaculty:e.mutation({query:function(e){return{url:"/group",method:"DELETE",params:{groupId:e.groupId}}},invalidatesTags:function(){var e=arguments.length>2?arguments[2]:void 0;return[{type:r.c,id:e.groupId}]}}),changeFacultyName:e.mutation({query:function(e){return{url:"/group/name",method:"PUT",body:{groupId:e.groupId,groupName:e.groupName}}},invalidatesTags:function(e,t,n){return[{type:r.c,id:n.groupId}]}}),changeFacultyDisplayId:e.mutation({query:function(e){return{url:"/group/displayId",method:"PUT",body:{groupId:e.groupId,displayId:e.displayId}}},invalidatesTags:function(e,t,n){return[{type:r.c,id:n.groupId}]}}),changeFacultyAdmin:e.mutation({query:function(e){return{url:"/faculty",method:"PUT",body:{groupId:e.groupId,adminId:e.adminId}}},invalidatesTags:function(e,t,n){return[{type:r.c,id:n.groupId}]}})}}}),u=a.useSearchFacultiesMutation,c=a.useGetFacultyInfoQuery,s=a.useGetFacultyLecturersQuery,o=a.useAddNewFacultyMutation,i=a.useRemoveFacultyMutation,d=a.useChangeFacultyNameMutation,l=a.useChangeFacultyDisplayIdMutation,p=a.useChangeFacultyAdminMutation},296:function(e,t,n){"use strict";var r=n(10),a=n(0),u=n(352),c=n(288),s=n(156),o=n(71),i=n(283),d=n(1);t.a=function(e){var t=e.label,n=e.items,l=void 0===n?[]:n,p=e.selectedItemKey,h=e.keySelector,m=e.nameSelector,j=e.showKey,b=e.onSearch,f=e.onAdd,y=e.onSelect;Object(a.useEffect)((function(){p||b(p)}),[]);var v=Object(a.useState)(""),x=Object(r.a)(v,2),O=x[0],g=x[1],I=l.filter((function(e){return h(e).toUpperCase().includes(O.toUpperCase())||m(e).toUpperCase().includes(O.toUpperCase())})).map((function(e){var t=h(e),n=m(e);return Object(d.jsx)(u.a.Item,{active:t===p,action:!0,onClick:function(){return y(e)},className:"user-select-none",children:Object(d.jsxs)("div",{className:"d-flex justify-content-between",children:[n,j?Object(d.jsx)("div",{children:t}):null]})},t)}));return Object(d.jsxs)(c.a,{border:"secondary",children:[Object(d.jsxs)(c.a.Header,{className:"d-flex justify-content-between",children:[Object(d.jsx)(s.a,{className:"flex-grow-1",label:t,children:Object(d.jsx)(o.a.Control,{placeholder:"placeholder",value:O,onChange:function(e){return g(e.target.value)}})}),Object(d.jsx)(i.a,{variant:"secondary",className:"mx-1",onClick:function(){b(O),g("")},children:"Find"}),Object(d.jsx)(i.a,{variant:"secondary",onClick:f,children:"Add"})]}),0!==I.length?Object(d.jsx)(u.a,{variant:"flush",children:I}):null,Object(d.jsx)(c.a.Footer,{className:"text-muted text-center",children:"Found ".concat(I.length," ").concat(t.toLowerCase())})]})}},297:function(e,t,n){"use strict";var r=n(352),a=n(288),u=n(343),c=n(337),s=n(71),o=n(344),i=n(155),d=n(151),l=n(8),p=n(33),h=n(1);t.a=function(e){var t=e.label,n=e.buttons,m=void 0===n?[]:n,j=e.fields,b=void 0===j?[]:j,f=e.links,y=void 0===f?[]:f,v=e.listItems,x=void 0===v?[]:v,O=e.listItemLabel,g=e.keySelector,I=e.nameSelector,S=e.linkSelector,w=Object(l.h)(),C=x.map((function(e){var t;return Object(h.jsx)(r.a.Item,{children:Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[null!==(t=I(e))&&void 0!==t?t:"[unnamed ".concat(O.toLowerCase(),"]"),Object(h.jsx)(p.c,{to:S(e),children:"Go to ".concat(O.toLowerCase())})]})},g(e))}));return Object(h.jsxs)(a.a,{border:"secondary",children:[Object(h.jsxs)(a.a.Header,{className:"d-flex justify-content-between align-items-center",children:[Object(h.jsxs)("h1",{className:"display-6 flex-grow-1",children:[t," details"]}),Object(h.jsx)(u.a,{variant:"secondary",title:"Options",children:m.map((function(e){var t=e.label,n=e.onClick;return Object(h.jsx)(c.a.Item,{onClick:n,children:t},t)}))})]}),Object(h.jsxs)(a.a.Body,{children:[b.map((function(e){var t=e.label,n=e.content;return Object(h.jsxs)(s.a.Group,{as:o.a,className:"mb-1",children:[Object(h.jsxs)(s.a.Label,{column:!0,sm:"3",children:[t,":"]}),Object(h.jsx)(i.a,{sm:"9",children:Object(h.jsx)(s.a.Control,{plaintext:!0,readOnly:!0,className:n?"":"text-muted",value:null!==n&&void 0!==n?n:"[not available]"})})]},t)})),y.map((function(e){var t=e.label,n=e.content,r=e.destination;return Object(h.jsxs)(s.a.Group,{as:o.a,className:"mb-1",children:[Object(h.jsxs)(s.a.Label,{column:!0,sm:"3",children:[t,":"]}),Object(h.jsx)(i.a,{sm:"9",children:n?Object(h.jsx)(d.a,{className:"px-0",onClick:function(){return w(r)},children:n}):Object(h.jsx)(d.a,{className:"text-muted px-0",children:"[not available]"})})]},t)}))]}),0!==C.length?Object(h.jsx)(r.a,{variant:"flush",children:C}):null]})}},298:function(e,t,n){"use strict";var r=n(39),a=n.n(r),u=n(53),c=n(10),s=n(0),o=n(352),i=n(288),d=n(156),l=n(71),p=n(283),h=n(33),m=n(291),j=n(292),b=n(1);t.a=function(e){var t=e.label,n=e.items,r=e.keySelector,f=e.nameSelector,y=e.linkSelector,v=e.showButtons,x=e.handleRemove,O=e.handleAdd,g=e.handleSearchItems,I=Object(s.useState)(""),S=Object(c.a)(I,2),w=S[0],C=S[1],T=Object(s.useState)({}),q=Object(c.a)(T,2),F=q[0],k=q[1],N=Object(s.useState)(!1),G=Object(c.a)(N,2),E=G[0],M=G[1],U=Object(s.useState)(!1),L=Object(c.a)(U,2),P=L[0],R=L[1],A=Object(s.useState)(),B=Object(c.a)(A,2),H=B[0],D=B[1],V=n.map((function(e){return r(e)})),Q=n.filter((function(e){return r(e).toUpperCase().includes(w.toUpperCase())||f(e).toUpperCase().includes(w.toUpperCase())})).map((function(e){var n=r(e),a=f(e),u=n===r(F);return Object(b.jsx)(o.a.Item,{action:!0,className:"user-select-none",onClick:function(){return k(e)},active:u,children:Object(b.jsxs)("div",{className:"d-flex justify-content-between",children:[a,Object(b.jsx)(h.c,{style:u?{color:"#fff"}:{},to:y(e),children:"Go to ".concat(t.toLowerCase())})]})},n)}));return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsxs)(i.a,{border:"secondary",children:[Object(b.jsxs)(i.a.Header,{className:"d-flex justify-content-between",children:[Object(b.jsx)(d.a,{className:"flex-grow-1",label:t,children:Object(b.jsx)(l.a.Control,{placeholder:"placeholder",value:w,onChange:function(e){return C(e.target.value)}})}),v?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p.a,{variant:"secondary",className:"mx-1",onClick:function(){return D(!0)},children:"Add"}),Object(b.jsx)(p.a,{variant:"secondary",onClick:function(){r(F)?R(!0):M(!0)},children:"Remove"})]}):null]}),0!==Q.length?Object(b.jsx)(o.a,{variant:"flush",children:Q}):null,Object(b.jsx)(i.a.Footer,{className:"text-muted text-center",children:"Found ".concat(Q.length," ").concat(t.toLowerCase())})]}),Object(b.jsx)(m.a,{title:"Warning",content:"Please select one ".concat(t.toLowerCase()," from the list."),show:E,handleClose:function(){return M(!1)}}),Object(b.jsx)(m.a,{title:"Remove ".concat(t.toLowerCase(),"?"),content:"This action cannot be undone. List will be updated.",show:P,handleClose:function(){return R(!1)},handleSubmit:Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(F);case 2:case"end":return e.stop()}}),e)})))}),Object(b.jsx)(j.a,{title:"Add new ".concat(t.toLowerCase()),show:H,handleClose:function(){return D(!1)},handleSubmit:O,handleSearchItems:function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return n=e.sent,e.abrupt("return",n.filter((function(e){return!V.includes(e.value)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})]})}},299:function(e,t,n){"use strict";var r=n(0),a=n(8);var u=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e}),[e]),t.current};t.a=function(e){var t,n,c=e.selectedItemId,s=e.setSelectedItemId,o=Object(a.h)(),i=Object(a.g)("/:resource/:itemId"),d=null===i||void 0===i||null===(t=i.params)||void 0===t?void 0:t.itemId,l=null===i||void 0===i||null===(n=i.params)||void 0===n?void 0:n.resource,p=u(c);Object(r.useEffect)((function(){c?d?d!==c&&(p?d===p?o(c.toString()):console.log("Weird?",{itemIdParam:d,prevSelectedId:p,selectedItemId:c}):s(d)):o(c.toString()):p?p===d?o("/".concat(l)):console.log("Weird?",{itemIdParam:d,prevSelectedId:p,selectedItemId:c}):d&&s(d)}),[c,d])}},300:function(e,t,n){"use strict";n.d(t,"m",(function(){return u})),n.d(t,"j",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"a",(function(){return d})),n.d(t,"l",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"k",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return f}));var r=n(37),a=n(64).a.injectEndpoints({endpoints:function(e){return{searchStudents:e.mutation({query:function(e){return{url:"/user",method:"GET",params:{role:"STUDENT",query:e||""}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return{type:r.h,id:e.id}}))}}),getStudentInfo:e.query({query:function(e){return{url:"/user/info",method:"GET",params:{userId:e}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{type:r.h,id:e.id}]}}),getStudentMentorGroup:e.query({query:function(e){return{url:"/student/mentor",method:"GET",params:{studentId:e}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>2?arguments[2]:void 0;return[{type:r.f,id:e.groupId},{type:r.h,id:t}]}}),getStudentFaculty:e.query({query:function(e){return{url:"/user/faculty",method:"GET",params:{userId:e}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>2?arguments[2]:void 0;return[{type:r.c,id:e.groupId},{type:r.h,id:t}]}}),getStudentCourses:e.query({query:function(e){return{url:"/student/course",method:"GET",params:{studentId:e}}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>2?arguments[2]:void 0;return e.map((function(e){return{type:r.a,id:e.groupId}})).concat([{type:r.b,id:t}])}}),addNewStudent:e.mutation({query:function(e){return{url:"/user",method:"POST",body:{displayId:e.displayId,name:e.name,password:e.password,role:"STUDENT",address:e.address,facultyId:e.facultyId}}}}),removeStudent:e.mutation({query:function(e){return{url:"/user",method:"DELETE",params:{userId:e.userId}}},invalidatesTags:function(){var e=arguments.length>2?arguments[2]:void 0;return[{type:r.h,id:e.userId}]}}),addStudentCourse:e.mutation({query:function(e){return{url:"/group/user",method:"POST",params:{userId:e.userId,groupId:e.groupId}}},invalidatesTags:function(e,t,n){return[{type:r.b,id:n.userId},{type:r.i,id:n.groupId}]}}),removeStudentCourse:e.mutation({query:function(e){return{url:"/group/user",method:"DELETE",params:{userId:e.userId,groupId:e.groupId}}},invalidatesTags:function(e,t,n){return[{type:r.b,id:n.userId},{type:r.i,id:n.groupId}]}}),changeUserPassword:e.mutation({query:function(e){return{url:"/user/password",method:"PUT",body:{userId:e.userId,password:e.password}}}}),changeStudentInfo:e.mutation({query:function(e){return{url:"/user",method:"PUT",body:{id:e.id,name:e.name,address:e.address,displayId:e.displayId}}},invalidatesTags:function(e,t,n){return[{type:r.h,id:n.id}]}}),changeStudentMentor:e.mutation({query:function(e){return{url:"/user/group",method:"PUT",body:{userId:e.id,currentGroupId:e.currentMentorGroupId,newGroupId:e.newMentorGroupId}}},invalidatesTags:function(e,t,n){return[{type:r.h,id:n.id},{type:r.i,id:n.currentMentorGroupId},{type:r.i,id:n.newMentorGroupId}]}}),changeStudentFaculty:e.mutation({query:function(e){return{url:"/user/group",method:"PUT",body:{userId:e.id,currentGroupId:e.currentFacultyId,newGroupId:e.newFacultyId}}},invalidatesTags:function(e,t,n){return[{type:r.h,id:n.id}]}})}}}),u=a.useSearchStudentsMutation,c=a.useGetStudentMentorGroupQuery,s=a.useGetStudentCoursesQuery,o=a.useGetStudentFacultyQuery,i=a.useGetStudentInfoQuery,d=a.useAddNewStudentMutation,l=a.useRemoveStudentMutation,p=a.useAddStudentCourseMutation,h=a.useRemoveStudentCourseMutation,m=a.useChangeUserPasswordMutation,j=a.useChangeStudentInfoMutation,b=a.useChangeStudentMentorMutation,f=a.useChangeStudentFacultyMutation},314:function(e,t,n){"use strict";var r=n(39),a=n.n(r),u=n(53),c=n(72),s=n(54),o=n(346),i=n(71),d=n(283),l=n(286),p=n(95),h=n(1),m=c.b().shape({password:c.c().required("This field is required."),passwordConfirmation:c.c().test("passwords-match","Passwords must match",(function(e){return this.parent.password===e}))}),j={password:"",passwordConfirmation:""};t.a=function(e){var t=e.title,n=e.show,r=e.handleClose,c=e.handleSubmit,b=function(){var e=Object(u.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(t.password);case 3:r(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(h.jsxs)(o.a,{show:n,onHide:r,children:[Object(h.jsx)(o.a.Header,{closeButton:!0,children:Object(h.jsx)(o.a.Title,{children:t})}),Object(h.jsx)(s.c,{initialValues:j,onSubmit:b,validationSchema:m,children:function(e){return Object(h.jsxs)(i.a,{noValidate:!0,onSubmit:e.handleSubmit,onReset:e.handleReset,children:[Object(h.jsxs)(o.a.Body,{children:[Object(h.jsx)(s.b,{name:"password",component:p.a,placeholder:"New password...",type:"password",label:"Password"}),Object(h.jsx)(s.b,{name:"passwordConfirmation",component:p.a,placeholder:"Type password again...",type:"password",label:"Password confirmation"})]}),Object(h.jsxs)(o.a.Footer,{children:[Object(h.jsx)(d.a,{variant:"secondary",onClick:r,children:"Cancel"}),Object(h.jsxs)(d.a,{variant:"primary",type:"submit",children:[e.isSubmitting&&Object(h.jsx)(l.a,{animation:"border",as:"span",role:"status",size:"sm"}),"Submit"]})]})]})}})]})}},315:function(e,t,n){"use strict";var r=n(39),a=n.n(r),u=n(53),c=n(72),s=n(54),o=n(346),i=n(71),d=n(283),l=n(286),p=n(95),h=n(1),m=c.b().shape({displayId:c.c().required("This field is required."),name:c.c().required("This field is required."),address:c.c().required("This field is required.")});t.a=function(e){var t=e.title,n=e.show,r=e.handleClose,c=e.handleSubmit,j=e.initialValues,b=function(){var e=Object(u.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(t);case 3:r(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(h.jsxs)(o.a,{show:n,onHide:r,children:[Object(h.jsx)(o.a.Header,{closeButton:!0,children:Object(h.jsx)(o.a.Title,{children:t})}),Object(h.jsx)(s.c,{initialValues:j,onSubmit:b,validationSchema:m,children:function(e){return Object(h.jsxs)(i.a,{noValidate:!0,onSubmit:e.handleSubmit,onReset:e.handleReset,children:[Object(h.jsxs)(o.a.Body,{children:[Object(h.jsx)(s.b,{name:"displayId",component:p.a,label:"User ID",placeholder:"ITITIU18302"}),Object(h.jsx)(s.b,{name:"name",component:p.a,label:"Fullname",placeholder:"Le Van A..."}),Object(h.jsx)(s.b,{name:"address",component:p.a,label:"Address",placeholder:"District 5, Ho Chi Minh City..."})]}),Object(h.jsxs)(o.a.Footer,{children:[Object(h.jsx)(d.a,{variant:"secondary",onClick:r,children:"Cancel"}),Object(h.jsxs)(d.a,{variant:"primary",type:"submit",children:[e.isSubmitting&&Object(h.jsx)(l.a,{animation:"border",as:"span",role:"status",size:"sm"}),"Submit"]})]})]})}})]})}}}]);
//# sourceMappingURL=1.df550ae1.chunk.js.map