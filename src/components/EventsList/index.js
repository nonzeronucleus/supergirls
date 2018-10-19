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

`;

export default ({data}) => (
    <EventList>
        {data.allContentfulEvent.edges.map(({node}) => (
            <EventSummary key={node.contentful_id} {...node}/>
        ))}
  </EventList>
)