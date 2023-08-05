import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='bg-[url(https://geekyglam.in/_next/static/media/blurfooter-min.d7be4e25.png)] border-t border-gray-800 text-white px-5 pt-10 md:px-10 md:pt-10 lg:px-24 lg:pt-24  bg-no-repeat  overflow-hidden w-full h-fit bg-cover z-[-1] absolute left-0'>
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                <div>
                    <Link className="cursor-pointer text-[30px] font-extrabold" href="/">
                    Dose <span className='text-[#00DA92]'>of</span> Bhabhar
                    </Link>
                    <h6 className='text-[16px] text-gray-600 font-semibold py-4'>Questions? Reach us Contact us at the below number</h6>
                    <a href='tel:7668088539' className='text-[16px] font-medium py-4'>+91 - 766 808 8539</a>
                </div>
                <div className='flex flex-col gap-10 text-slate-600 font-[600]'>
                    <h2 className='text-white tracking-[2px] text-[16px]'>COMPANY</h2>
                    <div className='flex flex-col gap-2'>
                        <Link className=' transition-all duration-200 hover:text-white' href="#">About Me</Link>
                        <Link className=' transition-all duration-200 hover:text-white' href="#">Blog</Link>
                        <Link className=' transition-all duration-200 hover:text-white' href="#">Contact</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-10 text-slate-600 font-[600]'>
                    <h2 className='text-white tracking-[2px] text-[16px]'>SERVICES</h2>
                    <div className='flex flex-col gap-2'>
                        <Link className=' transition-all duration-200 hover:text-white' href="#">Web Design & Development</Link>
                        <Link className=' transition-all duration-200 hover:text-white' href="#">Blockchain</Link>
                        <Link className=' transition-all duration-200 hover:text-white' href="#">SEO</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-10 text-slate-600 font-[600]'>
                    <h2 className='text-white tracking-[2px] text-[16px]'>CONNECT</h2>
                    <div className='flex items-center gap-6 md:gap-8'>
        <Link className='hover:scale-110 hover:text-white transition-all duration-300 text-4xl' href="https://www.instagram.com/aka_tanuj/">
          <AiFillInstagram />
        </Link>
        <Link className='hover:scale-110 hover:text-white transition-all duration-300 text-4xl' href="https://www.instagram.com/aka_tanuj/">
          <AiFillInstagram />
        </Link>
        <Link className='hover:scale-110 hover:text-white transition-all duration-300 text-4xl' href="https://www.instagram.com/aka_tanuj/">
          <AiFillInstagram />
        </Link>
        <Link className='hover:scale-110 hover:text-white transition-all duration-300 text-4xl' href="https://www.instagram.com/aka_tanuj/">
          <AiFillInstagram />
        </Link>
      </div>
                </div>
            </div>
            <button className='bg-[#00DA92] px-8 py-3 my-10 rounded-full  text-white text-md font-semibold tracking-widest '>Call for Order</button>
            <div className='my-10'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-gray-500 tracking-[1px] text-sm font-medium'>© 2023 Dose of Bhabhar. All rights reserved.</h2>
                    <h2 className='text-gray-500 tracking-[1px] text-sm font-medium'>Developed by: Tanuj Bhatt</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer