import React from 'react';
import { graphql } from 'gatsby';
import _ from 'lodash';
import Layout from '../components/Layout';
import styled from 'styled-components';
// import EventHeading from '../components/EventHeading';
import EventItem from '../components/EventItem';

const EventPage = styled.div `
  // margin-top:10px;
  // margin-left:10px;
`;

const EventItemTemplate = styled.li`
  margin-left:10px;
  display:grid;
  grid-template-rows: auto auto;
  grid-template-areas:
    "heading"
    "description";

  > * {
    margin: 10px;
  }
`;

const DescriptionSection = styled.div`
  grid-area: description;
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

    const descriptionBody = <div dangerouslySetInnerHTML={{ __html: body }} />

  return (
    <Layout>
      <EventPage>
        <EventItem {...{name, eventDate, locationDescription, locationURL, descriptionBody}} />
      </EventPage>
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
