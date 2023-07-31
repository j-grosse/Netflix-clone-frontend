// import * as React from 'react';
// import FormControl, { useFormControl } from '@mui/material/FormControl';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import Box from '@mui/material/Box';
// import FormHelperText from '@mui/material/FormHelperText';

// export default function UseFormControl() {
//   return (
//     <Box component="form" noValidate autoComplete="off">
//       <FormControl
//         sx={{ width: '25ch', borderRadius: '15px', background: 'white' }}
//       >
//         <OutlinedInput placeholder="Search Movies" />
//       </FormControl>
//     </Box>
//   );
// }

import React, { useState } from 'react';
import { Box, Button, FormControl, OutlinedInput } from '@mui/material';
import axios from 'axios';

const SearchForm = ({ setMovies }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    console.log('change: ', e.target.value);
    handleSearchSubmit(e)
    if (!e.target.value) {
      axios
        .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`)
        .then((res) => setMovies(res.data))
        .catch((e) => console.log(e));
    }

  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Make an API call to the backend server
    fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/api/search?title=${searchValue}`
    )
      .then((res) => res.json())
      .then((res) => {
        setMovies(res);
        // search results received from the backend
        console.log('Search results:', res);
      })
      .catch((e) => {
        // setMovies(null);
        console.error('Error:', e.response?.data?.message);
      });
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSearchSubmit}
    >
      <FormControl
        sx={{ width: '15rem', borderRadius: '4px', background: 'white' }}
      >
        <OutlinedInput
          placeholder="Search Movies"
          value={searchValue}
          onChange={handleSearchChange}
        />
        {/* <Button onClick={handleSearchSubmit}>Search</Button> */}
      </FormControl>
    </Box>
  );
};

export default SearchForm;
