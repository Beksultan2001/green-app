import React from 'react';
import styled from '@emotion/styled';


const Section = styled.div`
  display: flex;
  min-height: 100%;
  justify-content: center
`;


function Container(props) {
  return (
    <Section>{props.children}</Section>
  )
}

export default Container