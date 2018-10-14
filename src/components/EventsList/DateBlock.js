import React from 'react';

import styled from 'styled-components';

var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const DateBlock = styled.div`
  background: #c2d4d8;
  color:#283018;
  min-height: 80px;
  min-width: 80px;
  text-align: center;
  padding:4px;
  > h2 {
    margin-bottom: 0px;
  }
  div:nth-child(3) {
    font-size:12px;
  }
`;

export default ({date}) => {
  if (!date) {
    return <DateBlock><div>Date</div><h2>TBC</h2></DateBlock>
  }

  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();

  return (
      <DateBlock>
        <h2>
          {day}
        </h2>
        <div>
          {monthShortNames[month]}
        </div>
        <div>
          {year}
        </div>
      </DateBlock>
    )
}
