import React, { Component } from 'react';
import { Button, Modal, Icon, Header, Table } from 'semantic-ui-react';
import FormPagos from '../FormPagos/FormPagos';
import ModalPagoDelete from './ModalPagoDelete';
import ComprobantePago from './ComprobantePago';
import axios from 'axios';
import Styles from "./style.module.css";

class ModalPagos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pagos: [],
      formClassName: '',
      formSuccessMessage: '',
      formErrorMessage: '',
    }
    this.fetchPagos = this.fetchPagos.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePagoDeleted = this.handlePagoDeleted.bind(this);
    this.handlePagoAdded = this.handlePagoAdded.bind(this);
  }

  fetchPagos() {
    axios.get(`${this.props.server}/api/pagos/boveda/${this.props.valores.codboveda}`)
      .then((response) => {
        this.setState({ pagos: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

  }

  handlePagoAdded(pago) {
    let pagos = this.state.pagos.slice();
    pagos.push(pago);
    this.setState({ pagos: pagos });
  }


  handlePagoDeleted(pago) {
    let pagos = this.state.pagos.slice();
    pagos = pagos.filter(u => { return u._id !== pago._id; });
    this.setState({ pagos: pagos });
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  

  componentDidMount() {
   // this.fetchPagos()
  }

  render() {
    const sumall = this.state.pagos.map(item => item.valorpag).reduce((prev, curr) => prev + curr, 0);
    return (
      <Modal trigger={
        <Button color={this.props.buttonColor} icon size={this.props.buttonSize} onClick={() => this.fetchPagos()} >
          <Icon name={this.props.iconName} />
          {this.props.buttonTriggerTitle}
        </Button>}
        dimmer='inverted'
        closeIcon>

        <Header icon='money' content={this.props.headerTitle} />
        <Modal.Content>
          <Header as='h3' block color='orange'>Espacio: {this.props.valores.boveda}</Header>
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
                  <Table.Cell width={2}>
                    <ComprobantePago
                    buttonTriggerTitle=''
                    valores={this.props.valores}
                    pagos={item}
                    />

                    <ModalPagoDelete
                      headerTitle='Eliminar'
                      buttonTriggerTitle=''
                      buttonColor='red'
                      pagos={item}
                      server={this.props.server}
                      iconName='delete'
                      onPagoDeleted={this.handlePagoDeleted}
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>

            <Table.Footer fullWidth>
              <Table.Row >
                <Table.Cell />
                <Table.Cell />
                <Table.Cell textAlign='right' > Total : </Table.Cell>
                <Table.Cell ><div className={Styles.footer}>{sumall}	</div></Table.Cell>
                <Table.Cell />
  
              </Table.Row >
            </Table.Footer>
          </Table>

          <FormPagos
            buttonSubmitTitle={'Guardar'}
            buttonColor='violet'
            valores={this.props.valores}
            server={this.props.server}
            pagos={this.state.pagos}
            onPagoAdded={this.handlePagoAdded}
                    />
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalPagos;
