import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';
import Header from './Header'
import Footer from './Footer';

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
//   margin-top:100px;
  margin-left:100px;
  margin-right:100px;
  max-width: 1024px;
`;


// const HeroLayout = styled.div`
//   background:red;
//   width:100%;
//   height:20%;
//   margin-top:100px;
//   position:relative;
// `;

// const MainLayout = styled.div`
//   margin-top:100px;
//   margin-left:100px;
//   margin-right:100px;
//   max-width: 1024px;
// `;

// export default ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: 'description', content: 'Sample' },
//             { name: 'keywords', content: 'sample, something' },
//           ]}
//         >
//           <html lang="en" />
//         </Helmet>
//         <Layout>
//           <Header siteTitle={data.site.siteMetadata.title}/>
//           <HeroLayout><div>vvvv</div>AAA</HeroLayout>
//           <MainLayout>
//             {children}
//           </MainLayout>
//           <Footer />
//         </Layout>
//       </>
//     )}
//   />
// )






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
