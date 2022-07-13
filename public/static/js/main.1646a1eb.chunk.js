(this["webpackJsonpmern-crud"]=this["webpackJsonpmern-crud"]||[]).push([[0],{187:function(e,t,s){},241:function(e,t,s){},242:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s.n(n),a=s(57),i=s.n(a),o=(s(186),s(187),s(36)),c=s(37),l=s(16),d=s(40),h=s(38),u=s(254),p=s(58),b=s.n(p),j=s(165),m=s.n(j),O=s(169),g=s(257),v=s(256),f=s(259),C=s(166),x=s(255),S=s(253),U=s(258),k=s(5),y=[{key:"M",text:"Masculino",value:"M"},{key:"F",text:"Femenino",value:"F"}],T=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={name:"",email:"",age:"",gender:"",formClassName:"",formSuccessMessage:"",formErrorMessage:""},n.handleInputChange=n.handleInputChange.bind(Object(l.a)(n)),n.handleSelectChange=n.handleSelectChange.bind(Object(l.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n}return Object(c.a)(s,[{key:"componentWillMount",value:function(){var e=this;this.props.userID&&b.a.get("".concat(this.props.server,"/api/users/").concat(this.props.userID)).then((function(t){var s;e.setState({name:t.data.name,email:t.data.email,age:null!==(s=t.data.age)&&void 0!==s?s:"",gender:t.data.gender})})).catch((function(e){console.log(e)}))}},{key:"handleInputChange",value:function(e){var t=e.target,s="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(C.a)({},n,s))}},{key:"handleSelectChange",value:function(e,t){this.setState({gender:t.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var s={name:this.state.name,email:this.state.email,age:this.state.age,gender:this.state.gender},n=this.props.userID?"put":"post",r=this.props.userID?this.props.userID:"";b()({method:n,responseType:"json",url:"".concat(this.props.server,"/api/users/").concat(r),data:s}).then((function(e){t.setState({formClassName:"success",formSuccessMessage:e.data.msg}),t.props.userID?(t.props.onUserUpdated(e.data.result),t.props.socket.emit("update",e.data.result)):(t.setState({name:"",email:"",age:"",gender:""}),t.props.onUserAdded(e.data.result),t.props.socket.emit("add",e.data.result))})).catch((function(e){e.response?e.response.data&&t.setState({formClassName:"warning",formErrorMessage:e.response.data.msg}):t.setState({formClassName:"warning",formErrorMessage:"Something went wrong. "+e})}))}},{key:"render",value:function(){var e=this.state.formClassName,t=this.state.formSuccessMessage,s=this.state.formErrorMessage;return Object(k.jsxs)(x.a,{className:e,onSubmit:this.handleSubmit,children:[Object(k.jsx)(x.a.Input,{label:"Nombre",type:"text",placeholder:"Pepito Perez",name:"name",maxLength:"40",required:!0,value:this.state.name,onChange:this.handleInputChange}),Object(k.jsx)(x.a.Input,{label:"Correo",type:"email",placeholder:"pepito@sayausi.com",name:"email",maxLength:"40",required:!0,value:this.state.email,onChange:this.handleInputChange}),Object(k.jsxs)(x.a.Group,{widths:"equal",children:[Object(k.jsx)(x.a.Input,{label:"Edad",type:"number",placeholder:"18",min:5,max:130,name:"age",value:this.state.age,onChange:this.handleInputChange}),Object(k.jsx)(x.a.Field,{control:S.a,label:"Genero",options:y,placeholder:"Genero",value:this.state.gender,onChange:this.handleSelectChange})]}),Object(k.jsx)(U.a,{success:!0,color:"red",header:"Mensaje:",content:t}),Object(k.jsx)(U.a,{warning:!0,color:"yellow",header:"Advertencia!",content:s}),Object(k.jsx)(f.a,{color:this.props.buttonColor,floated:"right",children:this.props.buttonSubmitTitle}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{})," "]})}}]),s}(n.Component),D=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(k.jsxs)(v.a,{trigger:Object(k.jsx)(f.a,{color:this.props.buttonColor,children:this.props.buttonTriggerTitle}),dimmer:"inverted",size:"tiny",closeIcon:"open",children:[Object(k.jsx)(v.a.Header,{children:this.props.headerTitle}),Object(k.jsx)(v.a.Content,{children:Object(k.jsx)(T,{buttonSubmitTitle:this.props.buttonSubmitTitle,buttonColor:this.props.buttonColor,userID:this.props.userID,onUserAdded:this.props.onUserAdded,onUserUpdated:this.props.onUserUpdated,server:this.props.server,socket:this.props.socket})})]})}}]),s}(n.Component),I=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleOpen=function(e){return n.setState({modalOpen:!0})},n.handleClose=function(e){return n.setState({modalOpen:!1})},n.state={modalOpen:!1},n.handleOpen=n.handleOpen.bind(Object(l.a)(n)),n.handleClose=n.handleClose.bind(Object(l.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n}return Object(c.a)(s,[{key:"handleSubmit",value:function(e){var t=this,s=e.target.getAttribute("data-userID");b()({method:"delete",responseType:"json",url:"".concat(this.props.server,"/api/users/").concat(s)}).then((function(e){t.handleClose(),t.props.onUserDeleted(e.data.result),t.props.socket.emit("delete",e.data.result)})).catch((function(e){throw t.handleClose(),e}))}},{key:"render",value:function(){return Object(k.jsxs)(v.a,{trigger:Object(k.jsx)(f.a,{onClick:this.handleOpen,color:this.props.buttonColor,children:this.props.buttonTriggerTitle}),open:this.state.modalOpen,onClose:this.handleClose,dimmer:"inverted",size:"tiny",children:[Object(k.jsx)(v.a.Header,{children:this.props.headerTitle}),Object(k.jsx)(v.a.Content,{children:Object(k.jsxs)("p",{children:["Esta seguro de eliminar ",Object(k.jsx)("strong",{children:this.props.user.name}),"?"]})}),Object(k.jsxs)(v.a.Actions,{children:[Object(k.jsx)(f.a,{onClick:this.handleSubmit,"data-userID":this.props.user._id,color:"red",children:"Si"}),Object(k.jsx)(f.a,{onClick:this.handleClose,color:"red",children:"No"})]})]})}}]),s}(n.Component),A=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){var e=this,t=this.props.users;return t=t.map((function(t){return Object(k.jsxs)(g.a.Row,{children:[Object(k.jsx)(g.a.Cell,{children:t.name}),Object(k.jsx)(g.a.Cell,{children:t.email}),Object(k.jsx)(g.a.Cell,{children:t.age}),Object(k.jsx)(g.a.Cell,{children:t.gender}),Object(k.jsxs)(g.a.Cell,{children:[Object(k.jsx)(D,{headerTitle:"Editar Usuario",buttonTriggerTitle:"Editar",buttonSubmitTitle:"Guardar",buttonColor:"gray",userID:t._id,onUserUpdated:e.props.onUserUpdated,server:e.props.server,socket:e.props.socket}),Object(k.jsx)(I,{headerTitle:"Elimiar Usuario",buttonTriggerTitle:"Eliminar",buttonColor:"white",user:t,onUserDeleted:e.props.onUserDeleted,server:e.props.server,socket:e.props.socket})]})]},t._id)})),t=Object(O.a)(t).reverse(),Object(k.jsxs)(g.a,{singleLine:!0,children:[Object(k.jsx)(g.a.Header,{children:Object(k.jsxs)(g.a.Row,{children:[Object(k.jsx)(g.a.HeaderCell,{children:"Nombre"}),Object(k.jsx)(g.a.HeaderCell,{children:"Correo"}),Object(k.jsx)(g.a.HeaderCell,{children:"Edad"}),Object(k.jsx)(g.a.HeaderCell,{children:"Genero"}),Object(k.jsx)(g.a.HeaderCell,{children:"Acciones"})]})}),Object(k.jsx)(g.a.Body,{children:t})]})}}]),s}(n.Component),E=(s(241),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).server=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL||"",e.socket=m.a.connect(e.server),e.state={users:[],online:0},e.fetchUsers=e.fetchUsers.bind(Object(l.a)(e)),e.handleUserAdded=e.handleUserAdded.bind(Object(l.a)(e)),e.handleUserUpdated=e.handleUserUpdated.bind(Object(l.a)(e)),e.handleUserDeleted=e.handleUserDeleted.bind(Object(l.a)(e)),e}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.fetchUsers(),this.socket.on("visitor enters",(function(t){return e.setState({online:t})})),this.socket.on("visitor exits",(function(t){return e.setState({online:t})})),this.socket.on("add",(function(t){return e.handleUserAdded(t)})),this.socket.on("update",(function(t){return e.handleUserUpdated(t)})),this.socket.on("delete",(function(t){return e.handleUserDeleted(t)}))}},{key:"fetchUsers",value:function(){var e=this;b.a.get("".concat(this.server,"/api/users/")).then((function(t){e.setState({users:t.data})})).catch((function(e){console.log(e)}))}},{key:"handleUserAdded",value:function(e){var t=this.state.users.slice();t.push(e),this.setState({users:t})}},{key:"handleUserUpdated",value:function(e){var t=this.state.users.slice(),s=t.findIndex((function(t){return t._id===e._id}));t.length>s&&(t[s]=e),this.setState({users:t})}},{key:"handleUserDeleted",value:function(e){var t=this.state.users.slice();t=t.filter((function(t){return t._id!==e._id})),this.setState({users:t})}},{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"App",children:Object(k.jsx)("div",{className:"App-header",children:Object(k.jsx)("h1",{className:"App-intro",children:"Sistema de Gestion del Cementerio de Sayausi"})})}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(D,{headerTitle:"Anadir Usuario",buttonTriggerTitle:"Anadir Nuevo",buttonSubmitTitle:"Anadir",buttonColor:"black",onUserAdded:this.handleUserAdded,server:this.server,socket:this.socket}),Object(k.jsx)(A,{onUserUpdated:this.handleUserUpdated,onUserDeleted:this.handleUserDeleted,users:this.state.users,server:this.server,socket:this.socket})]}),Object(k.jsx)("br",{})]})}}]),s}(n.Component)),_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,262)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),r(e),a(e),i(e)}))};i.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(E,{})}),document.getElementById("root")),_()}},[[242,1,2]]]);
//# sourceMappingURL=main.1646a1eb.chunk.js.map