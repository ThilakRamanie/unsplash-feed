import React from 'react';
import Styled from 'styled-components';

const IMG = Styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    background-color: grey;
    border-radius:20px;
    box-shadow: 5px 15px #888888;
`;
const DIV = Styled.div `
    vertical-align: top;
    display: inline-block;
    text-align: center;
    background-color:#222;
    position: relative;
    
`;
const P = Styled.p`
    // margin-bottom:1rem;
    // background-color:#222;
    padding:0;
    margin:0;
    display: block;
    margin:2rem;
    position: absolute;
  bottom: -2em;
  right: 0em;
  color:white;
  background: rgba(0, 0, 0, 0.5);
`;

export const UnsplashImage = (props) => {
    return (
        <DIV>
            <IMG src={props.url} alt="" key={props.key} >
            
            </IMG>
            <P>@{props.description.toUpperCase()}</P>
        </DIV>
    )
} 