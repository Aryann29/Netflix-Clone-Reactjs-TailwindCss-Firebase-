import React from 'react'
import Main from '../components/Main.jsx'
import Row from '../components/Row.jsx'
import requests from '../request.js'
import Navforhome from '../components/Navforhome.jsx'
import { AuthContextProvider } from '../context/AuthContext'



const Tvshow = () => {
  return (
    <>
    <Navforhome/>
    <Main />
    <AuthContextProvider><Row title={"Tv shows"} fetchURL={requests.requestTrending}/></AuthContextProvider>
    
    
    </>
  )
}

export default Tvshow