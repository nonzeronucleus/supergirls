import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import _ from 'lodash';

const NewsPage = styled.div `
  margin-top:10px;
  // margin-left:10px;
`;


export default ({data}) => {
    const node = _.get(data, 'allContentfulNews.edges[0].node');
    const { title, image, body} = node;
    const html = _.get(body, 'childMarkdownRemark.html');

    return (
        <Layout>
            <NewsPage>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </NewsPage>
        </Layout>
    )
}

export const query = graphql`
    query($id:String) {
        allContentfulNews (filter: {contentful_id: {eq: $id}}) {
        edges {
            node {
            title
            image {
                file {
                url
                }
            }

            body {
                childMarkdownRemark {
                excerpt
                html
                }
            }
            }
        }
        }
    }
`;
