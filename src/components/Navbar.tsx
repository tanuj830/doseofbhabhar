'use client'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import Link from "next/link";
import React from "react";
import { RxCross2} from "react-icons/rx";
import { RiMenu4Line} from "react-icons/ri";


const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
   <div className=" inline lg:hidden  z-50 relative w-screen ">
        {/* for mobile */}
        <div  className="container pt-4 pb-3  w-full text-white  border-b border-gray-700 backdrop-blur-sm">
          <div className="  flex justify-between items-center gap-4 px-4 w-full">
            <div className="flex items-center   ">
              <Link className="cursor-pointer text-[30px] font-extrabold" href="/">
               Dose <span className='text-[#00DA92]'>of</span> Bhabhar
              </Link>
            </div>

            <div className="ml-2 transition-all hover:animate-spin duration-1000 ">
              {!showMenu ? (
                <button
                  className="text-3xl text-white font-extrabold mr-3 brightness-200"
                  onClick={handleClick}
                >
                  <RiMenu4Line />
                </button>
              ) : (
                <button
                  className="text-3xl text-white font-extrabold mr-3 brightness-200"
                  onClick={handleClick}
                >
                  <RxCross2 />
                </button>
              )}
            </div>
          </div>
          <div className="mb-2 transition-all duration-1000 flex  items-center justify-between">
            {/* <div> */}
            {showMenu === true ? (
              <div className="relative  w-full   py-1">
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.741)", backdropFilter: "blur(7px)"}} className="absolute    rounded-b-3xl  text-white h-screen w-full text-2xl  p-10">
                  <div className="flex justify-evenly  w-full h-full flex-col">
                    <div className='text-center'>
                    <Link className="brightness-200" href="/project">
            Menu
          </Link>
                    </div>
                    {/* icons */}
                    {/* <div className='flex items-center justify-center gap-6 md:gap-8'>
        <Link className='hover:scale-110 hover:text-white transition-all duration-300 text-4xl' href="https://github.com/tanuj830">
          <AiFillGithub />
        </Link>
        <Link className='hover:scale-110 hover:text-white transition-all duration-300 text-4xl' href="https://www.linkedin.com/in/tanuj-bhatt-85a2511b5/">
          <AiFillLinkedin />
        </Link>
        <Link className='hover:scale-110 hover:text-white transition-all duration-300 text-4xl' href="https://leetcode.com/tanujdotcpp/">
          <SiLeetcode />
        </Link>
        <Link className='hover:scale-110 hover:text-white transition-all duration-300 text-4xl' href="https://www.instagram.com/aka_tanuj/">
          <AiFillInstagram />
        </Link>
      </div> */}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="hidden  lg:block z-50 relative text-white container backdrop-blur-sm	w-full">
        {/* for pc */}

        <div className='py-6  border-b border-gray-700 w-screen'>
    <div  className=' flex justify-between px-36 w-full'>
      <div>
      <Link className="cursor-pointer text-[30px] font-extrabold" href="/">
              Dose <span className='text-[#00DA92]'>of</span> Bhabhar
              </Link>
      </div>
      <div className='flex items-center md:gap-7'>
          <Link className="brightness-200 text-xl" href="/project">Menu</Link>
      </div>
      {/* <div className='flex items-center md:gap-4'>
        <Link className='hover:scale-125 hover:text-white transition-all duration-300 text-3xl' href="https://github.com/tanuj830">
          <AiFillGithub />
        </Link>
        <Link className='hover:scale-125 hover:text-white transition-all duration-300 text-3xl' href="https://www.linkedin.com/in/tanuj-bhatt-85a2511b5/">
          <AiFillLinkedin />
        </Link>
        <Link className='hover:scale-125 hover:text-white transition-all duration-300 text-3xl' href="https://leetcode.com/tanujdotcpp/">
          <SiLeetcode />
        </Link>
        <Link className='hover:scale-125 hover:text-white transition-all duration-300 text-3xl' href="https://www.instagram.com/aka_tanuj/">
          <AiFillInstagram />
        </Link>
      </div> */}
  </div>
  </div>
      </div>
    </>
  );
};

export default Header;












