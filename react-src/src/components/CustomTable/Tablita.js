import React, { Component } from "react";
import CustomTable from "./CustomTable"
import { Input, Grid } from "semantic-ui-react";
import Styles from "./style.module.css";
import ModalUser from '../ModalUser/ModalUser';
import ModalTotal from "../ModalTotal/ModalTotal";



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
				iconName='user'
			/>
			</Grid.Column> 
			<Grid.Column > 
				
			<ModalTotal
				headerTitle='Totales Registrados'
				buttonTriggerTitle=' Totales Registrados'
            	buttonColor='orange'
				data={this.props.data}						
			>	
			</ModalTotal>
            </Grid.Column>
            <Grid.Column >	
			<Input  

			fluid label='Buscar: '
				placeholder={"Escriba ..."}
				onChange={this.handleInputs}
				value={search}
				name={"search"}
				size='large'
				icon={"search"}
				style={{ width: "250px" }}
			></Input>
            </Grid.Column>

            </Grid>
			<CustomTable
				data={this.props.data}
				headers={["Boveda", "Nombre", "Apellido", "Fecha", "Valor","Estado","Acciones"]}
				labels={["boveda","nombre", "apellido", "fecha", "valor"]}
				pageRows={20} //Optional
				searchQuery={search} //Optional
				footerPages={5} //Optional
				onUserUpdated={this.props.onUserUpdated}
				onUserDeleted={this.props.onUserDeleted}
				server={this.props.server}
			/>
			</div>
		);
	}
}
