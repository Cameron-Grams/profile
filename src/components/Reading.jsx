import React from 'react';

import List from './List';
import InterestList from '../data/InterestList';

const Reading = ( props ) => {
    return(
        <div  className={ props.className } >
            <h3>Reading</h3>
            <List itemListArray={ InterestList } /> 
        </div>
    )
};

export default Reading; 