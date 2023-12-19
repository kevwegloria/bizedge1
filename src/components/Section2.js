import React from "react";
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import sec2a from './images/sec2a.png';


export default function Section2() {
  return (
    <Box>
      <Box sx={{
        display: 'flex',
        backgroundColor: '#ebeffa',
        width: '60em',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '15px',
        position: 'relative',
        height: '25em',
        flexDirection: 'row',
        overflow: 'hidden',
        '@media (max-width: 768px)': {
          flexDirection: 'column',
          width: '22em',
          height: '31em',
          justifyContent: 'center',

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
            color: '#1E387B',
            fontSize: '0.7em',
            marginBottom: '10px',
            fontWeight: 600
          }}>People Analytics. Time & Attendance. Core HR</Typography>
          <Typography sx={{
            marginBottom: '10px',
            fontSize: '1.45em',
            fontWeight: 600,
            lineHeight: '25px'
          }}>Modern people <br />management is here. </Typography>
          <Typography sx={{
            width: '20em',
            color: '#171717',
            fontSize: '14px',
          }}>Experience the ease of creating time-off benefit and onboarding and offboarding</Typography>
        </Box>

        <img
          src={sec2a}
          alt={sec2a}
          className="sec2a"
        />
      

      </Box>

    </Box>
  )
}