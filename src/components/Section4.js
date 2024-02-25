import React from "react";
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import sec4 from './images/sec4.png'


export default function Section4() {
    return (
        <Box>
            <Box sx={{
                backgroundColor: '#FFE5E5',
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
                marginBottom: '6em',
                marginTop: '6em',
               
                '@media (max-width: 768px)': {
                    flexDirection: 'column',
                    width: '20em',
                    height: '26em',
                    justifyContent: 'center'


                }
            }}>
                <Box sx={{
                    position: 'absolute',
                    left: 80,
                    '@media (max-width: 768px)': {
                        position: 'absolute',
                        top: '20%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center'
                    }
                }}>
                    <Typography variant="p" sx={{
                        color: '#FF6666',
                        fontSize: '0.7em',
                        fontFamily: 'blacksans',
                        fontWeight: 'bold'
                    }}>Payroll</Typography>
                    <Typography sx={{
                        fontSize: '1.45em',
                        fontWeight: 600,
                        marginBottom: '10px',
                        fontFamily: 'blacksansbold',
                    }}>Autopilot your payroll</Typography>
                    <Typography sx={{
                          width: '22em',
                          color: 'grey',
                          fontSize: '13px',
                          fontFamily: 'blacksans',
                          fontWeight: 'bold',
                          '@media (max-width: 768px)': {
                            width: '22em',
                        }
                    }}>Spend Less time doing your company's calculations, deductions and pay your team easily. Payroll made simple</Typography>
                </Box>
                <img
                    src={sec4}
                    alt={sec4}
                    className="sec4"
                />
            </Box>
        </Box>
    )
}