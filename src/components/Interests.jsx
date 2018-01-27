import React from 'react';

import List from './List'; 
import InterestList from '../data/InterestList';

const Interests = ( props ) => {
    
    return(
        <div className={ "headerContent" }  >
        <h2>Hobbies and Interests</h2>
        <h3>Reading</h3>
        <List itemListArray={ InterestList } /> 
        <h3>Travel</h3>
        <List itemListArray={ InterestList } /> 

        </div>
    )
};

export default Interests;
