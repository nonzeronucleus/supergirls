import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';

import Layout from '../components/layout';


const MainPage = styled.div`
  display:grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-template-areas:
   "logo title"
   "logo bodyText ";

   > * {
    margin: 0px;
   }
`;

const MainImg = styled.img`
  grid-area: logo;
  width:256px;
  object-fit:fill;
  margin-right:100px;
  -webkit-filter: drop-shadow(4px 4px 4px rgba(0,0,0,0.9)) opacity(.8) saturare(.7);
  filter: drop-shadow(4px 4px 4px rgba(0,0,0,0.9)) opacity(.8)  saturate(.7);
  // margin-right:0px;
   margin-bottom:20px;
`;

const MainTitle = styled.h1`
  grid-area: title
  margin-left:20px;
`;

const MainBody = styled.div`
  grid-area: bodyText
  margin-left:20px;
  margin-bottom:20px;
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
                aboutBody
              }
              mainPicture {
                resize(width:256) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <MainPage>
          <MainImg src={_.get(data, 'allContentfulAbout.edges[0].node.mainPicture.resize.src', '')} />
          <MainTitle>{_.get(data, 'allContentfulAbout.edges[0].node.aboutTitle', 'Supergirls')}</MainTitle>
          <MainBody>{_.get(data, 'allContentfulAbout.edges[0].node.aboutBody.aboutBody', 'About')}</MainBody>
        </MainPage>
      </Layout>
    )}
    />
)

export default IndexPage
