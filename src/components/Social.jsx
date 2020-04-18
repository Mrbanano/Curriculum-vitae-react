import React from 'react';
import styled from 'styled-components';

const socialStyle = styled.div`
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


const Social = props =>(
    <socialStyle>
        {props.social &&
            <SocialUl>
                {props.social.map((item,index)=>(
                    <Socialli   key={`Social-${index}`} >
                        <SocialAnchor  target="_blank" href={item.url}>{item.name}</SocialAnchor>
                    </Socialli>
                ))}
            </SocialUl>
        }
    </socialStyle>
);

export default Social;