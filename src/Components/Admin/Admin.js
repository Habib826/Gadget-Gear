
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Admin.css'

const Admin = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const [orders, setOrders]= useState([]);
    useEffect(() => {
        fetch('https://immense-scrubland-49493.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data=> setOrders(data))
    }, [])
    return (
        <div className="mt-5 d-flex align-items-center justify-content-center admin-body ">
            <div className="p-2 bd-highlight col-example">
            <Link to="/addNew" ><button className="m-3 btn btn-primary">Add New</button></Link> 
            <Link to="/manage" ><button className="m-3 btn btn-primary">Manage</button></Link>
           <Link to="/edit" ><button className="m-3 btn btn-primary">Edit</button></Link>   
            </div>   
              
        </div>
    );
};

export default Admin;