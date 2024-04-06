'use client'

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import ProductModal from './ProductModal';
import { Product } from "@Types/typedef";

const ProductCard = ({ product }: { product: Product }) => {

    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams();

    const [isOpen, setOpen] = useState(false);

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setOpen(true);

        const params = new URLSearchParams(searchParams.toString());
        params.set('id', product.id.toString());
        router.push(pathname + '?' + params.toString());
    }

    const closeModal = () => {
        // const params = new URLSearchParams(searchParams.toString());
        // params.delete('id');
        setOpen(!isOpen);
        router.back();
    }

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={product.name}
                    subheader={`$${product.price}`}
                />
                <CardMedia
                    component="img"
                    image={product.image_link}
                    alt=""
                />
                <CardContent>
                    <p>{product.description}</p>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between' }} disableSpacing>
                    <div> <Rating name="read-only" value={product.rating} readOnly /> </div>
                    <Button onClick={openModal}>
                        View More
                    </Button>
                </CardActions>

            </Card>

            {
                isOpen ?
                    <>
                        {/* <Dialog
                            open={open}
                            onClose={closeModal}
                        >
                            {product.name}
                        </Dialog> */}
                        <ProductModal open={isOpen} product={product} closeModal={closeModal}/>
                    </>
                    : <></>
            }
            {/* <ProductModal></ProductModal> */}
        </>
    )
}

export default ProductCard