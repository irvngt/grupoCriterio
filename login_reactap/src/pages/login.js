import React from 'react';
//import TextField from '@material-ui/core/TextField';
import logo from '../logo.svg';
import GoogleLogin from 'react-google-login';



export default class Login extends React.Component{

  
  render(){
  //   const [name, setName]= useState("");
  //   const [email, setMail]= useState("");
  //   const [url, setUrl]= useState("");
   
   const responseGoogle = response =>{
     console.log(response)
      // setName(response.profileObj.name);
      // setMail(response.profileObj.email);
      // setUrl(response.profileObj.imageurl);
   }
    return(
   
      <div className="page_login">
        <div className="login-form">
          <h3>Iniciar sesión</h3>
          <div className="App">
            {/* <h2>{name}</h2>
            <h2>{email}</h2>
            <img src="{url}" alt=""/> */}
            <GoogleLogin
              clientId="586833758602-a28a2qcln80hn41qf33ig9dpni8ml55m.apps.googleusercontent.com"
              buttonText="Iniciar sesión"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>

          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    )
  }
}