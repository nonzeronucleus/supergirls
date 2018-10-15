import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';
import Header from './header'
import Footer from './Footer';


const Layout = styled.div`
  display: flex;
  flex-direction:column;
  height:100%;
`;

const MainLayout = styled.div`
  margin-top:100px;
  margin-left:100px;
  margin-right:100px;
  max-width: 1024px;
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
          <MainLayout>
            {children}
          </MainLayout>
          <Footer />
        </Layout>
      </>
    )}
  />
)


// const L = styled.div`
//   height:100%;
//   background:blue;
// `;

// export default ({ children }) => (
//   <L>
//     A
//   </L>
// )


// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
