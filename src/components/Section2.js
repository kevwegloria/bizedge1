import React from "react";
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import sec2a from './images/sec2a.png';
import sec2b from './images/sec2b.png'


export default function Section2() {
  return (
    <Box>

      <Box

        sx={{
          textAlign: 'center',
          paddingBottom: '60px',
          borderTop: 1,
          width: '60em',
          alignItems: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderColor: '#e1e1e1',
          paddingTop: '50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            width: '22em',
            height: '31em',
            justifyContent: 'center',

          }

        }} >
        <Typography variant="h4"

          sx={{
            fontFamily: 'blacksansbold',
            fontSize: '2em',
            fontWeight: 'bolder',
            marginBottom: '15px',
            '@media (max-width: 768px)': {
              fontSize: '22px'
            }

          }}>
          Our Unique Features
        </Typography>
        <Typography
          sx={{
            fontFamily: 'blacksans',
            color: '#545454',
            fontWeight: '600',
            fontSize: '14px',
            width: '32em',
            '@media (max-width: 768px)': {
              fontSize: '14px',
              width: '25em',
              fontSize: '12px',
            }

          }}>
          Experience the ease of employee onboarding, managing time- off, benefits, and more.
        </Typography>

      </Box>
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
          width: '20em',
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
            fontSize: '0.67em',
            marginBottom: '12px',
            fontWeight: 600,
            fontFamily: 'blacksansbold'
          }}>People Analytics. Time & Attendance. Core HR</Typography>
          <Typography sx={{
            marginBottom: '17px',
            fontSize: '1.5em',
            fontWeight: 600,
            lineHeight: '25px',
            fontFamily: 'blacksansbold'
          }}>Modern people <br />management is here. </Typography>
          <Typography sx={{
            width: '23em',
            color: '#545454',
            fontWeight: 'bold',
            fontSize: '14px',
            fontFamily: 'blacksans'
          }}>Experience the ease of creating time-off benefit and onboarding and offboarding</Typography>
        </Box>

        <img
          src={sec2a}
          alt={sec2a}
          className="sec2a"
        />
        <img
          src={sec2b}
          alt={sec2b}
          className="sec2b"
        />


      </Box>

    </Box>
  )
}