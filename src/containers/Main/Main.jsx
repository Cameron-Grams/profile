import React from 'react';
import './Main.css'; 
import Header from '../Header/Header';
import Topic from '../Topics/Topic';

const Main = ( props ) => {

    return (
      <div className="App outerShell">

        <div className={ "smallDisplay" } >
              <Header />  
              <Topic type={ "topic" } title={ "Projects" }  destination={ '/projects' } />
              <Topic type={ "topic" } title={ "Future Goals" } destination={ '/goals' } />
              <Topic type={ "topic" } title={ "Hobies and Interests" } destination={ '/interests' } />
              <Topic type={ "topic" } title={ "Contact Information" } destination={ '/contact' } />
        </div>

        <div className="innerShell" >
            <div className={ "leftSide" } >
              <Header />  
            </div>
            <div className={ "rightSide" } >
                <Topic type={ "topic" } title={ "Projects" }  destination={ '/projects' } />
                <Topic type={ "topic" } title={ "Future Goals" } destination={ '/goals' } />
                <Topic type={ "topic" } title={ "Hobies and Interests" } destination={ '/interests' } />
                <Topic type={ "topic" } title={ "Contact Information" } destination={ '/contact' } />
            </div>
        </div>
      </div>
    );
}

export default Main; 