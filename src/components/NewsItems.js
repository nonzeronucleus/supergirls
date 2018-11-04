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
    margin-bottom:40px;
  }



  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin:20px;

    display:inline-block;
    grid-area: stories
    margin-left:0px;
    float: left;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    padding:0px;

    > li {
      width:50%;
      margin-left:0px;
      margin-right:0px;
      padding-left:2px;
      padding-right: 2px;
    }
  }
`;


const IndexPage = ({newsItems}) => (

    <Stories>
        {newsItems && newsItems.map((newsItem, i) => (<li key={i}><NewsSummary {...newsItem} /></li>))}</Stories>
)


export default IndexPage
