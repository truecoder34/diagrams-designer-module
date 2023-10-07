import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';


export default function SaveButton() {
  return (
    <Button component="label" variant="contained" color="success" startIcon={<SaveIcon/>}>
      Сохранить
    </Button>
  );
}