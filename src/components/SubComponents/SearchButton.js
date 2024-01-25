import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchButton({onPress}) {
  return (
    <Button 
      component="label" variant="contained" 
      onClick={onPress} startIcon={<SearchIcon/>}
      sx={{fontSize: 14}} >
    Поиск конструктивного элмента
  </Button>
  );
}