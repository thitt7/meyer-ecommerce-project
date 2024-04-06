'use client'

import React, {useEffect, useState} from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import filterByPrice from '@lib/filterByPrice';
import filterByRating from '@lib/filterByRating';
import filterByType from '@lib/filterByType';
import filterByResults from '@lib/filterByResults';
import sortProducts from '@lib/sortByPrice';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { set } from '../reducers/productSlice';
import ProductCard from '../components/ProductCard';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Product } from "@Types/typedef";
import filterByColor from '../lib/filterByColor';

const ProductsPage = ({products}: {products: Array<Product>}) => {

  const router = useRouter();
  const searchParams = useSearchParams();

  const {items: productState} = useSelector((state: any) => state.store);
  const example = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const [filteredProducts, setProducts] = useState(products);
  const [minPrice, setMinPrice] = useState(searchParams.get('min_price'));
  const [maxPrice, setMaxPrice] = useState(searchParams.get('max_price'));
  const [minRating, setMinRating] = useState(searchParams.get('min_rating'));
  const [maxRating, setMaxRating] = useState(searchParams.get('max_rating') || '5');
  const [type, setType] = useState(searchParams.get('type'));
  const [sort, setSort] = useState(searchParams.get('sort'));

  const applyFiltersAndSort = async () => {
    let filtered = [...products];
    const minPrice = searchParams.get('min_price');
    const maxPrice = searchParams.get('max_price');
    const minRating = searchParams.get('min_rating');
    const maxRating = searchParams.get('max_rating');
    const type = searchParams.get('type');
    const color = searchParams.get('color');
    const results = searchParams.get('results');
    const sort = searchParams.get('sort');

    if (sort) {
      filtered = await sortProducts(filtered, sort as string);
    }

    if (minPrice || maxPrice) {
      filtered = await filterByPrice(minPrice, maxPrice, filtered);
    }

    if (minRating || maxRating) {
      filtered = await filterByRating(minRating, maxRating, filtered);
    }

    if (type) {
      filtered = await filterByType(type, filtered);
    }

    if (color) {
      let colors: Array<string> = decodeURIComponent(color).split(',');
      filterByColor(colors, filtered)
    }

    if (results) {
      filtered = await filterByResults(results, filtered)
    }

    console.log('NEW FILTERED: ', filtered)
    setProducts(filtered);
  };

  useEffect(() => {
    applyFiltersAndSort();
  }, [searchParams]);

  useEffect(() => {
    if (products && !productState) {dispatch(set(products))}
    console.log('hmmdsdfm: ', example)
    console.log('hmmm: ', productState)
  }, [productState, example])

  // useEffect(() => {
  //   dispatch(set(products))
  // }, [])
  

  return (
      <Box sx={{ width: '100%' }}>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
      {
        filteredProducts?.map((product: Product, i: number) => {
          return (
              <ProductCard key={i} product={product} />
          )
      })
      }
      </Stack>
    </Box>
)
}

export default ProductsPage;