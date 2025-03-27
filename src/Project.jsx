import React from 'react';
// import Mock from './Mock';
import { BiLinkExternal } from "react-icons/bi";


function Project() {

    const CardData = [

        {
            title: "Eye Glasses",
            description:
                "As a web developer, I possess robust expertise in HTML, CSS, JavaScript, and React.js. My commitment to staying abreast of industry trends, coupled with collaborative and problem-solving skills.",
            imgSrc: "./Optical.png",
            liveLink: "https://eye-glasses-sooty.vercel.app/#features",
            githubLink: "https://github.com/huzef2002/Eye-Glasses",
        },

    ]
    return (
        <div className='flex scroll-smooth flex-nowrap overflow-x-scroll h-screen w-screen'>
            <div className='col md:flex justify-center items-center gap-20 h-full w-full top-0 bottom-0 '>


                <div className='md:w-130 md:ms-40 flex justify-center items-center mx-10'>
                    <div className="h-full w-full">
                        <div className="w-full h-11 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
                            <span className="w-3 h-3 rounded-full bg-red-400"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                            <span className="w-3 h-3 rounded-full bg-green-400"></span>
                        </div>
                        <div className="bg-gray-100 border-t-0 w-full md:h-140 h-70">
                            <img className="object-cover top-0 h-full w-full" src="./Optical.png"></img>
                        </div>
                    </div>
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

            <div className='start-0 col md:flex justify-center items-center gap-20 h-screen w-screen md:mr-25'>


                <div className='md:w-130 md:ms-40 flex justify-center items-center mx-10'>
                    <div className="h-full w-full">
                        <div className="w-full h-11 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
                            <span className="w-3 h-3 rounded-full bg-red-400"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                            <span className="w-3 h-3 rounded-full bg-green-400"></span>
                        </div>
                        <div className="bg-gray-100 border-t-0 w-full md:h-140 h-70">
                            <img className="object-cover top-0 h-full w-full" src="./Optical.png"></img>
                        </div>
                    </div>
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
        </div>
    );
}

export default Project;
