import React, { useState } from "react";
import "./styles.css";
import App from "../App/App";

function LoginButton() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [Usuario, setUsuario] = useState({});
  

  // User Login info
  const database = [
    {
      username: "admin2023",
      password: "admin2023"
    },
    {
      username: "xxxxsssss",
      password: "tutututut"
    }
  ];

  const errors = {
    uname: "Usuario Incorrecto",
    pass: "Contrasena Incorrecta"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setUsuario(userData.username)
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );



    
  // JSX code for login form
  const renderForm = (
    <div>  
    <div className='App'>
      <p className='App-intro'>Cementerio - GAD de la Parroquia Sayausi</p>
    </div>    
    <div className="app">
      <div className="login-form">
        <div className="title">Credenciales de Acceso </div>
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Usuario </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Contrasena </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Ingresar" name="Login"/>
        </div>
      </form>
    </div>
    </div>
    </div>

    <br />
      </div>
  );

  return (  
        isSubmitted ? <App name={Usuario}/> : renderForm
  );
}

export default LoginButton;