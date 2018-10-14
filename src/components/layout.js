import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

import Header from './header'
import './layout.css'


const Layout = styled.div`
  display: flex;
  // background:red;
  // margin-left:100px;
  flex-direction:column;
`;

const MainLayout = styled.div`
  // display: flex;
  // background:red;
  margin-top:50px;
  margin-left:100px;
  margin-right:100px;
  max-width: 1024px;

  // flex-direction:column;
`;

export default ({ children }) => (
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
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Layout>
          <Header siteTitle={data.site.siteMetadata.title} />
          <MainLayout
            // style={{
            //   margin: '0 auto',
            //   maxWidth: 960,
            //   padding: '0px 1.0875rem 1.45rem',
            //   paddingTop: 0,
            // }}
          >
            {children}
          </MainLayout>
        </Layout>
      </>
    )}
  />
)

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
