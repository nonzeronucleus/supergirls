import React from 'react'
import styled from 'styled-components';
import _ from 'lodash';
import { Link } from 'gatsby'
import EventItem from '../EventItem';


export default ({name,description, locationDescription, eventDate}) => (
  <Link to={`events/${encodeURI(name)}`}>
    <EventItem {...{name, locationDescription, eventDate}} descriptionBody={description.childMarkdownRemark.excerpt} />
  </Link>
)

