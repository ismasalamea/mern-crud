import React, { Component } from 'react';
import { Button, Modal, Icon, Header, Table } from 'semantic-ui-react';
import FormPagos from '../FormPagos/FormPagos';
import axios from 'axios';

class ModalPagos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pagos: [],
    }
    this.fetchPagos = this.fetchPagos.bind(this);
  }

  fetchPagos() {
    axios.get(`https://cementeriosayausi.herokuapp.com/api/pagos/boveda/${this.props.boveda}`)
      .then((response) => {
        this.setState({pagos: response.data });
        console.log(this.state.pagos)
      })
      .catch((err) => {
        console.log(err);
      });
   
  }

  UNSAFE_componentWillMount() {
    // Fill in the form with the appropriate data if user id is provided
    this.fetchPagos();
  }





  render() {
    return (
      <Modal  trigger={ 
      <Button disabled color={this.props.buttonColor} size={this.props.buttonSize}>
      <Icon name={this.props.iconName} />
          {this.props.buttonTriggerTitle}
      </Button>}
        dimmer='inverted'
        closeIcon
      >
        <Header icon='user' content={this.props.headerTitle} />

        <Modal.Content>
        <Header as='h3' block color='orange'>Detalle de pagos</Header>

        <Table.Body>
				{(this.state.pagos || []).map((item, index) => (
					<Table.Row key={item._id}>			
							<Table.Cell key={item._id}>
              <Table.Cell textAlign='center'>
								{item.cedula}
                {item.fecha}
                {item.valor}
                </Table.Cell>
							</Table.Cell>

					</Table.Row>
				))}
			</Table.Body>












          <FormPagos
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

export default ModalPagos;
