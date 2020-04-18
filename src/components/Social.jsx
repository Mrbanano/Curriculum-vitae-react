import React from 'react';
import styled, { ThemeProvider } from 'styled-components';


const SocialContainer = styled.div`
   margin: 0 auto;
   display:block;
`;
const SocialUl = styled.ul`
    list-style-type:none;
    margin:0;
    padding:0;
`;

const Socialli = styled.li`
    margin:  0 1em 0 0;
    display: inline;
`;

const SocialAnchor = styled.a`
    color:#212121;
    text-decoration:none;
    font-size:1.2em;
`;

const SocialIcon = styled.i`
    margin:1em 0 0 0;
    color: ${props => props.theme.color} ;
`;

const facebook = {
    color: "#3b5998"
}

const twitter = {
    color: "#38A1F3"
}

const linkedin = {
    color: "#0e76a8"
}

const github = {
    color: "#333"
}

const getColor = (name) =>{
    if(name === 'facebook')return facebook;
    if(name === 'twitter')return twitter;
    if(name === 'linkedin')return linkedin;
    if(name === 'github')return github;
}

const Social = props => (
    <SocialContainer>
        {props.social &&
            <SocialUl>
                {props.social.map((item, index) => (
                    <Socialli key={`Social-${index}`} >
                        <SocialAnchor target="_blank" href={item.url}>
                            <ThemeProvider theme={getColor(item.name)}>
                                <SocialIcon className={`fab fa-${item.name} `}></SocialIcon>
                            </ThemeProvider>
                        </SocialAnchor>
                    </Socialli>
                ))}
            </SocialUl>
        }
    </SocialContainer>
);

export default Social;