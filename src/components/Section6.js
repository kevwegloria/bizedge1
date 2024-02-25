import React from "react";
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';


export default function Section6() {
    return (
        <Box>
            <Box sx={{
                textAlign: 'center',
                paddingTop: '3em'

            }}>
                <Typography sx={{
                    fontSize: '1.5em',
                    fontWeight: 700,
                    paddingTop: '1.6em',
                    paddingBottom: '0.5em',

                    fontFamily: 'blacksansbold',
                    '@media (max-width: 768px)': {
                        width: '15em',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingTop: '2em',
                        fontSize: '22px'
                    }
                }}>
                    We are here to provide you with all you need
                </Typography>
                <Typography sx={{
                    color: '#545454',
                    fontWeight: 'bold',
                    paddingBottom: '3.5em',
                    width: '32em',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontFamily: 'blacksans',
                    fontSize: '14px',
                    '@media (max-width: 768px)': {
                        width: '22em',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        fontSize: '13px'
                    }

                }}>
                    We hold your hand as your business takes each step. Our goal is to help your team run at its smoothest from day one.
                </Typography>
            </Box>


            <Box sx={{
                display: 'flex',
                gap: '1em',
                justifyContent: 'center',
                '@media (max-width: 768px)': {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            }}>
                <Box sx={{
                    backgroundColor: '#f2f2f2',
                    width: '14em',
                    padding: '1.5em',
                    height: '12em',
                    borderRadius: '15px',
                    '@media (max-width: 768px)': {
                        width: '18.5em',
                        height: '8.3em',
                        textAlign: 'left',
                        fontSize: '16px'
                    }
                }}>
                    <Typography sx={{
                        fontWeight: 600,
                        paddingBottom: '0.5em',
                        fontFamily: 'blacksansblack',
                        marginBottom: '10px',
                        fontSize: '16px',
                        color: '#171717',
                        '@media (max-width: 768px)': {
                            fontFamily: 'blacksansbold',
                            
                        }

                    }} >Ease of Use</Typography>
                    <Typography sx={{
                        fontSize: '12px',
                        fontFamily: 'blacksans',
                        width: '14em',
                        color: 'grey',
                        fontWeight: 'bold',
                        '@media (max-width: 768px)': {
                          
                            width: '21em'
                        }
                    }}>With our simple interface, employers and employees find it easy to operate the app. No specific training is required. </Typography>

                </Box>
                <Box sx={{
                    backgroundColor: '#f2f2f2',
                    width: '14em',
                    padding: '1.5em',
                    height: '12em',
                    borderRadius: '15px',
                    '@media (max-width: 768px)': {
                        width: '18.5em',
                        height: '7em',
                        textAlign: 'left',
                        fontSize: '16px'
                    }

                }}>
                    <Typography sx={{
                        fontWeight: 600,
                        paddingBottom: '0.5em',
                        fontFamily: 'blacksansblack',
                        fontSize: '16px',
                        marginBottom: '10px',
                        color: '#171717',
                        '@media (max-width: 768px)': {
                            fontFamily: 'blacksansbold',
                            
                        }
                    }}>Built For You</Typography>
                    <Typography sx={{
                        fontSize: '12px',
                        color: 'grey',
                        fontWeight: 'bold',
                        fontFamily: 'blacksans',
                        width: '12em',
                        '@media (max-width: 768px)': {
                            width: '21em',
                           

                        }

                    }}>Designed to support growing businesses and teams. No hidden charge or contract.</Typography>

                </Box>
                <Box sx={{
                    backgroundColor: '#f2f2f2',
                    width: '14em',
                    padding: '1.5em',
                    height: '12em',
                    borderRadius: '15px',
                    '@media (max-width: 768px)': {
                        width: '18.5em',
                        height: '8.3em',
                        textAlign: 'left',
                        fontSize: '16px'
                    }
                }}>
                    <Typography sx={{
                        fontWeight: 600,
                        paddingBottom: '1em',
                        fontFamily: 'blacksansblack',
                        fontSize: '16px',
                        color: '#171717',
                        '@media (max-width: 768px)': {
                            fontFamily: 'blacksansbold',
                            
                        }

                    }}>Safe & Secure</Typography>
                    <Typography sx={{
                        fontSize: '12px',
                        fontFamily: 'blacksans',
                        width: '13em',
                        color: 'grey',
                        fontWeight: 'bold',
                        '@media (max-width: 768px)': {
                            width: '20em'
                        }

                    }}>We maintain the confidentiality, integrity and availability of your data. No third party has your data.</Typography>

                </Box>
                <Box sx={{
                    backgroundColor: '#f2f2f2',
                    width: '14em',
                    padding: '1.5em',
                    height: '12em',
                    borderRadius: '15px',
                    '@media (max-width: 768px)': {
                        width: '18.5em',
                        height: '8.3em',
                        marginBottom: '3em',
                        textAlign: 'left',
                        fontSize: '16px'

                    }
                }}>
                    <Typography sx={{
                       fontWeight: 600,
                       paddingBottom: '0.4em',
                       fontFamily: 'blacksansblack',
                       fontSize: '16px',
                       marginBottom: '10px',
                       color: '#171717',
                       '@media (max-width: 768px)': {
                        fontFamily: 'blacksansbold',
                        
                    }

                    }}>Support</Typography>
                    <Typography sx={{
                        fontSize: '12px',
                        color: 'grey',
                        fontWeight: 'bold',
                        fontFamily: 'blacksans',
                        width: '12em',
                        '@media (max-width: 768px)': {
                            display: 'none'
                        }

                    }}>Our customer success team is quick to offer assistance when you need it.</Typography>

                    <Typography sx={{
                        fontSize: '12px',
                        width: '12em',
                        display: 'none',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold',
                        color: 'grey',
                        '@media (max-width: 768px)': {
                            display: 'block',
                            width: '21em',

                        }
                    }}>Our software scales with your business, accomodating an expanding workforce and evolving payroll needs seamlessly</Typography>

                </Box>
            </Box>
        </Box>
    )
}