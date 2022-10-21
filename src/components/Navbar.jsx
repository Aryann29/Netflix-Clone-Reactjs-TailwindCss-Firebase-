import React from 'react'
import { Link } from 'react-router-dom'
import netflixlogo from '../assets/netflixlogo2.png'

const Navbar = () => {
  return (
    <div>
        <div className='flex h-68px px-14 pt-5 items-center justify-between z-[100] w-full absolute'>
            <div className=' flex items-center'><Link to='/'><img  width={140}  src={netflixlogo} alt="#" /> </Link></div>
            {/* <div className='flex text-white text-sm  font-semibold items-center'>
                <ul className=' ml-5'>Home</ul>
                <ul className=' ml-5'>TV Shows</ul>
                <ul className=' ml-5'>Movies</ul>
                <ul className=' ml-5'>New & Popular</ul>
                <ul className=' ml-5'>My List</ul>
                <ul className=' ml-5'>Browse By Languages</ul>
            </div> */}
            
            <div className='flex items-center'>
                <Link to='/login'>
                <button className=' px-5 py-1 bg-red-600 text-white rounded-sm text-lg'>Sign In</button>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar