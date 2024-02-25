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
                    width: '20em',
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
                    <Typography variant="p" sx={{
                        fontSize: '0.7em',
                        color: '#4069d0',
                        fontFamily: 'blacksansbold'
                    }}>MyEdge (employee self-service)</Typography>
                    <Typography sx={{
                        fontSize: '1.45em',
                        fontWeight: 600,
                        fontFamily: 'blacksansbold',
                        marginBottom: '15px',
                        '@media (max-width: 768px)': {
                            fontSize: '1.9em',
                            paddingTop: '5px',
                            paddingBottom: '5px',
                            lineHeight: '35px'
                        }

                    }}>Get the best out of Work-life</Typography>
                    <Typography sx={{
                        width: '27em',
                        color: 'grey',
                        fontSize: '13px',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold',
                        '@media (max-width: 768px)': {
                            width: '22em',
                            fontSize: '12px'
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