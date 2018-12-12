import React from 'react'
import styled from 'styled-components';
import EventSummary from './EventSummary'


const EventList = styled.ul `
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

  margin-left:0;

  h1 {
    color: white;
    text-align: center;
    background-color:black;
    padding:8px;
    margin:2px;
  }


`;

export default ({title, events}) => {

  if(events.length===0) {
    return null;
  }

  return (
    <EventList>
      <h1>{title}</h1>
      {events.map(({node}) => (
            <EventSummary key={node.contentful_id} {...node}/>
        )
      )}
    </EventList>
  )
}