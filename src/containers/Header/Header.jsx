import React from 'react';
import './Header.css'; 

const Header = ( ) => {
    return(
        <div className={ "headerContent introFormat" }>
            <h1>Cameron Grams</h1>

            <h3><i>React, Redux, and Node</i></h3>

            <h3>Tailored as the situation requires</h3>

            <p>I have been a Freelance Software Developer since 2016 and am committed to writting quality code designed for custom applications. </p>

            <h3><a href={ "https://github.com/Cameron-Grams" }>My GitHub Profile</a></h3>

        </div>
    )
}


export default Header;