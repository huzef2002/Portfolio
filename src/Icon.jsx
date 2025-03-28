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
      href: 'https://www.linkedin.com/in/mohammad-huzef-shaikh-677a35266/'
    },
    {
      icon: <FaInstagram size={20} />,
      href: 'https://www.linkedin.com/in/mohammad-huzef-shaikh-677a35266/'
    },
    {
      icon: <FaGithub size={20} />,
      href: 'https://www.linkedin.com/in/mohammad-huzef-shaikh-677a35266/'
    },
    {
      icon: <FaTwitter size={20} />,
      href: 'https://www.linkedin.com/in/mohammad-huzef-shaikh-677a35266/'
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
      {/* </div> */}

      {/* <div className='flex items-center justify-center rounded-full p-3 border  border-white shadow-md shadow-cyan-500/50 
                  transition-all duration-300 transform hover:scale-110 hover:bg-black/20 hover:text-white'>
        <a target='_blank' href='https://www.linkedin.com/in/mohammad-huzef-shaikh-677a35266/'>
          <FaLinkedinIn size={20} />
        </a>
      </div>

      <div className='flex items-center justify-center rounded-full p-3 border border-white  shadow-md shadow-cyan-500/50
                  transition-all duration-300 transform hover:scale-110 hover:bg-black/20 hover:text-white'>
        <a target='_blank' href='https://www.linkedin.com/in/mohammad-huzef-shaikh-677a35266/'>
          <FaGithub size={20} />
        </a>
      </div>

      <div className='flex items-center justify-center rounded-full p-3 border border-white  shadow-md shadow-cyan-500/50
                  transition-all duration-300 transform hover:scale-110 hover:bg-black/20 hover:text-white'>
        <a target='_blank' href='https://www.linkedin.com/in/mohammad-huzef-shaikh-677a35266/'>
          <FaInstagram size={20} />
        </a>
      </div>

      <div className='flex items-center justify-center rounded-full p-3 border border-white  shadow-md shadow-cyan-500/50
                  transition-all duration-300 transform hover:scale-110 hover:bg-black/20 hover:text-white'>
        <a target='_blank' href='https://www.linkedin.com/in/mohammad-huzef-shaikh-677a35266/'>
          <FaTwitter size={20} />
        </a>
      </div>

      <div className='flex items-center justify-center rounded-full p-3 border border-white  shadow-md shadow-cyan-500/50
                  transition-all duration-300 transform hover:scale-110 hover:bg-black/20 hover:text-white'>
        <a target='_blank' href='https://www.linkedin.com/in/mohammad-huzef-shaikh-677a35266/'>
          <FaLinkedinIn size={20} />
        </a>
      </div> */}
    </div>
  );
}

export default Icon;
