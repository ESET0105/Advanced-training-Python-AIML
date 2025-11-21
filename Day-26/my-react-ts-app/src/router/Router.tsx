import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loginpage from '../pages/home/Loginpage'
import Homepage from '../pages/home/Homepage'
import Layout from './Layout'

export default function Router() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Layout />} >
                    <Route path='' element={<Homepage />} />
                    <Route path='/login' element={<Loginpage />} />
                </Route>
            </Routes>


        
        </BrowserRouter>
    </>
  )
}
