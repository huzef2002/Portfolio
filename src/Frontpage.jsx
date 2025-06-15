import React from 'react';
import Home from './Home';
import About from './About';
import Icon from './Icon';
import Navebar from './Navebar';
import Project from './Project';
import Contact from './Contact';
import Experience from './Experience';

function Frontpage() {
  return (
    <div className='relative z-10 text-black items-center h-screen w-screen overflow-x-hidden'>
      <Navebar />
      <Icon />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="project"><Project /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default Frontpage;
