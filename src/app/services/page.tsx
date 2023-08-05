import React from 'react'

const page = () => {

        const expertise=[
            {
                "img": "https://geekyglam.in/images/e1.jpg",
                "title": "Web Development"
            },
            {
                "img": "https://img.freepik.com/free-vector/gradient-isometric-nft-concept_52683-62009.jpg?size=626&ext=jpg&ga=GA1.2.1739072392.1687083813&semt=ais",
                "title": "Blockchain"
            },
            {
                "img": "https://geekyglam.in/images/e2.jpg",
                "title": "SEO"
            }
        ]

  return (
    <>
        <img src="https://geekyglam.in/_next/static/media/blurfooter-min.d7be4e25.png" className='absolute top-0  w-full text-white rotate-180 object-cover h-[60vh]'/>
        <div className='pt-36 px-4 md:px-20'>
            <h1 className='text-center text-[22px] text-white font-medium'>SERVICES</h1>
            <h2 className='pink-grad text-center text-[40px] pt-8 tracking-wide'>Unique technologies & modern approach</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-20 pt-24'>
            {
                expertise.map(service=>(
                    <div>
                        <img src={service.img} className='rounded-tl-[50px] rounded-br-[50px]' alt="" />
                        <h2 className='text-[22px] py-6  font-medium tracking-widest text-white'>{service.title}</h2>
                    </div>
                ))
            }
            </div>
        </div>
    </>
  )
}

export default page