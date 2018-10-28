import React from 'react'
// import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';
import Header from './Header'
import Footer from './Footer';
import breakpoints from '../consts/breakpoints';

const Body = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0;
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
      margin-left:20px;
      margin-right:20px;
      margin-top:20px;
      @media only screen and (min-width: ${breakpoints.tablet}) {
        margin-left:100px;
        margin-right:100px;
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
    render={data => (
      <Body>
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
    )}
  />
);
