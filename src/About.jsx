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
            <div className="col md:flex justify-center items-center gap-20 h-100% w-screen mt-10 ">

                <div className=" border border-white  w-[35%] pb-20 px-10 rounded-4xl shadow-lg shadow-cyan-500/50 text-sm font-stretch-50% ">
                    <h1 className='text-center py-10 text-4xl'> Qualification</h1>
                    <div className='text-sm border border-white px-10 bg-black/20 rounded-4xl py-5 '>
                        <h1 className='text-lg'>Shri Gulabrao deokar college of Engineering Jalgaon</h1>
                        <p>BE in Computer Engineer</p>
                        <p>North Maharashtra Univercity, Jalgaon</p>
                        <p>Passing Year : 2021-24 MAY</p>
                        <p>Percentage : 69.23%    </p>
                        <p> CGPA : 7.57</p>
                    </div>

                    <div className='mt-10 text-sm border border-white px-10 bg-black/20 rounded-4xl py-5'>
                        <h1 className='text-lg'>Government Polytechnic, Jalgaon</h1>
                        <p>Diploma in Mechanical Engineer</p>
                        <p>MSBTE</p>
                        <p>Passing Year : 2018-21 MAY</p>
                        <p>Percentage : 82.36%    </p>
                    </div>
                </div>

                <div className=" text-start w-140 py-10 px-5 rounded-4xl ms-10 flex flex-wrap gap-10  border border-white shadow-lg shadow-cyan-500/50 relative">

                    {
                        skills.map((items, index) => {
                            return (
                                <div key={index} className='shadow-lg shadow-cyan-500/50 py-2 px-5 rounded-2xl text-xl flex gap-2 border border-white'>
                                    <items.Icon className="text-orange-700" size={20} />
                                    <h1> {items.Name}</h1>
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
