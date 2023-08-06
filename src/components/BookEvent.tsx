import React from 'react'

const BookEvent = () => {
  return (
      <div className=' md:mt-10 '>
         {/* bg-[url(https://media.istockphoto.com/id/1148136785/photo/purple-pink-black-abstract-background.jpg?b=1&s=612x612&w=0&k=20&c=i7jEDtBNXGG11mFMgJ5xFxX5oXdVON0QLZ4lWbFTgk8=)] md:bg-[url(https://images.pexels.com/photos/6648497/pexels-photo-6648497.jpeg?auto=compress&cs=tinysrgb&w=820)] lg:bg-[url(https://images.pexels.com/photos/6648497/pexels-photo-6648497.jpeg?auto=compress&cs=tinysrgb&w=4000)] bg-no-repeat */}
             <div className=' flex justify-center items-center bg-[url(https://global-uploads.webflow.com/64af3ca4f403c0f96fee794f/64af3ca4f403c0f96fee79e8_Dark-6.jpg)] bg-no-repeat bg-contain bg-center h-screen'>
              
      <div className='relative p-4 lg:p-20 '>
        <h2 className='pink-grad text-center md:pt-10'>BOOK FOR SPECIAL EVENT</h2>
        <div className='lg:px-[260px] '> 
            <p className='text-[29px] text-white font-medium tracking-widest text-center pt-10'>If you're offered a seat on a rocket ship, don't ask what seat. Just get on. So book events and make it memorable.</p>
        </div>
        <div className='flex justify-center items-center pt-10'>
        <button className='site_bg_color  text-white border border-white px-10 py-4 text-2xl font-medium rounded-full'> Book Now</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default BookEvent