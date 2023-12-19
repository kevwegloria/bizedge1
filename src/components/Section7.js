import React from "react";
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Section7() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',

        }}>
            <Box>
                <Typography
                    sx={{
                        fontWeight: '700',
                        fontSize: '27px',
                        textAlign: 'center',
                        marginBottom: '15px',
                        display: 'block',
                        paddingTop: '2em',
                        '@media (max-width: 768px)': {
                            display: 'none'
                        }
                    }} >
                    Choose the right plan for your business
                </Typography>
                <Typography
                    sx={{
                        fontWeight: '700',
                        fontSize: '27px',
                        textAlign: 'center',
                        marginBottom: '15px',
                        display: 'none',
                        '@media (max-width: 768px)': {
                            display: 'block',
                            
                        }
                    }} >
                    Choose right for your<br /> business
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#f2f2f2',
                width: '19em',
                borderRadius: '20px',
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                color: '#171717',
                marginBottom: '1em',
                gap: '3em',
                paddingTop: '0.3em',
                paddingBottom: '0.3em',

            }}>

                <Box sx={{}}>
                    <Typography sx={{
                        fontSize: '15px',
                        fontWeight: 600,
                        padding: '5px 10px 5px 10px',
                        backgroundColor: '#fce2af',
                        borderRadius: '15px'
                    }}>Yearly <span style={{
                        fontSize: '12px',
                        color: 'white',
                        backgroundColor: '#ff6666',
                        padding: '3px 7px',
                        borderRadius: '15px',
                        fontWeight: 400,

                    }}>Up to 33% Off</span></Typography>

                </Box>
                <Typography sx={{
                    paddingRight: '2em'
                }}>
                    Monthly
                </Typography>
            </Box>




            <Box sx={{
                paddingBottom: '5px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '60em',
                marginLeft: 'auto',
                marginRight: 'auto',
                gap: '0.3em',
                '@media (max-width: 768px)': {
                    width: '22em',
                    marginTop: '1em',
                    marginBottom: '3em',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }
            }}>
                <Button sx={{
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    height: '4em',
                    width: '40em',
                    backgroundColor: '#2898A4',
                    textTransform: 'none',
                    lineHeight: '18px',
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                    '&:hover': {
                        backgroundColor: '#2898A4',
                      },

                    '@media (max-width: 768px)': {
                        width: '10em',
                        padding: '10px 80px'

                    }
                }}>BizEdge Suite<br />(Recommended)</Button>
                <Button sx={{
                    border: 'none',
                    height: '4em',
                    width: '40em',
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                    border: 'none',
                    backgroundColor: '#f2f2f2',
                    color: '#171717',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: '#f2f2f2',
                      },
                    '@media (max-width: 768px)': {
                        width: '10em',
                        padding: '10px 80px'

                    }
                }}> People</Button>
            </Box>

            <Box sx={{
                display: 'flex',
                gap: '4em',
                paddingBottom: '0.5em',
                borderBottom: 1,
                borderTop: 1,
                paddingTop: '0.5em',
                borderColor: '#e7e7e7',
                width: '60em',
                justifyContent: 'flex-end',
                marginLeft: 'auto',
                marginRight: 'auto',


                '@media (max-width: 768px)': {
                    display: 'none'
                }

            }}>
                <Box sx={{
                    textAlign: 'center'
                }}>
                    <Typography sx={{

                        paddingTop: '7px',
                        color: '#878787',
                        fontWeight: 600
                    }}>Startup</Typography>
                    <Typography sx={{
                        fontWeight: 700,
                        fontSize: '18px'
                    }}>300 NGN</Typography>
                    <Typography
                        sx={{
                            marginBottom: '15px',
                            marginTop: '10px',
                            color: '#171717',
                            fontSize: '12px'
                        }}>Per Employee/Month</Typography>
                    <Box sx={{

                        '@media (max-width: 768px)': {
                            textAlign: 'center',

                        }
                    }}>
                        <Button
                            sx={{
                                textTransform: 'none',
                                color: '#171717',
                                border: 1,
                                borderRadius: '8px',
                                padding: '0.5em 2em',
                                fontSize: '12px',
                                color: '#878787',
                                fontWeight: 600,
                                '&:hover': {
                                    backgroundColor: 'white',
                                  },
                            }}
                            style={{ borderColor: '#2898A4', }}>Get Started</Button>
                    </Box>
                </Box>
                <Box sx={{
                    textAlign: 'center',
                    backgroundColor: '#fde7bf',
                    paddingLeft: '7px',
                    paddingRight: '7px',
                    borderRadius: '15px',
                    paddingBottom: '10px'

                }}>
                    <Typography sx={{

                        paddingTop: '10px',
                        fontSize: '14px',
                        color: '#878787',
                        fontWeight: 600
                    }}>Business (Popular)</Typography>
                    <Typography sx={{

                        fontWeight: 700,
                        fontSize: '18px'
                    }}>500 NGN</Typography>
                    <Typography
                        sx={{
                            marginBottom: '15px',
                            marginTop: '10px',
                            color: '#171717',
                            fontSize: '12px',
                            
                        }}>Per Employee/Month</Typography>
                    <Box sx={{

                        '@media (max-width: 768px)': {
                            textAlign: 'center',

                        }
                    }}>
                        <Button
                            sx={{
                                textTransform: 'none',
                                color: '#171717',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '0.5em 2em',
                                backgroundColor: '#f8b636',
                                fontSize: '12px',
                                color: 'white',
                                fontWeight: 600,
                                '&:hover': {
                                    backgroundColor: '#f8b636',
                                  },
                            }}
                        >Get Started</Button>
                    </Box>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{

                        paddingTop: '10px',
                        color: '#878787',
                        fontWeight: 600
                    }}>Pro</Typography>
                    <Typography sx={{

                        fontWeight: 700,
                        fontSize: '18px'
                    }}>1000 NGN</Typography>
                    <Typography
                        sx={{
                            marginBottom: '5px',

                            color: '#171717',
                            fontSize: '12px'
                        }}>(Minimum of 20 <br />Employees)</Typography>
                    <Box sx={{

                        '@media (max-width: 768px)': {
                            textAlign: 'center',

                        }
                    }}>
                        <Button
                            sx={{
                                textTransform: 'none',
                                color: '#171717',
                                border: 1,
                                borderRadius: '8px',
                                padding: '0.5em 2em',
                                fontSize: '12px',
                                color: '#878787',
                                fontWeight: 600,
                                '&:hover': {
                                    backgroundColor: 'white',
                                  },
                            }}
                            style={{ borderColor: '#2898A4', }}>Get Started</Button>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}