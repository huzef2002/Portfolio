import React from 'react';
import { GrInstallOption } from "react-icons/gr";

function Home() {
    return (
        <div className="col md:flex justify-center items-center gap-20 h-screen w-screen my-10">

            <div className=" md:w-[35%] flex justify-center items-center pt-3">
                <div className='border-1 border-white rounded-4xl p-10 pb-0 shadow-lg shadow-cyan-500/50'>
                    <img className='h-55 w-40 md:h-80 md:w-60' src='/Huzef.png' ></img>
                </div>
            </div>

            <div className="text-start md:w-[35%]  md:py-20 py-10 px-5 mx-10 md:mx-0 rounded-4xl">
                <h1 className="md:text-5xl text-2xl font-bold  ">
                    Hi,<br /> I am Huzef<br /><span className='text-orange-400'>Frontend Developer</span>
                </h1>
                <p className="mt-4 text-sm font-stretch-50%">
                    As a web developer, I possess robust expertise in HTML, CSS, JavaScript, and React.js.
                    My commitment to staying abreast of industry trends, coupled with collaborative and problem-solving skills,
                    make me a great fit for any development team. I am enthusiastic about contributing to innovative projects and
                    consistently eager to embrace new technologies within the field.
                </p>
                <a href='https://drive.google.com/file/d/1Ms_PLRJE4XQX6NKm8B2ZwCKfVKQ27tZH/view?usp=drive_link' download className='flex mt-5 text-orange-400 font-bold'>RESUME.<span className='ms-2 justify-center items-center flex'> <GrInstallOption/></span></a>
            </div>
        </div>
    );
}

export default Home;
