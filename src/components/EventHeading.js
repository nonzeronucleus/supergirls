import React from 'react'
import styled from 'styled-components';
import _ from 'lodash';
import DateBlock from './DateBlock';

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

const EventHeadingTemplate = styled.div`
    grid-area:heading;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 100px auto;
    grid-template-areas:
        "date title"
        "date location";

    > * {
        margin: 10px;
        }

`;



const Location = ({locationDescription, locationURL}) =>
    locationURL
        ? (<a rel="nofollow" target="_blank" href={locationURL}>{locationDescription}</a>)
        : (<>{locationDescription}</>);


export default ({name,locationDescription, eventDate, locationURL}) => (
    <EventHeadingTemplate>
        <TitleSection>{name}</TitleSection>
        <DateSection>
            <DateBlock date={eventDate} />
        </DateSection>
        <LocationSection>
            <Location {...{locationURL}}
                locationDescription = {
                    locationDescription && locationDescription.length >0
                        ? locationDescription
                        : "Location TBC"
                } />
        </LocationSection>
    </EventHeadingTemplate>
)
