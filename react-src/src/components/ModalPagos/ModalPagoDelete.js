import React, { Component } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';
import axios from 'axios';

class ModalPagoDelete extends Component {

  constructor(props) {
    super(props);

    this.state ={
      modalOpen: false
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen = e => this.setState({ modalOpen: true });
  handleClose = e => this.setState({ modalOpen: false });

  handleSubmit(e) {
    let params = e.target.getAttribute('data-pagoID');

    axios({
      method: 'delete',
      responseType: 'json',
      url: `${this.props.server}/api/pagos/${params}`,
    })
    .then((response) => {
      this.handleClose();
      this.props.onPagoDeleted(response.data.result);
    })
    .catch((err) => {
      this.handleClose();
      throw err;
    });
  }

  render() {
    return (
      <Modal size='tiny' centered
        trigger={<Button onClick={this.handleOpen} color={this.props.buttonColor} size='mini' icon>
          <Icon name={this.props.iconName} />
          {this.props.buttonTriggerTitle}
          </Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        dimmer='inverted'
      >
        <Modal.Header>{this.props.headerTitle}</Modal.Header>
        <Modal.Content>
          <p>Esta seguro que desea de eliminar el pago de la boveda <strong>{this.props.pagos.bovedapag} </strong>?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleSubmit} data-pagoID={this.props.pagos._id} color='red'>Si</Button>
          <Button onClick={this.handleClose} color='red'>No</Button>
          </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalPagoDelete;
