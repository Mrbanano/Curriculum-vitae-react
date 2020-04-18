import React from 'react';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
import H2Sthyled from '../styled/H2Styled';

const Certificate = props => (
    <div className="Certificate">
        <H2Sthyled
            name="Cerficate"
        ></H2Sthyled>
        <div className="Certificate-container">
            {props.data.map((cer,index)=>(
                <div className="Certificate-item" key={`Cer-${index}`}>
                    <H3Styled>{cer.title}</H3Styled>
                    <PStyled name={cer.plataform}></PStyled>
                </div>
            ))}   
        </div>
    </div>
);


export default Certificate;