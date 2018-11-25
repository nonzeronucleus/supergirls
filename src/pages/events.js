import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';
import EventsList from '../components/EventsList';
import Layout from '../components/Layout'



export default () => (
    <StaticQuery
    query={graphql`
      query EventOverviewQuery {
        allContentfulEvent  ( sort : { fields: eventDate, order: ASC } ) {
          edges {
            node {
              contentful_id
              name
              eventDate
              locationDescription
              location {
                lon
                lat
              }

              description {
                childMarkdownRemark {
                  excerpt
                }
              }

              shortDescription
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
          <EventsList {...{data}} />
        </Layout>
        )}
    />
)
