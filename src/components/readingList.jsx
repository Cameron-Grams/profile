import React from 'react';
import readingList from '../data/readings'; 
import List from './list'; 

const Readings = () => ( 
        <div className={ "headerContent" }  >
          <List itemListArray={ readingList } /> 
        </div>
);

export default Readings; 