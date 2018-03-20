import React from 'react';
import ReturnButton from '../../components/returnButton';

const Contact = () => {
    return(
        <div>
          <ReturnButton />

          <div className={ "headerContent contactInfo" }>
              <h1>cameron.grams@gmail.com</h1>
              <h1><a href={ "https://www.linkedin.com/in/cameron-grams-8517a9b/" } >LinkedIn</a></h1>
              <h1><a href={ "https://github.com/Cameron-Grams" } >GitHub</a></h1>
              <h2>Printable Resume</h2>
          </div>
        </div>
    )
}

export default Contact;  