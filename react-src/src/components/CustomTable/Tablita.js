import React, { Component } from "react";
import CustomTable from "./CustomTable"
import { Input, Grid } from "semantic-ui-react";
import Styles from "./style.module.css";
//import { data } from "./Datos";
import ModalUser from '../ModalUser/ModalUser';
import ModalTotal from "../ModalTotal/ModalTotal";
import Upload from "../FormUser/Upload";
export default class Tablita extends Component {
	state = {
		search: "",
	};
		
	handleInputs = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		const { search } = this.state;
		return (
			<div className={Styles.container}>
			<Grid columns={3} >
            <Grid.Column >
          	<ModalUser
            	headerTitle='Añadir Boveda'
            	buttonTriggerTitle=' Añadir Boveda'
            	buttonSubmitTitle='Anadir'
            	buttonColor='blue'
            	onUserAdded={this.props.onUserAdded}
				server={this.props.server}
			/>
			</Grid.Column> 
			<Grid.Column >
				<Upload server={this.props.server}
				></Upload>
			<ModalTotal
				headerTitle='Totales Registrados'
				buttonTriggerTitle='Totales Registrados'
            	buttonColor='orange'
				data={this.props.data}						
			>	
			</ModalTotal>
            </Grid.Column>
            <Grid.Column >	
			<Input label='Palabra clave: '
				placeholder={"Buscar"}
				onChange={this.handleInputs}
				value={search}
				name={"search"}
				icon={"search"}
				style={{ width: "250px" }}
			></Input>
            </Grid.Column>
            </Grid>
			<CustomTable
				data={this.props.data}
				headers={["Estado","Boveda", "Nombre", "Apellido", "Fecha", "Cedula", "Responsable", "Valor","Acciones"]}
				labels={["boveda","nombre", "apellido", "fecha", "cedula", "responsable", "valor"]}
				pageRows={20} //Optional
				searchQuery={search} //Optional
				footerPages={10} //Optional
				onUserUpdated={this.props.onUserUpdated}
				onUserDeleted={this.props.onUserDeleted}
				server={this.props.server}
			/>
			</div>
		);
	}
}
