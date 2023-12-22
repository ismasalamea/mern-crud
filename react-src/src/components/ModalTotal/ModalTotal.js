import React, { Component } from 'react';
import {Button, Modal, Icon, Label, Header, Table } from 'semantic-ui-react';

class ModalTotal extends Component {

    getLengthOfObject = (obj) => { 
        let lengthOfObject = Object.keys(obj).length; 
        return lengthOfObject;
      }
    
    render() {
        const solobovedas = this.props.data.filter(item => item.forma === 'Boveda')
        const cantbovedas = this.getLengthOfObject(solobovedas);

        const solonicho = this.props.data.filter(item => item.forma ==='Nicho')
        const cantnicho = this.getLengthOfObject(solonicho);

        const suma= this.getLengthOfObject(this.props.data);


        const sumall = this.props.data.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
        const solopropias = this.props.data.filter(item => item.tipo === 'Propia')
        const soloarrendadas = this.props.data.filter(item => item.tipo === 'Arrendada')
        const solosindefinir = this.props.data.filter(item => item.tipo === 'No definida')
        
        const sumapropias = solopropias.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
        const sumaarrendadas = soloarrendadas.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
        const sumasindefinir = solosindefinir.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
        return( 
        <Modal trigger={
      
            <Button color={this.props.buttonColor} icon >
              <Icon name='chart line' />
                {this.props.buttonTriggerTitle}
            </Button> }            
              // dimmer='inverted'
              size='small'
              closeIcon
            >        
            <Modal.Header>
             <Header.Content scrolling > <Icon name='chart line' />{this.props.headerTitle}</Header.Content>
            </Modal.Header>
            <Modal.Content>


            <Table celled>
            <Table.Body celled>
            <Table.Row >
            <Table.Cell >
              <Header as='h3'><Icon name='product hunt' /> <Header.Content>Cantidad de Bovedas:</Header.Content></Header>
            </Table.Cell>
            <Table.Cell >
              <Label size='huge' >{cantbovedas}</Label>
            </Table.Cell>
            </Table.Row>
            <Table.Row >
            <Table.Cell >
              <Header as='h3'><Icon name='product hunt' /> <Header.Content>Cantidad de Nichos:</Header.Content></Header>
            </Table.Cell>
            <Table.Cell >
              <Label size='huge' >{cantnicho}</Label>
            </Table.Cell>
            </Table.Row>
            <Table.Row >
            <Table.Cell >
            <Header as='h2'>
              <Icon name='box' /> <Header.Content>Total de Espacios:</Header.Content> </Header>
            </Table.Cell>   
            <Table.Cell >
                <Label size='huge' >{suma}</Label>
            </Table.Cell>
            </Table.Row>         
            <Table.Row >
            <Table.Cell >
              <Header as='h3'><Icon name='product hunt' /> <Header.Content>Valor Pendiente de Espacios Propias:</Header.Content></Header>
            </Table.Cell>
            <Table.Cell >
              <Label size='huge' >{sumapropias}</Label>
            </Table.Cell>
            </Table.Row>
            <Table.Row >          
            <Table.Cell >
              <Header as='h3'><Icon name='warehouse' /> <Header.Content>Valor Pendiente de Espacios Arrendadas:</Header.Content></Header>
            </Table.Cell>
            <Table.Cell >
              <Label size='huge' >{sumaarrendadas}</Label>
            </Table.Cell>
            </Table.Row>
            <Table.Row > 
            <Table.Cell >
              <Header as='h3'><Icon name='eye slash outline' /> <Header.Content>Valor Pendiente de Espacios no definidos:</Header.Content></Header>
            </Table.Cell>
            <Table.Cell >
            <Label size='huge' >{sumasindefinir}</Label>
            </Table.Cell>
            </Table.Row>
            <Table.Row > 
            <Table.Cell >
              <Header as='h2'><Icon name='usd' /> <Header.Content>Total Valores Pendientes:</Header.Content></Header>
            </Table.Cell>
            <Table.Cell >
              <Label size='huge' >{sumall}</Label>
            </Table.Cell>
            </Table.Row>            
            </Table.Body>
            </Table>
               </Modal.Content>
        </Modal> 
        );
    }
}

export default ModalTotal;