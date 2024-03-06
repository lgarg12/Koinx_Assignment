import React from 'react';
import './App.css'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

  return (
    <div className='bg-[#EFF2F5] flex justify-center items-center'>
      <div className=''>
        <Navbar/>
        <Home/>
      </div>
    </div>
  )
}

export default App;
