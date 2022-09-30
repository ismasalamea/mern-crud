import React, { Component } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';
import { Document, Page, Text, View, StyleSheet, Image, PDFViewer } from "@react-pdf/renderer";

//const fecha = new Date();
// Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
    },
    titulo: {
      fontWeight: 'extrabold',
      borderTop: '2px solid black',
      borderBottom: '2px solid black',
      letterSpacing: 3,
      textAlign: 'center',
      margin: 20,
      padding: 10,
    },
    section: {
      borderTop: '4px solid black',
      borderBottom: '4px solid black',
      margin: 20,
      padding: 10,
    },
    valor:{
      margin: 30,
      padding: 10,
      textAlign: 'right'
    },
    firma:{
      margin: 30,
      padding: 10,
      textAlign: 'center'
    },
    image: {
      width: 200,
      height: 200,
      marginLeft: 180,
      borderTop: '2px solid black',
      borderBottom: '2px solid black',
    },
    viewer: {
      width: window.innerWidth / 2 , //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
  }
  )

  
  // Create Document Component
class ComprobantePago extends Component { 
    
    render()
    {  
    return(
        <Modal trigger={
      
            <Button color='olive' icon size='mini'>
              <Icon name='download' />
              { this.props.buttonTriggerTitle}
            </Button> }
            
            dimmer='inverted'
              size='small'
              closeIcon
            >

      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
          <Image style={styles.image} bordered='true' label='Logo'
            src="https://res.cloudinary.com/curso-node-jism/image/upload/v1661789319/sayausi/logo_qh6nxj.jpg" />
            <View style={styles.titulo}>
              <Text>Comprobante: </Text>
              <Text>Cementerio del GAD de Sayausi</Text>
              <Text>Fecha de Pago: {this.props.pagos.fechapag.split("T")[0]}</Text>

            </View>
            <View style={styles.section}>
                <Text>Boveda: {this.props.valores.boveda}</Text>
                <Text>Nombres: {this.props.valores.nombre}</Text>
                <Text>Apellidos: {this.props.valores.apellido}</Text>
            </View>
            <View style={styles.valor}>
                <Text>Valor: {this.props.pagos.valorpag}</Text>
            </View>
            <View style={styles.firma}>
                <Text>____________________________</Text>
                <Text>{this.props.valores.cedula}</Text>
                <Text>{this.props.valores.responsable}</Text>
                <Text>Fecha PROXIMO Pago: {this.props.pagos.fechasig.split("T")[0]}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>

      </Modal> 
    );
  }
}

export default ComprobantePago;