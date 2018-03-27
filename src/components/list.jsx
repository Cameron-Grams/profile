import React from 'react';


const List = ( props ) => {


    return(
        props.itemListArray.map( ( item, index ) =>  {

            const linkedExamples = ( item.demonstration && 
            <p>The Results: <a href={ item.demonstration }>The Project</a> || <a href={ item.sourceCode }>The Code</a></p> );

            const authorDetails = ( item.author &&
            <p>By { item.author }</p>);

            const projectImage = ( item.projectImage && 
            <div className={ "css-main-projectImageShell" } ><img className={ "css-main-projectImage" } src={ item.projectImage} alt="project example" /></div> ); 
            
            return (
            <div key= { index } >
                <h3>{ item.title }</h3>
                <p>{ item.content }</p>
                 { linkedExamples }
                 { authorDetails }
                 { projectImage }
            </div>
        ) } 
    ) )
};

export default List;

//            const langDistImage = '../data/projectImages/langDist.png';
