import React from 'react';

const List = ( props ) => {
    return(
        props.itemListArray.map( ( item, index ) =>  {

            const linkedExamples = ( item.demonstration && 
            <p>The Results: <a href={ item.demonstration }>The Project</a> || <a href={ item.sourceCode }>The Code</a></p> );

            const authorDetails = ( item.author &&
            <p>By { item.author }</p>);
            
            return (
            <div key= { index } >
                <h3>{ item.title }</h3>
                <p>{ item.content }</p>
                 { linkedExamples }
                 { authorDetails }
            </div>
        ) } 
    ) )
};

export default List;

