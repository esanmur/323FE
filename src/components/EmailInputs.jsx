import * as React from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { Container } from '@mui/material';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/joy/Table';

export default function InputFormProps() {

  const [formData, setFormData] = useState({
    email: '',
    code: '',
  })

  const [data, setData] = useState([]);

  {/*}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://enrique-sanchez-murillo.us-west-1.elasticbeanstalk.com/'); 
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  */}

  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value})
  }
  
  {/* SUBMIT TO THE BACK END   */}
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.post('http://enrique-sanchez-murillo.us-west-1.elasticbeanstalk.com/productapi/products', formData);
      alert("To-Do Loaded")
      {/*navigate('/')*/}
      setData(response.data)
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
        <Input required type='email' id='email' name='email' value={formData.email} onChange={handleChange} placeholder="GoLopes@email.com" />
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
    <br/>
<h1>Items</h1>
    <Table sx={{ '& tr > *:not(:first-child)': { textAlign: 'right' } }}>
      <thead>
        <tr>
          <th style={{ width: '10%' }}>Item ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Urgent</th>
          <th>Important</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.description}</td>
            {row.urgent ? <td>Yes</td> : <td>No</td>}
            {row.important ? <td>Yes</td> : <td>No</td>}
          </tr>
        ))}
      </tbody>
    </Table>
    </Container>


  );
}
