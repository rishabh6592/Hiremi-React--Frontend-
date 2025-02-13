import React from 'react'
import Navbar from './component/Navbar'
import Homepage from './component/Homepage'
import Secondpage from './component/Page-2/SecondPage'
// import StudentCard from './component/Page-2/StudentCard'


const App = () => {
  return (
    <div className='bg-[#F3F3F3] w-full h-screen'> 
      <Navbar/>
      <Homepage/>
      <Secondpage/>
      {/* <StudentCard/> */}
    </div>
  )
}

export default App
