import {
    BrowserRouter,
    Routes,
    Route    
  } from "react-router-dom";

import Filme from "./pages/Filme";
import Home from "./pages/Home";

import React from 'react'
import Header from "./components/Header";
import Error from "./pages/Error";

const RoutesApp = () => {
  return (
        <BrowserRouter>
             <Header />
            <Routes>
                <Route path="/" element={ <Home/> }  >                       
                </Route>
                <Route path="/filme/:id" element={ <Filme/> } >                     
                </Route>
                <Route path="*" element={ <Error/> } />
            </Routes>
        </BrowserRouter>
  )
}

export default RoutesApp;