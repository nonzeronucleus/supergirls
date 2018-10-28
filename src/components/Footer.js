import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import {FaEnvelope} from "react-icons/fa";
import breakpoints from '../consts/breakpoints';

const Footer = styled.div`
    width:100%;
    padding-top:0;
    padding-botton:0;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom:0px;
    background: #283018;
    color: #f0eceb;
    min-height: 75px;

    > a {
      color: #f0eceb;
      padding-right: 40px;
      text-decoration:none;
      vertical-align: middle;
      font-size:14px;
    }

    @media only screen and (min-width: ${breakpoints.tablet}) {
      min-height: 50px;
    }



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

    <a href="mailto:nottmsupergirls@gmail.com"><FaEnvelope/> nottmsupergirls@gmail.com</a>


    <Contentful href='https://www.contentful.com/' rel='nofollow' target='_blank' > <img
      src='https://images.ctfassets.net/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg'
      alt='Powered by Contentful' />
    </Contentful>
  </Footer>

    // <a href="javascript:gaOptout();">Deactive Google Analytics</a>
