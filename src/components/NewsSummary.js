import React from 'react';
import { Link } from 'gatsby'
import { get } from 'lodash';
import styled from 'styled-components';
import breakpoints from '../consts/breakpoints';


const NewsSummary = styled(Link)`
    display: grid;
    // background-color: ##e8edf3;
    border-style: solid;
    border-width: 1px;
    border-color: #e8edf3;

    grid-template-areas:
        "image"
        "title"
        "body";

        grid-template-rows: auto 30px auto ;
        grid-template-columns auto;

    > img {
        padding: 0px;
        grid-area: image;
        box-sizing: content;
        width:100%;
        height:300px;
        object-fit: cover;
        margin-bottom: 0;
    }

    @media only screen and (min-width: ${breakpoints.desktop}) {
        grid-template-areas:
            "image title"
            "image body";

        grid-template-rows: 30px auto;
        grid-template-columns 40% auto;

        > img {
            grid-area: image;
            box-sizing: content;
            max-width:200px;
            height:200px;
            object-fit: cover;
            margin-bottom: 0;
        }
    }

    text-decoration: none;
    color: black;

    :hover h2 {
        text-decoration: underline;
    }

    padding: 0px;

    > * {
        padding: 4px;
    }



    > h2 {
        grid-area: title;
    }

    > p {
        grid-area: body;
    }
`;


export default ({title, body, image}) => {
    const excerpt = get(body, 'childMarkdownRemark.excerpt', '');
    const imgUrl = get(image, 'resize.src', '');

    return (<NewsSummary to={`news/${title}`}>
        <img alt="" src={imgUrl}/>
        <h2>{title}</h2>
        <p>{excerpt}</p>
    </NewsSummary>)
}
