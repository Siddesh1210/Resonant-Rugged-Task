import React, { useEffect,useState } from 'react'
import CoverImage_Product from '../components/CoverImage_Product'
import ViewProducts from '../components/ViewProducts'
import { useFetchApiData } from '../hooks/useFetchApiData'

const AllProducts = ({productUrl,productCategories,productCoverImage}) => {
    const [allProducts,setAllProducts] =useState(null);
    // const productUrl="https://resonate-api.cyclic.app/products/allwatches";
    
    async function getData()
    {
        const data = await useFetchApiData(productUrl);
        setAllProducts(data);
    }
    useEffect(()=>{
        getData();
    },[productUrl])

    // const watchCategories=["Luxury","Smartwatch","Ninja","Sport"]
  return (
    <>
        <CoverImage_Product url={productCoverImage}/>
        <ViewProducts allProducts={allProducts} categories={productCategories}/>
    </>
  )
}

export default AllProducts