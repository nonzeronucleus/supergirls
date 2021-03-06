import React from 'react'
import styled from 'styled-components';
import _ from 'lodash';
import { Link } from 'gatsby'
import EventItem from '../EventItem';

const ItemLink = styled(Link)`
  text-decoration: underline;
  :hover h2{
    text-decoration:underline;
  }

`;


export default ({name, description, locationDescription, shortDescription, eventDate, location, supergirlsEvent}) => {
  const locationURL = location
    ? `//maps.google.com/?q=${location.lat},${location.lon}`
    : null;

  const summary = shortDescription || description.childMarkdownRemark.excerpt;

  console.log({supergirlsEvent});

  return (
    <>
    <ItemLink to={`events/${encodeURI(name)}`}>
      <EventItem {...{name, locationDescription, eventDate, locationURL}} descriptionBody={summary} />
    </ItemLink>
    </>
  )
}

