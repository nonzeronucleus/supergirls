import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

// const styles = {
//   footer: style({
//     width:'100%',
//     gridArea:'footer',
//     borderColor:'black',
//     borderStyle:'solid',
//     borderWidth:'1px 0px',
//     fontSize:'16px',
//     paddingTop:0,
//     paddingBotton:0
//   }),
//   contentful: style({
//     float:'right',
//     marginRight:'10px',
//     '> img': {
//       width:'100px',
//       marginBottom:'0px'
//     }
//   })
// }

const Footer = styled.footer`
    margin-top:auto;
    width:100%;
    grid-area:footer;
    border-color:black;
    border-style:solid;
    border-width:1px 0px;
    font-size:16px;
    padding-top:0;
    padding-botton:0;
    margin-bottom:0px;
`;

const Contentful = styled.a`
  margin-top:5px;
  float:right;
  margin-right:10px;
  > img {
    width:100px;
    margin-bottom:0px;
  }

`;


// function gaOptout(){document.cookie=disableStr+'=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/',window[disableStr]=!0}var gaProperty='UA-XXXXXXXX-X',disableStr='ga-disable-'+gaProperty;document.cookie.indexOf(disableStr+'=true')>-1&&(window[disableStr]=!0);

// ga('set', 'anonymizeIp', 1);

export default ({ children, data }) =>
  <Footer>
    <Link to='/privacy' >Privacy notice</Link>
    <Contentful href='https://www.contentful.com/' rel='nofollow' target='_blank' > <img
      src='https://images.ctfassets.net/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg'
      alt='Powered by Contentful' />
    </Contentful>
  </Footer>

    // <a href="javascript:gaOptout();">Deactive Google Analytics</a>
