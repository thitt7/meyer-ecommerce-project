'use client'

import React, {useState} from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Rating from '@mui/material/Rating';

const RatingFilter = () => {

    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams();

    const [value, setValue] = useState<number | null>(0);

    const setRatingFilter = (e: any, val: any) => {
        setValue(val);

        const params = new URLSearchParams(searchParams.toString());
        params.set('min_rating', val.toString());
        router.push(pathname + '?' + params.toString());
    }

    return (
        <>
            <h3>Rating</h3>
            <Rating
                name="Rating"
                value={value}
                onChange={(event, newValue) => {setRatingFilter(event, newValue)}}
            />
        </>
    )
}

export default RatingFilter