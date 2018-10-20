import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';

import Layout from '../components/Layout';
import Hero from '../components/Hero';


const MainPage = styled.div`
  display:grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-template-areas:
  "logo title"
  "logo bodyText ";

  > * {
    margin: 0px;
 }`;

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
  margin-bottom:20px;
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
                  resize(width:1024) {
                    src
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const mainSiteData = _.get(data, 'allContentfulAbout.edges[0].node', '');

        return (
          <Layout hero={<Hero img = {_.get(mainSiteData, 'mainPicture.resize.src', '')} />}>
            <MainPage>
              <MainTitle>{_.get(mainSiteData, 'aboutTitle', 'Supergirls')}</MainTitle>
              <MainBody>{_.get(mainSiteData, 'aboutBody.aboutBody', 'About')}</MainBody>
            </MainPage>
          </Layout>
        )}
      }/>
  )




export default IndexPage
