import React from 'react'

const Hero = () => {
   

  return (
    // <div className='px-5 bg-[url(https://adachirestaurant.com/wp-content/themes/adachi_new/images/menu-desktop-bg.jpg)] bg-cover relative bg-no-repeat w-screen pt-[160px] text-white h-screen '>
      <div className='relative'>
    <div className='px-5 bg-[url(https://images.pexels.com/photos/3738755/pexels-photo-3738755.jpeg?auto=compress&cs=tinysrgb&w=4000)]  bg-cover relative bg-no-repeat w-screen pt-[160px] text-white h-screen '>
        <h1 className='text-[50px] md:text-[50px] text-center font-extrabold'>Dose <span className='text-[#00da92]'>of</span> Bhabhar</h1>
        <h2 className='text-[52px] md:text-[100px] text-center font-bold mt-3 md:mt-6 line-clamp-5'>THE POWER OF DIGITAL EXPERIENCE</h2>
        <h3 className='tracking-widest text-center text-[18px] md:text-[22px]'>TRENDS COME AND GO, CLASSICS ENDURE</h3>
        {/* <h3 className='tracking-widest text-center text-[18px] md:text-[22px]'>WEBSITES <span className='text-[#00DA92] text-5xl font-extrabold '>.</span> BLOCKCHAIN <span className='text-[#00DA92] text-5xl font-extrabold '>.</span> MACHIENE LEARNING</h3> */}
        
    </div>
   <img className="h-20 w-full absolute -bottom-10 object-cover blur-md " src="https://tse4.explicit.bing.net/th?id=OIP.gkjCkvH2TbmFUlFwvnaNUgHaEo&pid=Api&P=0&h=180" alt="" />
  </div>
   )
}

export default Hero