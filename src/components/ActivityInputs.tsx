import * as React from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { Checkbox, Container } from '@mui/material';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function InputFormProps() {

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    urgent: false,
    important: false,
    email: '',
    code: '',
  })

  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value})
  }
  
  {/* SUBMIT TO THE BACK END   */}
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await axios.post('http://enrique-sanchez-murillo.us-west-1.elasticbeanstalk.com/productapi/product', formData);
      alert("Activity Created")
      navigate('/')
    } catch(error) {
      alert("Error: Verify all information is correct.")
    }
  }
 

  return (
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
    <form
      onSubmit={handleSubmit}
    >
      <Stack spacing={3}> 
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input required type='text' id='name' name='name' value={formData.name} onChange={handleChange} placeholder="GoLopes@email.com" />
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input required type='text' id='description' name='description' value={formData.description} onChange={handleChange} placeholder="abcd1234" />
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl sx={{width:'10%'}}>
        <FormLabel>Urgent</FormLabel>
        <Checkbox id='urgent' name='urgent' value={formData.urgent} onChange={handleChange}/>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl sx={{width:'10%'}}>
        <FormLabel>Important</FormLabel>
        <Checkbox id='important' name='important' value={formData.important} onChange={handleChange}/>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input  required type='email' id='email' name='email' value={formData.email} onChange={handleChange} placeholder="GoLopes@email.com" />
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Code</FormLabel>
        <Input required type='text' id='code' name='code' value={formData.code} onChange={handleChange} placeholder="abcd1234" />
        <FormHelperText></FormHelperText>
      </FormControl>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
    </Container>
    
    
  );
}
