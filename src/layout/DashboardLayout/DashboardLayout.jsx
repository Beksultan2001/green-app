import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link,NavLink} from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import styled from '@emotion/styled';
import CssBaseLine from '@mui/material/CssBaseline';

const Section = styled.section`
  .ps-sidebar-container{
    background: none
  }
`


const drawerWidth = 240;

function DashboardLayout(props) {

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
          <MenuItem component={<NavLink to="/" />} active={true}>Transfer</MenuItem>
          <MenuItem component={<NavLink to="/createoffer" />}>Create Offer</MenuItem>
          <MenuItem component={<NavLink to="/takeoffer" />}>Take Offer</MenuItem>
        </Menu>
      </Sidebar>
    </Section>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseLine />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >    
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, paddingTop: '64px'}}
      >
        {props.children}
      </Box>
      
    </Box>
  );
}

export default DashboardLayout;