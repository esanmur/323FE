import React from 'react'
import { Container } from '@mui/material';
import ActivityInputs from './ActivityInputs'
import DeleteInputs from './DeleteInputs'

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
    >
        <h1>Delete Activity</h1>
        <h4>Enter your Email, Special Code, and Item ID to delete from your list.</h4>
        <h5>You will have to regenerate your list to see updates.</h5>
        <DeleteInputs />
        <h1>Create Activity</h1>
        <h4>Enter your Email and Special Code and add to your list.</h4>
        <h5>You will have to regenerate your list to see updates.</h5>
    </Container>
    <ActivityInputs />
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