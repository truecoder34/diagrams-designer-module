import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

const VisuallyHiddenInput = styled('output')({
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

export default function DownloadFile({fileName}) {
  return (
    <Button component="label" variant="contained" startIcon={<DownloadIcon />}>
      {fileName}
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}