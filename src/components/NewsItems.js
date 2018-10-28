import React from 'react'
import styled from 'styled-components';

import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';

import NewsSummary from '../components/NewsSummary';
import breakpoints from '../consts/breakpoints';

const Stories = styled.ul`
  margin-left:0;

  > li {

    display: inline-block;
    list-style: none;
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
        query NewsQuery {
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
      const newsItems =  _.get(data, 'allContentfulNews.edges', []);

      return (
            <Stories>{newsItems.map((newsItem, i) => (<li key={i}><NewsSummary {...newsItem.node} /></li>))}</Stories>
      )}
    }
  />
)

export default IndexPage
