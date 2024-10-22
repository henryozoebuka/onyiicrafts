import React from 'react';
import './google-map.css';
import Address from '../../components/Address';

const GoogleMap = () => {
    return (
        <div className='google-map'>
            <div className='google-map-area'>
            </div>
            <Address />
        </div>
    );
}

export default GoogleMap;
