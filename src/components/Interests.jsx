import React from 'react';
import Topic from '../containers/Topics/Topic';

const Interests = ( props ) => {
    
    return(
        <div>
            <Topic className={ "headerContent" } title={ "Reading" } destination={ '/reading' } />
            <Topic  className={ "headerContent" } title={ "Travel" } destination={ '/travel' } />
        </div>
    )
};

export default Interests;
