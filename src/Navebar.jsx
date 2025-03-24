import React from 'react';

function Navebar() {

    const naveName = [{Name : 'Home'},{Name: 'About'}, { Name:'Project'},{Name: 'Contact'}]
    return (
        <div className='absolute flex-col  mt-15 space-y-15 md:p-3  fixed'>
            {
                naveName.map((items, index) => {
                    return (
                        <div key={index}>
                            <a href='#'>
                                <h1 className='-rotate-90 text-orange-400 md:text-2xl hover:underline' >{items.Name}</h1>
                            </a>
                        </div>);

                })
            }
            {/* <div>
                <a href='#'>
                    <h1 className='-rotate-90  hover:text-orange-400 text-2xl'>Home</h1>
                </a>
            </div>


            <div>
                <a href='#'>
                    <h1 className='-rotate-90  hover:text-cyan-500 text-2xl'>About</h1>
                </a>
            </div>
            <div>
                <a href='#'>
                    <h1 className='-rotate-90  hover:text-cyan-500 text-2xl'>Project</h1>
                </a>
            </div>
            <div >
                <a href='#'>
                    <h1 className='-rotate-90  hover:text-cyan-500 text-2xl'>Contact</h1>
                </a>
            </div> */}
        </div>
    );
}

export default Navebar;
