'use client'
import React, { useEffect } from 'react'
import axios from 'axios'
const page = () => {

    const [blogs, setBlogs] = React.useState([])

    useEffect(() => {
        axios.get("https://portfolio-38ir.onrender.com/blog").then(res=>setBlogs(res.data)).catch(err=>console.log(err))
      }, [])

      const months=[
        {
          id:"01",
          month:"Jan"
        },
        {
          id:"02",
          month:"Feb"
        },
        {
          id:"03",
          month:"Mar"
        },
        {
          id:"04",
          month:"Apr"
        },
        {
          id:"05",
          month:"May"
        },
        {
          id:"06",
          month:"Jun"
        },
        {
          id:"07",
          month:"Jul"
        },
        {
          id:"08",
          month:"Aug"
        },
        {
          id:"09",
          month:"Sept"
        },
        {
          id:"10",
          month:"Oct"
        },
        {
          id:"11",
          month:"Nov"
        },
        {
          id:"12",
          month:"Dec"
        },
      ]
      // const handleClick = (id)=>{

      // }
  return (
    <div className=''>
        <div>
            <img src="https://geekyglam.in/_next/static/media/blurfooter-min.d7be4e25.png" className='absolute top-0  w-full text-white rotate-180 object-cover h-[60vh]'/>
            <div className='pt-36 px-4 md:px-20'>
                <h1 className='text-center text-[22px] text-white font-medium'>BLOG</h1>
                <h2 className='pink-grad text-center text-[40px] pt-8 tracking-wide'>Views on marketing, design, technology & programming</h2>
            </div>
        </div>
        {/* blog section */}
<section className="md:px-24 md:mt-10 text-gray-600 body-font">
  <div className="md:px-5 md:py-24 py-12 mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
       blogs.length === 0 ?
       <div className="w-full grid md:grid-cols-3">
          <div className="w-full flex flex-column ">
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-56 rounded-full mt-12"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full mt-3"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[70%] rounded-full mt-3"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full mt-3"></div>
          </div>
          <div className="md:inline hidden">
          <div className="w-full flex flex-column ">
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-56 rounded-full mt-12"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full mt-3"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[70%] rounded-full mt-3"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full mt-3"></div>
          </div>
          </div>
          <div className="md:inline hidden">
          <div className="w-full flex flex-column ">
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-56 rounded-full mt-12"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full mt-3"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[70%] rounded-full mt-3"></div>
              <div className="bg-slate-200 animate-pulse h-12 w-[90%] rounded-full mt-3"></div>
          </div>
          </div>
       </div>
      :
      blogs.reverse().map(blog=>(
        <div className="py-8 px-4   rounded-2xl">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            {
              <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{months[Math.floor( blog.Date.slice(5, 7))].month}</span>
              }
             <span className="font-medium text-lg text-gray-200 title-font leading-none">{blog.Date.slice(8, 10)}</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500  uppercase">tech</h2>
            <h1 className="text-[22px] py-3  font-medium tracking-widest text-white">{blog.title}</h1>
            <div className="flex flex-col justify-around">
            <p className="leading-relaxed text-justify">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            {/* <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer" onClick={()=>handleClick(blog._id)}>Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
              </div>
            <a className="inline-flex items-center mt-5">
              <img alt="blog" src="https://firebasestorage.googleapis.com/v0/b/accm-9ac3a.appspot.com/o/teams%2FPicsart_23-03-17_20-58-27-449.png?alt=media&token=40f8bac9-b1c2-4f62-a192-3a8e2e49e099" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                
                <span className="title-font font-medium text-white">Tanuj Bhatt</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      ))
    }
    </div>
  </div>
</section>
      
    </div>
  )
}

export default page