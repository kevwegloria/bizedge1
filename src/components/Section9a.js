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
                        '@media (max-width: 768px)':
                            { display: 'none' },

                    }}>
                    <img
                        src={apple}
                        alt={apple}
                        style={{ marginBottom: '1em' }}

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
                        fontWeight: 800,
                        color: '#333333',
                        fontSize: '18px',
                        lineHeight: '2.8em'
                    }}>Home</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.8em'
                    }}>Company</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.8em'
                    }}>Product</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.8em'
                    }}>Pricing</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.8em'
                    }}>Support</Typography>

            </Box>
            <Box
                sx={{ lineHeight: '3em' }}
            >
                <Typography variant="h5"
                    sx={{
                        fontWeight: 800,
                        color: '#333333',
                        fontSize: '18px',
                        lineHeight: '2.8em'
                    }}>Apps</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.8em'
                    }} >People Management</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.8em'
                    }}>Time & Attendance</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.8em'
                    }}>Payroll</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.8em'
                    }}>Asset Management</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.8em'
                    }}>Vehicle Management</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.8em'
                    }}>Document Generation</Typography>

            </Box>
            <Box>
                <Typography variant="h5"
                    sx={{
                        fontWeight: 800,
                        color: '#333333',
                        fontSize: '18px',
                        lineHeight: '2.8em'
                    }}>Contact</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.8em'
                    }}>Get in touch</Typography>
                <Typography variant="h6"
                    sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.8em'
                    }}>Book a Demo</Typography>
            </Box>
        </Box>
    )
}