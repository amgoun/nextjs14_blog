import React from 'react'

export default function Subscribe() {
  return (
    <section className=' py-12 bg-subscribe_bg w-full h-full px-2 mb-20'>
      <div className=' flex flex-col items-center max-w-7xl mx-auto'>
        <h1 className='text-[30px] font-bold text-white '>Subscribe</h1>
        <p className='text-md text-white py-4 mb-4'>Join our newsletter to get latest blog post</p>
        <form action="" className=''>
          <div className='relative'>
          <input type="text" placeholder='enter your email' className=' block w-[400px] rounded-full border-0 py-4 px-4 px-2 outline-none ' />
          <button type="submit" className='absolute rounded-full border-0 py-4 px-8 bg-[#A3EEFF] text-black text-md font-medium capitalize  leading-[1.5rem] top-0 right-0 hover:bg-[#A3EEFF]/80 transition-opacity' > submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}
