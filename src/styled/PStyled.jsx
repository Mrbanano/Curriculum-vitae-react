import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    font-family: 'Roboto', 'sans-serif';
    font-weight: 300;
    margin: 0.5em 0 1.2em 0;
    color: #757575;
`;

const PSthyled =({ name }) => <StyledP>{name}</StyledP>

export default PSthyled;