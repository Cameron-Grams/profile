import React from 'react';
import ReturnButton from '../../components/returnButton';

const Contact = () => {
    return(
        <div>
          <ReturnButton />

          <div id={ "contactInfo" } className={ "headerContent " }>
              <h1>cameron.grams@gmail.com</h1>
              <h1><a href={ "https://www.linkedin.com/in/cameron-grams-8517a9b/" } >LinkedIn</a></h1>
              <h1><a href={ "https://github.com/Cameron-Grams" } >GitHub</a></h1>
              <h2><a href={ "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/Cameron_Grams_2018.pdf" } >Printable Resume</a></h2>
          </div>
        </div>
    )
}

export default Contact;  