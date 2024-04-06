'use client'

import React, { useState, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const PriceFilter = () => {

    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams();

    const [min, setMin] = useState<string>();
    const [max, setMax] = useState<string>();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams.toString());
        min ? params.set('min_price', min) : params.delete('min_price');
        max ? params.set('max_price', max) : params.delete('max_price');

        router.push(pathname + '?' + params.toString());
    }

    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <FormControl sx={{ m: 1, width: '25ch' }}
                        >
                            <InputLabel htmlFor="outlined-adornment-amount">Min</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Amount"
                                onChange={(e) => setMin(e.target.value)}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Max</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Amount"
                                onChange={(e) => setMax(e.target.value)}
                            />
                        </FormControl>
                        <Button
                            variant="contained"
                            type="submit"
                        >
                            Apply
                        </Button>
                    </div>
                </form>

            </Box>
        </>
    )
}

export default PriceFilter