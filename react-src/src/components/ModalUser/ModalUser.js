import React, { Component } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';

import FormUser from '../FormUser/FormUser';

class ModalUser extends Component {

  render() {
    return (
      <Modal trigger={
      
      <Button color={this.props.buttonColor} icon size='mini'>
        <Icon color='blue' name='user' />
          {this.props.buttonTriggerTitle}
      </Button>}
      
      dimmer='inverted'
        size='medium'
        closeIcon
      >
        
        <Modal.Header>{this.props.headerTitle}</Modal.Header>
        <Modal.Content>
          <FormUser
            buttonSubmitTitle={this.props.buttonSubmitTitle}
            buttonColor={this.props.buttonColor}
            userID={this.props.userID}
            onUserAdded={this.props.onUserAdded}
            onUserUpdated={this.props.onUserUpdated}
            server={this.props.server}
          />
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalUser;
