import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';
import EventsList from '../components/EventsList';
import Layout from '../components/Layout'

const endOfToday = new Date();

endOfToday.setHours(23,59,59,0);

const eventIsCurrent = event => {
  const eventDateText = _.get(event, 'node.eventDate', endOfToday.toUTCString())
  const eventDate = new Date(eventDateText);

  return eventDate >= endOfToday;
}


// Are we showing Supergirls events or other? Is this the same type of event
const correctTventType = (event, supergirlsEvent) => {
  const thisEventType = _.get(event, 'node.supergirlsEvent', true)

  return thisEventType === supergirlsEvent;
}

            //

export default ({supergirlsEvent}) => (
    <StaticQuery
    query={graphql`
      query EventOverviewQuery {
        allContentfulEvent
          ( sort : { fields: eventDate, order: ASC }
          )
          {
          edges {
            node {
              contentful_id
              name
              eventDate
              supergirlsEvent
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
    render={data => {
      const now = new Date();
      const events = _.get(data, 'allContentfulEvent.edges').filter(event => correctTventType(event, supergirlsEvent))
      const currentEvents  = events.filter(event => eventIsCurrent(event));
      const oldEvents  = events.filter(event => !eventIsCurrent(event));

      return (
          <Layout>
            <EventsList title="Upcoming events" events = {currentEvents} />
            <EventsList title="Past events" events = {oldEvents} />
          </Layout>
        )}
      }
    />
)
