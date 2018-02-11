import React from 'react';

import Header from '../Header/Header';
import Topic from '../Topics/Topic';
import Contact from '../Contact/Contact'; 

const Main = ( props ) => {

    return (
      <div className="App">
       <Header />  

       <Topic type={ "topic" } title={ "Future Goals" } destination={ '/goals' } />
       
       <Topic type={ "topic" } title={ "Projects" }  destination={ '/projects' } />

       <Topic type={ "topic" } title={ "Hobies and Interests" } destination={ '/interests' } />


       <Contact /> 
      </div>
    );
}

export default Main; 