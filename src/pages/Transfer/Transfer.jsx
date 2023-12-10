import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '../../components/UI/Container';
import InputLabel from '@mui/material/InputLabel';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import Button from './../../components/UI/Button';


function Transfer() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmitBtn=()=>{
    console.log('Bridge')
   setTimeout(()=>{
    Bridge.interfaces.GreenWallet.connect().then((ans) => {
      console.log(ans,'Call from Android for checking connection');
  });
   },50)
  }


  return (
    <Container>
        <Paper style={{padding: '32px', width: 450}} elevation={4}>
            <Box style={{marginTop: 20}}>
              <Typography style={{fontSize: 16}} variant="h6" fontWeight={600} component="h6">
              Send To
              </Typography>
              <TextField style={{width: '100%',marginTop: 5}} id="outlined-basic"  variant="outlined" />
            </Box>
            <Box style={{marginTop: 20}}>
              <Typography style={{fontSize: 16}} variant="h6" fontWeight={600} component="h6">
                Amount
              </Typography>
              <FormControl fullWidth style={{marginTop: 5, display: 'flex',flexDirection: 'row',gap: 6}}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                style={{width: '140px'}}
              >
                <MenuItem value={'XCH'}>XCH</MenuItem>
                <MenuItem value={'USDS'}>USDS</MenuItem>
                <MenuItem value={'MRMT'}>MRMT</MenuItem>
              </Select>
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={<InputAdornment position="end">{age}</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
          </FormControl>
          <FormHelperText style={{marginTop: 10,fontSize: 16,fontWeight: 600}}>Balance: 0</FormHelperText>
            </Box>
          <Button onClick={handleSubmitBtn} />
        </Paper>
    </Container>
  )
}

export default Transfer