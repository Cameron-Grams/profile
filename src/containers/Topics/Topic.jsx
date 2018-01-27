import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ( props ) => {

    console.log( props.destination );

    return(
        <div className={ "topic" } >
          <Link to={ props.destination } >
          <div className={ "shell" }>
          <h2>{ props.title }</h2>
          </div>
          </Link>
        </div>
    )
}

export default Topic;