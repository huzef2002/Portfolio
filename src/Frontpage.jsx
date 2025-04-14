import React from 'react';
import Home from './Home';
import About from './About';
import Icon from './Icon';
import Navebar from './Navebar';
import Project from './Project';
import Contact from './Contact';

function Frontpage() {
  return (
    <div className='relative z-10 text-black items-center h-screen w-screen overflow-x-hidden'>
      <Navebar />
      <Icon />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default Frontpage;
