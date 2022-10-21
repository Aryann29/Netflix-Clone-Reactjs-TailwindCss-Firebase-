import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import Netflixmovies from './Netflixmovies';

    
const Row = ( {title , fetchURL}) => {

  const [movies , setMovies] = useState([])

  useEffect (()=>{
    axios.get(fetchURL).then((response)=>{
      setMovies(response.data.results)
    })
  },[fetchURL])

  


  return (
    <>
    <h2 className='text-white font-bold md:text-xl px-4 pb-[17px] '>{title}</h2>
      <div className=' flex items-center group'>
    
        <div
          className=' relative  w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide md:ml-9'
        >
         {movies.map((item ,id) => (
            <Netflixmovies key={id}  item={item} />
          ))}
        </div>
        </div>
        </>
  )
}

export default Row