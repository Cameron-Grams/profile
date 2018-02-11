import React from 'react';

import List from './list'; 
import ProjectsList from '../data/projectsList';

const Projects = ( props ) => {
    
    return(
        <div className={ "headerContent" }  >
          <h2>Projects</h2>
          <List itemListArray={ ProjectsList } /> 
        </div>
    )
};

export default Projects;
