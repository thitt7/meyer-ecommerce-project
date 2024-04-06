'use client';

import React from 'react';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { Product } from "@Types/typedef";

type DialogProps = {
    open: boolean;
    product: Product;
    closeModal: () => void;
}

const ProductModal = ({ product, open, closeModal }: DialogProps) => {

    return (
        open ?
            <Dialog
                fullWidth={true}
                maxWidth={'xl'}
                open={open}
                onClose={closeModal}
            >
                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="nowrap">
                    <div className="img">
                        {/* <Image src={product.image_link} alt={product.description} width={300} height={300}></Image> */}
                        <img src={product.image_link} alt={product.description} width={undefined}></img>
                    </div>
                    <Stack direction={'column'} useFlexGap>
                        <h3>{product.name}</h3>
                        <Rating name="read-only" value={product.rating} readOnly />
                        <h2>${product.price}</h2>
                        <div className="color">
                            <p>Colors:</p>
                            <Stack direction="row" useFlexGap>
                                {product.product_colors?.map((color: any, i: number) => {
                                    return (
                                        <div key={i} style={{background: color.hex_value}} className="circle" />
                                    )
                                })}
                            </Stack>
                        </div>
                        <span>
                            {product.description}
                        </span>
                        <Button href={product.product_link} target='_blank'>
                            View Product
                        </Button>
                    </Stack>
                </Stack>
            </Dialog>
            : <></>
    )
}

export default ProductModal