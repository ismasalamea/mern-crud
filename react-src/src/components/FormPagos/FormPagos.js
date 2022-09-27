import React, { Component } from 'react';
import { Message, Button, Form,  Header, Icon } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

class FormPagos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pagos: [],
      formClassName: '',
      formSuccessMessage: '',
      formErrorMessage: '',
      uploadedFile: null
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSelectChangeTipo = this.handleSelectChangeTipo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchPagos() {
    axios.get(`${this.server}/api/pagos/`)
      .then((response) => {
        this.setState({ pagos: response.data });

      })
      .catch((err) => {
        console.log(err);
      });
  }

  UNSAFE_componentWillMount() {
    // Fill in the form with the appropriate data if user id is provided
    this.fetchPagos();
  }


  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
//    console.log(name + value)
    this.setState({ [name]: value });
  }

  handleSelectChange(e, data) {
    this.setState({ estado: data.value });
  }

  handleSelectChangeTipo(e, data) {
    this.setState({ tipo: data.value });
  }


  handleSubmit(e) {
    // Prevent browser refresh
    e.preventDefault();
   // this.handleImageUpload(this.state.certificado);
    const pagos = {
      cedula: this.state.cedula,
      fecha: this.state.fecha,
      valor: this.state.valor,
      estado: this.state.estado
    }

    // Acknowledge that if the user id is provided, we're updating via PUT
    // Otherwise, we're creating a new data via POST
    const method = this.props.userID ? 'put' : 'post';
    const params  = this.props.userID ? this.props.userID : '';

    axios({
      method: method,
      responseType: 'json',
      url: `${this.props.server}/api/pagos/${params}`,
      data: pagos
    })
      .then((response) => {
        this.setState({
          formClassName: 'success',
          formSuccessMessage: response.data.msg
        });
        if (!this.props.userID) {
          this.setState({
            cedula: '',
            fecha: '',
            valor:'',
            estado: ''
          });
           // .then(result=>console.log(result));
          this.props.onUserAdded(response.data.result);
        }
        else {
          this.props.onUserUpdated(response.data.result);
        }

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
        <Header as='h3' block color='green'>
    Registrar Pago:
  </Header>

 
  <Form.Group widths='2' >
        <Form.Input
          width={8} 
          label='Fecha de Pago'
          name='fechapag'
          type='date'
          maxLength='10'
          required
          pattern="\d{4}-\d{2}-\d{2}"
          onChange={this.handleInputChange}
        />        
        <Form.Input
          width={8} 
          label='Fecha PROXIMA de Pago'
          name='fechasig'
          type='date'
          maxLength='10'
          required
          pattern="\d{4}-\d{2}-\d{2}"
          onChange={this.handleInputChange}
        />        

        <Form.Input
        width={3} 
        label='Valor'
        type='number'
        placeholder='0,00'
        name='valorpag'
        maxLength='8'
        required
        value={this.state.valorpag}
        onChange={this.handleInputChange}
     />
       <Button name='user' color={this.props.buttonColor} floated='right'>
          <Icon name='save' />
            {this.props.buttonSubmitTitle}
          </Button>      

</Form.Group>
 
        <Message
          success
          color='blue'
          header='Mensaje:'
          content={formSuccessMessage}
        />
        <Message
          warning
          color='yellow'
          header='Advertenciasss!'
          content={formErrorMessage}
        />


        <br /><br /> {/* Yikes! Deal with Semantic UI React! */}
      
      </Form>

    );
  }
}

export default FormPagos;
