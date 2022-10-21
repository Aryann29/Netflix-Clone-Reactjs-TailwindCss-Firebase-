import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../request";

const Main = () => {
  const [movies, setmovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setmovies(response.data.results);
    });
  }, []);

  

  const smalldes = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className=" w-full h-[500px] text-white ">
      <dir className="w-full h-full pl-0 mt-0 ">
        <div className=" absolute h-[500px] w-full bg-gradient-to-r from-black">

          {" "}
        </div>
        <div className=" absolute h-[500px] w-full bg-gradient-to-t from-black"></div>
        <img
          className="w-[100%] h-[100%] object-cover object-top"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className=" absolute w-full top-[40%] p-6 md:p-12 md:top-[25%]">
          <h1 className="text-3xl pb md:text-5xl">{movie?.title}</h1>
          <div>
            <h6 className="text-[12px] py-2  w-[400px] md:text-[14px]">{smalldes(movie?.overview,180)}</h6>
            <div className=" flex space-x-6 py-2">
            <button className=" bg-slate-50 px-8 py-1  md:px-14 md:py-2 font-medium rounded-sm text-black">Play</button>
            <button className=" bg-gray-300 px-5 py-1 md:px-12 md:py-1 rounded-sm bg-opacity-40 text-white"><span className=" text">More info</span></button>
            </div>
          </div>
        </div>
      </dir>
    </div>
  );
};

export default Main;
