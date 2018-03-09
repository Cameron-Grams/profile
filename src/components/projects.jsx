import React from 'react';
import List from './list'; 
import ProjectsList from '../data/projectsList';
import ReturnButton from './returnButton';

const Projects = ( props ) => {
    
    return(
        <div>
            <ReturnButton />
            <div className={ "headerContent" }  >
            <h2>Projects</h2>
            <List itemListArray={ ProjectsList } /> 
            </div>
        </div>
    )
};

export default Projects;
