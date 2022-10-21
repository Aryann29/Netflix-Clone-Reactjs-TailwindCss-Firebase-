import React from 'react'
import Signup from "../components/Signup";
import { AuthContextProvider } from '../context/AuthContext'



const SignUp = () => {
  return (
    <>
   <AuthContextProvider
    >
      <Signup/>
    </AuthContextProvider>
    </>
  )
}

export default SignUp