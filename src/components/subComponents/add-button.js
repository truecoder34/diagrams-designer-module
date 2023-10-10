import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function AddButton() {
  return (
    <Button component="label" variant="contained"  startIcon={<AddIcon/>} >
    Создать
  </Button>
  );
}