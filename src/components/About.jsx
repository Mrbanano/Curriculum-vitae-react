import React from 'react';
import Social from './Social'
import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align:center;
`;

const AboutAvatar= styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    width:160px;
    height:160px;
    border-radius:100%;
    border: 2px solid #E91E63;
    margin : 0 auto ;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6)
`;

const AboutName = styled.div`
    text-align:center;
`;
const AboutH2 =styled.h2`
    font-family: 'Roboto', 'sans-serif';
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: 0.5em 0 0 0;
    color #C2185B;
`;

const AboutProfesion =styled.p`
    margin 0.2em 0 1em 0;
    letter-spacing 2.6px;
    font-weight:300;
    color #C2185B
`;

const AboutBio = styled.p`
    color:#757575;
    font-size:1em;
    font-weight:300;
`;

const AboutLocation = styled.address`
color:#757575;
font-size:1em;
font-weight:300;
`;



const About = ({avatar,name,bio,profession,address,social}) => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg  src={avatar} alt="About-Avatar"/>
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>
                    {name}
                </AboutH2>
            </AboutName >
            <div className="About-profession">
                <AboutProfesion>
                    {profession}
                </AboutProfesion>
            </div>
            <div className="About-description">
                <AboutBio>
                   {bio}
                </AboutBio>
            </div>
            <div className="location">
                <AboutLocation>
                    {address}
                </AboutLocation>
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