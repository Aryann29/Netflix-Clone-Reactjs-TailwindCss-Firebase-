import React from "react";
import Navforhome from "../components/Navforhome";
import heromain from "../assets/hero-main-presignin.jpg";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";


const Mylist = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navforhome />
      <div>
        <img
          className="  absolute  w-full h-fit object-cover -z-10  "
          src={heromain}
          alt=""
        />
        <div className=" absolute w-full h-full  bg-black opacity-50  z-[15]  "></div>
        <div className="absolute top-[20%] p-4 md:p-8 z-50 ">
          <h1 className=" ml-[50px] text-3xl md:text-5xl font-bold text-white ">
            My Shows
          </h1>
          <div className=" flex items-center group z-20">
            <div className=" relative pt-[20px]  w-[360px] md:w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide md:ml-9">
              {movies.map((item,id) => (
                <div
                  key={id}
                  className="   object-left-bottom z-10  inline-block w-[150px] h-full  mr-4 ml-2  cursor-pointer 
                   duration-500 hover:scale-105 md:h-[170px] md:w-[250px] md:hover:w-[300px] "
                >
                  <div>
                    <img
                      className="rounded-sm  "
                      src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                      alt="/"
                    />
                    <div className="absolute top-0  h-full w-[100px] bottom-[10px] md:bottom-[-29px] opacity-0   z-[100]  hover:opacity-100 md:h-[160px] md:w-[250px] md:text-[17px] md:hover:w-[300px]  text-green-300 text-[10px]">
                      <p className="absolute md:w-[300px] w-[150px]  bottom-0 h-[30px] z-[150] bg-black">
                        {item?.title}
                      </p>
                      <p  onClick={()=> deleteShow(item.id)} className=' z-[180] absolute text-red-600 top-4 right-4 m-0  h-[-100px]'><AiOutlineClose size={32} /></p>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mylist;
