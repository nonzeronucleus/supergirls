import React from 'react'
import styled from 'styled-components';
import EventItem from './EventItem'


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
`;

export default ({data}) => (
    <EventList>
        {data.allContentfulEvent.edges.map(({node}) => (
            <EventItem key={node.contentful_id} {...node}/>
        ))}
  </EventList>
)