import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';
import Header from './Header'
import Footer from './Footer';
import breakpoints from '../consts/breakpoints';

const Layout = styled.div`
  display: flex;
  flex-direction:column;
  height:100%;
`;

const HeaderBar = styled.div`
  flex-shrink: 0;
  display: inline-flex;
`;

const Scrollable = styled.div`
  flex-grow: 1;  /*ensures that the container will take up the full height of the parent container*/
  overflow-y: auto;  /*adds scroll to this container*/
`;

const FooterBar = styled.div`
  flex-shrink: 0;
  display: inline-flex;
  margin-bottom: 0px;
`;

const Body = styled.div`
  margin-left:20px;
  margin-right:20px;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-left:100px;
    margin-right:100px;
    max-width: 1024px;
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
      <Layout>
        <HeaderBar><Header /></HeaderBar>
        <Scrollable className="body">
          {hero}
          <Body>
            {children}
          </Body>
        </Scrollable>
        <FooterBar><Footer /></FooterBar>
        </Layout>
      )}
  />
)
