import React from 'react'
import styled from 'styled-components';
import _ from 'lodash';
import DateBlock from './DateBlock';
import { Link } from 'gatsby'


const EventList = styled.ul`

color:red;
 a: link {
   text-decoration: none;
   color:#283018;
 }
 a > li {
  color:#283018;

  border-bottom-width: 1px;
    border-bottom-style: solid;
    padding-bottom:20px;
    border-bottom-color: lightgray;
}

`;


const EventItemTemplate = styled.li`
  display:grid;
  grid-template-columns: 100px auto;
  grid-template-rows: auto auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
   "date title"
   "date location"
   "description description";

   > * {
    margin: 10px;
   }

`;

const TitleSection = styled.h2`
   grid-area: title;
`;

const DateSection = styled.div`
  grid-area: date;
`;

const LocationSection = styled.div`
   margin-top: 0px;
   margin-bottom: 0px;
    grid-area: location;
    font-weight: 200;
    font-style: italic;
`;


const DescriptionSection = styled.div`
  grid-area: description;
`;

const EventItem = ({name,description, locationDescription, eventDate}) => (
  <Link to={encodeURI(name)}>
    <EventItemTemplate>
      <TitleSection>{name}</TitleSection>
      <LocationSection>{
          locationDescription && locationDescription.length >0
              ? locationDescription
              : "Location TBC"
      } </LocationSection>
      <DateSection>
        <DateBlock date={eventDate} />
      </DateSection>
      <DescriptionSection>{description.childMarkdownRemark.excerpt}</DescriptionSection>
    </EventItemTemplate>
  </Link>
  )


export default ({data}) => (
    <EventList>
        {data.allContentfulEvent.edges.map(({node}) => (
            <EventItem key={node.contentful_id} {...node}/>
        ))}
  </EventList>
)