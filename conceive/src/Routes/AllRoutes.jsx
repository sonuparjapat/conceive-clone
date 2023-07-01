import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Navbar from '../Components/Navbar'

export default function AllRoutes() {
  return (
    <div>
      <Navbar/>
<Routes>
    <Route path="/" element={<Homepage/>}></Route>
</Routes>


    </div>
  )
}
