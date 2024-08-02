import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { clientId } from '../Auth/Client';
function Logout() {

    function onSuccess(){
        console.log("Log Out Successfull!")
    }
  return (
    <div>
    
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    />
    </div>
  )
}

export default Logout
