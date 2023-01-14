import React from 'react';
import './Product.css'
const Product = ({accessorie, handleAddToList}) => {
    // console.log(accessorie);
    const {id, name, picture, time} = accessorie;
    return (
        <div className='product'>
            <img className='img' src={picture} alt="" />
            <h5>{name}</h5>
            <p>Time required: {time}s</p>
            <button className='add-btn' onClick={()=>handleAddToList(accessorie)}>
                Add to List
            </button>
        </div>
    );
};

export default Product;