(this["webpackJsonpcv19-manage-system"]=this["webpackJsonpcv19-manage-system"]||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),l=t(9),i=t.n(l),c=t(3),r=t(4),b=t(6),j=t(5),h=t(0);var u=function(e){return Object(h.jsx)("footer",{})},d=t.p+"static/media/images.5b196558.jpg";var o=function(e){return Object(h.jsxs)("div",{id:"header",children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)("img",{src:d,className:"logo_image",alt:"something"})}),Object(h.jsxs)("div",{className:"pro_name",children:[Object(h.jsx)("h2",{children:"Covid-19"}),Object(h.jsx)("br",{}),Object(h.jsx)("h2",{className:"management",children:"Management"}),Object(h.jsx)("br",{}),Object(h.jsx)("h2",{children:"Machine"})]}),Object(h.jsx)("div",{className:"header_image_container"})]})},m=t(7),p=t(2);var O=function(e){var a=e.children;return Object(h.jsx)("div",{className:"group",children:a})};var x=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{className:e.labelClass,htmlFor:e.label,children:[e.name,e.require?Object(h.jsx)("em",{children:"(*)"}):null,":"]}),"date"===e.type?Object(h.jsx)("input",{id:e.label,type:e.type,name:e.label,onChange:e.onChange,value:e.val,max:e.end,className:e.inputClass}):Object(h.jsx)("input",{id:e.label,type:e.type,name:e.label,onChange:e.onChange,value:e.val,className:e.inputClass,autoComplete:e.autoComplete}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:e.error_msg})]})},v=function(e){return Object(h.jsx)(O,{children:Object(h.jsx)("input",{type:"submit",className:"button",value:e.value})})},g=function(e){Object(b.a)(t,e);var a=Object(j.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={username:"",password:"",remember:!0,submitWarning:!1},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.handleValidation=n.handleValidation.bind(Object(p.a)(n)),n}return Object(r.a)(t,[{key:"handleValidation",value:function(){var e=!0;return/^[a-z][^\W_]{7,14}$/i.test(this.state.username)&&/^(?=[^a-z]*[a-z])(?=\D*\d)[^:&.~\s]{5,20}$/.test(this.state.password)||(e=!1),this.setState({submitWarning:!e}),e}},{key:"handleSubmit",value:function(e){this.handleValidation()?alert("Submit succesfully"):alert("Errors occur!"),e.preventDefault()}},{key:"handleChange",value:function(e){var a=e.target,t=a.name,n="checkbox"===a.type?a.checked:a.value;this.setState(Object(m.a)({},t,n))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"sign-in-htm",action:this.props.action,method:"POST",onSubmit:this.handleSubmit,children:[Object(h.jsx)(O,{children:Object(h.jsx)(x,{labelClass:"label",label:"username",name:"Username",type:"text",inputClass:"input",value:this.state.username,onChange:this.handleChange,autocomplete:!0})}),Object(h.jsx)(O,{children:Object(h.jsx)(x,{labelClass:"label",label:"password",name:"Password",type:"password",inputClass:"input",value:this.state.password,onChange:this.handleChange,autocomplete:!0})}),Object(h.jsxs)(O,{children:[Object(h.jsx)("input",{id:"check",type:"checkbox",className:"check",checked:this.state.remember,onChange:this.handleChange,name:"remember"}),Object(h.jsxs)("label",{htmlFor:"check",children:[Object(h.jsx)("span",{className:"icon"}),"Keep me Signed in"]})]}),this.state.submitWarning?Object(h.jsxs)("span",{className:"warning",children:[Object(h.jsx)("br",{}),"T\xe0i kho\u1ea3n, m\u1eadt kh\u1ea9u kh\xf4ng ch\xednh x\xe1c"]}):null,Object(h.jsx)(v,{value:"Submit"})]})}}]),t}(s.a.Component),C=function(e){Object(b.a)(t,e);var a=Object(j.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={signUsername:"",signPassword:"",repeatPassword:""},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.handleValidation=n.handleValidation.bind(Object(p.a)(n)),n}return Object(r.a)(t,[{key:"handleValidation",value:function(){return!0}},{key:"handleSubmit",value:function(e){this.handleValidation()?alert("Submit succesfully"):alert("Errors occur!"),e.preventDefault()}},{key:"handleChange",value:function(e){var a=e.target,t=a.name,n="checkbox"===a.type?a.checked:a.value;this.setState(Object(m.a)({},t,n))}},{key:"render",value:function(){return Object(h.jsxs)("div",{action:this.props.action,className:"sign-up-htm",onSubmit:this.handleSubmit,children:[Object(h.jsx)(O,{children:Object(h.jsx)(x,{label:"signUsername",labelClass:"label",type:"text",inputClass:"input",value:this.state.signUsername,name:"Username"})}),Object(h.jsx)(O,{children:Object(h.jsx)(x,{label:"signPassword",labelClass:"label",type:"password",inputClass:"input",name:"Password",value:this.state.signPassword})}),Object(h.jsx)(O,{children:Object(h.jsx)(x,{label:"repeatPassword",labelClass:"label",type:"password",inputClass:"input",name:"Repeat Password",value:this.state.repeatPassword})}),Object(h.jsx)(O,{children:Object(h.jsx)(v,{value:"Sign up"})})]})}}]),t}(s.a.Component);var f=function(e){return Object(h.jsx)("div",{id:"main_part",children:Object(h.jsx)("div",{className:"login-wrap",children:Object(h.jsxs)("div",{className:"login-html",children:[Object(h.jsx)("input",{id:"tab-1",type:"radio",name:"tab",className:"sign-in",defaultChecked:!0}),Object(h.jsx)("label",{htmlFor:"tab-1",className:"tab",children:"Sign In"}),Object(h.jsx)("input",{id:"tab-2",type:"radio",name:"tab",className:"sign-up"}),Object(h.jsx)("label",{htmlFor:"tab-2",className:"tab",children:"Sign Up"}),Object(h.jsxs)("div",{className:"login-form",children:[Object(h.jsx)(g,{}),Object(h.jsx)(C,{})]})]})})})},y=function(e){Object(b.a)(t,e);var a=Object(j.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)(o,{}),Object(h.jsx)(f,{}),Object(h.jsx)(u,{})]})}}]),t}(s.a.Component);var k=function(e){return Object(h.jsx)(y,{})};t(15),t(16);i.a.render(Object(h.jsx)(k,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5bee4452.chunk.js.map