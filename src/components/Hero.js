import React from 'react';
import styled from 'styled-components'

const Hero = styled.div`
    width:100%;
    min-height:400px;
    grid-area:hero;

    width:100%;
    min-height:400px;
    background-repeat: no-repeat;
    background-size:cover;
    background-image: url("${props => props.img}");
    position: relative;
    background-color:lightsteelblue;
    background-blend-mode:multiply;
    margin-bottom:40px;

    > h2 {
        display: inline-block;
        position: relative;
        top: 10%;
        font: 96px Amatic SC;
        font-weight:bold;

        color:white;
        text-align:center;
        vertical-align:middle;
        width:100%;
        margin-top:10px;
        margin-bottom:auto;
    }

    > p {
        display: inline-block;
        top: 40%;
        font-size:24px;

        color:white;
        text-align:center;
        vertical-align:middle;
        width:50%;
        // min-height:100px;
        // position: relative;
        // background:red;
        margin-top:auto;
        margin-bottom:auto;    }

`;



export default ({ img, text }) => (
    <Hero {...{ img }}>
        <h2>
           {text}
        </h2>
    </Hero>
);