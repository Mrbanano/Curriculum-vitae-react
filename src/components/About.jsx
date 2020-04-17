import React from 'react';
import Social from './Social'
import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align:center;
`;




const About = ({avatar,name,bio,profession,address,social}) => (
    <AboutStyle>
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
                <Social 
                    social={social}
                />
            </div>
        </div>
    </AboutStyle>
);

export default About;