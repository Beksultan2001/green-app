import React, { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Container from '../../components/UI/Container';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
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
import { listOffers } from '../../shared/api/api';
import { useSelector } from 'react-redux';
import {v4 as uuidv4} from 'uuid';

const theme = createTheme();

const TransferItem = ({data, setData, 
  handleAddItem, handleRemoveItem, 
  handleChangeItem, isDisableRemove,
   isDisabledAdd, anotherData}) => {

    const handleChangeItemData = (elem, id) => {
      let newData = data.map((t) => {
        if (t.id == id){
          return {...t, amount: elem.target.value}
        }
        return t;
      });

      setData(newData);
    }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
      {data.map((offer, key) => (
        <Box key={key} sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%'
        }}>
          <Select
            value={offer.id?.length > 10 ? '' : offer.id}
            onChange={(e) => handleChangeItem(setData, e,offer)}
            style={{ width: '140px' }}
          >
            {listOffers.map((t) => {
              const isInList = data.find(({ token }) => token === t.token);
              const isInList1 = anotherData.find(({ token }) => token === t.token);
              const isThereInList = Boolean(isInList || isInList1);
              return (
                <MenuItem key={t.token} value={t.id} disabled={isThereInList}>{t.token}</MenuItem>
              )
            })}
          </Select>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">{offer.token}</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            onChange={(elem) => handleChangeItemData(elem,offer.id)}
            value={offer.amount}
          />
          <ButtonGroup style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <IconButton disabled={isDisabledAdd} aria-label="AddCircleOutline" onClick={() => handleAddItem(setData)}>
              <AddCircleOutline />
            </IconButton>
            <IconButton disabled={isDisableRemove} aria-label="RemoveCircleOutlineIcon" onClick={() => handleRemoveItem(setData, offer)}>
              <RemoveCircleOutlineIcon />
            </IconButton>
          </ButtonGroup>
        </Box>
      ))}
    </div>
  );
};

const Transfer = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [offerData, setOfferData] = useState([{ token: '', id: uuidv4(),amount: '', assetId: ''}]);
  const [requestData, setRequestData] = useState([{ token: '', id: uuidv4(), amount: '', assetId: ''}]);
  const tokenStatus = useSelector(state => state.token.tokenStatus)

  const handleAddItem = useCallback((setData) => {
    setData(prevData => [...prevData, { token: '', id: uuidv4(), assetId: '', amount: ''}]);
  }, []);

  const handleRemoveItem = useCallback((setData, data) => {
    setData(prevData => prevData.filter((offer) => offer.id !== data.id));
  }, []);

  const handleChangeItem = useCallback((setData, event, currData) => {
    const selectedItem = listOffers.find((t) => t.id === event.target.value);
    setData((prevData) => {
      return prevData.map((offer) => (offer.id === currData.id ? selectedItem : offer));
    });
  }, []);

  const handleSendRequest = async () => {
    let createOfferRes = await window.Bridge.interfaces.GreenWallet.createOffer(
      {'offerAssets': offerData,
        'requestAssets': requestData
    });
    console.log(createOfferRes, 'createOfferRes');
  }

  const isDisableRemoveOffer = offerData.length <= 1;
  const isDisableRemoveRequest = requestData.length <= 1;

  const isDisabledAddOffer = (offerData.length + requestData.length) >= listOffers.length;
  const isDisabledAddRequest = (requestData.length + offerData.length) >= listOffers.length;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Paper
          style={{
            padding: '32px',
            width: isSmallScreen ? '100%' : '450px',
          }}
          elevation={4}
        >
          <Box>
            <Typography style={{ fontSize: 15 }} variant="h6" fontWeight={600} component="h6">
              Offer
            </Typography>
            <TransferItem
              data={offerData}
              setData={setOfferData}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
              handleChangeItem={handleChangeItem}
              isDisableRemove={isDisableRemoveOffer}
              isDisabledAdd={isDisabledAddOffer}
              anotherData={requestData}
            />
          </Box>
          <Box style={{ marginTop: 20 }}>
            <Typography style={{ fontSize: 15 }} variant="h6" fontWeight={600} component="h6">
              Request
            </Typography>
            <TransferItem
              data={requestData}
              setData={setRequestData}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
              handleChangeItem={handleChangeItem}
              isDisableRemove={isDisableRemoveRequest}
              isDisabledAdd={isDisabledAddRequest}
              anotherData={offerData}
            />
          </Box>
          <Button isFullWidth={true} onClick={handleSendRequest}  title={tokenStatus ? 'Connected' : 'Connect'} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Transfer;
