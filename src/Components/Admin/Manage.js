import React, { useEffect, useState } from 'react';

import Admin from './Admin';


const Manage = () => {
    const [products, setProducts]= useState([]);
    useEffect(() => {
        fetch('https://immense-scrubland-49493.herokuapp.com/products')
        .then(res=> res.json())
        .then(data =>setProducts(data))
        },[products]);
     const handleDelete= (id)=> {
         console.log(id)
         fetch('https://immense-scrubland-49493.herokuapp.com/delete/'+id,{
             method: 'DELETE'
         })
         .then(res=>res.json())
         .then(result=> {
             console.log('delete')
         })
     }
    return (
        <div>
            <Admin/>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Weight</th>
      <th scope="col">Manage</th>
    </tr>
  </thead>
  <tbody>
   {
       products.map(product =><tr>
      <th scope="row">{product.name}</th>
      <td>${product.price}</td>
      <td>{product.weight}</td>
      <td><button  onClick={() => handleDelete(product._id)}>Delete</button></td>

       </tr>)
   }
    </tbody>
    </table>

        </div>
    );
};

export default Manage;