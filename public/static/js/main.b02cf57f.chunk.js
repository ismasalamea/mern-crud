(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){e.exports={header:"style_header__3c3LW",icon:"style_icon__2s14n",cell:"style_cell__1duSl",container:"style_container__2nBYz"}},259:function(e,t,a){e.exports=a(426)},265:function(e,t,a){},284:function(e,t,a){},288:function(e,t){},290:function(e,t){},319:function(e,t){},320:function(e,t){},376:function(e,t){},415:function(e,t){},418:function(e,t){},425:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(78),o=a.n(l),s=(a(264),a(265),a(23)),i=a(24),c=a(28),d=a(25),u=a(29),p=a(16),h=a(439),m=a(79),b=a.n(m),g=(a(284),a(60)),f=a(186),v=a(182),E=a(443),y=a(84),C=a(427),O=a(440),j=a(442),k=a(446),S=a(441),U=a(438),_=a(444),w=a(15),I=new Date,x=w.e.create({page:{backgroundColor:"white",color:"black"},titulo:{fontWeight:"extrabold",borderTop:"2px solid black",borderBottom:"2px solid black",letterSpacing:3,textAlign:"center",margin:20,padding:10},section:{borderTop:"4px solid black",borderBottom:"4px solid black",margin:20,padding:10},valor:{margin:30,padding:10,textAlign:"right"},firma:{margin:30,padding:10,textAlign:"center"},image:{width:200,height:200,marginLeft:180,borderTop:"2px solid black",borderBottom:"2px solid black"},viewer:{width:window.innerWidth/2,height:window.innerHeight}}),D=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{trigger:r.a.createElement(C.a,{disabled:""===this.props.valores.valor,color:"black",icon:!0,size:"mini"},r.a.createElement(y.a,{name:"download"}),"Comprobante"),dimmer:"inverted",size:"small",closeIcon:!0},r.a.createElement(w.c,{style:x.viewer},r.a.createElement(w.a,null,r.a.createElement(w.d,{size:"A4",style:x.page},r.a.createElement(w.b,{style:x.image,bordered:"true",label:"Logo",src:"https://res.cloudinary.com/curso-node-jism/image/upload/v1661789319/sayausi/logo_qh6nxj.jpg"}),r.a.createElement(w.g,{style:x.titulo},r.a.createElement(w.f,null,"Comprobante: "),r.a.createElement(w.f,null,"Cementerio del GAD de Sayausi"),r.a.createElement(w.f,null,"Fecha de Pago: ",I.toDateString())),r.a.createElement(w.g,{style:x.section},r.a.createElement(w.f,null,"Boveda: ",this.props.valores.boveda),r.a.createElement(w.f,null,"Nombres: ",this.props.valores.nombre),r.a.createElement(w.f,null,"Apellidos: ",this.props.valores.apellido)),r.a.createElement(w.g,{style:x.valor},r.a.createElement(w.f,null,"Valor: ",this.props.valores.valor)),r.a.createElement(w.g,{style:x.firma},r.a.createElement(w.f,null,"____________________________"),r.a.createElement(w.f,null,this.props.valores.cedula),r.a.createElement(w.f,null,this.props.valores.responsable))))))}}]),t}(n.Component),T=w.e.create({page:{backgroundColor:"white",color:"black"},titulo:{fontWeight:"extrabold",borderTop:"2px solid black",borderBottom:"2px solid black",letterSpacing:3,textAlign:"center",margin:20,padding:10},section:{borderTop:"4px solid black",borderBottom:"4px solid black",margin:20,padding:10},valor:{margin:30,padding:10,textAlign:"right"},firma:{margin:30,padding:10,textAlign:"center"},image:{width:"100%",height:"100%",marginLeft:2,borderTop:"2px solid black",borderBottom:"2px solid black"},viewer:{width:window.innerWidth/2,height:window.innerHeight/2}}),A=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{trigger:r.a.createElement(C.a,{disabled:""===this.props.valores.uploadedFileCloudinaryUrl,color:"pink",icon:!0,size:"mini"},r.a.createElement(y.a,{name:"download"}),"Certificado"),dimmer:"inverted",size:"small",closeIcon:!0},r.a.createElement(w.c,{style:T.viewer},r.a.createElement(w.a,null,r.a.createElement(w.d,{size:"A4",style:T.page},r.a.createElement(w.b,{style:T.image,bordered:"true",src:this.props.valores.uploadedFileCloudinaryUrl})))))}}]),t}(n.Component),F=a(246),N=a(244),L=a.n(N),R=(a(425),[{key:!0,text:"Pagado",value:!0},{key:!1,text:"No pagado",value:!1}]),z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={boveda:"",nombre:"",apellido:"",fecha:"",cedula:"",responsable:"",telefono:"",estado:"",valor:"",certificado:"",formClassName:"",formSuccessMessage:"",formErrorMessage:"",uploadedFile:null,uploadedFileCloudinaryUrl:""},a.handleInputChange=a.handleInputChange.bind(Object(p.a)(Object(p.a)(a))),a.handleSelectChange=a.handleSelectChange.bind(Object(p.a)(Object(p.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.props.userID&&b.a.get("".concat(this.props.server,"/api/users/").concat(this.props.userID)).then(function(t){e.setState({boveda:t.data.boveda,nombre:t.data.nombre,apellido:t.data.apellido,fecha:t.data.fecha,cedula:t.data.cedula,responsable:t.data.responsable,telefono:t.data.telefono,estado:t.data.estado,valor:t.data.valor,certificado:t.data.certificado})}).catch(function(e){console.log(e)})}},{key:"onImageDrop",value:function(e){this.setState({uploadedFile:e[0]}),this.handleImageUpload(e[0])}},{key:"handleImageUpload",value:function(e){var t=this;console.log(e),L.a.post("https://api.cloudinary.com/v1_1/curso-node-jism/upload").field("upload_preset","certi_sayausi").field("file",e).end(function(e,a){e&&console.error(e),""!==a.body.secure_url&&(console.log(a.body.secure_url),t.setState({uploadedFileCloudinaryUrl:a.body.secure_url}),console.log(t.state.uploadedFileCloudinaryUrl))})}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(g.a)({},n,a))}},{key:"handleSelectChange",value:function(e,t){this.setState({estado:t.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={boveda:this.state.boveda,nombre:this.state.nombre,apellido:this.state.apellido,fecha:this.state.fecha,cedula:this.state.cedula,responsable:this.state.responsable,telefono:this.state.telefono,estado:this.state.estado,valor:this.state.valor,certificado:this.state.uploadedFileCloudinaryUrl},n=this.props.userID?"put":"post",r=this.props.userID?this.props.userID:"";b()({method:n,responseType:"json",url:"".concat(this.props.server,"/api/users/").concat(r),data:a}).then(function(e){t.setState({formClassName:"success",formSuccessMessage:e.data.msg}),t.props.userID?t.props.onUserUpdated(e.data.result):(t.setState({boveda:"",nombre:"",apellido:"",fecha:"",cedula:"",responsable:"",telefono:"",estado:"",valor:"",certificado:""}),t.props.onUserAdded(e.data.result))}).catch(function(e){e.response?e.response.data&&t.setState({formClassName:"warning",formErrorMessage:e.response.data.msg}):t.setState({formClassName:"warning",formErrorMessage:"Algo salio mal. "+e})})}},{key:"render",value:function(){var e=this.state.formClassName,t=this.state.formSuccessMessage,a=this.state.formErrorMessage;return r.a.createElement(S.a,{className:e,onSubmit:this.handleSubmit},r.a.createElement(k.a,{as:"h3",block:!0,color:"orange"},"Datos del Fallecido"),r.a.createElement(S.a.Group,{widths:"equal"},r.a.createElement(S.a.Input,{width:5,label:"Boveda",type:"text",maxLength:"4",placeholder:"A-001",name:"boveda",required:!0,value:this.state.boveda,onChange:this.handleInputChange}),r.a.createElement(S.a.Input,{width:8,label:"Fecha de Defuncion",name:"fecha",type:"date",maxLength:"10",required:!0,pattern:"\\d{4}-\\d{2}-\\d{2}",value:this.state.fecha.split("T")[0],onChange:this.handleInputChange}),r.a.createElement(S.a.Input,{label:"Nombres del fallecido",type:"text",placeholder:"Pepito",name:"nombre",maxLength:"40",required:!0,value:this.state.nombre,onChange:this.handleInputChange}),r.a.createElement(S.a.Input,{label:"Apellidos del fallecido",type:"text",placeholder:"Perez",name:"apellido",maxLength:"40",required:!0,value:this.state.apellido,onChange:this.handleInputChange})),r.a.createElement("div",{className:"FileUpload"},r.a.createElement(F.a,{onDrop:this.onImageDrop.bind(this),multiple:!1,maxSize:5e5},function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement("div",t({className:"dropzone"}),r.a.createElement("input",a()),r.a.createElement("p",null,"Hacer click para seleccionar el archivo:"))})),r.a.createElement("div",null,""===this.state.uploadedFileCloudinaryUrl?null:r.a.createElement("div",{className:"Imagen"},r.a.createElement("p",null,"Archivo Cargado exitosamente: ",this.state.uploadedFile.name),r.a.createElement("img",{alt:"alto",src:this.state.uploadedFileCloudinaryUrl,height:"250px"}))),r.a.createElement(k.a,{as:"h3",block:!0,color:"purple"},"Datos del Responsable"),r.a.createElement(S.a.Group,{widths:"equal"},r.a.createElement(S.a.Input,{width:"5",label:"Cedula",type:"text",placeholder:"0104751987",name:"cedula",maxLength:"10",required:!0,value:this.state.cedula,onChange:this.handleInputChange}),r.a.createElement(S.a.Input,{label:"Nombre del Responsable",type:"text",placeholder:"Nombres y Apellidos",min:5,max:130,name:"responsable",value:this.state.responsable,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Input,{width:5,label:"Telefono",type:"text",placeholder:"Telefono",min:3,max:10,name:"telefono",required:!0,value:this.state.telefono,onChange:this.handleInputChange}),r.a.createElement(S.a.Input,{width:3,label:"Valor",type:"number",placeholder:"0,00",name:"valor",maxLength:"8",required:!0,value:this.state.valor,onChange:this.handleInputChange}),r.a.createElement(S.a.Field,{control:U.a,label:"Estado",options:R,placeholder:"",value:this.state.estado,onChange:this.handleSelectChange})),r.a.createElement(_.a,{success:!0,color:"blue",header:"Mensaje:",content:t}),r.a.createElement(_.a,{warning:!0,color:"yellow",header:"Advertenciasss!",content:a}),r.a.createElement(C.a.Group,{widths:"four",floated:"right"},r.a.createElement(A,{valores:this.state}),r.a.createElement(D,{valores:this.state}),r.a.createElement(C.a,{name:"user",color:this.props.buttonColor,floated:"right"},r.a.createElement(y.a,{name:"save"}),this.props.buttonSubmitTitle)),r.a.createElement("br",null),r.a.createElement("br",null)," ")}}]),t}(n.Component),B=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{trigger:r.a.createElement(C.a,{color:this.props.buttonColor},r.a.createElement(y.a,{color:"pink",name:"file"}),this.props.buttonTriggerTitle),dimmer:"inverted",closeIcon:!0},r.a.createElement(k.a,{icon:"user",content:this.props.headerTitle}),r.a.createElement(j.a.Content,null,r.a.createElement(z,{buttonSubmitTitle:this.props.buttonSubmitTitle,buttonColor:this.props.buttonColor,userID:this.props.userID,onUserAdded:this.props.onUserAdded,onUserUpdated:this.props.onUserUpdated,server:this.props.server})))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleOpen=function(e){return a.setState({modalOpen:!0})},a.handleClose=function(e){return a.setState({modalOpen:!1})},a.state={modalOpen:!1},a.handleOpen=a.handleOpen.bind(Object(p.a)(Object(p.a)(a))),a.handleClose=a.handleClose.bind(Object(p.a)(Object(p.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){var t=this,a=e.target.getAttribute("data-userID");b()({method:"delete",responseType:"json",url:"".concat(this.props.server,"/api/users/").concat(a)}).then(function(e){t.handleClose(),t.props.onUserDeleted(e.data.result)}).catch(function(e){throw t.handleClose(),e})}},{key:"render",value:function(){return r.a.createElement(j.a,{trigger:r.a.createElement(C.a,{onClick:this.handleOpen,color:this.props.buttonColor,icon:!0,size:"mini"},r.a.createElement(y.a,{color:"red",name:"delete",size:"small"}),this.props.buttonTriggerTitle),open:this.state.modalOpen,onClose:this.handleClose,dimmer:"inverted",size:"tiny"},r.a.createElement(j.a.Header,null,this.props.headerTitle),r.a.createElement(j.a.Content,null,r.a.createElement("p",null,"Esta seguro de eliminar ",r.a.createElement("strong",null,this.props.user.nombre+" "+this.props.user.apellido," "),"?")),r.a.createElement(j.a.Actions,null,r.a.createElement(C.a,{onClick:this.handleSubmit,"data-userID":this.props.user._id,color:"red"},"Si"),r.a.createElement(C.a,{onClick:this.handleClose,color:"red"},"No")))}}]),t}(n.Component),M=a(107),q=a.n(M),H=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={page:0,pageSelection:"",searchQuery:"",header:""},a.componentDidMount=function(){var e=a.props.pageRows,t=void 0===e?10:e;a.setState({pageSelection:[0,t]})},a.componentDidUpdate=function(){var e=a.props,t=e.searchQuery,n=e.pageRows,r=void 0===n?10:n;t&&a.state.searchQuery!==a.props.searchQuery&&a.setState({searchQuery:t,pageSelection:[0,r],page:0})},a.dynamicsort=function(e,t){var a=1;return"desc"===t&&(a=-1),function(t,n){return t[e]<n[e]?-1*a:t[e]>n[e]?1*a:0*a}},a.handleSort=function(e){var t=a.props,n=t.pageRows,r=void 0===n?10:n,l=t.headers,o={};l.forEach(function(t){o=Object(v.a)({},o,Object(g.a)({},t,t!==e?"":"asc"===a.state[t]?"desc":"asc"))}),a.setState(Object(v.a)({header:e,pageSelection:[0,r],page:0},o))},a.getSort=function(e,t){var n=a.props,r=n.labels[n.headers.indexOf(e)];return t.sort(a.dynamicsort(r,"asc"===a.state[e]?"desc":"asc"))},a.searchOnData=function(e,t){return e?t.filter(function(t){for(var a={},n=0,r=Object.keys(t);n<r.length;n++){var l=r[n];a[l]=t[l]}for(var o=0,s=Object.keys(a);o<s.length;o++){var i=s[o];try{var c=a[i],d=new RegExp("W*("+e+")W*");if(d.test(c.toString().toLowerCase()))return!0;if(d.test(c))return!0}catch(u){return!1}}return!1}):t},a.renderHeaders=function(){var e=a.props.headers;return r.a.createElement(E.a.Header,null,r.a.createElement(E.a.Row,null,(e||[]).map(function(e,t){return r.a.createElement(E.a.HeaderCell,{key:t,onClick:function(){return a.handleSort(e)}},r.a.createElement("div",{className:q.a.header},r.a.createElement("div",null,e),r.a.createElement("div",{className:q.a.icon},r.a.createElement(y.a,{name:"asc"===a.state[e]?"caret up":"caret down"}))))})))},a.handleFooter=function(e){var t=a.props,n=t.pageRows,r=void 0===n?10:n,l=t.data,o=t.searchQuery,s=Math.ceil(a.searchOnData(o,l).length/r);e>=0&&e<s&&a.setState({pageSelection:0===e?[0,r]:[e*r,e*r+r],page:e})},a.getData=function(){var e,t=a.props,n=t.data,r=t.searchQuery,l=a.state,o=l.pageSelection,s=l.header,i=n||[];return r&&(i=a.searchOnData(r,i)),s&&(i=a.getSort(s,i)),o&&(i=(e=i).slice.apply(e,Object(f.a)(o))),i},a.renderData=function(){var e=a.props.labels,t=a.getData();return r.a.createElement(E.a.Body,null,(t||[]).map(function(t,n){return r.a.createElement(E.a.Row,{key:t._id},r.a.createElement(E.a.Cell,{textAlign:"center"},r.a.createElement(y.a,{color:t.estado?"green":"red",name:t.estado?"checkmark box":"cancel",size:"large"})),(e||[]).map(function(e,a){return r.a.createElement(E.a.Cell,{key:t._id},r.a.createElement("div",{className:q.a.cell},"fecha"===e?t[e].split("T")[0]:t[e]||0))}),r.a.createElement(C.a.Group,null,r.a.createElement(B,{headerTitle:"Editar",buttonTriggerTitle:"",buttonSubmitTitle:"Guardar",buttonColor:"blue",userID:t._id,onUserUpdated:a.props.onUserUpdated,server:a.props.server}),r.a.createElement(P,{headerTitle:"Eliminar",buttonTriggerTitle:"",buttonColor:"white",user:t,onUserDeleted:a.props.onUserDeleted,server:a.props.server})))}))},a.getLastLimitDown=function(e,t){for(var a=0;e>0;)e-=t,a+=t;return a-t-1},a.renderFooter=function(){for(var e=a.props,t=e.pageRows,n=void 0===t?10:t,l=e.labels,o=e.data,s=e.searchQuery,i=e.footerPages,c=void 0===i?10:i,d=a.state.page,u=[],p=Math.ceil(a.searchOnData(s,o).length/n),h=d<c?1:Math.floor(d/c)*c+1,m=d>a.getLastLimitDown(p,c)?p:h+c-1,b=h;b<=m;b++)u=[].concat(Object(f.a)(u),[b]);return r.a.createElement(E.a.Footer,null,r.a.createElement(E.a.Row,null,r.a.createElement(E.a.HeaderCell,{colSpan:l.length+2},r.a.createElement(O.a,{floated:"right",pagination:!0},r.a.createElement(O.a.Item,{as:"a",icon:!0,onClick:function(){return a.handleFooter(d-1)}},r.a.createElement(y.a,{name:"chevron left"})),u.map(function(e,t){return r.a.createElement(O.a.Item,{key:t,style:e-1===d?{backgroundColor:"#E5E5E5"}:{},as:"a",onClick:function(){return a.handleFooter(e-1)}},e)}),r.a.createElement(O.a.Item,{as:"a",icon:!0,onClick:function(){return a.handleFooter(d+1)}},r.a.createElement(y.a,{name:"chevron right"}))))))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{celled:!0},this.renderHeaders(),this.renderData(),this.renderFooter())}}]),t}(n.PureComponent),Q=a(447),G=a(437),W=a(114),V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).getLengthOfObject=function(e){return Object.keys(e).length},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.getLengthOfObject(this.props.data),t=this.props.data.map(function(e){return e.valor}).reduce(function(e,t){return e+t},0);return r.a.createElement(j.a,{trigger:r.a.createElement(C.a,{color:this.props.buttonColor,icon:!0},r.a.createElement(y.a,{name:"chart line"}),this.props.buttonTriggerTitle),dimmer:"inverted",size:"small",closeIcon:!0},r.a.createElement(j.a.Header,null,r.a.createElement(k.a.Content,null," ",r.a.createElement(y.a,{name:"chart line"}),this.props.headerTitle)),r.a.createElement(j.a.Content,null,r.a.createElement(k.a,{as:"h2"},r.a.createElement(y.a,{name:"home"})," ",r.a.createElement(k.a.Content,null,"Total de Bovedas:",r.a.createElement(W.a,{size:"huge"},e))),r.a.createElement(k.a,{as:"h2"},r.a.createElement(y.a,{name:"money"})," ",r.a.createElement(k.a.Content,null,"Total Valores Pendientes:",r.a.createElement(W.a,{size:"huge"},t)))))}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={search:""},a.handleInputs=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.search;return r.a.createElement("div",{className:q.a.container},r.a.createElement(Q.a,{columns:3},r.a.createElement(Q.a.Column,null,r.a.createElement(B,{headerTitle:"A\xf1adir Boveda",buttonTriggerTitle:" A\xf1adir Boveda",buttonSubmitTitle:"Anadir",buttonColor:"red",onUserAdded:this.props.onUserAdded,server:this.props.server})),r.a.createElement(Q.a.Column,null,r.a.createElement(V,{headerTitle:"Totales Registrados",buttonTriggerTitle:" Totales Registrados",buttonColor:"orange",data:this.props.data})),r.a.createElement(Q.a.Column,null,r.a.createElement(G.a,{iconPosition:"left",fluid:!0,label:"Buscar: ",placeholder:"Escriba ...",onChange:this.handleInputs,value:e,name:"search",size:"large",icon:"search",style:{width:"250px"}}))),r.a.createElement(H,{data:this.props.data,headers:["Estado","Boveda","Nombre","Apellido","Fecha","Cedula","Responsable","Valor","Acciones"],labels:["boveda","nombre","apellido","fecha","cedula","responsable","valor"],pageRows:20,searchQuery:e,footerPages:10,onUserUpdated:this.props.onUserUpdated,onUserDeleted:this.props.onUserDeleted,server:this.props.server}))}}]),t}(n.Component),Y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this))).server=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_URL||"https://cementeriosayausi.herokuapp.com",e.state={users:[],online:0},e.fetchUsers=e.fetchUsers.bind(Object(p.a)(Object(p.a)(e))),e.handleUserAdded=e.handleUserAdded.bind(Object(p.a)(Object(p.a)(e))),e.handleUserUpdated=e.handleUserUpdated.bind(Object(p.a)(Object(p.a)(e))),e.handleUserDeleted=e.handleUserDeleted.bind(Object(p.a)(Object(p.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"fetchUsers",value:function(){var e=this;b.a.get("".concat(this.server,"/api/users/")).then(function(t){e.setState({users:t.data})}).catch(function(e){})}},{key:"handleUserAdded",value:function(e){var t=this.state.users.slice();t.push(e),this.setState({users:t})}},{key:"handleUserUpdated",value:function(e){var t=this.state.users.slice(),a=t.findIndex(function(t){return t._id===e._id});t.length>a&&(t[a]=e),this.setState({users:t})}},{key:"handleUserDeleted",value:function(e){var t=this.state.users.slice();t=t.filter(function(t){return t._id!==e._id}),this.setState({users:t})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("h1",{className:"App-intro"},"Sistema de Gestion del Cementerio de Sayausi"))),r.a.createElement(h.a,null,r.a.createElement(J,{data:this.state.users,onUserAdded:this.handleUserAdded,onUserUpdated:this.handleUserUpdated,onUserDeleted:this.handleUserDeleted,server:this.server})),r.a.createElement("br",null))}}]),t}(n.Component),K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,449)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),l(e),o(e)})};o.a.render(r.a.createElement(Y,null),document.getElementById("root")),K()}},[[259,1,2]]]);
//# sourceMappingURL=main.b02cf57f.chunk.js.map