'use client'

import React, {useState} from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SortProducts = () => {

    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams();
  
    const [results, setResults] = useState();
  
    const handleChange = (e: any) => {
      setResults(e.target.value)
      const params = new URLSearchParams(searchParams.toString());
      params.set('sort', e.target.value.toString());
      router.push(pathname + '?' + params.toString());
    }

  return (
    <>
    <h2>Sort</h2>
      <FormControl fullWidth>
        <InputLabel id="sort">Sort By:</InputLabel>
        <Select
          value={results}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value={'asc'}>Price: Lowest First</MenuItem>
          <MenuItem value={'desc'}>Price: Highest First</MenuItem>
          <MenuItem value={'newest'}>Newest</MenuItem>
          <MenuItem value={'oldest'}>Oldest</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default SortProducts