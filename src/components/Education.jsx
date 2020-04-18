import React from 'react';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
import H2Sthyled from '../styled/H2Styled';

const Education = props => (
    <div className="Education">
        <H2Sthyled
            name="Education"
        ></H2Sthyled>
        <div className="Education-container">
            {props.data.map((edu, index) => (
                <div className="Education-item" key={`Edu-${index}`}>
                    <H3Styled>
                        {edu.degree + "    " + edu.institution}
                        <span>{edu.startDate + "-" + edu.endDate}</span>
                    </H3Styled>
                    <PStyled name={edu.description}></PStyled>
                </div>
            ))}
        </div>
    </div>
);


export default Education;