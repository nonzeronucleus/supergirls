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

  > input {
      border-width:0;
      text-decoration:underline;
  }
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

const Button = styled.button`
    color: red;
    margin-left: 20px;
    background:    #ffffff;
    background:    -webkit-linear-gradient(#ffffff, #ffffff);
    background:    linear-gradient(#ffffff, #ffffff);
    border-radius: 1000px;
    padding:       8px 20px;
    color:         #000000;
    display:       inline-block;
    font:          normal 400 18px/1 "Calibri", sans-serif;
    text-align:    center;
    border-width: 1px;
`;



const Location = ({locationURL, locationDescription}) => (
    <div>{locationDescription}
        <Button onClick={(event) => {
            // if /* if we're on iOS, open in Apple Maps */
            // ((navigator.platform.indexOf("iPhone") != -1) ||
            //  (navigator.platform.indexOf("iPad") != -1) ||
            //  (navigator.platform.indexOf("iPod") != -1)) {
            //     window.open(`maps:${locationURL}`);
            //  }
            //  else {
                window.open(`https:${locationURL}`);
            //  }
            event.preventDefault();
        }} >Map</Button>
    </div>
)


// const Location = ({locationDescription, locationURL, showButton}) =>
// {
//     return showButton
//         ? (<div>{locationDescription}<LocationButton {...{locationURL}} /></div>)
//         : (<a href={locationURL} target="_blank">{locationDescription}</a>)
// }




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
