import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    // const { searchParams } = new URL(request.url)
    // const id = searchParams.get('id')
    console.log('fetching product data...')
    const res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
    const products = await res.json()
   
    return Response.json({ products })
  }