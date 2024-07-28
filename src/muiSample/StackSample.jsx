import React from 'react'
import { Stack } from '@mui/material'

function StackSample() {
  return <>
  <Stack direction="column" spacing={2}>
    <Stack direction="row" justifyContent={"center"} spacing={2}>
        <h2>Türkiye</h2>
        <h2>Yunanistan</h2>
        <h2>Almanya</h2>
        <h2>Suriye</h2>
        </Stack>
    <Stack direction="row" justifyContent={"center"} spacing={2}>
        <h2>Ankara</h2>
        <h2>Atina</h2>
        <h2>Berlin</h2>
        <h2>Şam</h2>
        </Stack>
  </Stack>
  </>
}

export default StackSample