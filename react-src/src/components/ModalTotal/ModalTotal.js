import React, { Component } from 'react';
import {Button, Modal, Icon, Label, Header } from 'semantic-ui-react';

class ModalTotal extends Component {

    getLengthOfObject = (obj) => { 
        let lengthOfObject = Object.keys(obj).length; 
        console.log(lengthOfObject);
        return lengthOfObject;
      }
    
    render() {
        const suma = this.getLengthOfObject(this.props.data);
        const sumall = this.props.data.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
        return( 
        <Modal trigger={
      
            <Button color={this.props.buttonColor} icon size='mini'>
              <Icon color='red' name='world' />
                {this.props.buttonTriggerTitle}
            </Button> }
            
            dimmer='inverted'
              size='small'
              closeIcon
            >
        
            <Modal.Header>
              <Icon name='chart line' /><Header.Content>{this.props.headerTitle}</Header.Content>
            </Modal.Header>
            <Modal.Content> 
            <Header as='h2'>
              <Icon name='home' /> <Header.Content>Total de Bovedas:<Label size='huge' >{suma}</Label></Header.Content>
            </Header>
            <Header as='h2'>
              <Icon name='money' /> <Header.Content>Total Valores Pendientes:<Label size='huge' >{sumall}</Label></Header.Content>
            </Header>
               </Modal.Content>
        </Modal> 
        );
    }
}

export default ModalTotal;