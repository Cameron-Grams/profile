import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'; 

const Topic = ( props ) => {

    return(
        <div className={ props.type } >
          <Link to={ props.destination } >
            <div className={ "shell" }>
              <h2>{ props.title }</h2>
            </div>
          </Link>
        </div>
    )
}

export default Topic;