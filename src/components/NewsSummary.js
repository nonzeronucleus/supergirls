import React from 'react';
import { Link } from 'gatsby'
import { get } from 'lodash';
import styled from 'styled-components';
import breakpoints from '../consts/breakpoints';


const NewsSummary = styled(Link)`
    display: grid;

    grid-template-areas:
        "image"
        "title"
        "body";

    grid-template-rows: 160px 30px auto;
    grid-template-columns auto;

    > img {
        grid-area: image;
        box-sizing: content;
        width:160px;
        height:160px;
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
    const imgUrl = get(image, 'file.url', '');

    return (<NewsSummary to={title}>
        <img alt="" src={imgUrl}/>
        <h2>{title}</h2>
        <p>{excerpt}</p>
    </NewsSummary>)
}



// export default ({title, body, image}) => {
//     const excerpt = get(body, 'childMarkdownRemark.excerpt', '');
//     const imgUrl = get(image, 'file.url', '');

//     return (
//         <NewsSummary>
//             <img src={imgUrl}></img>
//             <h2>{title}</h2>
//             <p>{excerpt}</p>
//         </NewsSummary>
//     );
// }
