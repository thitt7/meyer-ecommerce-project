import React from 'react';
import PriceFilter from '@components/filter/PriceFilter';
import FilterProducts from '@components/filter/filterProducts';
import SortProducts from '@components/sort/sortProducts';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';


const layout = (
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
        <Stack direction="column" useFlexGap flexWrap="nowrap" sx={{padding: 1.5}}>
          <FilterProducts />
          <SortProducts />
          </Stack>
        </Grid>
        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default layout;