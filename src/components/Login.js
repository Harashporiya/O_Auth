import React from 'react'
import {GoogleLogin} from "react-google-login"
import { clientId } from '../Auth/Client'

function Login() {
    const  onSuccess=(res)=>{
        console.log("Login SuccessFully!", res.profileObj)
    }
    function onFailure(res){
        console.log("Login Fail", res)
    }
  return (
    <div>
       <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    isSignedIn={false}
  />
    </div>
  )
}

export default Login
