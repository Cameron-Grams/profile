import React, { Component } from 'react';
import { Redirect } from 'react-router'; 
import Lightbox from 'react-image-lightbox';
import './Travel.css'; 


const images = [
    "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/iraqTeam.jpg", 
    "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/photo2.jpg", 
    "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/PM_Office.jpg", 
    "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/team.jpg"
];

const captions = [
    "My survey team that established the District Police Force in Al Qaim, Iraq, 2005.",
    "Cyprus 2011",
    "Prime Minister's office in Malta.",
    "The Helmand Provincial Team, Lashkar Gah, 2010"
];

const titles = [
    "Al Anbar Police Advisers",
    "Cyprus Residency",
    "Malta",
    "Helmand, Afghanistan"
]

export default class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: true
    };
  }

  endShow = () => {
    this.setState({ isOpen: false } );
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    const displayPhotos = isOpen ? 
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.endShow() }
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
            imageTitle={ titles[ photoIndex ] }
            imageCaption={ captions[ photoIndex ] }
          />
         :
         <Redirect to={ "/interests" } /> 




    return (
      <div>
         { displayPhotos } 
      </div>
    );
  }
}

// built using the lightbox component from: https://github.com/fritz-c/react-image-lightbox
//     "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/warned.jpg", 
