import React from 'react'
import Row from '../components/Row'
import requests from '../request'
import Navforhome from '../components/Navforhome.jsx'
import Main from '../components/Main'

const Movies = () => {
  return (
    <>
     <Navforhome/>
    <Main />
    <Row title={"Top Movies"} fetchURL={requests.requestMovies}/>
    </>
  )
}

export default Movies