import React from 'react';
import styled from '@emotion/styled';
import ButtonBTN from '@mui/material/Button';


function Button(props) {

  const {onClick,isFullWidth,title, disabled}=props;
  return (
    <ButtonBTN disabled={disabled} fullWidth={isFullWidth} onClick={onClick} style={{
      marginTop: 24,
      background: disabled ? '#dddddd' : '#7ddb9c',
      borderRadius: 8,height: 58}} variant="contained">{title}</ButtonBTN>
  )
}

export default Button;