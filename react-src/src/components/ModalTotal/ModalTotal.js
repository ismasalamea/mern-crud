import React, { Component } from 'react';
import {Button, Modal, Icon } from 'semantic-ui-react';
//import axios from 'axios';

class ModalTotal extends Component {


    getData = () => 
    {
        const data = [3, 4, 5, 6, 100];
        let total = 0;
   //     const { labels } = this.props;
        //let total = 0
	//	const { data } = this.props;
        (data || []).map((item, index) => (
            total = total + item

        ))
        
        return total;
    }

    todos = this.getData();

    render() {
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
        
            <Modal.Header>{this.props.headerTitle}</Modal.Header>
            <Modal.Content> Total de Bovedas: {this.todos} </Modal.Content>
        </Modal> 
        );
    }
}

export default ModalTotal;