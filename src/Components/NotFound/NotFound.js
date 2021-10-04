import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div className="pb-3">
            {/* 404  */}
            <div className="w-50 mx-auto">
                <img className="img-fluid" src={notFoundImg} alt="" />
            </div>
            {/* Back to Home Button */}
            <Link to="/home" className="nav-link">
                <button className="btn-grad mx-auto">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;