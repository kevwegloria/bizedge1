import React from "react";
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import sec3a from './images/sec3a.png';
import sec3b from './images/sec3b.png'


export default function Section3() {
    return (
        <Box>
            <Box sx={{
                backgroundColor: '#fef6e6',

                display: 'flex',
                width: '60em',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: '15px',
                position: 'relative',
                height: '25em',
                flexDirection: 'row',
                marginBottom: '9em',
                marginTop: '7em',
                '@media (max-width: 768px)': {
                    flexDirection: 'column',
                    width: '20em',
                    height: '40em',
                    justifyContent: 'center'


                }
            }}>
                <Box>
                    <img
                        src={sec3a}
                        alt={sec3a}
                        className="sec3a"

                    />
                    <img
                        src={sec3b}
                        alt={sec3b}
                        className="sec3b"
                    />
                </Box>
                <Box sx={{
                    position: 'absolute',
                    left: '65%',
                    top: '24%',

                    '@media (max-width: 768px)': {
                        position: 'absolute',
                        top: '1%',
                        left: '12%',
                        textAlign: 'center',
                      
                        paddingTop: '2em'
                    }
                }}>
                    <Typography sx={{
                        color: '#f8b636',
                        fontSize: '0.7em',
                        fontFamily: 'blacksansbold',
                        marginBottom: '20px'
                       
                    }}>
                        Time & Attendance
                    </Typography>
                    <Typography sx={{
                        fontSize: '1.45em',
                        fontWeight: 600,
                        marginBottom: '5px',
                        fontFamily: 'blacksansbold',
                        lineHeight: '25px'
                    }}>
                        Track employee <br /> attendance easily
                    </Typography>
                    <Typography sx={{
                        width: '19em',
                        color: 'grey',
                        fontSize: '13px',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold',
                        paddingTop: '20px'
                       
                    }}>
                        Set up an efficient clock in & clock out tool for your employees, whether they work onsite or remotely.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}