import React from 'react'
import styled from 'styled-components';
import _ from 'lodash';
import EventHeading from './EventHeading';


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


export default ({name,descriptionBody, locationDescription, eventDate, locationURL}) => (
<EventItemTemplate>
    <EventHeading {...{name, eventDate, locationDescription, locationURL}} />
    <DescriptionSection>{descriptionBody}</DescriptionSection>
</EventItemTemplate>
)

