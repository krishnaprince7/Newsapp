import React from 'react'
import Fetchdata from './Fetchdata'

const Home = () => {
  return (
    <>

    <div className=' bg-[#464646] h-[50vh] w-full flex justify-center items-center'>
    <div className='text-white '>
      <h1 className='sm:text-6xl text-center text-4xl font-bold'>TODAY NEWS</h1>

      <p></p>
    </div>

    </div>
    <Fetchdata/>
    </>
  )
}

export default Home