import React from 'react';
import logo from '../../images/ResizerImage267X325-removebg-preview.png'
import './List.css'
const List = ({list}) => {
    // console.log(list)
    let total = 0;
    for(const product of list){
         total = total + parseInt(product.time);
    }
    
    return (
        <div className='list'>
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
                 <p className='exercise-time'>Exercise Time <span className='second'>{total}s</span></p>
                 <p className='break-time'>Break Time <span className='break-second'>200s</span></p>
                 <button className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default List;