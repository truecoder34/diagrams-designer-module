import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';


export default function SaveButton({labelName}) {
  return (
    <Button component="label" 
    variant="contained" 
    color="success" 
    startIcon={<SaveIcon/>}
    sx={{fontSize: 14}}
    >
      {labelName}
    </Button>
  );
}