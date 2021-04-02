import {Link} from "react-router-dom";
import React from 'react';
import './Products.css'

const Products = (props) => {
    const {name, image, price, _id}= props.product;

    return (
           <div className=" col-md-4 p-4 mt-5 d-flex justify-content-around ">
             <div className="card">
                
                <img className="card-img-top mx-auto d-block img-fluid" src={image} alt=""/>
                <h2>{name}</h2>
                <div className="card-body d-flex justify-content-between align-items-end">
                    <h3>${price}</h3>
                   <Link to={"/checkout/"+_id}><button className="btn btn-primary">Buy Now</button></Link>   
                </div>
        </div>


           </div>
        

       
    );
};

export default Products;