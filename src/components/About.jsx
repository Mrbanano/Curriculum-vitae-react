import React from 'react';

const About = ({avatar,name,bio,profession,address,social}) => (
    <div className="About">
        <div className="About-container">
            <div className="About-avatar">
                <figure>
                    <img width="200px" src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/p960x960/81699037_2527782457320632_2607490699989352448_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=BHgn1T4U878AX8soxfe&_nc_ht=scontent-qro1-1.xx&_nc_tp=6&oh=266e6d5258aa676b7d043da3ca3173ae&oe=5EC08659" alt="About-Avatar"/>
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