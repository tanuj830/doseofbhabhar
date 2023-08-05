import React from 'react'

const BookEvent = () => {
  return (
      <div className='mt-4 md:mt-10 '>
             <div className=' flex justify-center items-center bg-[url(https://images.pexels.com/photos/6648497/pexels-photo-6648497.jpeg?auto=compress&cs=tinysrgb&w=4000)] bg-no-repeat bg-cover h-screen'>
      <div className='relative p-4 lg:p-20 '>
        <h2 className='pink-grad text-center pt-10'>BOOK FOR SPECIAL EVENT</h2>
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