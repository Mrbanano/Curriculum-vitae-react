import React from 'react';

const About = ({avatar,name,bio,profession,address,social}) => (
    <div className="About">
        <div className="About-container">
            <div className="About-avatar">
                <figure>
                    <img width="200px" src={avatar} alt="About-Avatar"/>
                </figure>
            </div>
            <div className="About-name">
                <h2>
                    {name}
                </h2>
            </div>
            <div className="About-profession">
                <p>
                    {profession}
                </p>
            </div>
            <div className="About-description">
                <p>
                   {bio}
                </p>
            </div>
            <div className="location">
                <address>
                    {address}
                </address>
            </div>
            <div className="About-social">
                Redes sociales
            </div>
        </div>
    </div>
);

export default About;