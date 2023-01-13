import React from 'react';
import './Product.css'
const Product = ({accessorie}) => {
    console.log(accessorie);
    const {id, name, picture, time} = accessorie;
    return (
        <div className='product'>
            <img className='img' src={picture} alt="" />
            <h5>{name}</h5>
            <p>Time required: {time}</p>
            <button className='add-btn'>
                Add to List
            </button>
        </div>
    );
};

export default Product;