
import React from 'react';
import Bubbleimg from '../Images/bubble img.png';
import internship from '../Images/Internship-pana 1.png'
import hiremi from '../Images/hiremi 360.png'
import askexpert from '../Images/ask expert.png'
import status from '../Images/status.png'
import fresher from '../Images/fresher.png'
import experience from '../Images/experience.png'

const Homepage = () => {
  return (
    <div className='w-full h-[92vh] bg-[#F3F3F3] flex'>
      {/* Left Section with Image and Overlay */}
      <div className="left w-[45%] h-full flex items-center justify-center relative">
        <img src={Bubbleimg} alt="Bubbleimg" className='w-5/5 object-cover' />
        <div className="overlay w-full h-full absolute top-0 left-6 flex flex-col items-start justify-center   text-white p-16">
          <div className="main ">
            <h1 className='text-[2.5vw] font-black mb-4 text-black'>
              Empowering <span className='text-[#003DD1]'>Careers!!</span> <br />
              One <span className='text-[#003DD1]'>Opportunity</span> At A Time!!
            </h1>
            <p className='mb-6 font-bold text-black'>Hiremi connects talent with opportunities, empowering India’s youth for a better tomorrow.</p>

            {/* For recruitors */}
            <p className=' text-[8px] font-bold text-gray-600 w-fit ml-52'>For Recuritors</p>

             {/* Buttons */}
            <div className="btn flex space-x-9">
              <button className='px-6 py-3 bg-[#003DD2] text-white rounded-lg '>Download App</button>
              <button className=' w-40 h-12 px-6 py-3 bg-transparent border border-[#003DD1] text-[#003DD1] font-bold rounded-lg'>Post a Job</button>
            </div>
          </div>
        </div>
      </div> 

      {/* Right Section */}
      <div className="right w-[55%] h-full  flex items-center justify-center ">
          <div className="card  w-[90%] h-[80%] flex flex-col gap-5  ">
           
          <div className="top w-full h-[50%]  flex gap-5">

           {/* Internship card */}
          <div className="left w-[38%] h-full font-bold text-[15px]  bg-[#FFCAF3]  rounded-3xl transition-transform transform hover:scale-105 ">
            <h3 className='text-2xl font-extrabold  ml-6 mt-7 w-fit '>Internships</h3>
            <p className='px-6 -py-0'>Practical Experience To Launch Your Career</p>
            <img className='w-48 ml-11 mt-4' src={internship} alt="internship" />
          </div>

          <div className="right w-[62%] h-full flex flex-col gap-5">

            {/* Ask Expert */}
            <div className="top h-[50%] w-full bg-[#C0FFCE] rounded-3xl transition-transform transform hover:scale-105">
            <h3 className='text-2xl font-extrabold  ml-6 mt-7 w-fit '>Ask Expert</h3>
            <p className='px-6 -py-0'>Get Guidance From Industry Experts</p>
            <img className='w-32 ml-80 -mt-20 ' src={askexpert} alt="askexpert" />
            </div>
            {/* Status card */}
            <div className="down h-[50%] w-full bg-[#FFEBB2] rounded-3xl transition-transform transform hover:scale-105">
            <h3 className='text-2xl font-extrabold  ml-6 mt-7 w-fit '>Status</h3>
            <p className='px-6 -py-0'>Track Applications and <br /> Mentorship Progress</p>
            <img className='w-32 ml-80 -mt-[110px] ' src={status} alt="status" />
            </div> 
            </div>
          </div>


         <div className="down w-full h-[50%]  flex gap-5">
          {/* Fresher cards */}
          <div className="left w-[62%] h-full flex flex-col gap-5 ">
            <div className="top h-[50%] w-full bg-[#FFC8C8] rounded-3xl transition-transform transform hover:scale-105">
            <h3 className='text-2xl font-extrabold  ml-6 mt-7 w-fit '>Freshers</h3>
            <p className='px-6 -py-0'>Kickstart Your Career <br /> WIth Opportunities</p>
            <img className='w-48 ml-64 -mt-24 ' src={fresher} alt="fresher" />
            </div>
            {/* Experience card */}
            <div className="down h-[50%] w-full bg-[#E2BDFF] rounded-3xl transition-transform transform hover:scale-105">
            <h3 className='text-2xl font-extrabold  ml-6 mt-7 w-fit '>Experience</h3>
            <p className='px-6 -py-0'>Discover Advanced Career <br /> Opportunities</p>
            <img className='w-48 ml-64 -mt-24 ' src={experience} alt="experience" />
            </div>
            </div>
            {/* Hiremi card */}
            <div className="right w-[38%] h-full bg-[#A0E3FF] rounded-3xl transition-transform transform hover:scale-105">
            <h1 className='text-2xl font-extrabold  ml-6 mt-7 w-fit '>Hiremi 360</h1>
            <p className='px-6 -py-0'>All-in-One Career Solution</p>
            <img className='w-44 ml-16 mt-3' src={hiremi} alt="hiremi" />
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Homepage;
