import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    font-family: 'Roboto', 'sans-serif';
    font-weight: 300;
    letter-spacing: .8px;
    margin: 1em 0 0 0;
    color: #4ED647;
`;

const H2Sthyled =({ name }) => <StyledH2>{name}</StyledH2>
export default H2Sthyled;