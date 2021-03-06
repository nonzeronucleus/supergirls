import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/Hero';
import _ from 'lodash';
import Layout from '../components/Layout'
import Stringify from '../components/Stringify';
import NewsItems from '../components/NewsItems';


export default ({data}) => {
  const node = _.get(data, 'allContentfulPage.edges[0].node');
  const html = _.get(node, 'body.childMarkdownRemark.html');
  const img = _.get(node, 'bannerImg.localFile.childImageSharp.fixed.src', null);
  const text = _.get(node, 'bannerText', null);
  const newsItems = _.get(node, 'newsItems', null);

  const hero = img &&  <Hero {...{img, text}} />

  return (
    <Layout {...{hero}}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {newsItems && (<NewsItems {...{newsItems}} />)}
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
          bannerImg {
            resize(width:1024, height:400) {
              src
            }
            localFile {
              childImageSharp {
                fixed(width: 1024, height: 400) {
                  src
                }
              }
            }
          }
          bannerText
          newsItems {
            title
            image {
              resize(width:800 , height:800, cropFocus: BOTTOM) {
                src
              }
              file {
                url
              }
              localFile {
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
            }
            summary
            body {
              childMarkdownRemark {
                excerpt
              }
            }
          }
        }
      }
    }
  }
`;
