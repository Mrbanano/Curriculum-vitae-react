import React from 'react';

const Skills = ({children})=>(
    <div className="Skills">
        <div className="Skills-container">
            <div className="Skills-iteam">
                <h5>
                    nombre de la habilidad
                </h5>
                <div className="Skills-line">
                    <span>
                        95%
                    </span>
                </div>
            </div>
        </div>
    </div>
);

export default Skills;