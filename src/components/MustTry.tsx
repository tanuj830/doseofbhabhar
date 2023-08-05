import React from 'react'

const Skills = () => {

    const expertise=[
        {
            "img": "https://images.pexels.com/photos/1199958/pexels-photo-1199958.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Crispy Burgers - Dose of Bhabhar special"
        },
        {
            "img": "https://images.pexels.com/photos/7758253/pexels-photo-7758253.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Fried Rice - Dose of Bhabhar special"
        },
        {
            "img": "https://images.pexels.com/photos/1885578/pexels-photo-1885578.jpeg?auto=compress&cs=tinysrgb&w=600",
            "title": "Sandwiches - Dose of Bhabhar special"
        }
    ]

  return (
    <div className='p-4 lg:p-20 mt-10'>
        <h2 className='pink-grad text-center'>MUST TRY </h2>
        <div className='lg:px-[260px] py-10 lg:py-14'>
            <p className='text-[24px] text-gray-600 font-medium tracking-widest text-center'>If you're offered a seat on a rocket ship, don't ask what seat. Just get on. So try our most liked stuffs from peoples.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-2'>
            {
                expertise.map(skill=>(
                    <div>
                        <img className='rounded-tl-[50px] rounded-br-[50px] object-cover w-full overflow-hidden h-[250px] ' src={skill.img} alt="" />
                        <h1 className='text-[22px] py-6  font-medium tracking-widest text-white'>{skill.title}</h1>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skills