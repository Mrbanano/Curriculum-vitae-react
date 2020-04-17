import React from 'react';

const Skills = props => (
    <div className="Skills">
        <div className="Skills-container">
            <div className="Skills-FrontEnd">
                {props.data.skillsFrontEnd.map((front, index) => (
                    <div className="Skills-item" key={`Front-${index}`}>
                        <h5>
                            {front.name}
                        </h5>
                        <div className="Skills-line">
                            <span>
                                {front.percentage}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="Skills-BackEnd">
                {props.data.skillsBackEnd.map((Back, index) => (
                    <div className="Skills-item" key={`Back-${index}`}>
                        <h5>
                            {Back.name}
                        </h5>
                        <div className="Skills-line">
                            <span>
                                {Back.percentage}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="Skills-Desing">
                {props.data.skillsDesing.map((DS, index) => (
                    <div className="Skills-item" key={`Desing-${index}`}>
                        <h5>
                            {DS.name}
                        </h5>
                        <div className="Skills-line">
                            <span>
                                {DS.percentage}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="Skills-Hardware">
                {props.data.skillsHarware.map((Hw, index) => (
                    <div className="Skills-item" key={`HW-${index}`}>
                        <h5>
                            {Hw.name}
                        </h5>
                        <div className="Skills-line">
                            <span>
                                {Hw.percentage}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="Skills-Other">
                {props.data.skillsOther.map((Ot, index) => (
                    <div className="Skills-item" key={`Other-${index}`}>
                        <h5>
                            {Ot.name}
                        </h5>
                        <div className="Skills-line">
                            <span>
                                {Ot.percentage}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Skills;