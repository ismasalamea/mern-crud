
import React, {useState} from 'react';
import { Button, Modal, Header, Icon} from 'semantic-ui-react';
import axios from 'axios';

function Upload(server) {

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'https://cementeriosayausi.herokuapp.com/api/upload';
    console.log(url)
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }

  return (
    <Modal trigger={
      <Button color='blue' icon='upload'>
        <Icon color='black' name='upload' />
        Cargar  </Button> }
        
        dimmer='inverted'
          size='small'
          closeIcon
        >
<Modal.Header>
             <Header.Content> <Icon name='chart line' />Cargar Archivo</Header.Content>
            </Modal.Header>
            <Modal.Content> 
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange}/>
      <input type="submit" value="Upload File" />
    </form>
    </Modal.Content>
    </Modal>
  )
};

export default Upload;