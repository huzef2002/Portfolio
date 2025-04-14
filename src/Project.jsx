import React from 'react';
// import Mock from './Mock';
import { BiLinkExternal } from "react-icons/bi";


function Project() {

    const CardData = [

        {
            title: "Eye Glasses",
            description:
                "Built a fully functional optical website using React and Redux for a friend’s business, designed for real-world use and optimized for market readiness.",
            imgSrc: "./Optical.png",
            liveLink: "https://eye-glasses-sooty.vercel.app/#features",
            githubLink: "https://github.com/huzef2002/Eye-Glasses",
        },
        {
            title: "Realezi",
            description:
                "Developed a responsive RealEstate web page using HTML, CSS, Bootstrap, and JavaScript to showcase design and development skills for a RealEstate HR.",
            imgSrc: "./Realezi.png",
            liveLink: "realezi-frontend-project.vercel.app",
            githubLink: "https://github.com/huzef2002/realezi-frontend-project",
        },
        {
            title: "Document Handler",
            description: "Developed a mini document management app using React, Tailwind CSS, and JavaScript to handle various file types and practice real-world state management.",
            imgSrc: "./Document-app.png",
            liveLink: "react-mini-project-zeta.vercel.app",
            githubLink: "https://github.com/huzef2002/React_mini_project",
        },
    ]
    return (
        <div className='col w-screen [&::-webkit-scrollbar]:hidden'>
            {
                CardData.map((Items, index) => {
                    return (
                        <div className='col md:flex justify-center items-center gap-20 h-full w-full my-10 top-0 bottom-0'>

                            <div className='md:w-130 md:ms-40 flex justify-center items-center mx-10'>
                                <div className="h-full w-full">
                                    <div className="w-full h-11 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
                                        <span className="w-3 h-3 rounded-full bg-red-400"></span>
                                        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                                        <span className="w-3 h-3 rounded-full bg-green-400"></span>
                                    </div>
                                    <div className="bg-gray-100 border-t-0 w-full md:h-140 h-70">
                                        <img className=" top-0 h-full w-full" src={Items.imgSrc}></img>
                                    </div>
                                </div>
                            </div>

                            <div className='md:w-[25%] flex justify-center items-center mt-5 mx-20'>
                                <div className='border-1 border-white rounded-4xl md:p-10 p-5 md:pb-7 shadow-lg shadow-cyan-500/50'>
                                    <div>
                                        <h1 className='text-center text-2xl md:my-5'> {Items.title}  </h1>
                                        <p className='text-sm font-stretch-50%'>{Items.description}
                                        </p>
                                    </div>

                                    <div className='flex justify-center items-center gap-5 md:gap-10'>
                                        <a href={Items.liveLink} target='_blank'>
                                            <button className='md:my-5 py-2 w-30 md:w-40 bg-cyan-500 rounded-2xl shadow-lg hover:shadow-cyan-500/50 hover:text-white font-extrabold flex items-center justify-center gap-2'>
                                                <span>Visit</span> <BiLinkExternal />
                                            </button>
                                        </a>


                                        <a href={Items.githubLink} target='_blank'>
                                            <button className='my-5 py-2 w-30 md:w-40 bg-cyan-500 rounded-2xl shadow-lg hover:shadow-cyan-500/50 hover:text-white font-extrabold flex items-center justify-center gap-2'>
                                                <span>GitHub</span> <BiLinkExternal />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    );
}

export default Project;
