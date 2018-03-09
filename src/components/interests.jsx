import React from 'react';
import Topic from '../containers/Topics/Topic'; 
import ReturnButton from './returnButton';

const Interests = ( props ) => {
    
    return(
        <div>
            <ReturnButton />
            <Topic type={ "interest" } title={ "Reading" } destination={ '/readings' } />
            <Topic type={ "interest" } title={ "Travel" } destination={ '/travel' } /> 
        </div>
    )
};

export default Interests;
