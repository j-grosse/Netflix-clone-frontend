import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';

export default function UseFormControl() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl 
        sx={{ width: '25ch', borderRadius: '15px', background: 'white' }}
      >
        <OutlinedInput placeholder="Search Movies" />
      </FormControl>
    </Box>
  );
}
