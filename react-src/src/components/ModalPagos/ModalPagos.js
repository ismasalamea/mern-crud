import React, { Component } from 'react';
import { Button, Modal, Icon, Header, Table } from 'semantic-ui-react';
import FormPagos from '../FormPagos/FormPagos';
import ModalPagoDelete from './ModalPagoDelete'
import axios from 'axios';
import Styles from "./style.module.css";

class ModalPagos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pagos: [],
    }
    this.fetchPagos = this.fetchPagos.bind(this);

  }

  fetchPagos() {
    axios.get(`${this.props.server}/api/pagos/boveda/${this.props.valores.boveda}`)
      .then((response) => {
        this.setState({ pagos: response.data });
        console.log(this.state.pagos)
      })
      .catch((err) => {
        console.log(err);
      });

  }

  componentDidMount() {
    this.fetchPagos();
  }



  render() {
    const sumall = this.state.pagos.map(item => item.valorpag).reduce((prev, curr) => prev + curr, 0);
    return (
      <Modal trigger={
        <Button color={this.props.buttonColor} size={this.props.buttonSize}>
          <Icon name={this.props.iconName} />
          {this.props.buttonTriggerTitle}
        </Button>}
        dimmer='inverted'
        closeIcon>

        <Header icon='user' content={this.props.headerTitle} />
        <Modal.Content>
          <Header as='h3' block color='orange'>Detalle de pagos</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                {(this.props.headers || []).map((item, index) => (
                  <Table.HeaderCell key={index} >
                    <div className={Styles.header}>
                      <div>{item}</div>
                    </div>
                  </Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {(this.state.pagos || []).map((item, index) => (
                <Table.Row >
                  {(this.props.labels || []).map((label, index) => (
                    <Table.Cell >
                      <div className={Styles.cell}>
                        {label === "fechapag" || label === "fechasig" ? item[label].split("T")[0] : item[label] || 0}
                      </div>
                    </Table.Cell>
                  ))}
                  <Table.Cell >
                    <ModalPagoDelete
                      headerTitle='Eliminar'
                      buttonTriggerTitle=''
                      buttonColor='red'
                      pagos={item}
                      server={this.props.server}
                      iconName='delete'
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>


            <Table.Footer>
              <Table.Row >
                <Table.Cell />
                <Table.Cell />
                <Table.Cell textAlign='right' > Total : </Table.Cell>
                <Table.Cell ><div className={Styles.footer}>{sumall}	</div></Table.Cell>
              </Table.Row >
            </Table.Footer>
          </Table>


          <FormPagos
            buttonSubmitTitle={this.props.buttonSubmitTitle}
            buttonColor={this.props.buttonColor}
            bovedapag={this.props.valores.boveda}
            server={this.props.server}
          />
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalPagos;
