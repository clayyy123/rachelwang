import React, { Component } from 'react';
import Slider from 'react-slick';
import Pop from './Modal.js';

function importAll(r) {
  return r.keys().map(r);
}
const square = importAll(
  require.context('../square', false, /\.(png|jpe?g|svg)$/)
);
const horizontal = importAll(
  require.context('../horizontal', false, /\.(png|jpe?g|svg)$/)
);
const vertical = importAll(
  require.context('../vertical', false, /\.(png|jpe?g|svg)$/)
);
const together = square.concat(horizontal, vertical);

class Gallery extends Component {
  state = {
    modal: false
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      adaptiveHeight: true,
      rows: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
    return (
      <div className="carousel">
        <div className="offset" />
        <h1> Gallery </h1>
        <Slider {...settings}>
          {together.map((image, key) => {
            return (
              <div key={key}>
                <div className="image-holder">
                  <img className="gallery" src={image} alt="yoga pose" />
                  <div className="overlay">
                    <Pop image={image} />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="offset" />
      </div>
    );
  }
}

export default Gallery;
