import React from 'react';
import styled from 'styled-components'

const Hero = styled.div`
    width:100%;
    min-height:400px;
    // background-repeat: no-repeat;
    // background-size:cover;
    grid-area:hero;
    // background-image: url("${props => props.img}");
    // position: relative;
    // filter: grayscale(40%);

    > div {
        width:100%;
        min-height:400px;
        background-repeat: no-repeat;
        background-size:cover;
        // grid-area:hero;
        background-image: url("${props => props.img}");
        position: relative;
        filter: contrast(80%) brightness(80%) grayscale(20%);

    }

    margin-bottom:40px;


    > h2 {
        display: inline-block;
        position: absolute;
        top: 10%;
        font-size:48px;
        font: 64px Lato, Mono-Space;

        color:white;
        text-align:center;
        vertical-align:middle;
        width:100%;
        // min-height:100px;
        // position: relative;
        // background:red;
        margin-top:auto;
        margin-bottom:auto;
    }

    > p {
        display: inline-block;
        position: absolute;
        top: 20%;
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



export default ({ img }) => (
    <Hero {...{ img }}>
        <div>
        </div>
        <h2>
            Nottingham Supergirls
        </h2>
    </Hero>
);