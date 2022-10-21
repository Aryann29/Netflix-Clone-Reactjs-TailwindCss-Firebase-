import React from "react";
import netflixlogo from "../assets/netflixlogo2.png";
import netflixav from "../assets/netflix-avatar.png";
import { Link } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

const Navforhome = () => {

  const {  logOut } = UserAuth();
  const navigate = useNavigate();
  

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

 
  return (
    <div className=" sm:h-[30spx] flex h-[64px] px-8 md:px-14 py-5 md:py-[44px] items-center justify-between z-[100] w-full fixed  ease-in">
      <div className=" flex items-center  w-[220px] md:w-[800px] md:space-x-56 ">
        <div className=" flex items-center justify-start fixed w-[250px]">
          <img className=" w-[110px] md:w-[140px]" src={netflixlogo} alt="#" />
          <div className="visible md:invisiblevisible flex text-white text-md md:text-lg  font-semibold items-center ml-[15px] md:ml-0 z-[300]">
          <Link to="/home">
            <ul className="hover:text-gray-300 ml-5  cursor-pointer p-2">
              Home
            </ul>
            </Link>
            </div>
        </div>
        

        <div className="invisible md:visible flex text-white text-lg  font-semibold items-center ml z-[300]">
       
          <Link to="/tvshows">
            <ul className=" hover:text-gray-300 ml-5 cursor-pointer p-2">
              TV Shows
            </ul>
          </Link>

          <Link to="/movies">
            <ul className="hover:text-gray-300 ml-5 cursor-pointer p-2">
              Movies
            </ul>
          </Link>
          <Link to="/account">
            <ul className="hover:text-gray-300 ml-5 cursor-pointer p-2">
              My List
            </ul>
          </Link>
        </div>
      </div>
       <div className=" z-[200px]  w-[200px] md:w-[150px] flex items-center justify-evenly md:justify-between">
     

      <button className=" w-[30px]  md:w-[40px]">
      <Link to="/account">
        <img src={netflixav} alt="/" />
        </Link>
      </button>
      

      <button onClick={handleLogout}  className=' text-sm px-2 py-1 md:px-5  md:py-1 bg-red-600 text-white rounded-sm md:text-lg'>Logout</button>
      </div>

    </div>
  );
};

export default Navforhome;
