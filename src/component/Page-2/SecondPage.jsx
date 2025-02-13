import React from 'react';
import student from "../../images/student.png";
import rafiki from "../../images/rafiki.png";
import recruiter from "../../images/job recruiter.png";

const HiremiPage = () => {  
  return (


    
    <div className="bg-gray-100 min-h-screen p-20 flex flex-col items-center">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="  text-gray-900 text-6xl -mt-8 font-bold">
          <span className="text-blue-700 text-6xl   ">Hiremi</span> : We Are Here For You!
        </h1>
        <p className="text-gray-700  text-3xl font-semibold mt-4 ">Empowering Students, Job Seekers, and Recruiters</p>
      </header>
      
      


      {/* 2nd page Cards */}

   <div className="threecard flex gap-24 justify-center items-center p-10">

     {/* Students */}
     <div className="leftcard flex flex-col w-[405px] h-[430px] bg-white text-black rounded-3xl px-7 py-10  shadow-lg">
       <h2 className="text-3xl font-bold mb-3">Students</h2>
       <p className="text-gray-800 text-[17px] leading-7">Practical Experience To <br /> Launch Your Career </p>
       <img className='ml-44 -mt-36 ' src={student} alt="student" style={{width:"190px"}}/>
       <ul className="text-[16px] mt-8  leading-[28px] space-y-4">

        <li className="flex items-center">
           <i className="ri-folder-3-line text-xl mr-3 text-l"></i>
           Access tailored jobs and internship
         </li>

        <li className="flex items-center">
           <i className="ri-trophy-fill text-xl mr-3 text-l"></i>
           Participate in exciting competitions
         </li>

        <li className="flex items-center">
           <i className="ri-align-top text-xl mr-3 text-l"></i>
           Upskill with mentorships & workshops
          </li>

        <li className="flex items-center">
           <i className="ri-admin-fill text-xl mr-3 text-l"></i>
           Showcase your profile to top recruiters
        </li>

       </ul>
      </div>

     {/* Job Seekers */}
     <div className="centercard flex flex-col w-[405px] h-[430px] bg-white rounded-3xl px-7 py-10 text-black shadow-lg">
       <h2 className="text-3xl font-bold mb-3">Job Seekers</h2>
       <p className="text-gray-800 text-l leading-relaxed">Kickstart Your Career <br /> With Opportunities</p>
       <img className='ml-44 -mt-36 ' src={rafiki} alt="rafiki" style={{width:"190px"}}/>
       <ul className="text-[15.3px] mt-16 leading-[28px] space-y-4">

        <li className="flex items-center">
           <i className="ri-team-fill text-xl mr-3 text-l"></i>
           Build employer brand with engagements
        </li>

        <li className="flex items-center">
           <i className="ri-megaphone-fill text-xl mr-3 text-l"></i>
           Host jobs & internships to hire top talent
        </li>

        <li className="flex items-center">
           <i className="ri-dvd-ai-fill text-xl mr-3 text-l"></i>
           Streamline hiring with AI-driven tools
        </li>

        <li className="flex items-center">
           <i className="ri-shake-hands-fill text-xl mr-3 text-l"></i>
           Connect with 19M GenZs based on skills
         </li>

       </ul>
     </div>

     {/* Job Recruiters */}
     <div className="rightcard flex flex-col w-[405px] h-[430px] bg-white rounded-3xl px-7 py-10 text-black shadow-lg">
       <h2 className="text-3xl font-bold mb-3">Job Recruiters</h2>
       <p className="text-gray-800 text-l leading-relaxed ">Empowring Careers, <br /> Connecting Talent</p>
       <img className='ml-52 -mt-32 ' src={recruiter} alt="recruiter" style={{width:"160px"}}/>
        <ul className="text-[15.3px] mt-16 leading-[28px] space-y-4">

         <li className="flex items-center">
           <i className="ri-phone-find-fill text-xl mr-3 text-l"></i>
           Offer top competition & job Opportunities
         </li>

         <li className="flex items-center">
           <i className="ri-account-box-fill text-xl mr-3 text-l"></i>
           Partner with companies for placements
         </li>

         <li className="flex items-center">
           <i className="ri-bar-chart-grouped-line text-xl mr-3 text-l"></i>
           Gain insights into student performance
         </li>

         <li className="flex items-center">
           <i className="ri-shake-hands-line mr-3 text-xl text-l"></i>
           Foster industry-academic collaboration
         </li>
       </ul>

      </div>
  </div>



    <div className="grid md:grid-cols-3 bg-rose-100 text-red-100 gap-16 w-full max-w-7xl"></div>
  </div>
  );
};

export default HiremiPage;
