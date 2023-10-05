import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function SaveButton() {
  return (
    <Button component="label" variant="contained" startIcon={<SaveIcon/>}>
      Сохранить
      {/* <VisuallyHiddenInput type="file" /> */}

    </Button>
  );
}