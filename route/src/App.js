import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Components/Home';


function App() {
  return (
   <>

     <Navigation />
   <Routes>
   <Route path='/' element={<Home/>}/>
    <Route path='home' element={<Home/>}/>
   </Routes>
   {/* <BrowserRouter>
      <Routes>
           <Route index element={<Home />} />
         <Route path="/" element={<Navigation />}>
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter> */}
   </>
  );
}

export default App;
