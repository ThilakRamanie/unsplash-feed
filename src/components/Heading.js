import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    max-width:70rem;
    margin:2rem auto;
    text-align:center;
`;

const H1 = styled.h1`
    font-family:sans-serif;
    margin-bottom:1em; 
`;

export const Heading = () => {
    return (
       <Header>
           <H1>
               Image showcase by BOLT
           </H1>
           <p>A demo project to clear the first round of interview!</p>
       </Header>
    );
} 