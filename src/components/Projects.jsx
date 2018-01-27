import React from 'react';

import List from './List'; 
import ProjectsList from '../data/ProjectsList';

const Projects = ( props ) => {
    
    return(
        <div className={ "headerContent" }  >
        <h2>Projects</h2>
        <List itemListArray={ ProjectsList } /> 
        </div>
    )
};

export default Projects;
