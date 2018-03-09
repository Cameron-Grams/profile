import React from 'react';
import ReturnButton from './returnButton';
import List from './list'; 
import GoalList from '../data/goalList';

const Goals = ( props ) => {
    
    return(
        <div>
            <ReturnButton />
            <div className={ "headerContent" }  >
                
                <h2>Goals</h2>
                <p>I am committed to mastering Javascript, but I recognize there are many supporting tools and technology that require attention as well:</p>
                <List itemListArray={ GoalList } /> 
            </div>
        </div>
    )
};

export default Goals;
