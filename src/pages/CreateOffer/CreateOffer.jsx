import React from 'react';
import Box from '@mui/material/Box';
import Container from '../../components/UI/Container';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Button from './../../components/UI/Button';
import IconButton from '@mui/material/IconButton';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ButtonGroup from '@mui/material/ButtonGroup';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();


function Transfer() {

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <ThemeProvider theme={theme}>

    <Container>
      <Paper
        style={{
          padding: '32px',
          width: isSmallScreen ? '100%' : '450px', // Adjust the width based on the screen size
        }}
        elevation={4}
      >
          <Box>
            <Typography style={{fontSize: 15}} variant="h6" fontWeight={600} component="h6">
              Send To
            </Typography>
            <FormControl fullWidth style={{marginTop: 5, display: 'flex',flexDirection: 'row',gap: 6,alignItems: 'center'}}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                style={{width: '140px'}}
              >
                <MenuItem value={10}>XCH</MenuItem>
                <MenuItem value={20}>USDS</MenuItem>
                <MenuItem value={30}>MRMT</MenuItem>
              </Select>
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={<InputAdornment position="end">XCH</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              <ButtonGroup>
                <IconButton aria-label="AddCircleOutline">
                  <AddCircleOutline />
                </IconButton>
                <IconButton aria-label="RemoveCircleOutlineIcon">
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </ButtonGroup>
          </FormControl>
            <FormControl fullWidth style={{marginTop: 20, display: 'flex',flexDirection: 'row',gap: 6,alignItems: 'center'}}>
              <Select
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                value={age}
                onChange={handleChange}
                style={{width: '140px'}}
              >
                <MenuItem value={10}>XCH</MenuItem>
                <MenuItem value={20}>USDS</MenuItem>
                <MenuItem value={30}>MRMT</MenuItem>
              </Select>
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={<InputAdornment position="end">XCH</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              <ButtonGroup>
                <IconButton aria-label="AddCircleOutline">
                  <AddCircleOutline />
                </IconButton>
                <IconButton aria-label="RemoveCircleOutlineIcon">
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </ButtonGroup>
          </FormControl>
          </Box>
          <Box style={{marginTop: 20}}>
            <Typography style={{fontSize: 15}} variant="h6" fontWeight={600} component="h6">
              Request
            </Typography>
            <FormControl fullWidth style={{marginTop: 5, display: 'flex',flexDirection: 'row',gap: 6,alignItems: 'center'}}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                style={{width: '140px'}}
              >
                <MenuItem value={10}>XCH</MenuItem>
                <MenuItem value={20}>USDS</MenuItem>
                <MenuItem value={30}>MRMT</MenuItem>
              </Select>
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={<InputAdornment position="end">XCH</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              <ButtonGroup>
                <IconButton aria-label="AddCircleOutline">
                  <AddCircleOutline />
                </IconButton>
                <IconButton aria-label="RemoveCircleOutlineIcon">
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </ButtonGroup>
          </FormControl>
            <FormControl fullWidth style={{marginTop: 20, display: 'flex',flexDirection: 'row',gap: 6,alignItems: 'center'}}>
              <Select
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                value={age}
                onChange={handleChange}
                style={{width: '140px'}}
              >
                <MenuItem value={10}>XCH</MenuItem>
                <MenuItem value={20}>USDS</MenuItem>
                <MenuItem value={30}>MRMT</MenuItem>
              </Select>
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={<InputAdornment position="end">XCH</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              <ButtonGroup>
                <IconButton aria-label="AddCircleOutline">
                  <AddCircleOutline />
                </IconButton>
                <IconButton aria-label="RemoveCircleOutlineIcon">
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </ButtonGroup>
          </FormControl>
          </Box>
          <Button isFullWidth={true}  />
          </Paper>
    </Container>
    </ThemeProvider>
  )
}

export default Transfer


