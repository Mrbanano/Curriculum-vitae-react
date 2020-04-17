import React from 'react'; 


const Experiences = props =>(
    <div className="Experiences">
        <div className="Experiences-container">
            {props.data.map(( xp , index) => (
                <div className="Experiences-item" key={`Xp-${index}`}>
                    <h3>{xp.jobTitle+"  "+xp.company}</h3>
                    <span>{xp.startDate+"-"+xp.endDate}</span>
                    <p>{xp.jobDescription}</p>
                </div>
            ))}  
        </div>
    </div>
);

export default Experiences;