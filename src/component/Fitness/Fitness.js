import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
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
            <div className='gym-product-container'>
            <h1>Select today’s exercise</h1>
            {
                gymAccessories.map(accessorie => <Product
                key={accessorie.id}
                accessorie={accessorie}
                ></Product>)
            }
            </div>
            <div className='information-container'>
             <h1>anik sarkar</h1>
           </div>
        </div>
       
    );
};

export default Fitness;