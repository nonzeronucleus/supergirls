import React from 'react';
import { Link } from 'gatsby'
import { get } from 'lodash';
import styled from 'styled-components';


const NewsSummary = styled(Link)`
    display: grid;
    grid-template-areas:
        "image title"
        "image body";

    grid-template-rows: 30px auto;
    grid-template-columns 40% auto;
    text-decoration: none;
    color: black;

    :hover h2 {
        text-decoration: underline;
    }

    padding: 0px;

    > * {
        padding: 4px;
    }

    > img {
        grid-area: image;
        box-sizing: content;
        width:100%;
        height:100%;
        object-fit: cover;
        margin-bottom: 0;
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
