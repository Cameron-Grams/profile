import React from 'react';

const List = ( props ) => {
    return(
        props.itemListArray.map( ( item, index ) =>  {

            const linkedExamples = ( item.demonstration && 
            <p>This project can be seen <a href={ item.demonstration }>here</a> and the source code seen <a href={ item.sourceCode }>here.</a></p> );

            
            return (
            <div key= { index } >
                <h3>{ item.title }</h3>
                <p>{ item.content }</p>
                 { linkedExamples }
            </div>
        ) } 
    ) )
};

export default List;

