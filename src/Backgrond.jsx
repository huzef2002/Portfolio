import React from "react";
import Frontpage from "./Frontpage";
import Particles from "./Particles.jsx";

function Background() {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {/* Particle Background */}
            <div className="fixed top-0 left-0 w-full h-full">
                <Particles 
                    particleColors={['#afa1a1', '#77777']}
                    particleCount={50}
                    particleSpread={5}
                    speed={0.1}
                    particleBaseSize={500}
                    moveParticlesOnHover={false}
                    alphaParticles={true}
                    disableRotation={false}
                />
            </div>

            {/* Video Background */}
            {/* <video 
                className="fixed top-0 left-0 w-full h-full object-cover -z-10" 
                autoPlay 
                loop 
                muted
            >
                <source src="/bg.mp4" type="video/mp4" />
            </video> */}

            {/* Main Content */}
            <Frontpage />
        </div>
    );
}

export default Background;
