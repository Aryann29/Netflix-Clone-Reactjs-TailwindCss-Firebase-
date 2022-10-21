import React from 'react'
import heromain from '../assets/hero-main-presignin.jpg'
import { Link } from 'react-router-dom'


const Hero = () => {
  
  return (
    <div  className='heromain   text-white md:h-[692px] w-full border-b-8 border-[#333] '>
      <div className=' absolute w-full h-full   bg-gradient-to-b from-black via-transparent to-black z-20  '> </div>  
      
      <img className=' absolute z-10 w-max  h-[100%] object-cover ' src={heromain} alt="" />
      <div className=' '>


      <div className='  flex   md:px-[55px]'>
      
      <div className='    flex-col mt-[150px] items-center justify-center font-semibold md:top-[160px] md:left-[70px] md:right-[70px] md:mx-[181px] md:py-[75px] z-[80] space-y-4 '>
         <div className='flex text-[26px] leading-[30px] md:text-[52px] justify-center items-center mx-[100PX]  md:mx-[155px] md:leading-[60px] text-center'>Unlimited movies, TV 
         shows and more.</div>
       <h2 className='flex items-center justify-center text-[14px] md:text-[26px] md:my-4 '>Watch anywhere. Cancel anytime.</h2>

       <form className='w-[100%] h-[40px] justify-center flex-col md:w-full  m-0' action="">

       <h3 className='flex text-[15px] justify-center md:pb-2.5 md:text-[20px]'>Ready to watch? Enter your email to create or restart your membership.</h3>
       <div className=' flex justify-center mt-4 '>
       <div className='h-[25px] w-[230px] md:h-[60px] md:w-[450px]'>
        <label htmlFor="Email" placeholder='Email'>
        <input className='emailwla h-[35px] w-full md:h-[60px] md:w-[450px] outline-none py-2 px-6 z-[100] text-black' type="text" placeholder='Email address'/>
        <label htmlFor="id_email_hero_fuji" ></label>
        </label>
        
       </div>
       <div>
        <Link to='/signup'>
       <button className='text-[12px] px-[30px] md:px-[54px] py-[9px] bg-red-600 text-white md:py-[10.5px]  md:text-[26px]'>Get Started</button>
       </Link>
       </div>
       </div>
       </form>
        </div>
        </div>
      
        
        
        
      
       
      </div>

      
       
        
    </div>
  )
}

export default Hero