import React from 'react';
import {Route, Routes} from "react-router-dom"
import Home from "./Home"


const LayoutRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default LayoutRoutes;
