import React from 'react';
import Admin from '../Components/Admin/Admin';

const NotFound = () => {
    return (
        <div>
            <Admin/>
            <div className="d-flex align-items-center justify-content-center">
            <h1 className="p-2 bd-highlight col-example mt-5">404 not found</h1>
            </div>
        </div>
    );
};

export default NotFound;