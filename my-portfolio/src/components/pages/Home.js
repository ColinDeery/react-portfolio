import React from 'react';
import background from '../../assets/fabio-oyXis2kALVg-unsplash.jpg'

export default function Home() {
    return (

        <div className='home-container'>
            <img className='home-hero-image' src={background} alt="background of tables and chairs inside a cafe" />
            <div className="home-text">
                <h1>Aspiring Full-Stack Developer</h1>
            </div>
        </div>

    );
}