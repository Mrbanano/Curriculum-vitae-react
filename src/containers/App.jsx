import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experince from '../components/Experiences';
import Certificate from '../components/Certificate';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetData'

const App = ()=>{

    const data = useGetData();
    return data.length === 0 ?<h1>Cargando</h1> : (
        <Main>
            <Sidebar>
                <About
                    avatar={data.avatar}
                    name={ data.name}
                    profession={data.profession}
                    bio={data.bio}
                    address={data.address }
                    social={data.social}
                />
            </Sidebar>
            <Info>
                <Education
                    data={data.education}  
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