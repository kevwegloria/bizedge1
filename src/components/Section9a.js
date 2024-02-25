import React from "react";
import logo from './images/logo.png';
import apple from './images/apple.png';
import google from './images/google.png';
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';


export default function Section9a() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                paddingTop: '4em',
                backgroundColor: '#fafafa',
                paddingBottom: '4em',
                '@media (max-width: 768px)':
                    { display: 'none' },

            }}>
            <Box
            >
                <img
                    src={logo}
                    alt={logo}
                    style={{ marginBottom: '7em' }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '2.3em',
                        '@media (max-width: 768px)':
                            { display: 'none' },

                    }}>
                    <img
                        src={apple}
                        alt={apple}
                        style={{ marginTop: '2.7em', marginBottom: '1em' 
                        }}

                    />
                    <img
                        src={google}
                        alt={google}

                    />
                </Box>
            </Box>
            <Box>
                <Typography variant="h5"
                    sx={{
                        fontFamily: 'blacksansblack',
                       
                        color: '#333333',
                        fontSize: '18px',
                        lineHeight: '1.9em'
                    }}>Home</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '4em',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold'
                    }}>Company</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '4em',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold'
                    }}>Product</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '4em',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold'
                    }}>Pricing</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '4em',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold'
                    }}>Support</Typography>

            </Box>
            <Box
                sx={{ lineHeight: '3em' }}
            >
                <Typography variant="h5"
                    sx={{
                        fontFamily: 'blacksansblack',
                        color: '#333333',
                        fontSize: '18px',
                        lineHeight: '1.9em'
                    }}>Apps</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '4em',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold'
                    }} >People Management</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '4em',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold'
                    }}>Time & Attendance</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '4em',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold'
                    }}>Payroll</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '4em',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold'
                    }}>Asset Management</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '4em',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold'
                    }}>Vehicle Management</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '4em',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold'
                    }}>Document Generation</Typography>

            </Box>
            <Box>
                <Typography variant="h5"
                    sx={{
                        fontFamily: 'blacksansblack',
                        color: '#333333',
                        fontSize: '18px',
                        lineHeight: '1.9em'
                    }}>Contact</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '4em',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold'
                    }}>Get in touch</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '4em',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold'
                    }}>Book a Demo</Typography>
            </Box>
        </Box>
    )
}