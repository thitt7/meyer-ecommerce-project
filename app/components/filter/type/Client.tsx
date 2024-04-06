'use client'

import React, {useState} from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const onChange = (e: any) => {
    console.log('EVENT: ', e)
}

const Client = ({types}: {types: any[]}) => {

    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams();

    const [typeState, setTypeState] = useState(
        types.reduce((acc: any, type: any) => {
            acc[type] = false;
            return acc;
        }, {})
    );

    const onClick = (e: any, i: number) => {

        const params = new URLSearchParams(searchParams.toString());

        if (e.target.checked === true) {
            params.set('type', types[i].toString());
            router.push(pathname + '?' + params.toString());
        }
        else {
            params.delete('type')
        }
    
    }

    return (
        <>
        <FormGroup>
            {
                types.map((type: any, i: number) => {
                    return (
                        <FormControlLabel 
                        key={i} 
                        control={<Checkbox onChange={onChange} onClick={(e) => onClick(e, i)}/>} 
                        label={type}
                        />
                    )
                })
            }
        </FormGroup>
        </>
      );
  return (
    <div>Client</div>
  )
}

export default Client