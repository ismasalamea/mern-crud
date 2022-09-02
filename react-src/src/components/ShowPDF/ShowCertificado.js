import React, { Component } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';
import { Document, Page, StyleSheet, Image, PDFViewer } from "@react-pdf/renderer";

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
      width: '100%',
      height: '100%',
      marginLeft: 2,
      borderTop: '2px solid black',
      borderBottom: '2px solid black',
    },
    viewer: {
      width: window.innerWidth / 2 , //the pdf viewer will take up all of the width and height
      height: window.innerHeight /2,
    },
  }
  )

  
  // Create Document Component
class ShowCertificado extends Component { 
    
    render()
    {  
    return(
        <Modal trigger={
      
            <Button disabled={ this.props.valores.uploadedFileCloudinaryUrl === '' ? true : false } 
                    color='pink' icon size='mini'>
              <Icon name='download' />
                Certificado
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
          <Image style={styles.image} bordered='true' 
            src={this.props.valores.uploadedFileCloudinaryUrl} />
            
          </Page>
        </Document>
      </PDFViewer>

      </Modal> 
    );
  }
}

export default ShowCertificado;