import React from 'react'
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import breakpoints from '../consts/breakpoints';
import {FaEnvelope} from "react-icons/fa";


const Header = styled.nav`
  // position: fixed;
  left: 0px;
  box-sizing: border-box;
  z-index: 3;
  width: 100%;
  height: 2.77778rem;
  font-weight: 500;
  color: white;
  // background: rgb(219, 112, 147);
  background: green;
  transition: background 300ms ease-out 0s;
  padding: 0px;
  // margin-bottom:20px;


  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 1.11111rem;
`;

const HeaderSection = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  > * {
    margin-right:12px;
  }

  > a {
    text-decoration: none;
    color: inherit;
    background-color: transparent;
    padding-right:25px;
    padding-left:25px;
    border-right-style: solid;
    border-right-width:1px;

    @media only screen and (min-width: ${breakpoints.desktop}) {
      font-size:xx-large;
    }


    :hover {
      color: red;
    }
  }
`;

const LinkSection = styled(HeaderSection)`
  -webkit-box-pack: start;
  justify-content: flex-start;

`;

const SocialSection = styled(HeaderSection)`
  -webkit-box-pack: end;
  justify-content: flex-end;

`;

const Logo = styled.div`
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  background-size: contain;
  background-image: ${props => 'url('+props.url+')'};
  width: 48px;
  height: 48px;
  background-position: center center;
  background-repeat: no-repeat;
`;



export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        allContentfulAbout {
          edges {
            node {
              siteLogo {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Header>
        <LinkSection><Logo url={data.allContentfulAbout.edges[0].node.siteLogo.file.url}/>
          <Link to="/">Home</Link>
          <Link to="/supergirls-events">Supergirl Events</Link>
          <Link to="/other-events">Other Events</Link>
        </LinkSection>
        <SocialSection>
        <a href="mailto:supergirlsnotts@gmail.com"><FaEnvelope/></a>
        </SocialSection>
      </Header>
    )}
  />
)
