import React from 'react';
import Mock from './Mock';
import { BiLinkExternal } from "react-icons/bi";


function Project() {
    return (
        <div className='col md:flex justify-center items-center gap-20 h-screen w-screen'>
            

            <div className='md:w-[35%] md:ms-40 flex justify-center items-center mx-10'>
                <Mock />
            </div>

            <div className='md:w-[25%] flex justify-center items-center mt-5 mx-20'>
                <div className='border-1 border-white rounded-4xl md:p-10 p-5 md:pb-7 shadow-lg shadow-cyan-500/50'>
                    <div>
                        <h1 className='text-center text-2xl md:my-5'> Eye Glasses  </h1>
                        <p className='text-sm font-stretch-50%'>As a web developer, I possess robust expertise in HTML, CSS, JavaScript, and React.js.
                            My commitment to staying abreast of industry trends, coupled with collaborative and problem-solving skills,
                        </p>
                    </div>

                    <div className='flex justify-center items-center gap-5 md:gap-10'>
                        <a href='https://eye-glasses-sooty.vercel.app/#features' target='_blank'>
                            <button className='md:my-5 py-2 w-30 md:w-40 bg-cyan-500 rounded-2xl shadow-lg hover:shadow-cyan-500/50 hover:text-white font-extrabold flex items-center justify-center gap-2'>
                                <span>Visit</span> <BiLinkExternal />
                            </button>
                        </a>


                        <a href='https://github.com/huzef2002/Eye-Glasses ' target='_blank'>
                            <button className='my-5 py-2 w-30 md:w-40 bg-cyan-500 rounded-2xl shadow-lg hover:shadow-cyan-500/50 hover:text-white font-extrabold flex items-center justify-center gap-2'>
                                <span>GitHub</span> <BiLinkExternal />
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Project;
