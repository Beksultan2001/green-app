import React from 'react';
import styled from '@emotion/styled';
import ButtonBTN from '@mui/material/Button';


function Button(props) {

  const {onClick,isFullWidth}=props;
  console.log(isFullWidth,'full')
  return (
    <ButtonBTN  fullWidth={isFullWidth}  onClick={onClick} style={{marginTop: 24, background: '#7ddb9c',borderRadius: 8,height: 58}}   variant="contained">Connect wallet</ButtonBTN>
  )
}

export default Button;