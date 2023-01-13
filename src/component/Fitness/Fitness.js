import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import logo from '../../images/ResizerImage267X325-removebg-preview.png'
import './Fitness.css'
const Fitness = () => {
   const [gymAccessories, setGymAccessories] = useState([]);

   useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setGymAccessories(data))
   },[])
      
    return (
        <div className='fitness-container'>
            <div>
            <h3 className='gym-title'>Select today’s exercise</h3>
            <div className='gym-product-container'>
            {
                gymAccessories.map(accessorie => <Product
                key={accessorie.id}
                accessorie={accessorie}
                ></Product>)
            }
            </div>
            </div>
            <div className='information-container'>
              <img className='my-img' src={logo} alt="" />
              <div>
                 <h3>Anik Sarkar</h3>
              </div>
           </div>
        </div>
       
    );
};

export default Fitness;