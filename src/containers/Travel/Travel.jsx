import React from 'react'; 
import Image from './Image'; 
import './Travel.css'; 
import team from './images/iraqTeam.jpg'; 
import photo from './images/photo2.jpg'; 
import pmOffice from './images/PM_Office.jpg'; 
import lashTeam from './images/team.jpg'; 
import warned from './images/warned.jpg'; 


const imageMap = {
    0: team,
    1: photo,
    2: pmOffice,
    3: lashTeam,
    4: warned
}

class Travel extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            index: 1
        }; 
    }

    increaseIndex = () => {
        const imageValue = ( this.state.index + 1 ) % 5; 
        this.setState( { index: imageValue } ); 
        console.log( this.state.index ); 
    }

    render(){

        return(
            <div>
                <h1> Start of Travel....</h1>
                <div className={ "imageHolder" } >
                <Image className={ "imageBox" } src={ imageMap[ this.state.index ] } width={ 500 }  height={ 500 } /> 
                </div> 
                <button onClick={ this.increaseIndex } >Increase</button>
            </div>
        )
    }
}


export default Travel; 