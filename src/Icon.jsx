import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Icon() {

  const List = [
    {
      icon: <FaLinkedinIn size={20} />,
      href: 'https://www.linkedin.com/in/mohammad-huzef-shaikh-677a35266/'
    },
    {
      icon: <FaGithub size={20} />,
      href: 'https://github.com/huzef2002'
    },
    {
      icon: <FaInstagram size={20} />,
      href: '/'
    },
    {
      icon: <FaTwitter size={20} />,
      href: 'https://github.com/huzef2002'
    },
  ]
  return (
    <div className='absolute flex-col md:m-10 right-7 space-y-5 p-3  fixed '>

      {/* <div className='flex items-center justify-center rounded-full p-3 border border-white  shadow-md shadow-cyan-500/50
                  transition-all duration-300 transform hover:scale-110 hover:bg-black/20 hover:text-white'> */}
      {
        List.map((items, index) => {
          return (<a className='  md:visible flex items-center justify-center rounded-full p-3 border border-white  shadow-md shadow-cyan-500/50
                  // transition-all duration-300 transform hover:scale-110 hover:bg-black/20 ' key={index} target='_blank' href={items.href}>
            {items.icon}
          </a>)
        })
      }
    </div>
  );
}

export default Icon;
