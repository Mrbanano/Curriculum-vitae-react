import React from 'react';


const Certificate = props => (
    <div className="Certificate">
        <div className="Certificate-container">
            {props.data.map((cer,index)=>(
                <div className="Certificate-item" key={`Cer-${index}`}>
                    <h3>{cer.title+" by "+cer.plataform}</h3>
                </div>
            ))}   
        </div>
    </div>
);


export default Certificate;