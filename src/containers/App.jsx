import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experince from '../components/Experiences';
import Certificate from '../components/Certificate';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetData';


const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato',sans-serif;
        margin:0;
        padding:0;
        background-color:#f5f5f5;
    }
`;


const LoadingImg = styled.img`
    display:grid;
    grid-template-columns:1fr;
    margin: 0 auto;
    padding-top:50%;
`;


const App = ()=>{

    const data = useGetData();
    return data.length === 0 ?<LoadingImg src="https://www.booooooom.com/wp-content/uploads/2017/12/avatar-green.gif" alt=""/> : (
        <Main>  
            <GlobalStyle></GlobalStyle>
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
                     data={data}
                />
            </Info>
        </Main>
    );
}

export default App;