import React from 'react';
import { useEffect, useState } from 'react';

function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Project', id: 'project' },
        { name: 'Experie', id: 'experience' },
        { name: 'Contact', id: 'contact' }
    ];

    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='absolute flex-col mt-20 space-y-15 md:p-3 fixed z-50'>
            {navItems.map((item, index) => (
                <div key={index} className="group relative">
                    <button
                        onClick={() => handleClick(item.id)}
                        className={`-rotate-90 md:text-2xl transition-all duration-300 ${activeSection === item.id
                                ? 'text-orange-400 font-bold underline'
                                : 'text-gray-300 hover:text-orange-300'
                            }`}
                    >
                        {item.name}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Navbar;