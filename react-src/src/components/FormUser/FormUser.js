import React, { Component } from 'react';
import { Message, Button, Form, Select, Header, Icon } from 'semantic-ui-react';
import ShowPDF from '../ShowPDF/ShowPDF';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import './App.css';

const CLOUDINARY_UPLOAD_PRESET = 'certi_sayausi';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/curso-node-jism/upload';

const estadoOptions = [
  { key: true, text: 'Pagado', value: true },
  { key: false, text: 'No pagado', value: false },
]

const formaOptions = [
  { key: 'Boveda', text: 'Boveda', value: 'Boveda' },
  { key: 'Nicho', text: 'Nicho', value: 'Nicho' },
]


const tipoOptions = [
  { key: 'Arrendada', text: 'Arrendada', value: 'Arrendada' },
  { key: 'Propia', text: 'Propia', value: 'Propia' },
  { key: 'No definida', text: 'No definida', value: 'No definida' },
]

class FormUser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      boveda: '',
      tipo: '',
      forma: '',
      nombre: '',
      apellido: '',
      fecha: '',
      cedula: '',
      responsable: '',
      direccion: '',
      correo: '',
      telefono: '',
      estado: '',
      valor: '',
      observacion:'',
      certificado: '',
      formClassName: '',
      formSuccessMessage: '',
      formErrorMessage: '',
      uploadedFile: null
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSelectChangeTipo = this.handleSelectChangeTipo.bind(this);
    this.handleSelectChangeForma = this.handleSelectChangeForma.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  UNSAFE_componentWillMount() {
    // Fill in the form with the appropriate data if user id is provided
    if (this.props.userID) {
      axios.get(`${this.props.server}/api/users/${this.props.userID}`)
        .then((response) => {
          this.setState({
            boveda: response.data.boveda,
            tipo: response.data.tipo,
            forma: response.data.forma,
            nombre: response.data.nombre,
            apellido: response.data.apellido,
            fecha: response.data.fecha,
            cedula: response.data.cedula,
            responsable: response.data.responsable,
            direccion: response.data.direccion,
            correo: response.data.correo,
            telefono: response.data.telefono,
            estado: response.data.estado,
            valor: response.data.valor,
            observacion: response.data.observacion,
            certificado: response.data.certificado
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    console.log(file)
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
    //    console.log(response.body.secure_url)
        this.setState({
          certificado: response.body.secure_url
        });
    //    console.log(this.state.certificado)
      }
    });
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

  handleSelectChangeForma(e, data) {
    this.setState({ forma: data.value });
  }


  handleSubmit(e) {
    // Prevent browser refresh
    e.preventDefault();
   // this.handleImageUpload(this.state.certificado);
    const user = {
      boveda: this.state.boveda,
      tipo: this.state.tipo,      
      forma: this.state.forma,    
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      fecha: this.state.fecha,
      cedula: this.state.cedula,
      responsable: this.state.responsable,
      direccion: this.state.direccion,
      correo: this.state.correo,
      telefono: this.state.telefono,
      estado: this.state.estado,
      valor: this.state.valor,
      observacion: this.state.observacion,
      certificado: this.state.certificado
    }

    // Acknowledge that if the user id is provided, we're updating via PUT
    // Otherwise, we're creating a new data via POST
    const method = this.props.userID ? 'put' : 'post';
    const params  = this.props.userID ? this.props.userID : '';

    axios({
      method: method,
      responseType: 'json',
      url: `${this.props.server}/api/users/${params}`,
      data: user
    })
      .then((response) => {
        this.setState({
          formClassName: 'success',
          formSuccessMessage: response.data.msg
        });
        if (!this.props.userID) {
          this.setState({
            boveda: '',
            tipo: '',
            forma: '',
            nombre: '',
            apellido: '',
            fecha: '',
            cedula: '',
            responsable: '',
            direccion: '',
            correo: '',
            telefono: '',
            estado: '',
            valor:'',
            observacion:'',
            certificado: ''
          });
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
        <Header as='h3' block color='orange'>Datos del Fallecido</Header>
        <Form.Group widths='2' >
        <Form.Input
            width={5} 
            label='Espacio'
            type='text'
            maxLength='5'
            placeholder='A0001'
            name='boveda'
            required
            value={this.state.boveda}
            onChange={this.handleInputChange}
          />
        <Form.Input
          name='tipo'
          control={Select}
          label='Propiedad'
          options={tipoOptions}
          placeholder=''
          value={this.state.tipo}
          onChange={this.handleSelectChangeTipo}
          />
        <Form.Input
          name='forma'
          control={Select}
          label='Tipo'
          options={formaOptions}
          placeholder=''
          value={this.state.forma}
          onChange={this.handleSelectChangeForma}
          />
          </Form.Group>
          <Form.Group widths='2' >
        <Form.Input
          width={5} 
          label='Fecha de Defuncion'
          name='fecha'
          type='date'
          maxLength='10'
          required
          pattern="\d{4}-\d{2}-\d{2}"
          value={this.state.fecha.split("T")[0]}
          onChange={this.handleInputChange}
        />        
          <Form.Input
            label='Nombres del fallecido'
            type='text'
            placeholder='Pepito'
            name='nombre'
            maxLength='40'
            required
            value={this.state.nombre}
            onChange={this.handleInputChange}
          />
          <Form.Input
            label='Apellidos del fallecido'
            type='text'
            placeholder='Perez'
            name='apellido'
            maxLength='40'
            required
            value={this.state.apellido}
            onChange={this.handleInputChange}
          />
</Form.Group>
        
        <Header as='h3' block color='purple'>
    Datos del Responsable
  </Header>
        <Form.Group widths='equal'>
        <Form.Input
          width='5'
          label='Cedula'
          type='text'
          placeholder='0104751987'
          name='cedula'
          maxLength='10'
          required
          value={this.state.cedula}
          onChange={this.handleInputChange}
        />
        <Form.Input
          label='Nombre del Responsable'
          type='text'
          placeholder='Nombres y Apellidos'
          min={5}
          max={130}
          name='responsable'
          value={this.state.responsable}
          onChange={this.handleInputChange}
        />
        </Form.Group>
        <Form.Group widths='equal'>        
        <Form.Input
          label='Direccion'
          type='text'
          placeholder=''
          min={1}
          max={50}
          name='direccion'
          required
          value={this.state.direccion}
          onChange={this.handleInputChange}
        />
         <Form.Input
            label='Correo'
            type='email'
            placeholder='example@sayausi.com'
            name='correo'
            max={60}
            required
            value={this.state.correo}
            onChange={this.handleInputChange}
         />
        </Form.Group>
        <Form.Group widths='equal'>
        <Form.Input
          width={8} 
          label='Telefono'
          type='text'
          placeholder='Telefono'
          min={3}
          max={10}
          name='telefono'
          required
          value={this.state.telefono}
          onChange={this.handleInputChange}
        />
         <Form.Input
            width={3} 
            label='Valor'
            type='number'
            placeholder='0,00'
            name='valor'
            maxLength='8'
            required
            value={this.state.valor}
            onChange={this.handleInputChange}
         />
        <Form.Field
          control={Select}
          label='Estado'
          options={estadoOptions}
          placeholder=''
          value={this.state.estado}
          onChange={this.handleSelectChange}
        />
        </Form.Group>


        <Form.Group widths='equal'>
        <Form.Input
          width={100} 
          label='Observación'
          type='text'
          placeholder='Observación'
          min={0}
          max={100}
          name='observacion'
          required
          value={this.state.observacion}
          onChange={this.handleInputChange}
        />

        </Form.Group>

        <Header as='h3' block color='blue'>Certificado de Defunción</Header>
        <div className="FileUpload">
          <Dropzone  
            onDrop={this.onImageDrop.bind(this)}
            multiple={false}
            maxSize={500000}>
              {({getRootProps, getInputProps}) => (
            <div 
            {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
            <p>Hacer click para seleccionar el archivo:</p>
          </div>
          )}
          </Dropzone>
        </div>
        <div>
          
          <div className='Imagen'>
            <p>{this.state.certificado ? 'Certificado de Defunción' : 'No existe Certificado de Defunción' } </p>
            <img alt='' src={this.state.certificado? 
              this.state.certificado : 
              'https://res.cloudinary.com/curso-node-jism/image/upload/v1662431973/sayausi/no_dis_m52par.png'} 
              height='250px'/>
          </div>
        </div>        
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
        <Button.Group widths='four' floated='right'>
        <ShowPDF 
          valores={this.state}
        /> 
        <Button name='user' color={this.props.buttonColor} floated='right'>
          <Icon name='save' />
            {this.props.buttonSubmitTitle}
          </Button>      
        </Button.Group>
        <br /><br /> {/* Yikes! Deal with Semantic UI React! */}
      
      </Form>

    );
  }
}

export default FormUser;
