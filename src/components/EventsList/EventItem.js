import React from 'react'
import styled from 'styled-components';
import _ from 'lodash';
import { Link } from 'gatsby'
import EventHeading from '../EventHeading';


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


const DescriptionSection = styled.div`
  grid-area: description;
`;


export default ({name,description, locationDescription, eventDate}) => (
  <Link to={encodeURI(name)}>
    <EventItemTemplate>
        <EventHeading {...{name, description, eventDate, locationDescription}} />
      <DescriptionSection>{description.childMarkdownRemark.excerpt}</DescriptionSection>
    </EventItemTemplate>
  </Link>
)

