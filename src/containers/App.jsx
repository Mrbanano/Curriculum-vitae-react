import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Social from '../components/Social';
import Education from '../components/Education';
import Experince from '../components/Experiences';
import Certificate from '../components/Certificate';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetData'

const App = ()=>{

    const data = useGetData();
    console.log()
    return(
        <Main>
            <Sidebar>
                <About
                    avatar={data.avatar}
                    name={"Alvaro Castillo"|| data.address}
                    profession={data.profession}
                    bio={data.bio}
                    address={"Puebla,Mexico" || data.address }
                    social={data.social}
                />
            </Sidebar>
            <Info>
                <Education
                    education={data.education}
                    
                />
                <Experince
                      data={data.experience}
                />
                <Certificate
                      data={data.certificate}
                />
                <Skills
                     
                />
            </Info>
        </Main>
    );
}

export default App;