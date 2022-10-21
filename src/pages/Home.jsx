import React from 'react'
import Main from '../components/Main.jsx'
import Row from '../components/Row.jsx'
import requests from '../request.js'
import Navforhome from '../components/Navforhome.jsx'
import { AuthContextProvider } from '../context/AuthContext'
import { useNavigate } from "react-router-dom";



const Home = () => {
  return (
    <>
    <AuthContextProvider>

    <Navforhome/>
    <Main />
    <Row title={"Trending"} fetchURL={requests.requestTrending}/>
    <Row title={"Top rated"} fetchURL={requests.requestTopRated}/>
    <Row title={"Upcoming"} fetchURL={requests.requestUpcoming}/>
    <Row title={"Popular"} fetchURL={requests.requestPopular}/>
    <Row title={"Horror"} fetchURL={requests.requestHorror}/>

    </AuthContextProvider>
    </>
    
  )
}

export default Home