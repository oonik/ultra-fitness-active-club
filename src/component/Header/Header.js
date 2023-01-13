import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h1>Fitness-Active-Club</h1>
            <div className='icon-dumbbell'>
              <h1><FontAwesomeIcon icon={ faDumbbell}></FontAwesomeIcon></h1>
            </div>
        </div>
    );
};

export default Header;