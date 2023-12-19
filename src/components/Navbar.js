import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from './images/logo.png';

export default function Navbar() {
  return (
    <Box >
      <AppBar position="static"
        sx={{
          backgroundColor: 'white',
          boxShadow: 'none',

        }}>
        <Toolbar
          sx={{
            justifyContent: 'space-around',
            '@media (max-width: 768px)': {}
          }}>
          <img src={logo}
            alt={logo}
            style={{
              marginRight: '5em',
              height: '30px'
            }} />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '20em',
            }}>
            <Button
              sx={{
                color: 'black',
                textTransform: 'none',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'black',
                },
                '@media (max-width: 768px)':
                  { display: 'none' },
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: 12
              }}>Home</Button>
            <Button
              sx={{
                color: '#6a6a6a',
                textTransform: 'none',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#6a6a6a',
                },
                '@media (max-width: 768px)': {
                  display: 'none'
                },
                fontFamily: 'Poppins',
                fontSize: 12
              }}>Request a Demo</Button>
            <Button
              sx={{
                color: 'black',
                textTransform: 'none',
                '&:hover': {
                  color: '#2898a4',
                  backgroundColor: '#e0eef0',
                },
                '@media (max-width: 768px)': { display: 'none' },
                border: 'none', padding: '5px 25px',
                backgroundColor: '#e0eef0',
                fontSize: 12,
                fontWeight: 700,
              }}>Sign In</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
