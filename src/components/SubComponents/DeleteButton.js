import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


export default function DeleteButton({labelName}) {
  return (
    <Button component="label" variant="contained" 
            color="error" startIcon={<DeleteIcon />}
            sx={{fontSize: 14}}>
      {labelName}
    </Button>
  );
}