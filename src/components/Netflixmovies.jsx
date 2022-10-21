import React from "react";
import { FaCheck, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Netflixmovies = ({ item }) => {
  const [like, setLike] = useState(true);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <>
      <div
        className="   object-left-bottom z-10  inline-block w-[200px] h-full  mr-4 ml-2  cursor-pointer 
               duration-500 hover:scale-105 md:h-[170px] md:w-[250px] md:hover:w-[300px] "
      >
        <div>
          <img
            className="rounded-sm  "
            src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
            alt="/"
          />
          <div className="absolute  h-full w-[200px] bottom-[10px] md:bottom-[-29px] opacity-0   z-[100]  hover:opacity-100 md:h-[160px] md:w-[250px] md:text-[17px] md:hover:w-[300px]  text-green-300 text-[10px]">
            <p className="absolute md:w-[300px] w-[200px]  top-[100px] h-[30px] z-[150] bg-black">
              {item?.title}
            </p>
            <p onClick={saveShow} className="z-[200]">
              {like ? (
                <FaPlus className="absolute top-[105px] md:left-[260px] left-[180px] text-white z-[200] " />
              ) : (
                <FaCheck className="absolute top-[105px] md:left-[260px]  text-white z-[200]" />
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Netflixmovies;
