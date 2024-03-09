import React, { useEffect,useState } from 'react'
import CoverImage_Product from '../components/CoverImage_Product'
import ViewProducts from '../components/ViewProducts'
import { useFetchApiData } from '../hooks/useFetchApiData'

const Watches = () => {
    const [allProducts,setAllProducts] =useState(null);
    const productUrl="https://resonate-api.cyclic.app/products/allwatches";


    async function getData()
    {
        const data = await useFetchApiData(productUrl);
        setAllProducts(data);
    }
    useEffect(()=>{
        getData();
    },[])

    const categories=["Luxury","Smartwatch","Ninja","Sport"]
  return (
    <>
        <CoverImage_Product url={"https://cdn.shopify.com/s/files/1/0137/0292/2286/files/Artboard_1_da546092-c2f4-4489-9a96-54b633905696.jpg?v=1681886684"}/>
        <ViewProducts allProducts={allProducts} categories={categories}/>
    </>
  )
}

export default Watches