import React from "react";
import logo from './images/logo.png';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';

export default function Section9() {
    return (
        <Box sx={{
            '@media (max-width: 768px)': {
                display: 'block',
            },
            display: 'none',
            backgroundColor: '#fafafa',
            paddingTop: '3em'
        }}>
            <img
                src={logo}
                alt={logo}
                style={{
                    marginLeft: '2em',
                    height: '25px',
                    marginBottom: '1em'
                }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '3em' }}>
                <Box> <Box sx={{ marginBottom: '8em' }}>
                    <Typography variant="h5" sx={{
                        fontWeight: 800,
                        color: '#333333',
                        fontSize: '18px',
                        lineHeight: '2.5em'
                    }}>Home</Typography>
                    <Typography variant="h6" sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.5em'
                    }}>Pricing</Typography>
                    <Typography variant="h6" sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.5em'
                    }}>Term of Service</Typography>
                    <Typography variant="h6" sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.5em'
                    }}>Privacy Policy</Typography>


                </Box>
                    <Box>
                        <Typography variant="h5" sx={{
                            fontWeight: 800,
                            color: '#333333',
                            fontSize: '18px',
                            lineHeight: '2.5em'
                        }}>Resources</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                        }}>Help Center</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                        }}>FAQs</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                        }}>Insights</Typography>


                    </Box></Box>


                <Box>
                    <Box sx={{ marginBottom: '1.5em' }}>
                        <Typography variant="h5" sx={{
                            fontWeight: 800,
                            color: '#333333',
                            fontSize: '18px',
                            lineHeight: '2.5em'
                        }}>Apps</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                        }}>Human Resources</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                        }}>Task App</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                        }}>Time & Attendance</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                        }}>Assets & Vehicle</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                        }}>Payroll</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                        }}>Accounting</Typography>

                    </Box>
                    <Box>
                        <Typography variant="h5" sx={{
                            fontWeight: 800,
                            color: '#333333',
                            fontSize: '18px',
                            lineHeight: '2.5em'
                        }}>Contact</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                        }}>Get in Touch</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                        }}>Request a Demo</Typography>


                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
