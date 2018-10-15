import React from 'react';
import { graphql } from 'gatsby';
import _ from 'lodash';
import Layout from '../components/layout';
import styled from 'styled-components';
import EventHeading from '../components/EventHeading';

const EventItemTemplate = styled.li`
  display:grid;
  grid-template-rows: auto auto;
  grid-template-areas:
    "heading"
    "description";

  > * {
    margin: 10px;
  }
`;



export default ({data}) => {
  const node = _.get(data, 'allContentfulEvent.edges[0].node');
  const {name, location, locationDescription, description, eventDate} = node;
  const body = _.get(description, 'childMarkdownRemark.html');
  const dateStr = eventDate
    ? new Date(eventDate).toLocaleString()
    : 'Date TBC';

  const locationURL = location
    ? `https://maps.google.com/?q=${location.lat},${location.lon}`
    : null;

  return (
    <Layout>
      <EventHeading {...{name, description, eventDate, locationDescription, locationURL}} />

      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Layout>
  )
}

export const query = graphql`
query($id:String) {
  allContentfulEvent (filter: {contentful_id: {eq: $id}}) {
    edges {
      node {
        contentful_id
        name
        eventDate
        location {
          lon
          lat
        }
        locationDescription

        description {
          description
          childMarkdownRemark {
            excerpt
            rawMarkdownBody
            html
          }
        }
      }
    }
  }
}
`;
