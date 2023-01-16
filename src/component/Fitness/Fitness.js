import React, { useEffect, useState } from 'react';
import List from '../List/List';
import Product from '../Product/Product';
import './Fitness.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Fitness = () => {
    const [gymAccessories, setGymAccessories] = useState([]);
    const [list, setList] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setGymAccessories(data))
    }, [])

    const handleAddToList = (accessorie) => {
        // console.log(accessorie.time)J          
        const newList = [...list, accessorie]
        setList(newList)
    }
    const toastify = () =>{
        toast.success('complete')
    }

    return (
        <div className='fitness-container'>
            <div>
                <h3 className='gym-title'>Select today’s exercise</h3>
                <div className='gym-product-container'>
                    {
                        gymAccessories.map(accessorie => <Product
                            key={accessorie.id}
                            accessorie={accessorie}
                            handleAddToList={handleAddToList}
                        ></Product>)
                    }
                </div>
            </div>
            <div className='information-container'>

               
                 <List 
                 list={list}
                 toastify={toastify}
                 ></List>
               
            </div>
            
        </div>

    );
};

export default Fitness;