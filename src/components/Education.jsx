import React from 'react';


const Education = ({education}) => (
    <div className="Education">
        <div className="Education-container">
            {
               education.map((edu,index)=>(
                   <div>hola</div>
               ))
            }
        
        </div>
    </div>
);


export default Education;