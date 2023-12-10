import React, { Component } from 'react';
import { Message, Button, Form,  Header, Icon, Select } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

const TipoOptions = [
  { key: 'Arrendamiento', text: 'Arrendamiento', value: 'Arrendamiento' },
  { key: 'Inhumacion', text: 'Inhumacion', value: 'Inhumacion' },
  { key: 'Exhumacion', text: 'Exhumacion', value: 'Exhumacion' },
]


class FormPagos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      codboveda:  '',
      bovedapag:  '',
      numero_fac: '',
      fechapag:   '',
      fechasig:   '',
      valorpag:   '',
      tipo:       '',
      formClassName: '',
      formSuccessMessage: '',
      formErrorMessage: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChangeTipo = this.handleSelectChangeTipo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSelectChangeTipo(e, data) {
    this.setState({ tipo: data.value });
  }

  handleSubmit(e) {
    // Prevent browser refresh
    e.preventDefault();
   // this.handleImageUpload(this.state.certificado);
    const pagos = {
      codboveda:  this.props.valores._id,
      bovedapag:  this.props.valores.boveda,
      numero_fac: this.state.numero_fac,      
      fechapag:   this.state.fechapag,      
      fechasig:   this.state.fechasig,
      valorpag:   this.state.valorpag,
      tipo:       this.state.tipo
    }                         

    
    axios({
      method: 'post',
      responseType: 'json',
      url: `${this.props.server}/api/pagos/`,
      data: pagos
    })
      .then((response) => {
        this.setState({
          formClassName: 'success',
          formSuccessMessage: response.data.msg
                      });
          console.log(response.data.result)
          this.props.onPagoAdded(response.data.result);
         })
      .catch((err) => {
        if (err.response) {
          if (err.response.data) {
            this.setState({
              formClassName: 'warning',
              formErrorMessage: err.response.data.msg
            });
          }
        }
        else {
          this.setState({
            formClassName: 'warning',
            formErrorMessage: 'Algo salio mal. ' + err
          });
        }
      });
  }

  render() {

    const formClassName = this.state.formClassName;
    const formSuccessMessage = this.state.formSuccessMessage;
    const formErrorMessage = this.state.formErrorMessage;

    return (
      <Form className={formClassName} onSubmit={this.handleSubmit}>   
        <Header as='h3' block color='violet'>
    Registrar Pago
  </Header>

  <Message 
          success
          color='blue'
          header='Mensaje:'
          content={formSuccessMessage}
        />
        <Message
          warning
          color='yellow'
          header='Advertencia!'
          content={formErrorMessage}
        />

  <Form.Group   >
        <Form.Input
          width={4} 
          label='Numero de Factura'
          name='numero_fac'
          type='text'
          maxLength='20'
          required
//          pattern="\d{4}-\d{2}-\d{2}"
          onChange={this.handleInputChange}
        />        

        <Form.Input
          width={3} 
          label='Fecha de Pago'
          name='fechapag'
          type='date'
          maxLength='10'
          required
          pattern="\d{4}-\d{2}-\d{2}"
          onChange={this.handleInputChange}
        />        
        <Form.Input
          width={3} 
          label='Fecha PROXIMA de Pago'
          name='fechasig'
          type='date'
          maxLength='10'
          required
          pattern="\d{4}-\d{2}-\d{2}"
          onChange={this.handleInputChange}
        />        

        <Form.Input
        width={2} 
        label='Valor'
        type='number'
        placeholder='0,00'
        name='valorpag'
        maxLength='8'
        required
        value={this.state.valorpag}
        onChange={this.handleInputChange}
     />
        <Form.Input
          width={4} 
          name='tipo'
          control={Select}
          label='Tipo'
          options={TipoOptions}
          placeholder=''
          value={this.state.tipo}
          onChange={this.handleSelectChangeTipo}
        />

</Form.Group>
<Button name='user' color={this.props.buttonColor} size='mini' floated='right'>
          <Icon name='save' /> {this.props.buttonSubmitTitle}
      </Button>   
        <br /><br /> {/* Yikes! Deal with Semantic UI React! */}
      </Form>

    );
  }
}

export default FormPagos;
