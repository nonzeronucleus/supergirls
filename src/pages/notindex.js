import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import NewsItems from '../components/NewsItems';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        allContentfulAbout {
          edges {
            node {
              aboutTitle
              aboutBody {
                childMarkdownRemark {
                  html
                }

                aboutBody
              }
              mainPicture {
                resize(width:1024, height:400) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const mainSiteData = _.get(data, 'allContentfulAbout.edges[0].node', '');
      const newsItems =  _.get(data, 'allContentfulNews.edges', []);

      return (
        <Layout hero={
          <Hero
            img = {_.get(mainSiteData, 'mainPicture.resize.src', '')}
            text = {_.get(mainSiteData, 'aboutTitle', 'Supergirls')}
          />}>
            <div dangerouslySetInnerHTML={{ __html: _.get(mainSiteData, 'aboutBody.childMarkdownRemark.html', 'About') }} />
            <NewsItems />
        </Layout>
      )}
    }
  />
)

export default IndexPage
