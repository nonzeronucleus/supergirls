import React from 'react'
import styled from 'styled-components';
import _ from 'lodash';
import { Link } from 'gatsby'
import EventItem from '../EventItem';


export default ({name,description, locationDescription, eventDate, location}) => {
  const locationURL = location
    ? `https://maps.google.com/?q=${location.lat},${location.lon}`
    : null;

  return (
    <Link to={`events/${encodeURI(name)}`}>
      <EventItem {...{name, locationDescription, eventDate, locationURL}} descriptionBody={description.childMarkdownRemark.excerpt} />
    </Link>
  )
}

