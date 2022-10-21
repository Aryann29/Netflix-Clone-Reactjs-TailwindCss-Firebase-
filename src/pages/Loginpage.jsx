import React from 'react'
import Login from '../components/Login'
import { AuthContextProvider } from '../context/AuthContext'

const Loginpage = () => {
  return (
    <>
    <AuthContextProvider
    >
      <Login/>
    </AuthContextProvider>
    
    </>

  )
}

export default Loginpage