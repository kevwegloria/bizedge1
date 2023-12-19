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
                    paddingTop: '1em',
                    paddingBottom: '0.5em',
                    '@media (max-width: 768px)': {
                        width: '15em',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingTop: '2em'
                    }
                }}>
                    We are here to provide you with all you need
                </Typography>
                <Typography sx={{
                    color: '#171717',
                    paddingBottom: '3em',
                    width: '30em',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    '@media (max-width: 768px)': {
                        width: '20em',
                        marginLeft: 'auto',
                        marginRight: 'auto'
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
                    padding: '1em',
                    height: '12em',
                    borderRadius: '15px',
                    '@media (max-width: 768px)': {
                        width: '20em',
                       height: '8em'
                     }
                }}>
                    <Typography sx={{
                        fontWeight: 600,
                        paddingBottom: '0.5em'
                    }} >Ease of Use</Typography>
                    <Typography sx={{
                        fontSize: '14px',

                    }}>With our simple interface, employers and employees find it easy to operate the app. No specific training is required </Typography>

                </Box>
                <Box sx={{
                    backgroundColor: '#f2f2f2',
                    width: '14em',
                    padding: '1em',
                    height: '12em',
                    borderRadius: '15px',
                    '@media (max-width: 768px)': {
                        width: '20em',
                       height: '7em'
                     }

                }}>
                    <Typography sx={{
                        fontWeight: 600,
                        paddingBottom: '0.5em'
                    }}>Built For You</Typography>
                    <Typography sx={{
                        fontSize: '14px',

                    }}>Designed to support growing businesses and teams. No hidden charge or contract.</Typography>

                </Box>
                <Box sx={{
                    backgroundColor: '#f2f2f2',
                    width: '14em',
                    padding: '1em',
                    height: '12em',
                    borderRadius: '15px',
                    '@media (max-width: 768px)': {
                        width: '20em',
                       height: '10em'
                     }
                }}>
                    <Typography sx={{
                        fontWeight: 600,
                        paddingBottom: '0.5em'
                    }}>Safe & Secure</Typography>
                    <Typography sx={{
                        fontSize: '14px'
                    }}>We maintain the <br /> confidentiality, integrity <br /> and availability of our data. No third party has <br /> your data.</Typography>

                </Box>
                <Box sx={{
                    backgroundColor: '#f2f2f2',
                    width: '14em',
                    padding: '1em',
                    height: '12em',
                    borderRadius: '15px',
                    '@media (max-width: 768px)': {
                        width: '20em',
                       height: '7em',
                       marginBottom: '3em'
                     }
                }}>
                    <Typography sx={{
                        fontWeight: 600,
                        paddingBottom: '0.5em'
                    }}>Support</Typography>
                    <Typography sx={{
                        fontSize: '14px',
                    }}>Our customer success team is quick to offer assistance when you need it.</Typography>

                </Box>
            </Box>
        </Box>
    )
}