import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaGitAlt, FaRust } from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiRedux } from "react-icons/si";

function About() {
    const skills = [
        { Name: "React", Icon: FaReact },
        { Name: "React Redux", Icon: SiRedux },
        { Name: "Tailwind CSS", Icon: SiTailwindcss },
        { Name: "HTML", Icon: FaHtml5 },
        { Name: "CSS", Icon: FaCss3Alt },
        { Name: "JavaScript", Icon: FaJs },
        { Name: "Bootstrap", Icon: FaBootstrap },
        { Name: "C & C++", Icon: SiCplusplus },
        { Name: "Git & GitHub", Icon: FaGitAlt },
        { Name: "APIs", Icon: FaRust },
    ];
    return (
        <>
            <h1 className='text-center text-4xl text-orange-400 underline'> About</h1>
            <div className="md:flex justify-center items-center md:gap-20 h-100% w-screen mt-10 p-15  ">
                <div className="border border-white  md:w-[35%] pb-10 md:pb-20 px-5 md:px-10 rounded-4xl shadow-lg shadow-cyan-500/50 text-sm font-stretch-50% ">
                    <h1 className='text-xl  text-center py-5 md:py-10 md:text-4xl'> Qualification</h1>
                    <div className='text-sm border border-white px-3 md:px-10 bg-black/20 rounded-4xl py-5 '>
                        <h1 className='text-sm md:text-lg'>Shri Gulabrao deokar college of Engineering Jalgaon</h1>
                        <p className='mt-3'>BE in Computer Engineer</p>
                        <p>North Maharashtra Univercity, Jalgaon</p>
                        <p>Passing Year : 2021-24 MAY</p>
                        <p>Percentage : 69.23%    </p>
                        <p> CGPA : 7.57</p>
                    </div>

                    <div className='mt-10 text-sm border border-white px-5 md:px-10 bg-black/20 rounded-4xl py-5'>
                        <h1 className='text-sm md:text-lg'>Government Polytechnic, Jalgaon</h1>
                        <p className='mt-3'>Diploma in Mechanical Engineer</p>
                        <p>MSBTE</p>
                        <p>Passing Year : 2018-21 MAY</p>
                        <p>Percentage : 82.36%    </p>
                    </div>
                </div>

                <div className="items-center justify-center mt-10 text-start md:w-140 py-10 px-5 rounded-4xl md:ms-10 md:flex flex-wrap gap-4 md:gap-5  border border-white shadow-lg shadow-cyan-500/50 relative">
                    {
                        skills.map((items, index) => {
                            return (
                                <div key={index} className='my-2  shadow-lg shadow-cyan-500/50 py-2 px-3 md:px-5 rounded-2xl text-xl flex gap-2 border border-white'>
                                    <items.Icon className="text-orange-700 " size={20} />
                                    <h1 className='text-sm'> {items.Name}</h1>
                                </div>
                            );
                        })
                    }

                </div>
            </div>
        </>
    );
}

export default About;
