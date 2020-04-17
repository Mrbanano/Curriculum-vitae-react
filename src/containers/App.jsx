import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Social from '../components/Social';
import Education from '../components/Education';
import Experince from '../components/Experiences';
import Certificate from '../components/Certificate';
import Skills from '../Skills';

const App = ()=>{
    return(
        <Main>
            <Sidebar>
                <About></About>
            </Sidebar>
            <Info>
                <Education></Education>
                <Experince></Experince>
                <Certificate></Certificate>
                <Skills></Skills>
            </Info>
        </Main>
    );
}

export default App;