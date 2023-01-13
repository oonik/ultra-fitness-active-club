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
              <div className='my-profile'>
              <img className='my-img' src={logo} alt="" />
              <div>
                 <h3>Anik Sarkar</h3>
              </div>
              </div>
              <p className='my-about'>I want to be a web developer.</p>
              <h4>Add a break</h4>
                 <div className="btn-div">
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                 </div>
                 <h4>Exercise Details</h4>
                 <p className='exercise-time'>Exercise Time <span className='second'>200s</span></p>
                 <p className='break-time'>Break Time <span className='break-second'>200s</span></p>
                 <button className='activity-btn'>Activity Completed</button>
           </div>
           
        </div>
       
    );
};

export default Fitness;