import React from 'react';
import './Product.css'
const Product = ({accessorie}) => {
    console.log(accessorie);
    const {id, name, picture} = accessorie;
    return (
        <div>
            <img className='img' src={picture} alt="" />
            <p>{id}</p>
            <p>{name}</p>
        </div>
    );
};

export default Product;