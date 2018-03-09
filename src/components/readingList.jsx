import React from 'react';
import readingList from '../data/readings'; 
import List from './list'; 
import ReturnButton from './returnButton';

const Readings = () => ( 
  <div>
    <ReturnButton />
        <div className={ "headerContent" }  >
          <List itemListArray={ readingList } /> 
        </div>
  </div>
);

export default Readings; 