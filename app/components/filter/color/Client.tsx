'use client'

import React, {useState} from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const onChange = (e: any) => {
    console.log('EVENT: ', e)
}

const Client = ({colors}: {colors: any[]}) => {

    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams();

    const [colorstate, setcolorstate] = useState(
        colors.reduce((acc: any, type: any) => {
            acc[type] = false;
            return acc;
        }, {})
    );

    const onClick = (e: any, i: number) => {
        const params = new URLSearchParams(searchParams.toString());
        let currentColors = params.get('color') || '';
    
        if (e.target.checked === true) {
            currentColors += currentColors ? `,${colors[i]}` : colors[i];
        } else {
            currentColors = currentColors.split(',').filter(color => color !== colors[i]).join(',');
        }
    
        params.set('color', currentColors);
        router.push(pathname + '?' + params.toString());
    }
    

    return (
        <>
        <FormGroup>
            {
                colors.map((type: any, i: number) => {
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