import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';
import Tablita from '../CustomTable/Tablita';


class App extends Component {
  constructor() {
    super();
    //  this.server = process.env.REACT_APP_API_URL || 'https://cementeriosayausi.herokuapp.com';
    this.server = 'https://cementeriosayausi.herokuapp.com';
    this.state = {
      users: [],
    }

    this.fetchUsers = this.fetchUsers.bind(this);
    this.handleUserAdded = this.handleUserAdded.bind(this);
    this.handleUserUpdated = this.handleUserUpdated.bind(this);
    this.handleUserDeleted = this.handleUserDeleted.bind(this);
  }

  // Place socket.io code inside here
  componentDidMount() {
    this.fetchUsers();
  }

  // Fetch data from the back-end
  fetchUsers() {
    axios.get(`${this.server}/api/users/`)
      .then((response) => {
        this.setState({ users: response.data });
        //console.log(this.state.users)

      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleUserAdded(user) {
    let users = this.state.users.slice();
    users.push(user);
    this.setState({ users: users });
  }

  handleUserUpdated(user) {
    let users = this.state.users.slice();

    let i = users.findIndex(u => u._id === user._id)

    if (users.length > i) { users[i] = user }

    this.setState({ users: users });
  }

  handleUserDeleted(user) {
    let users = this.state.users.slice();
    users = users.filter(u => { return u._id !== user._id; });
    this.setState({ users: users });
  }

  render() {
    return (
      <div>
        <div className='App'>
          <p className='App-intro'>Cementerio - GAD de la Parroquia Sayausi</p>
        </div>
        <Container>
          <Tablita
            data={this.state.users}
            onUserAdded={this.handleUserAdded}
            onUserUpdated={this.handleUserUpdated}
            onUserDeleted={this.handleUserDeleted}
            server={this.server}
          />
        </Container>
        <br />
      </div>


    );
  }
}

export default App;


