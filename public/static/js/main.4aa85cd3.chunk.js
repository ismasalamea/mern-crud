(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,a,t){e.exports={header:"style_header__3c3LW",icon:"style_icon__2s14n",cell:"style_cell__1duSl",container:"style_container__2nBYz"}},188:function(e,a,t){e.exports={header:"style_header__1Dk2i",icon:"style_icon__RIlYn",cell:"style_cell__2J6NU",container:"style_container__1i2F-",footer:"style_footer__3WV9G"}},366:function(e,a,t){e.exports=t(645)},374:function(e,a,t){},394:function(e,a,t){},425:function(e,a){},427:function(e,a){},436:function(e,a){},438:function(e,a){},464:function(e,a){},466:function(e,a){},467:function(e,a){},472:function(e,a){},474:function(e,a){},493:function(e,a){},505:function(e,a){},508:function(e,a){},535:function(e,a){},536:function(e,a){},592:function(e,a){},629:function(e,a){},632:function(e,a){},639:function(e,a,t){},642:function(e,a,t){},645:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(90),o=t.n(l),s=(t(371),t(374),t(19)),i=t(20),c=t(22),d=t(21),u=t(23),p=t(10),h=t(658),m=t(44),g=t.n(m),b=(t(394),t(48)),f=t(669),E=t(666),v=t(177),C=t(656),O=t(184),y=t.n(O),j=t(237),S=t(233),_=t(664),k=t(661),w=t(663),T=t(668),x=t(662),I=t(657),D=t(665),A=t(12),U=new Date,N=A.e.create({page:{backgroundColor:"white",color:"black"},titulo:{fontWeight:"extrabold",borderTop:"2px solid black",borderBottom:"2px solid black",letterSpacing:3,textAlign:"center",margin:20,padding:10},section:{borderTop:"4px solid black",borderBottom:"4px solid black",margin:20,padding:10},valor:{margin:30,padding:10,textAlign:"right"},firma:{margin:30,padding:10,textAlign:"center"},image:{width:200,height:200,marginLeft:180,borderTop:"2px solid black",borderBottom:"2px solid black"},viewer:{width:window.innerWidth/2,height:window.innerHeight}}),P=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(w.a,{trigger:r.a.createElement(E.a,{disabled:""===this.props.valores.valor,color:"black",icon:!0,size:"mini"},r.a.createElement(v.a,{name:"download"}),"Comprobante"),dimmer:"inverted",size:"small",closeIcon:!0},r.a.createElement(A.c,{style:N.viewer},r.a.createElement(A.a,null,r.a.createElement(A.d,{size:"A4",style:N.page},r.a.createElement(A.b,{style:N.image,bordered:"true",label:"Logo",src:"https://res.cloudinary.com/curso-node-jism/image/upload/v1661789319/sayausi/logo_qh6nxj.jpg"}),r.a.createElement(A.g,{style:N.titulo},r.a.createElement(A.f,null,"Comprobante: "),r.a.createElement(A.f,null,"Cementerio del GAD de Sayausi"),r.a.createElement(A.f,null,"Fecha de Pago: ",U.toDateString())),r.a.createElement(A.g,{style:N.section},r.a.createElement(A.f,null,"Boveda: ",this.props.valores.boveda),r.a.createElement(A.f,null,"Nombres: ",this.props.valores.nombre),r.a.createElement(A.f,null,"Apellidos: ",this.props.valores.apellido)),r.a.createElement(A.g,{style:N.valor},r.a.createElement(A.f,null,"Valor: ",this.props.valores.valor)),r.a.createElement(A.g,{style:N.firma},r.a.createElement(A.f,null,"____________________________"),r.a.createElement(A.f,null,this.props.valores.cedula),r.a.createElement(A.f,null,this.props.valores.responsable))))))}}]),a}(n.Component),z=t(354),F=t(351),R=t.n(F),M=(t(639),[{key:!0,text:"Pagado",value:!0},{key:!1,text:"No pagado",value:!1}]),L=[{key:"Boveda",text:"Boveda",value:"Boveda"},{key:"Nicho",text:"Nicho",value:"Nicho"}],B=[{key:"Arrendada",text:"Arrendada",value:"Arrendada"},{key:"Propia",text:"Propia",value:"Propia"},{key:"No definida",text:"No definida",value:"No definida"}],q=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={boveda:"",tipo:"",forma:"",nombre:"",apellido:"",fecha:"",cedula:"",responsable:"",direccion:"",correo:"",telefono:"",estado:"",valor:"",certificado:"",formClassName:"",formSuccessMessage:"",formErrorMessage:"",uploadedFile:null},t.handleInputChange=t.handleInputChange.bind(Object(p.a)(Object(p.a)(t))),t.handleSelectChange=t.handleSelectChange.bind(Object(p.a)(Object(p.a)(t))),t.handleSelectChangeTipo=t.handleSelectChangeTipo.bind(Object(p.a)(Object(p.a)(t))),t.handleSelectChangeForma=t.handleSelectChangeForma.bind(Object(p.a)(Object(p.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(Object(p.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.props.userID&&g.a.get("".concat(this.props.server,"/api/users/").concat(this.props.userID)).then(function(a){e.setState({boveda:a.data.boveda,tipo:a.data.tipo,forma:a.data.forma,nombre:a.data.nombre,apellido:a.data.apellido,fecha:a.data.fecha,cedula:a.data.cedula,responsable:a.data.responsable,direccion:a.data.direccion,correo:a.data.correo,telefono:a.data.telefono,estado:a.data.estado,valor:a.data.valor,certificado:a.data.certificado})}).catch(function(e){console.log(e)})}},{key:"onImageDrop",value:function(e){this.setState({uploadedFile:e[0]}),this.handleImageUpload(e[0])}},{key:"handleImageUpload",value:function(e){var a=this;console.log(e),R.a.post("https://api.cloudinary.com/v1_1/curso-node-jism/upload").field("upload_preset","certi_sayausi").field("file",e).end(function(e,t){e&&console.error(e),""!==t.body.secure_url&&a.setState({certificado:t.body.secure_url})})}},{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(b.a)({},n,t))}},{key:"handleSelectChange",value:function(e,a){this.setState({estado:a.value})}},{key:"handleSelectChangeTipo",value:function(e,a){this.setState({tipo:a.value})}},{key:"handleSelectChangeForma",value:function(e,a){this.setState({forma:a.value})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t={boveda:this.state.boveda,tipo:this.state.tipo,forma:this.state.forma,nombre:this.state.nombre,apellido:this.state.apellido,fecha:this.state.fecha,cedula:this.state.cedula,responsable:this.state.responsable,direccion:this.state.direccion,correo:this.state.correo,telefono:this.state.telefono,estado:this.state.estado,valor:this.state.valor,certificado:this.state.certificado},n=this.props.userID?"put":"post",r=this.props.userID?this.props.userID:"";g()({method:n,responseType:"json",url:"".concat(this.props.server,"/api/users/").concat(r),data:t}).then(function(e){a.setState({formClassName:"success",formSuccessMessage:e.data.msg}),a.props.userID?a.props.onUserUpdated(e.data.result):(a.setState({boveda:"",tipo:"",forma:"",nombre:"",apellido:"",fecha:"",cedula:"",responsable:"",direccion:"",correo:"",telefono:"",estado:"",valor:"",certificado:""}),a.props.onUserAdded(e.data.result))}).catch(function(e){e.response?e.response.data&&a.setState({formClassName:"warning",formErrorMessage:e.response.data.msg}):a.setState({formClassName:"warning",formErrorMessage:"Algo salio mal. "+e})})}},{key:"render",value:function(){var e=this.state.formClassName,a=this.state.formSuccessMessage,t=this.state.formErrorMessage;return r.a.createElement(x.a,{className:e,onSubmit:this.handleSubmit},r.a.createElement(T.a,{as:"h3",block:!0,color:"orange"},"Datos del Fallecido"),r.a.createElement(x.a.Group,{widths:"2"},r.a.createElement(x.a.Input,{width:5,label:"Espacio",type:"text",maxLength:"5",placeholder:"A0001",name:"boveda",required:!0,value:this.state.boveda,onChange:this.handleInputChange}),r.a.createElement(x.a.Input,{name:"tipo",control:I.a,label:"Propiedad",options:B,placeholder:"",value:this.state.tipo,onChange:this.handleSelectChangeTipo}),r.a.createElement(x.a.Input,{name:"forma",control:I.a,label:"Tipo",options:L,placeholder:"",value:this.state.forma,onChange:this.handleSelectChangeForma})),r.a.createElement(x.a.Group,{widths:"2"},r.a.createElement(x.a.Input,{width:5,label:"Fecha de Defuncion",name:"fecha",type:"date",maxLength:"10",required:!0,pattern:"\\d{4}-\\d{2}-\\d{2}",value:this.state.fecha.split("T")[0],onChange:this.handleInputChange}),r.a.createElement(x.a.Input,{label:"Nombres del fallecido",type:"text",placeholder:"Pepito",name:"nombre",maxLength:"40",required:!0,value:this.state.nombre,onChange:this.handleInputChange}),r.a.createElement(x.a.Input,{label:"Apellidos del fallecido",type:"text",placeholder:"Perez",name:"apellido",maxLength:"40",required:!0,value:this.state.apellido,onChange:this.handleInputChange})),r.a.createElement(T.a,{as:"h3",block:!0,color:"purple"},"Datos del Responsable"),r.a.createElement(x.a.Group,{widths:"equal"},r.a.createElement(x.a.Input,{width:"5",label:"Cedula",type:"text",placeholder:"0104751987",name:"cedula",maxLength:"10",required:!0,value:this.state.cedula,onChange:this.handleInputChange}),r.a.createElement(x.a.Input,{label:"Nombre del Responsable",type:"text",placeholder:"Nombres y Apellidos",min:5,max:130,name:"responsable",value:this.state.responsable,onChange:this.handleInputChange})),r.a.createElement(x.a.Group,{widths:"equal"},r.a.createElement(x.a.Input,{label:"Direccion",type:"text",placeholder:"",min:1,max:50,name:"direccion",required:!0,value:this.state.direccion,onChange:this.handleInputChange}),r.a.createElement(x.a.Input,{label:"Correo",type:"email",placeholder:"example@sayausi.com",name:"correo",max:60,required:!0,value:this.state.correo,onChange:this.handleInputChange})),r.a.createElement(x.a.Group,{widths:"equal"},r.a.createElement(x.a.Input,{width:8,label:"Telefono",type:"text",placeholder:"Telefono",min:3,max:10,name:"telefono",required:!0,value:this.state.telefono,onChange:this.handleInputChange}),r.a.createElement(x.a.Input,{width:3,label:"Valor",type:"number",placeholder:"0,00",name:"valor",maxLength:"8",required:!0,value:this.state.valor,onChange:this.handleInputChange}),r.a.createElement(x.a.Field,{control:I.a,label:"Estado",options:M,placeholder:"",value:this.state.estado,onChange:this.handleSelectChange})),r.a.createElement(T.a,{as:"h3",block:!0,color:"blue"},"Certificado de Defunci\xf3n"),r.a.createElement("div",{className:"FileUpload"},r.a.createElement(z.a,{onDrop:this.onImageDrop.bind(this),multiple:!1,maxSize:5e5},function(e){var a=e.getRootProps,t=e.getInputProps;return r.a.createElement("div",a({className:"dropzone"}),r.a.createElement("input",t()),r.a.createElement("p",null,"Hacer click para seleccionar el archivo:"))})),r.a.createElement("div",null,r.a.createElement("div",{className:"Imagen"},r.a.createElement("p",null,this.state.certificado?"Certificado de Defunci\xf3n":"No existe Certificado de Defunci\xf3n"," "),r.a.createElement("img",{alt:"",src:this.state.certificado?this.state.certificado:"https://res.cloudinary.com/curso-node-jism/image/upload/v1662431973/sayausi/no_dis_m52par.png",height:"250px"}))),r.a.createElement(D.a,{success:!0,color:"blue",header:"Mensaje:",content:a}),r.a.createElement(D.a,{warning:!0,color:"yellow",header:"Advertenciasss!",content:t}),r.a.createElement(E.a.Group,{widths:"four",floated:"right"},r.a.createElement(P,{valores:this.state}),r.a.createElement(E.a,{name:"user",color:this.props.buttonColor,floated:"right"},r.a.createElement(v.a,{name:"save"}),this.props.buttonSubmitTitle)),r.a.createElement("br",null),r.a.createElement("br",null)," ")}}]),a}(n.Component),G=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(w.a,{trigger:r.a.createElement(E.a,{color:this.props.buttonColor,size:this.props.buttonSize,icon:!0},r.a.createElement(v.a,{name:this.props.iconName}),this.props.buttonTriggerTitle),dimmer:"inverted",closeIcon:!0},r.a.createElement(T.a,{icon:"user",content:this.props.headerTitle}),r.a.createElement(w.a.Content,null,r.a.createElement(q,{buttonSubmitTitle:this.props.buttonSubmitTitle,buttonColor:this.props.buttonColor,userID:this.props.userID,onUserAdded:this.props.onUserAdded,onUserUpdated:this.props.onUserUpdated,server:this.props.server})))}}]),a}(n.Component),H=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).handleOpen=function(e){return t.setState({modalOpen:!0})},t.handleClose=function(e){return t.setState({modalOpen:!1})},t.state={modalOpen:!1},t.handleOpen=t.handleOpen.bind(Object(p.a)(Object(p.a)(t))),t.handleClose=t.handleClose.bind(Object(p.a)(Object(p.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(Object(p.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleSubmit",value:function(e){var a=this,t=e.target.getAttribute("data-userID");g()({method:"delete",responseType:"json",url:"".concat(this.props.server,"/api/users/").concat(t)}).then(function(e){a.handleClose(),a.props.onUserDeleted(e.data.result)}).catch(function(e){throw a.handleClose(),e})}},{key:"render",value:function(){return r.a.createElement(w.a,{trigger:r.a.createElement(E.a,{onClick:this.handleOpen,color:this.props.buttonColor,size:"mini",icon:!0},r.a.createElement(v.a,{name:this.props.iconName}),this.props.buttonTriggerTitle),open:this.state.modalOpen,onClose:this.handleClose,dimmer:"inverted",size:"tiny",circular:!0},r.a.createElement(w.a.Header,null,this.props.headerTitle),r.a.createElement(w.a.Content,null,r.a.createElement("p",null,"Esta seguro de eliminar ",r.a.createElement("strong",null,this.props.user.nombre+" "+this.props.user.apellido," "),"?")),r.a.createElement(w.a.Actions,null,r.a.createElement(E.a,{onClick:this.handleSubmit,"data-userID":this.props.user._id,color:"red"},"Si"),r.a.createElement(E.a,{onClick:this.handleClose,color:"red"},"No")))}}]),a}(n.Component),V=A.e.create({page:{backgroundColor:"white",color:"black"},titulo:{fontWeight:"extrabold",borderTop:"2px solid black",borderBottom:"2px solid black",letterSpacing:3,textAlign:"center",margin:20,padding:10},section:{borderTop:"4px solid black",borderBottom:"4px solid black",margin:20,padding:10},valor:{margin:30,padding:10,textAlign:"right"},firma:{margin:30,padding:10,textAlign:"center"},image:{width:"100%",height:"100%",marginLeft:2,borderTop:"2px solid black",borderBottom:"2px solid black"},viewer:{width:window.innerWidth/2,height:window.innerHeight/2}}),W=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(w.a,{trigger:r.a.createElement(E.a,{disabled:!this.props.valores.certificado,color:this.props.buttonColor,size:"mini",icon:!0},r.a.createElement(v.a,{name:"download"}),this.props.buttonTriggerTitle),dimmer:"inverted",size:"small",closeIcon:!0},r.a.createElement(A.c,{style:V.viewer},r.a.createElement(A.a,null,r.a.createElement(A.d,{size:"A4",style:V.page},r.a.createElement(A.b,{style:V.image,bordered:"true",src:this.props.valores.certificado?this.props.valores.certificado:"https://res.cloudinary.com/curso-node-jism/image/upload/v1662431973/sayausi/no_dis_m52par.png"})))))}}]),a}(n.Component),Q=t(137),J=t.n(Q),X=(t(642),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={formClassName:"",formSuccessMessage:"",formErrorMessage:""},t.handleInputChange=t.handleInputChange.bind(Object(p.a)(Object(p.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(Object(p.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(b.a)({},n,t))}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t={codboveda:this.props.valores._id,bovedapag:this.props.valores.boveda,fechapag:this.state.fechapag,fechasig:this.state.fechasig,valorpag:this.state.valorpag};g()({method:"post",responseType:"json",url:"".concat(this.props.server,"/api/pagos/"),data:t}).then(function(e){a.setState({formClassName:"success",formSuccessMessage:e.data.msg}),console.log(e.data.result),a.props.onPagoAdded(e.data.result)}).catch(function(e){e.response?e.response.data&&a.setState({formClassName:"warning",formErrorMessage:e.response.data.msg}):a.setState({formClassName:"warning",formErrorMessage:"Algo salio mal. "+e})})}},{key:"render",value:function(){var e=this.state.formClassName,a=this.state.formSuccessMessage,t=this.state.formErrorMessage;return r.a.createElement(x.a,{className:e,onSubmit:this.handleSubmit},r.a.createElement(T.a,{as:"h3",block:!0,color:"violet"},"Registrar Pago"),r.a.createElement(D.a,{success:!0,color:"blue",header:"Mensaje:",content:a}),r.a.createElement(D.a,{warning:!0,color:"yellow",header:"Advertencia!",content:t}),r.a.createElement(x.a.Group,{widths:"equal"},r.a.createElement(x.a.Input,{width:4,label:"Fecha de Pago",name:"fechapag",type:"date",maxLength:"10",required:!0,pattern:"\\d{4}-\\d{2}-\\d{2}",onChange:this.handleInputChange}),r.a.createElement(x.a.Input,{width:4,label:"Fecha PROXIMA de Pago",name:"fechasig",type:"date",maxLength:"10",required:!0,pattern:"\\d{4}-\\d{2}-\\d{2}",onChange:this.handleInputChange}),r.a.createElement(x.a.Input,{width:3,label:"Valor",type:"number",placeholder:"0,00",name:"valorpag",maxLength:"8",required:!0,value:this.state.valorpag,onChange:this.handleInputChange})),r.a.createElement(E.a,{name:"user",color:this.props.buttonColor,size:"mini",floated:"right"},r.a.createElement(v.a,{name:"save"})," ",this.props.buttonSubmitTitle),r.a.createElement("br",null),r.a.createElement("br",null)," ")}}]),a}(n.Component)),Y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).handleOpen=function(e){return t.setState({modalOpen:!0})},t.handleClose=function(e){return t.setState({modalOpen:!1})},t.state={modalOpen:!1},t.handleOpen=t.handleOpen.bind(Object(p.a)(Object(p.a)(t))),t.handleClose=t.handleClose.bind(Object(p.a)(Object(p.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(Object(p.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleSubmit",value:function(e){var a=this,t=e.target.getAttribute("data-pagoID");g()({method:"delete",responseType:"json",url:"".concat(this.props.server,"/api/pagos/").concat(t)}).then(function(e){a.handleClose(),a.props.onPagoDeleted(e.data.result)}).catch(function(e){throw a.handleClose(),e})}},{key:"render",value:function(){return r.a.createElement(w.a,{size:"tiny",centered:!0,trigger:r.a.createElement(E.a,{onClick:this.handleOpen,color:this.props.buttonColor,size:"mini",icon:!0},r.a.createElement(v.a,{name:this.props.iconName}),this.props.buttonTriggerTitle),open:this.state.modalOpen,onClose:this.handleClose,dimmer:"inverted"},r.a.createElement(w.a.Header,null,this.props.headerTitle),r.a.createElement(w.a.Content,null,r.a.createElement("p",null,"Esta seguro que desea de eliminar el pago de la boveda ",r.a.createElement("strong",null,this.props.pagos.bovedapag," "),"?")),r.a.createElement(w.a.Actions,null,r.a.createElement(E.a,{onClick:this.handleSubmit,"data-pagoID":this.props.pagos._id,color:"red"},"Si"),r.a.createElement(E.a,{onClick:this.handleClose,color:"red"},"No")))}}]),a}(n.Component),Z=A.e.create({page:{backgroundColor:"white",color:"black"},titulo:{fontWeight:"extrabold",borderTop:"2px solid black",borderBottom:"2px solid black",letterSpacing:3,textAlign:"center",margin:20,padding:10},section:{borderTop:"4px solid black",borderBottom:"4px solid black",margin:20,padding:10},valor:{margin:30,padding:10,textAlign:"right"},firma:{margin:30,padding:10,textAlign:"center"},image:{width:200,height:200,marginLeft:180,borderTop:"2px solid black",borderBottom:"2px solid black"},viewer:{width:window.innerWidth/2,height:window.innerHeight}}),K=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(w.a,{trigger:r.a.createElement(E.a,{color:"olive",icon:!0,size:"mini"},r.a.createElement(v.a,{name:"download"}),this.props.buttonTriggerTitle),dimmer:"inverted",size:"small",closeIcon:!0},r.a.createElement(A.c,{style:Z.viewer},r.a.createElement(A.a,null,r.a.createElement(A.d,{size:"A4",style:Z.page},r.a.createElement(A.b,{style:Z.image,bordered:"true",label:"Logo",src:"https://res.cloudinary.com/curso-node-jism/image/upload/v1661789319/sayausi/logo_qh6nxj.jpg"}),r.a.createElement(A.g,{style:Z.titulo},r.a.createElement(A.f,null,"Comprobante: "),r.a.createElement(A.f,null,"Cementerio del GAD de Sayausi"),r.a.createElement(A.f,null,"Fecha de Pago: ",this.props.pagos.fechapag.split("T")[0])),r.a.createElement(A.g,{style:Z.section},r.a.createElement(A.f,null,"Boveda: ",this.props.valores.boveda),r.a.createElement(A.f,null,"Nombres: ",this.props.valores.nombre),r.a.createElement(A.f,null,"Apellidos: ",this.props.valores.apellido)),r.a.createElement(A.g,{style:Z.valor},r.a.createElement(A.f,null,"Valor: ",this.props.pagos.valorpag)),r.a.createElement(A.g,{style:Z.firma},r.a.createElement(A.f,null,"____________________________"),r.a.createElement(A.f,null,this.props.valores.cedula),r.a.createElement(A.f,null,this.props.valores.responsable),r.a.createElement(A.f,null,"Fecha PROXIMO Pago: ",this.props.pagos.fechasig.split("T")[0]))))))}}]),a}(n.Component),$=t(188),ee=t.n($),ae=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={pagos:[],formClassName:"",formSuccessMessage:"",formErrorMessage:""},t.fetchPagos=t.fetchPagos.bind(Object(p.a)(Object(p.a)(t))),t.handleInputChange=t.handleInputChange.bind(Object(p.a)(Object(p.a)(t))),t.handlePagoDeleted=t.handlePagoDeleted.bind(Object(p.a)(Object(p.a)(t))),t.handlePagoAdded=t.handlePagoAdded.bind(Object(p.a)(Object(p.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"fetchPagos",value:function(){var e=this;console.log(this.props.valores.codboveda),g.a.get("".concat(this.props.server,"/api/pagos/boveda/").concat(this.props.valores._id)).then(function(a){e.setState({pagos:a.data})}).catch(function(e){console.log(e)})}},{key:"handlePagoAdded",value:function(e){var a=this.state.pagos.slice();a.push(e),this.setState({pagos:a})}},{key:"handlePagoDeleted",value:function(e){var a=this.state.pagos.slice();a=a.filter(function(a){return a._id!==e._id}),this.setState({pagos:a})}},{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(b.a)({},n,t))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,a=this.state.pagos.map(function(e){return e.valorpag}).reduce(function(e,a){return e+a},0);return r.a.createElement(w.a,{trigger:r.a.createElement(E.a,{color:this.props.buttonColor,icon:!0,size:this.props.buttonSize,onClick:function(){return e.fetchPagos()}},r.a.createElement(v.a,{name:this.props.iconName}),this.props.buttonTriggerTitle),dimmer:"inverted",closeIcon:!0},r.a.createElement(T.a,{icon:"money",content:this.props.headerTitle}),r.a.createElement(w.a.Content,null,r.a.createElement(T.a,{as:"h3",block:!0,color:"orange"},"Espacio: ",this.props.valores.boveda),r.a.createElement(_.a,{celled:!0},r.a.createElement(_.a.Header,null,r.a.createElement(_.a.Row,null,(this.props.headers||[]).map(function(e,a){return r.a.createElement(_.a.HeaderCell,{key:a},r.a.createElement("div",{className:ee.a.header},r.a.createElement("div",null,e)))}))),r.a.createElement(_.a.Body,null,(this.state.pagos||[]).map(function(a,t){return r.a.createElement(_.a.Row,null,(e.props.labels||[]).map(function(e,t){return r.a.createElement(_.a.Cell,null,r.a.createElement("div",{className:ee.a.cell},"fechapag"===e||"fechasig"===e?a[e].split("T")[0]:a[e]||0))}),r.a.createElement(_.a.Cell,{width:2},r.a.createElement(K,{buttonTriggerTitle:"",valores:e.props.valores,pagos:a}),r.a.createElement(Y,{headerTitle:"Eliminar",buttonTriggerTitle:"",buttonColor:"red",pagos:a,server:e.props.server,iconName:"delete",onPagoDeleted:e.handlePagoDeleted})))})),r.a.createElement(_.a.Footer,{fullWidth:!0},r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Cell,null),r.a.createElement(_.a.Cell,null),r.a.createElement(_.a.Cell,{textAlign:"right"}," Total : "),r.a.createElement(_.a.Cell,null,r.a.createElement("div",{className:ee.a.footer},a," ")),r.a.createElement(_.a.Cell,null)))),r.a.createElement(X,{buttonSubmitTitle:"Guardar",buttonColor:"violet",valores:this.props.valores,server:this.props.server,pagos:this.state.pagos,onPagoAdded:this.handlePagoAdded})))}}]),a}(n.Component),te=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={page:0,pageSelection:"",searchQuery:"",header:""},t.componentDidMount=function(){var e=t.props.pageRows,a=void 0===e?10:e;t.setState({pageSelection:[0,a]})},t.componentDidUpdate=function(){var e=t.props,a=e.searchQuery,n=e.pageRows,r=void 0===n?10:n;a&&t.state.searchQuery!==t.props.searchQuery&&t.setState({searchQuery:a,pageSelection:[0,r],page:0})},t.dynamicsort=function(e,a){var t=1;return"desc"===a&&(t=-1),function(a,n){return a[e]<n[e]?-1*t:a[e]>n[e]?1*t:0*t}},t.handleSort=function(e){var a=t.props,n=a.pageRows,r=void 0===n?10:n,l=a.headers,o={};l.forEach(function(a){o=Object(S.a)({},o,Object(b.a)({},a,a!==e?"":"asc"===t.state[a]?"desc":"asc"))}),t.setState(Object(S.a)({header:e,pageSelection:[0,r],page:0},o))},t.getSort=function(e,a){var n=t.props,r=n.labels[n.headers.indexOf(e)];return a.sort(t.dynamicsort(r,"asc"===t.state[e]?"desc":"asc"))},t.searchOnData=function(e,a){return e?a.filter(function(a){for(var t={},n=0,r=Object.keys(a);n<r.length;n++){var l=r[n];t[l]=a[l]}for(var o=0,s=Object.keys(t);o<s.length;o++){var i=s[o];try{var c=t[i],d=new RegExp("W*("+e+")W*");if(d.test(c.toString().toLowerCase()))return!0;if(d.test(c))return!0}catch(u){return!1}}return!1}):a},t.renderHeaders=function(){var e=t.props.headers;return r.a.createElement(_.a.Header,null,r.a.createElement(_.a.Row,null,(e||[]).map(function(e,a){return r.a.createElement(_.a.HeaderCell,{key:a,onClick:function(){return t.handleSort(e)}},r.a.createElement("div",{className:J.a.header},r.a.createElement("div",null,e),r.a.createElement("div",{className:J.a.icon},r.a.createElement(v.a,{name:"asc"===t.state[e]?"caret up":"caret down"}))))})))},t.handleFooter=function(e){var a=t.props,n=a.pageRows,r=void 0===n?10:n,l=a.data,o=a.searchQuery,s=Math.ceil(t.searchOnData(o,l).length/r);e>=0&&e<s&&t.setState({pageSelection:0===e?[0,r]:[e*r,e*r+r],page:e})},t.getData=function(){var e,a=t.props,n=a.data,r=a.searchQuery,l=t.state,o=l.pageSelection,s=l.header,i=n||[];return r&&(i=t.searchOnData(r,i)),s&&(i=t.getSort(s,i)),o&&(i=(e=i).slice.apply(e,Object(j.a)(o))),i},t.renderData=function(){var e=t.props.labels,a=t.getData();return r.a.createElement(_.a.Body,null,(a||[]).map(function(a,n){return r.a.createElement(_.a.Row,null,(e||[]).map(function(e,t){return r.a.createElement(_.a.Cell,null,r.a.createElement("div",{className:J.a.cell},"fecha"===e?a[e].split("T")[0]:a[e]||0))}),r.a.createElement(_.a.Cell,null,r.a.createElement(v.a,{color:"Pagado"===a.estado?"green":"red",name:"Pagado"===a.estado?"checkmark box":"cancel",size:"large"})),r.a.createElement(_.a.Cell,{textAlign:"center"},r.a.createElement(E.a.Group,{size:"mini"},r.a.createElement(W,{valores:a,buttonTriggerTitle:"",buttonColor:"orange"}),r.a.createElement(ae,{headerTitle:"Detalle de Pagos",buttonTriggerTitle:"",buttonSubmitTitle:"",buttonColor:"green",valores:a,onUserUpdated:t.props.onUserUpdated,server:t.props.server,iconName:"dollar",buttonSize:"mini",labels:["bovedapag","fechapag","fechasig","valorpag"],headers:["Boveda","Fecha de Pago","Proximo Pago","Valor","Accion"]}),r.a.createElement(G,{headerTitle:"Editar",buttonTriggerTitle:"",buttonSubmitTitle:"Guardar",buttonColor:"blue",userID:a._id,onUserUpdated:t.props.onUserUpdated,server:t.props.server,iconName:"write",buttonSize:"mini"}),r.a.createElement(H,{headerTitle:"Eliminar",buttonTriggerTitle:"",buttonColor:"red",user:a,onUserDeleted:t.props.onUserDeleted,server:t.props.server,iconName:"delete"}))))}))},t.getLastLimitDown=function(e,a){for(var t=0;e>0;)e-=a,t+=a;return t-a-1},t.renderFooter=function(){for(var e=t.props,a=e.pageRows,n=void 0===a?10:a,l=e.labels,o=e.data,s=e.searchQuery,i=e.footerPages,c=void 0===i?10:i,d=t.state.page,u=[],p=Math.ceil(t.searchOnData(s,o).length/n),h=d<c?1:Math.floor(d/c)*c+1,m=d>t.getLastLimitDown(p,c)?p:h+c-1,g=h;g<=m;g++)u=[].concat(Object(j.a)(u),[g]);return r.a.createElement(_.a.Footer,null,r.a.createElement(_.a.Row,null,r.a.createElement(_.a.HeaderCell,{colSpan:l.length+2},r.a.createElement(k.a,{floated:"right",pagination:!0},r.a.createElement(k.a.Item,{as:"a",icon:!0,onClick:function(){return t.handleFooter(d-1)}},r.a.createElement(v.a,{name:"chevron left"})),u.map(function(e,a){return r.a.createElement(k.a.Item,{key:a,style:e-1===d?{backgroundColor:"#E5E5E5"}:{},as:"a",onClick:function(){return t.handleFooter(e-1)}},e)}),r.a.createElement(k.a.Item,{as:"a",icon:!0,onClick:function(){return t.handleFooter(d+1)}},r.a.createElement(v.a,{name:"chevron right"}))))))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(_.a,{celled:!0},this.renderHeaders(),this.renderData(),this.renderFooter())}}]),a}(n.PureComponent),ne=t(171),re=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).getLengthOfObject=function(e){return Object.keys(e).length},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data.filter(function(e){return"Boveda"===e.forma}),a=this.getLengthOfObject(e),t=this.props.data.filter(function(e){return"Nicho"===e.forma}),n=this.getLengthOfObject(t),l=this.getLengthOfObject(this.props.data),o=this.props.data.map(function(e){return e.valor}).reduce(function(e,a){return e+a},0),s=this.props.data.filter(function(e){return"Propia"===e.tipo}),i=this.props.data.filter(function(e){return"Arrendada"===e.tipo}),c=this.props.data.filter(function(e){return"No definida"===e.tipo}),d=s.map(function(e){return e.valor}).reduce(function(e,a){return e+a},0),u=i.map(function(e){return e.valor}).reduce(function(e,a){return e+a},0),p=c.map(function(e){return e.valor}).reduce(function(e,a){return e+a},0);return r.a.createElement(w.a,{trigger:r.a.createElement(E.a,{color:this.props.buttonColor,icon:!0},r.a.createElement(v.a,{name:"chart line"}),this.props.buttonTriggerTitle),dimmer:"inverted",size:"small",closeIcon:!0},r.a.createElement(w.a.Header,null,r.a.createElement(T.a.Content,null," ",r.a.createElement(v.a,{name:"chart line"}),this.props.headerTitle)),r.a.createElement(w.a.Content,null,r.a.createElement(_.a,{celled:!0},r.a.createElement(_.a.Body,{celled:!0},r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Cell,null,r.a.createElement(T.a,{as:"h3"},r.a.createElement(v.a,{name:"product hunt"})," ",r.a.createElement(T.a.Content,null,"Cantidad de Bovedas:"))),r.a.createElement(_.a.Cell,null,r.a.createElement(ne.a,{size:"huge"},a))),r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Cell,null,r.a.createElement(T.a,{as:"h3"},r.a.createElement(v.a,{name:"product hunt"})," ",r.a.createElement(T.a.Content,null,"Cantidad de Nichos:"))),r.a.createElement(_.a.Cell,null,r.a.createElement(ne.a,{size:"huge"},n))),r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Cell,null,r.a.createElement(T.a,{as:"h2"},r.a.createElement(v.a,{name:"box"})," ",r.a.createElement(T.a.Content,null,"Total de Espacios:")," ")),r.a.createElement(_.a.Cell,null,r.a.createElement(ne.a,{size:"huge"},l))),r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Cell,null,r.a.createElement(T.a,{as:"h3"},r.a.createElement(v.a,{name:"product hunt"})," ",r.a.createElement(T.a.Content,null,"Valor Pendiente de Espacios Propias:"))),r.a.createElement(_.a.Cell,null,r.a.createElement(ne.a,{size:"huge"},d))),r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Cell,null,r.a.createElement(T.a,{as:"h3"},r.a.createElement(v.a,{name:"warehouse"})," ",r.a.createElement(T.a.Content,null,"Valor Pendiente de Espacios Arrendadas:"))),r.a.createElement(_.a.Cell,null,r.a.createElement(ne.a,{size:"huge"},u))),r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Cell,null,r.a.createElement(T.a,{as:"h3"},r.a.createElement(v.a,{name:"eye slash outline"})," ",r.a.createElement(T.a.Content,null,"Valor Pendiente de Espacios no definidos:"))),r.a.createElement(_.a.Cell,null,r.a.createElement(ne.a,{size:"huge"},p))),r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Cell,null,r.a.createElement(T.a,{as:"h2"},r.a.createElement(v.a,{name:"usd"})," ",r.a.createElement(T.a.Content,null,"Total Valores Pendientes:"))),r.a.createElement(_.a.Cell,null,r.a.createElement(ne.a,{size:"huge"},o)))))))}}]),a}(n.Component),le=y.a.ExcelFile,oe=y.a.ExcelSheet,se=y.a.ExcelColumn,ie=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={search:""},t.handleInputs=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(b.a)({},n,r))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.search,a=this.props.data;return a.forEach(function(e){!1===e.estado?e.estado="No pagado":e.estado="Pagado"}),a.forEach(function(e){e.fecha=e.fecha.split("T")[0]}),r.a.createElement("div",{className:J.a.container},r.a.createElement(f.a,{columns:4},r.a.createElement(f.a.Column,null,r.a.createElement(G,{headerTitle:"A\xf1adir Unidad de Sepultura",buttonTriggerTitle:" A\xf1adir Unidad de Sepultura",buttonSubmitTitle:"Guardar",buttonColor:"brown",onUserAdded:this.props.onUserAdded,server:this.props.server,iconName:"user"})),r.a.createElement(f.a.Column,null,r.a.createElement(le,{element:r.a.createElement(E.a,{color:"blue",icon:!0},r.a.createElement(v.a,{name:"database"})," Exportar a Excel"),filename:"base_cementerio_sayausi"},r.a.createElement(oe,{data:a,name:"Hoja1"},r.a.createElement(se,{label:"Espacio",value:"boveda"}),r.a.createElement(se,{label:"Tipo",value:"forma"}),r.a.createElement(se,{label:"Estado",value:"tipo"}),r.a.createElement(se,{label:"Nombre",value:"nombre"}),r.a.createElement(se,{label:"Apellido",value:"apellido"}),r.a.createElement(se,{label:"FechaDefuncion",value:"fecha"}),r.a.createElement(se,{label:"Responsable",value:"responsable"}),r.a.createElement(se,{label:"Direccion",value:"direccion"}),r.a.createElement(se,{label:"Correo",value:"correo"}),r.a.createElement(se,{label:"Telefono",value:"telefono"}),r.a.createElement(se,{label:"Pagado",value:"estado"}),r.a.createElement(se,{label:"ValorPendiente",value:"valor"})))),r.a.createElement(f.a.Column,null,r.a.createElement(re,{headerTitle:"Totales",buttonTriggerTitle:" Totales Registrados",buttonColor:"orange",data:this.props.data})),r.a.createElement(f.a.Column,null,r.a.createElement(C.a,{fluid:!0,label:"Buscar: ",placeholder:"Escriba ...",onChange:this.handleInputs,value:e,name:"search",size:"large",icon:"search",style:{width:"250px"}}))),r.a.createElement(te,{data:this.props.data,headers:["Boveda","Nombre","Apellido","Fecha","Valor","Responsable","Estado","Acciones"],labels:["boveda","nombre","apellido","fecha","valor","responsable"],pageRows:20,searchQuery:e,footerPages:5,onUserUpdated:this.props.onUserUpdated,onUserDeleted:this.props.onUserDeleted,server:this.props.server}))}}]),a}(n.Component),ce=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(c.a)(this,Object(d.a)(a).call(this))).server="https://cementeriosayausi.herokuapp.com",e.state={users:[]},e.fetchUsers=e.fetchUsers.bind(Object(p.a)(Object(p.a)(e))),e.handleUserAdded=e.handleUserAdded.bind(Object(p.a)(Object(p.a)(e))),e.handleUserUpdated=e.handleUserUpdated.bind(Object(p.a)(Object(p.a)(e))),e.handleUserDeleted=e.handleUserDeleted.bind(Object(p.a)(Object(p.a)(e))),e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"fetchUsers",value:function(){var e=this;g.a.get("".concat(this.server,"/api/users/")).then(function(a){e.setState({users:a.data})}).catch(function(e){console.log(e)})}},{key:"handleUserAdded",value:function(e){var a=this.state.users.slice();a.push(e),this.setState({users:a})}},{key:"handleUserUpdated",value:function(e){var a=this.state.users.slice(),t=a.findIndex(function(a){return a._id===e._id});a.length>t&&(a[t]=e),this.setState({users:a})}},{key:"handleUserDeleted",value:function(e){var a=this.state.users.slice();a=a.filter(function(a){return a._id!==e._id}),this.setState({users:a})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("p",{className:"App-intro"},"Cementerio - GAD de la Parroquia Sayausi")),r.a.createElement(h.a,null,r.a.createElement(ie,{data:this.state.users,onUserAdded:this.handleUserAdded,onUserUpdated:this.handleUserUpdated,onUserDeleted:this.handleUserDeleted,server:this.server})),r.a.createElement("br",null))}}]),a}(n.Component),de=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,659)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,l=a.getLCP,o=a.getTTFB;t(e),n(e),r(e),l(e),o(e)})},ue=t(353);o.a.render(r.a.createElement(ue.a,{domain:"dev-h90g37q8.us.auth0.com",clientId:"mkC63v6rclM4Pp6ZcNlXczOT2xlIzcEj",redirectUri:window.location.origin},r.a.createElement(ce,null)),document.getElementById("root")),de()}},[[366,3,2]]]);
//# sourceMappingURL=main.4aa85cd3.chunk.js.map