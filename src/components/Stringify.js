import React from 'react';
import styled from 'styled-components';

const Stringify = styled.div`
    white-space: pre;
`;


export default ({children}) => <Stringify>{JSON.stringify(children, null, 2)}</Stringify>
