import React from 'react';
import Topic from '../containers/Topics/Topic'; 

const Interests = ( props ) => {
    
    return(
        <div>
        <Topic type={ "interest" } title={ "Reading" } destination={ '/readings' } />
        <Topic type={ "interest" } title={ "Travel" } destination={ '/travel' } /> 
        </div>
    )
};

export default Interests;
