import React from "react";
import sec1a from './images/sec1a.png';
import Box from '@mui/system/Box';
import sec1c from './images/sec1c.png'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import sec1b from './images/sec1b.png'



export default function Section1() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '5em',
            paddingBottom: '4em',
            '@media (max-width: 768px)': {
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'row'
            }
        }}>
            <Box sx={{ '@media (max-width: 768px)': { display: 'none' } }}>
                <img
                    src={sec1a}
                    alt={sec1a}
                    style={{ height: 350, marginTop: '9em' }}

                />
            </Box>


            <Box sx={{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography variant="h4" sx={{
                    width: '15em',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    paddingBottom: '0.5em',
                    lineHeight: '1.3em',
                    fontSize: '50px',
                    lineHeight: '70px',
                    '@media (max-width: 768px)': {
                        fontSize: '30px',
                        width: '300px'
                    },
                }}>
                    Unlock Your Full HR Potential WIth Our Powerful People Management App.
                </Typography>


                <Typography variant="h6" sx={{
                    width: '35em',
                    color: '#6a6a6a',
                    fontSize: '0.8em',
                    paddingBottom: '2.3em',
                    '@media (max-width: 768px)': {
                        fontSize: '15px',
                        width: '300px'
                    }
                }}>
                    Elevate your HR game with automated employee onboarding, intuitive performance tracking and seamless team collaboration.
                </Typography>
                <Box sx={{
                    paddingBottom: '4em',
                    gap: '23px',
                    display: 'flex',
                    '@media (max-width: 768px)': {
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }
                }}>
                    <Button sx={{
                        color: 'black',
                        textTransform: 'none',
                        fontWeight: 700,
                        fontSize: 12,
                        backgroundColor: '#e0eef0',
                        color: '#3ca1ac', padding: '7px 30px',
                        '&:hover': {
                            backgroundColor: '#e0eef0',
                            color: '#3ca1ac',
                        },
                        '@media (max-width: 768px)': {
                            padding: '1em 9em',
                            backgroundColor: 'white',
                            boxShadow: '0px 5px 6px rgba(0, 0, 0, 0.1)',
                            '&:hover': {
                                backgroundColor: 'white',
                                color: '#3ca1ac',
                            }
                        }
                    }}>Sign Up For Free</Button>

                    <Button sx={{
                        color: 'black',
                        textTransform: 'none',
                        '&:hover': {
                            color: '#e0eef0',
                            backgroundColor: '#3ca1ac',
                        },
                        '@media (max-width: 768px)':
                            { padding: '1em 10em' },
                        fontWeight: 700,
                        fontSize: 12,
                        color: '#e0eef0',
                        backgroundColor: '#3ca1ac',
                        padding: '7px 35px'
                    }}>Book a Demo</Button>
                </Box>
                <img
                    src={sec1b}
                    alt={sec1b}
                    className="sec1b"
                />
            </Box>




            <Box sx={{ '@media (max-width: 768px)': { display: 'none' } }} >
                <img
                    src={sec1c}
                    alt={sec1c}
                    style={{
                        height: 350,
                        marginTop: '9em'
                    }}
                />
            </Box>
        </Box>
    )
}