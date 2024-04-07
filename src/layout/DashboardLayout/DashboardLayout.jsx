import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {NavLink} from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import styled from '@emotion/styled';
import CssBaseLine from '@mui/material/CssBaseline';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTokens } from '../../redux/slices/tokenSlice';

const Section = styled.section`
  .ps-sidebar-container{
    background: none
  }
`
const MenuItemBox = styled.div`
  display: flex;
  align-items:center;
  font-size: 14px;

  .MuiSvgIcon-root{
    font-size: 20px;
    margin-right: 0.3rem;
  }
`;
const BoxPage = styled.div`
  display: flex;
`;


const drawerWidth = 240;

function DashboardLayout(props) {

  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();
  const tokenStatus = useSelector(state => state.token.tokenStatus)
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleUpdateStatus = () => {
    dispatch(fetchTokens());
  }

  const drawer = (
    <Section>
      <Toolbar />
      <Sidebar
        style={{
          background: 'none'
        }}>
        <Menu
        style={{
          background: 'none'
        }}
        rootStyles={{
          backgroundColor: 'none'
        }}
          menuItemStyles={{
            button: {
              [`&:hover`]: {
                background: 'none',
              },
              [`&.active`]: {
                color: '#5cd283',
              },
            },
          }}
        >
          <MenuItem component={<NavLink to="/" />} active={true}><MenuItemBox><SwapVertIcon  />Transfer</MenuItemBox></MenuItem>
          <MenuItem  component={<NavLink to="/createoffer" />}><MenuItemBox><NoteAddOutlinedIcon  /> Create offer</MenuItemBox></MenuItem>
          <MenuItem component={<NavLink to="/takeoffer" />}><MenuItemBox><TextSnippetOutlinedIcon  /> Take offer</MenuItemBox></MenuItem>
        </Menu>
      </Sidebar>
    </Section>
  );

  return (
    <BoxPage sx={{ display: 'flex' }}>
      <CssBaseLine />
      {true && (
        <AppBar
          position="fixed"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '11px 32px'
          }}
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            background: 'white',
            boxShadow: 'none',
          }}
        >
          <IconButton
            className='Humberger'
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Button
          variant="contained"
          style={{
            background: tokenStatus ? '#dddddd' : '#7ddb9c',
            borderRadius: '10px'
          }}
          disabled={tokenStatus}
          onClick={handleUpdateStatus}
        >
          {tokenStatus ? 'Connected' : 'Connect Wallet'}
        </Button>
        </AppBar>
      )}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >    
        <Drawer
          variant="permanent"
          open={false}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          
        >
          {drawer}
        </Drawer>
      </Box>
       <Drawer
        anchor="left"
        open={openDrawer}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, paddingTop: '74px', background: '#e9f7f0',minHeight: '100vh'}}
      >
        <Box>
        {props.children}
        </Box>
      </Box>
      
    </BoxPage>
  );
}

export default DashboardLayout;