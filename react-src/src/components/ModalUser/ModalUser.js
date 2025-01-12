import React, { Component } from 'react';
import { Button, Modal, Icon, Header } from 'semantic-ui-react';
import FormUser from '../FormUser/FormUser';


class ModalUser extends Component {

  render() {
    return (
      <Modal  trigger={ 
      <Button color={this.props.buttonColor} size={this.props.buttonSize} icon > 
      <Icon name={this.props.iconName} />
          {this.props.buttonTriggerTitle}
      </Button>}
    //    dimmer='inverted'
        closeIcon
      >
        <Header icon='user' content={this.props.headerTitle} />
        <Modal.Content scrolling >
          
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
