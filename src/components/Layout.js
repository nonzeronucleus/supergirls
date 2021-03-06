
import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';
import styled from 'styled-components';
import Header from './Header'
import Footer from './Footer';
import breakpoints from '../consts/breakpoints';

const Body = styled.div `
    display: flex;
    flex-direction: column;
    // margin: 0;
    overflow: hidden;
    height:100%;


    .header {
      flex: 0 0 auto;
    }

    .body {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      overflow: auto;
    }

    .content {
      flex: 1 1 auto;
    }

    .main {
      margin-left:auto;
      margin-right:auto;
      max-width: 800px;
      padding-left:40px;
      padding-right:40px;

      margin-top:20px;
      @media only screen and (min-width: ${breakpoints.tablet}) {
        padding-left:40px;
        padding-right:40px;

        // margin-left:100px;
        // margin-right:100px;
        max-width: 800px;
      }

      @media only screen and (min-width: ${breakpoints.desktop}) {
        padding-left:40px;
        padding-right:40px;

        // margin-left:100px;
        // margin-right:100px;
        max-width: 1024px;
      }

    }

    .footer {
      flex: 0 0 auto;
    }

`;


export default ({ children, hero }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const title=_.get(data, 'site.siteMetadata.title','Supergirls Notts');
      const description=_.get(data, 'site.siteMetadata.description','');

      return (
        <Body>
          <Helmet>
            <title>
              {title}
            </title>
            <link rel="canonical" href="http://supergirls-notts.co.uk" />
            <meta property="og:description" content={description}></meta>
            <meta name="description" content={description} />
            <meta property="og:title" content={title}></meta>
          </Helmet>
          <div className="header">
            <Header />
          </div>
          <div className="body">
            <div className="content">
              {hero}
              <div className="main">
                {children}
              </div>
            </div>
            <div className="footer"><Footer /></div>
          </div>
        </Body>
      )
    }}
  />
);
