import React from 'react';

const About = ({ children }) => (
    <div className="About">
        <div className="About-container">
            <div className="About-avatar">
                <figure>
                    <img src="/" alt="About-Avatar"/>
                </figure>
            </div>
            <div className="About-name">
                <h2>
                    Alvaro Castillo
                </h2>
            </div>
            <div className="About-profession">
                <p>
                    System Engineer
                </p>
            </div>
            <div className="About-description">
                <p>
                    Soy desarollador web y me encanta aprender
                </p>
            </div>
            <div className="location">
                <address>
                    Puebla,Mexico
                </address>
            </div>
            <div className="About-social">
                social
            </div>
        </div>
    </div>
);

export default About;