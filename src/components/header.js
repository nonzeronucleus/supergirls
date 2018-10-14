import React from 'react'
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import {FaTwitter, FaFacebook} from "react-icons/fa";
// import FaFacebook from "react-icons/fa/facebook";
// import FaGooglePlus from "react-icons/fa/google-plus";


const Header = styled.nav`
  // position: fixed;
  left: 0px;
  box-sizing: border-box;
  z-index: 3;
  width: 100%;
  height: 2.77778rem;
  font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 0.833333rem;
  font-weight: 500;
  color: white;
  // background: rgb(219, 112, 147);
  background: green;
  transition: background 300ms ease-out 0s;
  padding: 0px;


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





// const HeaderElement = styled.div`
// `;

// const StyledLogo = styled.img`
//   width:64px;
//   height:64px;
//   padding: 0px;
//   margin:0px;
// `;

// const SocialLinks = styled.div`
//   // display: grid;
//   // grid-template-columns: repeat(auto-fill, 1fr);
//   // background-color:red;
//   // width:200px;
//   `;


// const SocialLink = styled.div`
//   // background-color: deepPink;
//   // width:auto;
//   // padding: 20px;
//   // color: #fff;
//   // border: 1px solid #fff;
//   justify-self: start;

// `;


// const CenteredDiv = styled.div`
// align-self: center;
// justify-self: center;
// `;


// export default ({ children }) => (
//   <div>Test</div>
// )


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
        }     }
    `}
    render={data => (
      <Header>
        <LinkSection><Logo url={data.allContentfulAbout.edges[0].node.siteLogo.file.url}/>
          <Link to="/">Home</Link>
          <Link to="/page-2">Events</Link>
        </LinkSection>
        <SocialSection>
          <a href="https://twitter.com/PhraseArea?lang=en"><FaTwitter /></a>
          <a href="https://www.facebook.com"><FaFacebook /></a>
        </SocialSection>
      </Header>
    )}
  />
)





// <HeaderElement>
// <StyledLogo src={data.allContentfulAbout.edges[0].node.siteLogo.file.url} />
// </HeaderElement>
// <HeaderElement>
// <CenteredDiv>A</CenteredDiv>
// </HeaderElement>
// <HeaderElement>
// <CenteredDiv><SocialLink>A</SocialLink></CenteredDiv>
// </HeaderElement>
