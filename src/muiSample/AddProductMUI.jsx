import React, { useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import axios from 'axios';

function AddProductMUI() {
  const [name, setName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [unitsInStock, setUnitsInStock] = useState("");
  const [quantityPerUnit, setQuantityPerUnit] = useState("");

  const add = () => {
    axios.post("https://northwind.vercel.app/api/products", {
      name, unitPrice, unitsInStock, quantityPerUnit
    })
    .then(res => {
      alert("Success!");
    })
    .catch(error => {
      console.error('Ürün eklenirken bir hata oluştu!', error);
    });
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent={"space-between"} spacing={2}>
        <TextField fullWidth id='name' label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
        <TextField fullWidth id='unitPrice' label="Unit Price" variant="outlined" onChange={(e) => setUnitPrice(e.target.value)} />
      </Stack>
      <Stack direction="row" justifyContent={"space-between"} spacing={2}>
        <TextField fullWidth id='unitsInStock' label="Stock" variant="outlined" onChange={(e) => setUnitsInStock(e.target.value)} />
        <TextField fullWidth id='quantityPerUnit' label="Quantity Per Unit" variant="outlined" onChange={(e) => setQuantityPerUnit(e.target.value)} />
      </Stack>
      <Stack>
        <Button onClick={add} variant="contained">Add</Button>
      </Stack>
    </Stack>
  );
}

export default AddProductMUI;
