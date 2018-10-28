import React from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash';
import Layout from '../components/Layout'

export default ({data}) => {
  const html = _.get(data, 'allContentfulPage.edges[0].node.body.childMarkdownRemark.html');
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const query = graphql`
query($id:String) {
  allContentfulPage (filter: {contentful_id: {eq: $id}}) {
    edges {
      node {
        contentful_id
        pageUrl
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}
`;
