import React from 'react';

function Contact() {
    return (
        <div className='col md:flex h-screen w-screen justify-center items-center'>
            <div className='md:w-[45%] md:ms-40 flex justify-center items-center  '>
                <form className='p-10 border border-white rounded-4xl mx-10 md:mx-20 shadow-lg shadow-cyan-500/50'>
                    <p> Name : </p>
                    <input className='bg-black/50 h-10 w-full rounded-t-md' type='text' ></input>
                    <label>Email : </label>
                    <input className='bg-black/50 h-10 w-full rounded-t-md' type='email' ></input>
                    <label>Massege : </label>
                    <textarea className='bg-black/50 h-40 w-full rounded-t-md' type='textarea' ></textarea>
                    <button className='my-5 py-2 w-30 md:w-40 bg-orange-400 rounded-md shadow-lg hover:shadow-cyan-500/50 hover:text-white font-extrabold flex items-center justify-center gap-2'>
                        send 
                    </button>
                </form>
            </div>
            <div className='md:w-[35%] flex justify-center items-center text-6xl mt-20 md:mt-0'>
                <h1> Say hi..</h1>
            </div>
        </div>
    );
}

export default Contact;
