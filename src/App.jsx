import React from 'react'
import Navebar from './componenets/Navebar'
import { Routes,Route } from 'react-router-dom'
import Home from './componenets/Home'
import Enetrtainment from './componenets/Enetrtainment'
import Science from './componenets/Science'
import Sports from './componenets/Sports'
import Technology from './componenets/Technology'
import Health from './componenets/Health'
import Footer from './componenets/Footer'

const App = () => {
  return (
    <div>
     <Navebar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/enetrtainmenet' element={<Enetrtainment/>}></Route>
      <Route path='/science' element={<Science/>}></Route>
      <Route path='/sports' element={<Sports/>}></Route>
      <Route path='/technology' element={<Technology/>}></Route>
      <Route path='/health' element={<Health/>}></Route>
      {/* <Route path='/' element={<Enetrtainment/>}></Route>  */}
     </Routes>
     <Footer/>
     
    </div>
  )
}

export default App

// 1f4be9a8bb504c7aa7ae920d3bb7b4fb