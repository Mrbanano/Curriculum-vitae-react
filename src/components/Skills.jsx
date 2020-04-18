import React from 'react';
import styled, { keyframes } from 'styled-components';
import H3Styled from '../styled/H3Styled';
import H2Sthyled from '../styled/H2Styled';


const SkillsContainer = styled.div`
    margin:1em 0 2em 0;
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:2em;
    grid-row-gap: 0.5em;
`;

const SkillsH5 = styled.h5`
    margin: 0.5em 0;
`;

const SkillsLine = styled.div`
    background-color :#86E04A;
    height: 8px;
    position: relative;
    border-radius:50px;
`;
const move = keyframes`
    0%{background-position: 0 0;}
    100%{background-position: 50px 50px;}
`;

const SkillsSpan = styled.span`
    display:block;
    height:100%;
    width: ${props => props.width};
    border-radius: 8px ;
    background-color:  #86E04A;
    overflow:hidden;
    position:relative;
    box-shadow: inset 0 2px 9px rgba(255,255,255,0.3),
                inset 0 -2px 6px rgba(0,0,0,0.4);
    &:after{
        content:"";
        background-image: linear-gradient(-45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent);
        position:absolute;
        top: 0;
        left:0;
        bottom:0;
        right:0;
        z-index:1;
        background-size:50px 50px ;
        animation: ${move} 4s linear infinite;
        overflow:hidden;     
    }  
`;



const Skills = props => (
    <div className="Skills">
        <H2Sthyled name="Skills"></H2Sthyled>
        <SkillsContainer>
            <div className="Skills-FrontEnd">
                <H3Styled> FrontEnd </H3Styled>
                {props.data.skillsFrontEnd.map((front, index) => (
                    <div className="Skills-item" key={`Front-${index}`}>
                        <SkillsH5>
                            {front.name}
                        </SkillsH5>
                        <SkillsLine>
                            <SkillsSpan
                                width={front.percentage}>
                            </SkillsSpan>
                        </SkillsLine>
                    </div>
                ))}
            </div>
            <div className="Skills-BackEnd">
                <H3Styled> BackEnd </H3Styled>
                {props.data.skillsBackEnd.map((Back, index) => (
                    <div className="Skills-item" key={`Back-${index}`}>
                        <SkillsH5>
                            {Back.name}
                        </SkillsH5>
                        <SkillsLine>
                            <SkillsSpan
                                width={Back.percentage}>
                            </SkillsSpan>
                        </SkillsLine>
                    </div>
                ))}
            </div>
            <div className="Skills-Desing">
                <H3Styled> Desing </H3Styled>
                {props.data.skillsDesing.map((DS, index) => (
                    <div className="Skills-item" key={`Desing-${index}`}>
                        <SkillsH5>
                            {DS.name}
                        </SkillsH5>
                        <SkillsLine>
                            <SkillsSpan
                                width={DS.percentage}>
                            </SkillsSpan>
                        </SkillsLine>
                    </div>
                ))}
            </div>
            <div className="Skills-Hardware">
                <H3Styled> Hardware </H3Styled>
                {props.data.skillsHarware.map((Hw, index) => (
                    <div className="Skills-item" key={`HW-${index}`}>
                        <SkillsH5>
                            {Hw.name}
                        </SkillsH5>
                        <SkillsLine>
                            <SkillsSpan
                                width={Hw.percentage}>
                            </SkillsSpan>
                        </SkillsLine>
                    </div>
                ))}
            </div>
            <div className="Skills-Other">
                <H3Styled> Team Work </H3Styled>
                {props.data.skillsOther.map((Ot, index) => (
                    <div className="Skills-item" key={`Other-${index}`}>
                        <SkillsH5>
                            {Ot.name}
                        </SkillsH5>
                        <SkillsLine>
                            <SkillsSpan
                                width={Ot.percentage}>
                            </SkillsSpan>
                        </SkillsLine>
                    </div>
                ))}
            </div>
        </SkillsContainer>
    </div>
);

export default Skills;