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
    email: '',
    code: '',
    itemID: 0,
  })

  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value})
  }

  
  {/* SUBMIT TO THE BACK END   */}
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.delete('http://enrique-sanchez-murillo.us-west-1.elasticbeanstalk.com/productapi/products/' + formData.itemID);
      alert("Activity Deleted")
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
        <FormLabel>Email</FormLabel>
        <Input  required type='email' id='email' name='email' value={formData.email} onChange={handleChange} placeholder="GoLopes@email.com" />
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Code</FormLabel>
        <Input required type='text' id='code' name='code' value={formData.code} onChange={handleChange} placeholder="abcd1234" />
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>ItemID</FormLabel>
        <Input required type='number' id='itemID' name='itemID' value={formData.itemID} onChange={handleChange} placeholder="7" />
        <FormHelperText></FormHelperText>
      </FormControl>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
    </Container>
    
    
  );
}
