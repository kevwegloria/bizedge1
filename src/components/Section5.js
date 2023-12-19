import React from "react";
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import phone from './images/phone.png'


export default function Section5() {
    return (
        <Box sx={{
            position: 'relative',
            '@media (max-width: 768px)': {
                flexDirection: 'column'
            }
        }}>
            <Box sx={{
                display: 'flex',
                backgroundColor: '#ebeffa',
                width: '60em',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: '15px',
                position: 'relative',
                height: '25em',
                flexDirection: 'row',

                '@media (max-width: 768px)': {
                    flexDirection: 'column',
                    width: '22em',
                    height: '33em',
                    justifyContent: 'center'


                }

            }}>
                <Box sx={{

                    position: 'absolute',
                    left: 80,
                    '@media (max-width: 768px)': {
                        position: 'absolute',
                        top: '25%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center'
                    }
                }}>
                    <Typography sx={{
                        fontSize: '0.7em',
                        color: '#4069d0',

                    }}>MyEdge (employee self-service)</Typography>
                    <Typography sx={{
                        fontSize: '1.5em',
                        fontWeight: 600,
                        '@media (max-width: 768px)': {
                            fontSize: '1.9em',
                            paddingTop: '5px',
                            paddingBottom: '5px'
                        }

                    }}>Get the best out of Work-life</Typography>
                    <Typography sx={{
                        width: '23em',
                        color: '#171717',
                        fontSize: '14px',
                        '@media (max-width: 768px)': {
                            width: '20em'
                        }
                    }}>MyEdge app has features that manage employee information that helps achieve a stress-free and personalised self-service experience</Typography>
                </Box>
                <img
                    src={phone}
                    alt={phone}
                    className='phone'
                />
            </Box>
        </Box>
    )
}