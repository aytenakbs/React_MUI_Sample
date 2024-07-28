import React, { useState } from 'react';
import { Stack, TextField, Button } from '@mui/material';
import axios from 'axios';

function AddSupplierMUI() {
  const [companyName, setcompanyName] = useState("")
  const [contactName, setcontactName] = useState("")
  const [contactTitle, setcontactTitle] = useState("")
  const add=()=>{
    axios.post("https://northwind.vercel.app/api/suppliers",{companyName,contactName,contactTitle})
    .then(res=>
    {alert("Success!")}
    )
    .catch(error => {
      console.error('Ürün eklenirken bir hata oluştu!', error);
    });
  }
  return <>
<Stack spacing={2}>
  <Stack spacing={2}>
    <TextField id="companyName" label="Company Name" variant="outlined" onChange={(e)=>setcompanyName(e.target.value)}/>
    <TextField id="contactName" label="Contact Name" variant="outlined" onChange={(e)=>setcontactName(e.target.value)}/>
    <TextField id="contactTitle" label="Contact Title" variant="outlined" onChange={(e)=>setcontactTitle(e.target.value)}/>
  </Stack>
  <Stack>
    <Button variant="contained" onClick={add}>Add</Button>
  </Stack>
</Stack>
  </>
}

export default AddSupplierMUI