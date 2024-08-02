import React, { useEffect } from 'react'
import {gapi} from "gapi-script"
import Login from './components/Login'
import Logout from './components/Logout'
import { clientId } from './Auth/Client'
function App() {
     useEffect(()=>{
      function start(){
        gapi.client.init({
          clientId:clientId,
          scope:""
        })
      }
      gapi.load("client:auth2",start)
     })
  return (
    <div>
      <Login/>
      <Logout/>
    </div>
  )
}

export default App
