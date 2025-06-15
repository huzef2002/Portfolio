import React from 'react';
import { BiLinkExternal } from "react-icons/bi";

function Experience() {
    const ExperienceData = [
        {
            title: "Frontend Developer Intern | HealthLatic Life Style Company",
            description: (
                <ul className="list-disc pl-5 space-y-3 text-base font-stretch-50%">
                    <li><span className="font-bold">Team Collaboration:</span> Working in a 12-member frontend team using Git/GitHub for version control and agile project management</li>
                    <li><span className="font-bold">Daily Standups:</span> Participating in cross-functional meetings at 8 PM with frontend, backend, and QA teams to track progress</li>
                    <li><span className="font-bold">AI-Assisted Development:</span> Utilizing AI tools for code optimization, debugging assistance, and continuous learning</li>
                    <li><span className="font-bold">Real-Time Systems:</span> Implementing live API integrations between Next.js frontend and backend services for dynamic content</li>
                    <li><span className="font-bold">Full-Stack Exposure:</span> Developing with Next.js/TypeScript while preparing to work with Express.js backend</li>
                    <li><span className="font-bold">Health Tech Focus:</span> Building features for fitness plans, medical content, and reward systems using plain CSS</li>
                </ul>
            ),
            duration: "May 2025 - Present",
            companyLink: "https://www.linkedin.com/company/healthletic-lifestyle/posts", // Add your company URL here
            skills: ["React", "Next.js", "TypeScript", "Express.js", "API Integration", "CSS"],
        },
        {
            title: "Frontend Developer Intern | Zido Development Company",
            description: (
                <ul className="list-disc pl-5 space-y-3 text-base font-stretch-50%">
                    <li><span className="font-bold">MERN Stack Development:</span> Built an interactive t-shirt superhero e-commerce platform using MongoDB, Express.js, React.js, and Node.js</li>
                    <li><span className="font-bold">Authentication System:</span> Implemented secure user authentication using Firebase Auth with email/password and social login options</li>
                    <li><span className="font-bold">Component Library:</span> Developed reusable React components for the admin dashboard with Tailwind CSS styling</li>
                    <li><span className="font-bold">Team Collaboration:</span> Worked in an agile team using GitHub for version control and project management</li>
                    <li><span className="font-bold">API Integration:</span> Connected frontend with backend REST APIs for product data and user management</li>
                    <li><span className="font-bold">UI Development:</span> Created responsive and interactive user interfaces with React hooks and modern JavaScript</li>
                </ul>
            ),
            duration: "Feb 2025 - May 2025",
            companyLink: "https://www.linkedin.com/company/zidio-development/posts",
            skills: ["MERN stack", "React", "Express.js", "API Integration", "Tailwind CSS", "JavaScript", "Firebase"],
        }
    ];

    return (
        <div className='col w-screen [&::-webkit-scrollbar]:hidden'>
            <h1 className='text-center text-4xl text-orange-400 underline my-10'>Experience</h1>
            {
                ExperienceData.map((Items, index) => {
                    return (
                        <div key={index} className='col md:flex justify-center items-center gap-20 h-full w-full my-10 top-0 bottom-0'>

                            <div className='md:w-[45%] flex justify-center items-center mt-5 mx-20'>
                                <div className='border-1 border-white rounded-4xl md:p-10 p-5 md:pb-7 shadow-lg shadow-cyan-500/50'>
                                    <div>
                                        <h1 className='text-center text-2xl md:my-5'>{Items.title}</h1>
                                        <div className='mt-3'>
                                            {Items.description}
                                        </div>
                                        <p className='mt-3 text-orange-400 font-bold'>{Items.duration}</p>
                                        <div className='flex flex-wrap gap-2 mt-3'>
                                            {Items.skills.map((skill, i) => (
                                                <span key={i} className='px-2 py-1 text-xs rounded-full bg-black/20 border border-white'>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {Items.companyLink && (
                                        <div className='flex justify-center items-center gap-5 md:gap-10 mt-5'>
                                            <a href={Items.companyLink} target='_blank' rel="noopener noreferrer">
                                                <button className='md:my-5 py-2 w-30 md:w-40 bg-cyan-500 rounded-2xl shadow-lg hover:shadow-cyan-500/50 hover:text-white font-extrabold flex items-center justify-center gap-2'>
                                                    <span>View</span> <BiLinkExternal />
                                                </button>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    );
}

export default Experience;