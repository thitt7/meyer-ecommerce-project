'use client'

import React, { useState } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const ResultsFilter = () => {

  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams();

  const [results, setResults] = useState();

  const handleChange = (e: any) => {
    setResults(e.target.value)
    const params = new URLSearchParams(searchParams.toString());
    params.set('results', e.target.value.toString());
    router.push(pathname + '?' + params.toString());
  }

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Results</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={results}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
    </>
  );

}

export default ResultsFilter;