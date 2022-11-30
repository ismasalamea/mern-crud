import React, { Component } from "react";
import { Input, Grid, Button, Icon } from "semantic-ui-react";
import ExportExcel from "react-export-excel"
import CustomTable from "./CustomTable"
import Styles from "./style.module.css";
import ModalUser from '../ModalUser/ModalUser';
import ModalTotal from "../ModalTotal/ModalTotal";

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

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
		const tabla = JSON.parse(JSON.stringify(this.props.data));
		console.log(tabla)
		tabla.forEach(object =>{
			if(object.estado === false ){
				object.estado = 'No pagado';
			}else{
				object.estado = 'Pagado';
			}
		});
		tabla.forEach(object =>{
				object.fecha = object.fecha.split("T")[0];
		});
		return (
			<div className={Styles.container}>
			<Grid columns={4} >
            <Grid.Column >
          	<ModalUser
            	headerTitle='Añadir Unidad de Sepultura'
            	buttonTriggerTitle=' Añadir Unidad de Sepultura'
            	buttonSubmitTitle='Guardar'
            	buttonColor='brown'
            	onUserAdded={this.props.onUserAdded}
				server={this.props.server}
				iconName='user'
			/>
			</Grid.Column> 
			<Grid.Column > 
			<ExcelFile element={
				<Button color='blue' icon><Icon name='database' /> Exportar a Excel</Button>} filename="base_cementerio_sayausi">
				<ExcelSheet data={tabla} name="Hoja1">
					<ExcelColumn label="Espacio" value="boveda"></ExcelColumn>
					<ExcelColumn label="Tipo" value="forma"></ExcelColumn>
					<ExcelColumn label="Estado" value="tipo"></ExcelColumn>										
					<ExcelColumn label="Nombre" value="nombre"></ExcelColumn>										
					<ExcelColumn label="Apellido" value="apellido"></ExcelColumn>										
					<ExcelColumn label="FechaDefuncion" value="fecha"></ExcelColumn>										
					<ExcelColumn label="Cedula" value="cedula"></ExcelColumn>										
					<ExcelColumn label="Responsable" value="responsable"></ExcelColumn>										
					<ExcelColumn label="Direccion" value="direccion"></ExcelColumn>										
					<ExcelColumn label="Correo" value="correo"></ExcelColumn>										
					<ExcelColumn label="Telefono" value="telefono"></ExcelColumn>										
					<ExcelColumn label="Pagado" value="estado"></ExcelColumn>										
					<ExcelColumn label="ValorPendiente" value="valor"></ExcelColumn>										
				</ExcelSheet>
			</ExcelFile>
			</Grid.Column>
			<Grid.Column > 
			<ModalTotal
				headerTitle='Totales'
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
				headers={["Codigo", "Tipo", "Propiedad",  "Nombre", "Apellido", "Responsable", "Fecha", "Valor","Estado", "Acciones"]}
				labels={["boveda","forma","tipo","nombre", "apellido", "responsable", "fecha", "valor"]}
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
