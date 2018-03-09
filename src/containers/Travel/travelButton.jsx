import React from 'react';
import './Travel.css'; 

const TravelButton = ( props ) => {

    return(
        <div className={ "css-travelButton" } onClick={ props.clickHandler } >
            <div className={ "shell" }>
              <h2>Begin Slide-Show</h2>
            </div>
        </div>
    )
}

export default TravelButton;