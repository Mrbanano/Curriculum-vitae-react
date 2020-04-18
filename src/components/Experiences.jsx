import React from 'react'; 
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
import H2Sthyled from '../styled/H2Styled';

const Experiences = props =>(
    <div className="Experiences">
        <H2Sthyled
            name="Experiences"
        ></H2Sthyled>
        <div className="Experiences-container">
            {props.data.map(( xp , index) => (
                <div className="Experiences-item" key={`Xp-${index}`}>
                    <H3Styled>
                        {xp.jobTitle+"  "+xp.company}
                        <span>{xp.startDate+"-"+xp.endDate}</span>
                    </H3Styled>
                    <PStyled name={xp.jobDescription}></PStyled>
                </div>
            ))}  
        </div>
    </div>
);

export default Experiences;