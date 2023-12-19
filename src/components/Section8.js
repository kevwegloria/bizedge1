import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';

export default function Section8() {
    return (
        <Box sx={{
            '@media (max-width: 768px)': {
                paddingBottom: '4em'
            }
        }}>
            <Box sx={{
                '@media (max-width: 768px)': {
                    width: '20em',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    border: '1px',
                    borderRadius: '15px',
                    boxShadow: '0 2px 10px 10px #eeeeee',


                }

            }}>
                <Box sx={{
                    display: 'none',
                    '@media (max-width: 768px)': {
                        textAlign: 'left',
                        display: 'block',
                        marginLeft: '1.4em'
                    }
                }}>
                    <Typography sx={{
                        marginBottom: '10px',
                        paddingTop: '20px',
                        color: '#878787',
                        fontWeight: 600
                    }}>Startup</Typography>
                    <Typography sx={{
                        marginBottom: '10px',
                        marginTop: '10px',
                        fontWeight: 700,
                        fontSize: '20px'
                    }}>&#8358;200</Typography>
                    <Typography sx={{
                        marginBottom: '10px',
                        marginTop: '10px', 
                        color: '#171717'
                    }}>Per Employee</Typography>
                </Box>
                <Box sx={{
                    display: 'none',
                    '@media (max-width: 768px)': {
                        textAlign: 'center',
                        display: 'block'
                    }
                }}>
                    <Button sx={{
                        textTransform: 'none',
                        color: '#171717',
                        border: 1,
                        padding: '0.7em 7em',
                        borderRadius: '8px'
                    }}
                        style={{ borderColor: '#2898A4', }}>Get Started</Button>
                </Box>



                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: '4em',


                }}>


                    <Accordion sx={{
                        width: '60em',
                        boxShadow: 'none',
                        
                        '@media (max-width: 768px)': {
                            width: '19em'
                        }
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#2898A4', }} />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant="h6" sx={{
                                color: '#2898A4',
                                fontSize: '15px',
                               
                            }}>People Management</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                marginBottom: '0.5em',
                                fontSize: '15px',
                                color: '#171717',
                            }}>
                                Request Leave/Time Off
                            </Typography>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                View Time Off History
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{
                        width: '60em',
                        boxShadow: 'none',
                        '@media (max-width: 768px)': {
                            display: 'none'
                        }
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#2898A4', }} />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant="h6"
                                sx={{
                                    color: '#2898A4',
                                    fontSize: '15px'
                                }}>
                                MyEdge - Employee Self Service</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                This is an example
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{
                        width: '60em',
                        boxShadow: 'none',
                        '@media (max-width: 768px)': {
                            width: '19em'
                        }
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
                            color: '#2898A4',

                        }} />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant="h6" sx={{
                                color: '#2898A4',
                                fontSize: '15px'
                            }}>Task Management</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                Assign & Collaborate on Tasks
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{
                        width: '60em',
                        boxShadow: 'none',
                        '@media (max-width: 768px)': {
                            width: '19em'
                        }
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
                            color: '#2898A4',
                        }} />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant="h6" sx={{
                                color: '#2898A4',
                                fontSize: '15px'
                            }}>Customer Support</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                Phone & Chat Support
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={{
                        width: '60em',
                        boxShadow: 'none',
                        '@media (max-width: 768px)': {
                            width: '19em'
                        }
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
                            color: '#2898A4',

                        }} />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant="h6" sx={{
                                color: '#2898A4',
                                fontSize: '15px'
                            }}>Time Off Management</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                marginBottom: '0.5em',
                                fontSize: '15px',
                                color: '#171717',
                            }}>
                                Create and Customize Multiple <br /> Time Off Policies
                            </Typography>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                Apply for Time Off from Both Web <br /> and Mobile App
                            </Typography>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                Multi-Level Approvals
                            </Typography>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                Visibility of Who's Out & Teams' <br /> Upcoming Leave
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{
                        width: '60em',
                        boxShadow: 'none',
                        '@media (max-width: 768px)': {
                            display: 'none'
                        }
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
                            color: '#2898A4',

                        }} />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant="h6" sx={{
                                color: '#2898A4',
                                fontSize: '15px'
                            }}>Reports</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                This is an example
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{
                        width: '60em',
                        boxShadow: 'none',
                        '@media (max-width: 768px)': {
                            width: '19em'
                        }
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
                            color: '#2898A4',

                        }} />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant="h6" sx={{
                                color: '#2898A4',
                                fontSize: '15px'
                            }}>Document Management</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                Store Employee Documents <br /> (Educational Certs & more)
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{
                        width: '60em',
                        boxShadow: 'none',
                        '@media (max-width: 768px)': {
                            display: 'none'
                        }
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
                            color: '#2898A4',

                        }} />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant="h6" sx={{
                                color: '#2898A4',
                                fontSize: '15px'
                            }}>Employee Onboarding</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                This is an example
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{
                        width: '60em',
                        boxShadow: 'none',
                        '@media (max-width: 768px)': {
                            display: 'none'
                        }
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
                            color: '#2898A4',

                        }} />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant="h6" sx={{
                                color: '#2898A4',
                                fontSize: '15px'
                            }}>Time & Attendance Management</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                This is an example
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{
                        width: '60em',
                        boxShadow: 'none',
                        '@media (max-width: 768px)': {
                            width: '19em'
                        }
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
                            color: '#2898A4',

                        }} />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant="h6" sx={{
                                color: '#2898A4',
                                fontSize: '15px'
                            }}>Payroll</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                Payroll Run History
                            </Typography>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                View and Share Employee Payslips
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{
                        width: '60em',
                        boxShadow: 'none',
                        '@media (max-width: 768px)': {
                            display: 'none'
                        }
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
                            color: '#2898A4',

                        }} />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant="h6" sx={{
                                color: '#2898A4',
                                fontSize: '15px'
                            }} >Payroll - Direct deposit</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                This is an example
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{
                        width: '60em',
                        boxShadow: 'none',
                        '@media (max-width: 768px)': {
                            display: 'none'
                        }

                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
                            color: '#2898A4',

                        }} />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant="h6" sx={{
                                color: '#2898A4',
                                fontSize: '15px'
                            }}>Accounting - Income</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                This is an example
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{
                        width: '60em',
                        boxShadow: 'none',
                        '@media (max-width: 768px)': {
                            display: 'none'
                        }
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
                            color: '#2898A4',

                        }} />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant="h6" sx={{
                                color: '#2898A4',
                                fontSize: '15px'
                            }}>Accounting - Reports</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                This is an example
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{
                        width: '60em',
                        boxShadow: 'none',
                        '@media (max-width: 768px)': {
                            display: 'none'
                        }
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
                            color: '#2898A4',

                        }} />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant="h6" sx={{
                                color: '#2898A4',
                                fontSize: '15px'
                            }}>Accounting - Expenditure</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                This is an example
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={{
                        width: '60em',
                        boxShadow: 'none',
                        '@media (max-width: 768px)': {
                            display: 'none'
                        }
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
                            color: '#2898A4',

                        }} />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant="h6" sx={{
                                color: '#2898A4',
                                fontSize: '15px'
                            }}>Accounting - Contacts</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                This is an example
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{
                        width: '60em',
                        boxShadow: 'none',
                        '@media (max-width: 768px)': {
                            display: 'none'
                        }
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{
                            color: '#2898A4',

                        }} />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography variant="h6" sx={{
                                color: '#2898A4',
                                fontSize: '15px'
                            }}>Accounting - Inventory</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: '#171717',
                                fontSize: '15px'
                            }}>
                                This is an example
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    )
}
