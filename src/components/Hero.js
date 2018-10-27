import React from 'react';
import styled from 'styled-components'
import breakpoints from '../consts/breakpoints';

const Hero = styled.div`
    background-image: url("${props => props.img}");
    width:100%;
    min-height:200px;
    background-color:lightsteelblue;
    background-blend-mode:multiply;
    background-repeat: no-repeat;
    background-size:cover;
    margin-bottom:40px;
    grid-area:hero;

    > h2 {
        display: inline-block;
        position: relative;
        top: 10%;
        font: 48px Amatic SC;
        font-weight:bold;

        color:white;
        text-align:center;
        vertical-align:middle;
        width:100%;
        margin-top:10px;
        margin-bottom:auto;
    }

    @media only screen and (min-width: ${breakpoints.mobile}) {
            min-height:300px;

        position: relative;

        > h2 {
            // display: inline-block;
            // position: relative;
            // top: 10%;
            font: 96px Amatic SC;
            // font-weight:bold;

            // color:white;
            // text-align:center;
            // vertical-align:middle;
            // width:100%;
            // margin-top:10px;
            // margin-bottom:auto;
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
            margin-bottom:auto;
        }
    }

    @media only screen and (min-width: ${breakpoints.wide_desktop}) {
        min-height:400px;
    }

    @media only screen and (min-width: ${breakpoints.ultra_wide_desktop}) {
        min-height:500px;
    }

`;



export default ({ img, text }) => (
    <Hero {...{ img }}>
        <h2>
           {text}
        </h2>
    </Hero>
);