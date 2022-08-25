(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,t,a){e.exports=a(193)},163:function(e,t,a){},184:function(e,t,a){},193:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(67),o=a.n(s),l=(a(160),a(163),a(45)),c=a(46),i=a(51),d=a(47),u=a(52),h=a(9),p=a(206),m=a(68),b=a.n(m),f=(a(184),a(60)),v=a(128),g=a(127),E=a(212),C=a(118),O=a(214),y=a(209),j=a(211),S=a(210),U=a(216),k=a(205),I=a(213),w=[{key:!0,text:"Pagado",value:!0},{key:!1,text:"No pagado",value:!1}],D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={boveda:"",nombre:"",apellido:"",fecha:"",cedula:"",responsable:"",telefono:"",estado:"",valor:"",formClassName:"",formSuccessMessage:"",formErrorMessage:""},a.handleInputChange=a.handleInputChange.bind(Object(h.a)(Object(h.a)(a))),a.handleSelectChange=a.handleSelectChange.bind(Object(h.a)(Object(h.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.props.userID&&(console.log(this.props.userID),console.log(this.props.server),b.a.get("".concat(this.props.server,"/api/users/").concat(this.props.userID)).then(function(t){e.setState({boveda:t.data.boveda,nombre:t.data.nombre,apellido:t.data.apellido,fecha:t.data.fecha,cedula:t.data.cedula,responsable:t.data.responsable,telefono:t.data.telefono,estado:t.data.estado,valor:t.data.valor})}).catch(function(e){console.log(e)}))}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(f.a)({},n,a))}},{key:"handleSelectChange",value:function(e,t){this.setState({estado:t.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={boveda:this.state.boveda,nombre:this.state.nombre,apellido:this.state.apellido,fecha:this.state.fecha,cedula:this.state.cedula,responsable:this.state.responsable,telefono:this.state.telefono,estado:this.state.estado,valor:this.state.valor},n=this.props.userID?"put":"post",r=this.props.userID?this.props.userID:"";b()({method:n,responseType:"json",url:"".concat(this.props.server,"/api/users/").concat(r),data:a}).then(function(e){t.setState({formClassName:"success",formSuccessMessage:e.data.msg}),t.props.userID?t.props.onUserUpdated(e.data.result):(t.setState({boveda:"",nombre:"",apellido:"",fecha:"",cedula:"",responsable:"",telefono:"",estado:"",valor:""}),t.props.onUserAdded(e.data.result))}).catch(function(e){e.response?e.response.data&&t.setState({formClassName:"warning",formErrorMessage:e.response.data.msg}):t.setState({formClassName:"warning",formErrorMessage:"Algo salio mal. "+e})})}},{key:"render",value:function(){var e=this.state.formClassName,t=this.state.formSuccessMessage,a=this.state.formErrorMessage;return r.a.createElement(S.a,{className:e,onSubmit:this.handleSubmit},r.a.createElement(U.a,{as:"h3",block:!0,color:"orange"},"Datos del Fallecido"),r.a.createElement(S.a.Group,{widths:"equal"},r.a.createElement(S.a.Input,{widths:"equal",width:5,label:"Boveda",type:"text",size:"4",placeholder:"A-001",name:"boveda",maxLength:"40",required:!0,value:this.state.boveda,onChange:this.handleInputChange}),r.a.createElement(S.a.Input,{width:8,label:"Fecha de Defuncion",name:"fecha",type:"date",maxLength:"10",required:!0,pattern:"\\d{4}-\\d{2}-\\d{2}",value:this.state.fecha.split("T")[0],onChange:this.handleInputChange}),r.a.createElement(S.a.Input,{label:"Nombres del fallecido",type:"text",placeholder:"Pepito",name:"nombre",maxLength:"40",required:!0,value:this.state.nombre,onChange:this.handleInputChange}),r.a.createElement(S.a.Input,{label:"Apellidos del fallecido",type:"text",placeholder:"Perez",name:"apellido",maxLength:"40",required:!0,value:this.state.apellido,onChange:this.handleInputChange})),r.a.createElement(U.a,{as:"h3",block:!0,color:"purple"},"Datos del Responsable"),r.a.createElement(S.a.Group,{widths:"equal"},r.a.createElement(S.a.Input,{width:"5",label:"Cedula",type:"text",placeholder:"0104751987",name:"cedula",maxLength:"10",required:!0,value:this.state.cedula,onChange:this.handleInputChange}),r.a.createElement(S.a.Input,{label:"Nombre del Responsable",type:"text",placeholder:"Nombres y Apellidos",min:5,max:130,name:"responsable",value:this.state.responsable,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Input,{width:5,label:"Telefono",type:"text",placeholder:"Telefono",min:3,max:10,name:"telefono",value:this.state.telefono,onChange:this.handleInputChange}),r.a.createElement(S.a.Input,{width:3,label:"Valor",type:"number",placeholder:"0,00",name:"valor",maxLength:"8",required:!0,value:this.state.valor,onChange:this.handleInputChange}),r.a.createElement(S.a.Field,{control:k.a,label:"Estado",options:w,placeholder:"",value:this.state.estado,onChange:this.handleSelectChange})),r.a.createElement(I.a,{success:!0,color:"blue",header:"Mensaje:",content:t}),r.a.createElement(I.a,{warning:!0,color:"yellow",header:"Advertenciasss!",content:a}),r.a.createElement(O.a,{color:this.props.buttonColor,floated:"right"},this.props.buttonSubmitTitle),r.a.createElement("br",null),r.a.createElement("br",null)," ")}}]),t}(n.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{trigger:r.a.createElement(O.a,{color:this.props.buttonColor,icon:!0,size:"mini"},r.a.createElement(C.a,{color:"yellow",name:"edit",size:"small"}),this.props.buttonTriggerTitle),dimmer:"inverted",size:"medium",closeIcon:!0},r.a.createElement(j.a.Header,null,this.props.headerTitle),r.a.createElement(j.a.Content,null,r.a.createElement(D,{buttonSubmitTitle:this.props.buttonSubmitTitle,buttonColor:this.props.buttonColor,userID:this.props.userID,onUserAdded:this.props.onUserAdded,onUserUpdated:this.props.onUserUpdated,server:this.props.server})))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).handleOpen=function(e){return a.setState({modalOpen:!0})},a.handleClose=function(e){return a.setState({modalOpen:!1})},a.state={modalOpen:!1},a.handleOpen=a.handleOpen.bind(Object(h.a)(Object(h.a)(a))),a.handleClose=a.handleClose.bind(Object(h.a)(Object(h.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){var t=this,a=e.target.getAttribute("data-userID");b()({method:"delete",responseType:"json",url:"".concat(this.props.server,"/api/users/").concat(a)}).then(function(e){t.handleClose(),t.props.onUserDeleted(e.data.result)}).catch(function(e){throw t.handleClose(),e})}},{key:"render",value:function(){return r.a.createElement(j.a,{trigger:r.a.createElement(O.a,{onClick:this.handleOpen,color:this.props.buttonColor,icon:!0,size:"mini"},r.a.createElement(C.a,{color:"red",name:"delete",size:"small"}),this.props.buttonTriggerTitle),open:this.state.modalOpen,onClose:this.handleClose,dimmer:"inverted",size:"tiny"},r.a.createElement(j.a.Header,null,this.props.headerTitle),r.a.createElement(j.a.Content,null,r.a.createElement("p",null,"Esta seguro de eliminar ",r.a.createElement("strong",null,this.props.user.nombre+" "+this.props.user.apellido," "),"?")),r.a.createElement(j.a.Actions,null,r.a.createElement(O.a,{onClick:this.handleSubmit,"data-userID":this.props.user._id,color:"red"},"Si"),r.a.createElement(O.a,{onClick:this.handleClose,color:"red"},"No")))}}]),t}(n.Component),x=a(82),_=a.n(x),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={page:0,pageSelection:"",searchQuery:"",header:""},a.componentDidMount=function(){var e=a.props.pageRows,t=void 0===e?10:e;a.setState({pageSelection:[0,t]})},a.componentDidUpdate=function(){var e=a.props,t=e.searchQuery,n=e.pageRows,r=void 0===n?10:n;t&&a.state.searchQuery!==a.props.searchQuery&&a.setState({searchQuery:t,pageSelection:[0,r],page:0})},a.dynamicsort=function(e,t){var a=1;return"desc"===t&&(a=-1),function(t,n){return t[e]<n[e]?-1*a:t[e]>n[e]?1*a:0*a}},a.handleSort=function(e){var t=a.props,n=t.pageRows,r=void 0===n?10:n,s=t.headers,o={};s.forEach(function(t){o=Object(g.a)({},o,Object(f.a)({},t,t!==e?"":"asc"===a.state[t]?"desc":"asc"))}),a.setState(Object(g.a)({header:e,pageSelection:[0,r],page:0},o))},a.getSort=function(e,t){var n=a.props,r=n.labels[n.headers.indexOf(e)];return t.sort(a.dynamicsort(r,"asc"===a.state[e]?"desc":"asc"))},a.searchOnData=function(e,t){return e?t.filter(function(t){for(var a={},n=0,r=Object.keys(t);n<r.length;n++){var s=r[n];a[s]=t[s]}for(var o=0,l=Object.keys(a);o<l.length;o++){var c=l[o];try{var i=a[c],d=new RegExp("W*("+e+")W*");if(d.test(i.toString().toLowerCase()))return!0;if(d.test(i))return!0}catch(u){return!1}}return!1}):t},a.renderHeaders=function(){var e=a.props.headers;return r.a.createElement(E.a.Header,null,r.a.createElement(E.a.Row,null,(e||[]).map(function(e,t){return r.a.createElement(E.a.HeaderCell,{key:t,onClick:function(){return a.handleSort(e)}},r.a.createElement("div",{className:_.a.header},r.a.createElement("div",null,e),r.a.createElement("div",{className:_.a.icon},r.a.createElement(C.a,{name:"asc"===a.state[e]?"caret up":"caret down"}))))})))},a.handleFooter=function(e){var t=a.props,n=t.pageRows,r=void 0===n?10:n,s=t.data,o=t.searchQuery,l=Math.ceil(a.searchOnData(o,s).length/r);e>=0&&e<l&&a.setState({pageSelection:0===e?[0,r]:[e*r,e*r+r],page:e})},a.getData=function(){var e,t=a.props,n=t.data,r=t.searchQuery,s=a.state,o=s.pageSelection,l=s.header,c=n||[];return r&&(c=a.searchOnData(r,c)),l&&(c=a.getSort(l,c)),o&&(c=(e=c).slice.apply(e,Object(v.a)(o))),c},a.renderData=function(){var e=a.props.labels,t=a.getData();return r.a.createElement(E.a.Body,null,(t||[]).map(function(t,n){return r.a.createElement(E.a.Row,{key:t._id},r.a.createElement(E.a.Cell,{textAlign:"center"},r.a.createElement(C.a,{color:t.estado?"green":"red",name:t.estado?"checkmark box":"cancel",size:"large"})),(e||[]).map(function(e,a){return r.a.createElement(E.a.Cell,{key:t._id},r.a.createElement("div",{className:_.a.cell},"fecha"===e?t[e].split("T")[0]:t[e]||""))}),r.a.createElement(O.a.Group,null,r.a.createElement(A,{headerTitle:"Editar",buttonTriggerTitle:"",buttonSubmitTitle:"Guardar",buttonColor:"white",userID:t._id,onUserUpdated:a.props.onUserUpdated,server:a.props.server}),r.a.createElement(T,{headerTitle:"Eliminar",buttonTriggerTitle:"",buttonColor:"white",user:t,onUserDeleted:a.props.onUserDeleted,server:a.props.server})))}))},a.getLastLimitDown=function(e,t){for(var a=0;e>0;)e-=t,a+=t;return a-t-1},a.renderFooter=function(){for(var e=a.props,t=e.pageRows,n=void 0===t?10:t,s=e.labels,o=e.data,l=e.searchQuery,c=e.footerPages,i=void 0===c?10:c,d=a.state.page,u=[],h=Math.ceil(a.searchOnData(l,o).length/n),p=d<i?1:Math.floor(d/i)*i+1,m=d>a.getLastLimitDown(h,i)?h:p+i-1,b=p;b<=m;b++)u=[].concat(Object(v.a)(u),[b]);return r.a.createElement(E.a.Footer,null,r.a.createElement(E.a.Row,null,r.a.createElement(E.a.HeaderCell,{colSpan:s.length+2},r.a.createElement(y.a,{floated:"right",pagination:!0},r.a.createElement(y.a.Item,{as:"a",icon:!0,onClick:function(){return a.handleFooter(d-1)}},r.a.createElement(C.a,{name:"chevron left"})),u.map(function(e,t){return r.a.createElement(y.a.Item,{key:t,style:e-1===d?{backgroundColor:"#E5E5E5"}:{},as:"a",onClick:function(){return a.handleFooter(e-1)}},e)}),r.a.createElement(y.a.Item,{as:"a",icon:!0,onClick:function(){return a.handleFooter(d+1)}},r.a.createElement(C.a,{name:"chevron right"}))))))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{celled:!0},this.renderHeaders(),this.renderData(),this.renderFooter())}}]),t}(n.PureComponent),L=a(217),R=a(204),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={search:""},a.handleInputs=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.search;return r.a.createElement("div",{className:_.a.container},r.a.createElement(L.a,null,r.a.createElement(L.a.Column,{width:6},r.a.createElement(A,{headerTitle:"A\xf1adir Boveda",buttonTriggerTitle:"A\xf1adir Boveda",buttonSubmitTitle:"Anadir",buttonColor:"black",onUserAdded:this.props.onUserAdded,server:this.props.server})),r.a.createElement(L.a.Column,{width:6},r.a.createElement(R.a,{placeholder:"Buscar",onChange:this.handleInputs,value:e,name:"search",icon:"search",style:{width:"250px"}}))),r.a.createElement(N,{data:this.props.data,headers:["Estado","Boveda","Nombre","Apellido","Fecha","Cedula","Responsable","Telefono","Valor","Acciones"],labels:["boveda","nombre","apellido","fecha","cedula","responsable","telefono","valor"],pageRows:20,searchQuery:e,footerPages:10,onUserUpdated:this.props.onUserUpdated,onUserDeleted:this.props.onUserDeleted,server:this.props.server}))}}]),t}(n.Component),M=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(d.a)(t).call(this))).server=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_URL||"https://cementeriosayausi.herokuapp.com",e.state={users:[],online:0},e.fetchUsers=e.fetchUsers.bind(Object(h.a)(Object(h.a)(e))),e.handleUserAdded=e.handleUserAdded.bind(Object(h.a)(Object(h.a)(e))),e.handleUserUpdated=e.handleUserUpdated.bind(Object(h.a)(Object(h.a)(e))),e.handleUserDeleted=e.handleUserDeleted.bind(Object(h.a)(Object(h.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"fetchUsers",value:function(){var e=this;b.a.get("".concat(this.server,"/api/users/")).then(function(t){e.setState({users:t.data})}).catch(function(e){console.log(e)})}},{key:"handleUserAdded",value:function(e){var t=this.state.users.slice();t.push(e),this.setState({users:t})}},{key:"handleUserUpdated",value:function(e){var t=this.state.users.slice(),a=t.findIndex(function(t){return t._id===e._id});t.length>a&&(t[a]=e),this.setState({users:t})}},{key:"handleUserDeleted",value:function(e){var t=this.state.users.slice();t=t.filter(function(t){return t._id!==e._id}),this.setState({users:t})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("h1",{className:"App-intro"},"Sistema de Gestion del Cementerio de Sayausi"))),r.a.createElement(p.a,null,r.a.createElement(F,{data:this.state.users,users:this.state.users,onUserAdded:this.handleUserAdded,onUserUpdated:this.handleUserUpdated,onUserDeleted:this.handleUserDeleted,server:this.server})),r.a.createElement("br",null))}}]),t}(n.Component),P=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,207)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),s(e),o(e)})};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),P()},82:function(e,t,a){e.exports={header:"style_header__3c3LW",icon:"style_icon__2s14n",cell:"style_cell__1duSl",container:"style_container__2nBYz"}}},[[155,3,2]]]);
//# sourceMappingURL=main.c229cb1d.chunk.js.map