import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import NewsSummary from '../components/NewsSummary';


const MainPage = styled.div`
  display:flex;
  flex-direction:column;

  > * {
    margin: 0px;
  }

  > h1 {
    margin-left:20px;
    margin-bottom:20px;
  }
  // overflow-y:auto;
 `;

const MainBody = styled.div`
  grid-area: bodyText
  margin-left:20px;
  margin-bottom:20px;
`;

const Stories = styled.ul`
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
    display: inline-block;
    width:48%;
    margin-right:2px;
    // background:blue;
    list-style: none;
    float:right;
    content:"";
    // border-width:1px;
    // border-style:solid;
    // border-color:black;

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
      }/>
  )


  // <Stories>{newsItems.map((newsItem, i) => (<li></li><NewsSummary key={i} {...newsItem.node} />))}</Stories>


export default IndexPage
