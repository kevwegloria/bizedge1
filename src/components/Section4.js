import React from "react";
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import sec4 from './images/sec4.png'


export default function Section4() {
    return (
        <Box>
            <Box sx={{
                backgroundColor: '#ffcdcd',
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
                    width: '22em',
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
                    <Typography sx={{
                        color: '#FF6666',
                        fontSize: '0.7em',
                    }}>Payroll</Typography>
                    <Typography sx={{
                        fontSize: '1.45em',
                        fontWeight: 600,
                        marginBottom: '5px'
                    }}>Autopilot your payroll</Typography>
                    <Typography sx={{
                          width: '22em',
                          color: '#171717',
                          fontSize: '14px',
                          '@media (max-width: 768px)': {
                            width: '20em'
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