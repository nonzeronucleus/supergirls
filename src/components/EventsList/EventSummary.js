import React from 'react'
import styled from 'styled-components';
import _ from 'lodash';
import { Link } from 'gatsby'
import EventItem from '../EventItem';

const ItemLink = styled(Link)`
  text-decoration: underline;
  > * {

    :hover {
      text-decoration:underline;
    }
  }

`;


export default ({name, description, locationDescription, shortDescription, eventDate, location}) => {
  const locationURL = location
    ? `https://maps.google.com/?q=${location.lat},${location.lon}`
    : null;

  const summary = shortDescription || description.childMarkdownRemark.excerpt;

  return (
    <>
    <ItemLink to={`events/${encodeURI(name)}`}>
      <EventItem {...{name, locationDescription, eventDate, locationURL}} descriptionBody={summary} />
    </ItemLink>
    </>
  )
}

