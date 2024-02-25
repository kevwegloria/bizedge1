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
                        lineHeight: '2.5em',
                        fontFamily: 'blacksansblack'
                    }}>Home</Typography>
                    <Typography variant="h6" sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.5em'
                        ,fontFamily: 'blacksans',
                        fontWeight: 'bold'

                    }}>Pricing</Typography>
                    <Typography variant="h6" sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.5em',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold',
                    }}>Term of Service</Typography>
                    <Typography variant="h6" sx={{
                        color: '#333333',
                        fontSize: '14px',
                        lineHeight: '2.5em'
                        ,fontFamily: 'blacksans',
                        fontWeight: 'bold'
                    }}>Privacy Policy</Typography>


                </Box>
                    <Box>
                        <Typography variant="h5" sx={{
                            fontWeight: 800,
                            color: '#333333',
                            fontSize: '18px',
                            lineHeight: '2.5em',
                            fontFamily: 'blacksansblack'
                        }}>Resources</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                            ,fontFamily: 'blacksans',
                            fontWeight: 'bold'
                        }}>Help Center</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                            ,fontFamily: 'blacksans',
                            fontWeight: 'bold'
                        }}>FAQs</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                            ,fontFamily: 'blacksans',
                            fontWeight: 'bold'
                        }}>Insights</Typography>


                    </Box></Box>


                <Box>
                    <Box sx={{ marginBottom: '1.5em' }}>
                        <Typography variant="h5" sx={{
                            fontWeight: 800,
                            color: '#333333',
                            fontSize: '18px',
                            lineHeight: '2.5em',
                            fontFamily: 'blacksansblack'
                        }}>Apps</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                            ,fontFamily: 'blacksans',
                            fontWeight: 'bold'
                        }}>Human Resources</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                            ,fontFamily: 'blacksans',
                            fontWeight: 'bold'
                        }}>Task App</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                            ,fontFamily: 'blacksans',
                            fontWeight: 'bold'
                        }}>Time & Attendance</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                            ,fontFamily: 'blacksans',
                            fontWeight: 'bold'
                        }}>Assets & Vehicle</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                            ,fontFamily: 'blacksans',
                            fontWeight: 'bold'
                        }}>Payroll</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                            ,fontFamily: 'blacksans',
                            fontWeight: 'bold'
                        }}>Accounting</Typography>

                    </Box>
                    <Box>
                        <Typography variant="h5" sx={{
                            fontWeight: 800,
                            color: '#333333',
                            fontSize: '18px',
                            lineHeight: '2.5em',
                            fontFamily: 'blacksansblack'
                        }}>Contact</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                            ,fontFamily: 'blacksans',
                            fontWeight: 'bold'
                        }}>Get in Touch</Typography>
                        <Typography variant="h6" sx={{
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '2.5em'
                            ,fontFamily: 'blacksans',
                            fontWeight: 'bold'
                        }}>Request a Demo</Typography>


                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
