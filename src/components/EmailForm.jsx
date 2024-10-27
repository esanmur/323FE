import React from 'react'
import { Container } from '@mui/material';
import EmailInputs from './EmailInputs'

function ApplicationForm() {
  return (
    <>
    <Container
    sx={[
      (theme) => ({
        width:'60%',
        alignItems: 'center',
        py: 1,
        gap: 4,
      })
    ]}
    >                <h1>To-Do List</h1>
        <h4>Enter your Email and Special Code to generate your list.</h4>
    </Container>
    <EmailInputs />
    <Container
    sx={[
      (theme) => ({
        width:'60%',
        alignItems: 'center',
        py: 5,
        gap: 4,
      })
    ]}
    >

    </Container>
    </>
  )
}

export default ApplicationForm