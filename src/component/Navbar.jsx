import React from 'react'

const Navbar = () => {
  return (
    <div className='main w-full h-14 bg-[#FFF] flex items-center justify-between px-24 border-b-[1px] border-gray-300'>

       <h1 className='left text-3xl text-blue-700 font-bold '>Hiremi</h1>

       <div className="right flex gap-7 text-sm font-bold items-center text-black">
        <a className='rounded-full bg-[#EEEE] w-24 h-10 flex items-center justify-center' href="">Internship</a>
        <a className='rounded-full bg-[#EEEE] w-16 h-10 flex items-center justify-center' href="">Jobs</a>
        <a className='rounded-full bg-[#EEEE] w-24 h-10 flex items-center justify-center' href="">Ask Experts</a>
        <a className='rounded-full bg-[#EEEE] w-28 h-10 flex items-center justify-center' href="">Hiremi 360</a>
        <button className='bg-[#003DD1] ml-6 rounded-full text-white w-28 h-11 border-none py-2'>Login</button>
        <a href="" className='text-sm font-bold'>Employer Login</a>
        <button className='bg-[#FFF6D9] rounded-full w-28 h-11 font-semibold border-separate py-2 text-black border-2 border-[#FFC700]'>Our App</button>
       </div>

    </div>
  )
}

export default Navbar
