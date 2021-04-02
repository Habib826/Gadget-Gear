import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Home = () => {

    const [products, setProducts]= useState([]);
    useEffect(() => {
        fetch('https://immense-scrubland-49493.herokuapp.com/products')
        .then(res=> res.json())
        .then(data =>{
            setProducts(data)
        })
        },[]);

    return (
        <div>
        <div className="row equal ">

            {
                products.map(product =><Products product={product}></Products>)
            }
            
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5">
        {
                products.length===0 && <CircularProgress color="secondary"/>
         }
        </div>

        </div>
    );
};

export default Home;