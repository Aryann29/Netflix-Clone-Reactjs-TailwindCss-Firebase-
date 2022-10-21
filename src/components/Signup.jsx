import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heromain from "../assets/hero-main-presignin.jpg";
import netflixlogo from "../assets/netflixlogo2.png";
import { UserAuth } from '../context/AuthContext';


const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await signUp(email, password)
      navigate('/home')
      
    } catch (error) {
      console.log(error);
     
    }
    
  };


  return (
    <div className="flex justify-center">
      <div className=" absolute flex h-90px px-10 pt-5 items-center justify-between z-50  w-full ">
      <Link to='/'><img width={180} src={netflixlogo} alt="#" /></Link>
      </div>

      <img
        className="  absolute  w-full h-[1100px] object-cover -z-10  "
        src={heromain}
        alt=""
      />
      <div className=" absolute w-full h-[1100px]  bg-black opacity-50  z-[15]  "></div>
      <div className="pt-[90px]">
        <div className=" relative rounded-md z-[80] h-[660px] w-[450px]   bg-black bg-opacity-75 px-[70px] py-[55px] mx-[406px]">
          <form typeof="sumbit"
          onSubmit={handleSubmit}
           className=" flex-col items-center z-[100] bg-opacity-100 h-[375px] ">
            <h1 className="z-[100] text-white text-[32px] font-extrabold pb-[22px]">
              Sign Up
            </h1>

            <input
            onChange={(e) => setEmail(e.target.value)}
              type="email"
              className=" px-5 py-4 bg-[#333] z-[100] w-full h-[50px] rounded-md mb-4"
              placeholder="Email "
              autoComplete="email"
            />

            <input
            onChange={(e) => setPassword(e.target.value)}
              type="text"
              className=" px-5 py-4  bg-[#333] first-letter:first-line: z-[100] w-full h-[50px] rounded-md mb-10"
              placeholder="Password"
              autoComplete="password"
            />

            <button type="submit" className="z-[100]  bg-red-600 text-white w-full rounded-md h-[48px]">
              Sign Up
            </button>
            <div>
              <div className=" form-check flex justify-between pt-2">
                <label
                  className="  form-check-label flex  text-[#b3b3b3] space-x-1"
                  htmlFor="flexCheckDefault"
                >
                  <input type="checkbox" className="accent-white" />{" "}
                  <h1 className="text-[13px]">Remember me</h1>
                </label>
                <h1 className="text-[#b3b3b3]  text-[13px]">Need help?</h1>
              </div>
            </div>
          </form>
          <div className="text-[#b3b3b3]">
            <div>
              <Link to="/login"></Link>
              <h1>
                Alredy have a account?{" "}
                <a href="/login" className=" hover:underline text-white">
                   Sign In.
                </a>{" "}
              </h1>
            </div>
            <div className="text-[13px] mt-[11px]">
              <h5>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
                <a href="/" className=" hover:underline text-blue-700 ">
                  {" "}
                  Learn more.
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
