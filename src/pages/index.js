import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import NewsSummary from '../components/NewsSummary';
import breakpoints from '../consts/breakpoints';


const MainPage = styled.div`

  @media only screen and (min-width: ${breakpoints.tablet}) {
    display:flex;
    flex-direction:column;

    > * {
      margin: 0px;
    }

    > h1 {
      margin-left:20px;
      margin-bottom:20px;
    }
  }
`;

const MainBody = styled.div`

  @media only screen and (min-width: ${breakpoints.tablet}) {
    grid-area: bodyText
    margin-left:20px;
    margin-bottom:20px;
  }
`;

const Stories = styled.ul`
  margin-left:0;

  > li {

    display: inline-block;
    list-style: none;
    // float:right;
  }


  @media only screen and (min-width: ${breakpoints.tablet}) {
    display:inline-block;
    grid-area: stories
    margin-left:0px;
    margin-bottom:20px;
    float: left;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    padding:0px;

    > li {
      width:48%;
      margin-right:2px;
      float:right;
    }
  }
`;


const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        allContentfulAbout {
          edges {
            node {
              aboutTitle
              aboutBody {
                childMarkdownRemark {
                  html
                }

                aboutBody
              }
              mainPicture {
                resize(width:1024) {
                  src
                }
              }
            }
          }
        }
        allContentfulNews {
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
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const mainSiteData = _.get(data, 'allContentfulAbout.edges[0].node', '');
      const newsItems =  _.get(data, 'allContentfulNews.edges', []);

      return (
        <Layout hero={
          <Hero
            img = {_.get(mainSiteData, 'mainPicture.resize.src', '')}
            text = {_.get(mainSiteData, 'aboutTitle', 'Supergirls')}
          />}>
          <MainPage>
            <MainBody dangerouslySetInnerHTML={{ __html: _.get(mainSiteData, 'aboutBody.childMarkdownRemark.html', 'About') }} />
            <Stories>{newsItems.map((newsItem, i) => (<li key={i}><NewsSummary {...newsItem.node} /></li>))}</Stories>

            </MainPage>
        </Layout>
      )}
    }
  />
)

export default IndexPage
