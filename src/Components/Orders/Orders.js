import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Orders = () => {
    const {id}= useParams();
  
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const[order, setOrder]= useState([])
    useEffect(() => {
        fetch('https://immense-scrubland-49493.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data=> {
            setOrder(data)
        })
    }, [order]);
   
    return (
        
        <div className="mt-5">
            <div className="d-flex align-items-center justify-content-center">
            <h3 className="mb-5 p-3 bd-highlight col-example">Hello {loggedInUser.name}!! you have total {order.length} orders</h3>
            </div>
 
               <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Time</th>
                        </tr>

                    </thead>
                    <tbody>
                    {
                        order.map(order =>
                        <tr>
                        <th scope="row">{order.name}</th>
                        <td>${order.price}</td>
                        <td>{order.weight}</td>
                        <td>{order.curTime}</td>
                        </tr>)
                    }
                        </tbody>
                        </table>               
        </div>
    );
};

export default Orders;