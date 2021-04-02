import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const{id}= useParams()
    const [product, setProduct]= useState({});
    useEffect(()=>{
        fetch('https://immense-scrubland-49493.herokuapp.com/product/'+id)
        .then(res=>res.json())
        .then(data=> {
            setProduct(data)
        })
    },[]);
    const {name, price, weight}= product;
    const handleCheckOut=()=>{
        const newCheckOut={...loggedInUser, ...setTime, name, price, weight}
        fetch('https://immense-scrubland-49493.herokuapp.com/orders/'+id,{
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCheckOut)
        })
        .then(res=> res.json())
        .then(data=>console.log(data));
    }

    const setTime={
        curTime : new Date().toLocaleString(),  
      }

    return (
        <div>
           <table className="table mt-5">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Time</th>
                        </tr>

                    </thead>
                    <tbody>
                                       
                        <tr>
                        <th scope="row">{product.name}</th>
                        <td>${product.price}</td>
                        <td>{product.weight}</td>
                        <td>1</td>
                        <td>{setTime.curTime}</td>
                        </tr>

                        </tbody>
                        </table>   
           <Link to={"/orders/"+id}><button class="btn btn-primary mt-3 d-flex justify-content-end"onClick={()=>handleCheckOut()}>Checkout</button></Link> 
        </div>
    );
};

export default Checkout;