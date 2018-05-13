import React, {Component} from "react"
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";


function importAll(r) {
  return r.keys().map(r);
}
const square = importAll(require.context('../square', false, /\.(png|jpe?g|svg)$/));
const horizontal = importAll(require.context('../horizontal', false, /\.(png|jpe?g|svg)$/));
const vertical = importAll(require.context('../vertical', false, /\.(png|jpe?g|svg)$/));
const together = square.concat(horizontal, vertical)


class Gallery extends Component{

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
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            fade:true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          {together.map(image=>{
            return (
              <div className="image-holder">
                <img className="gallery" src={image} />
                <div className="overlay">
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
          )
  }
}





export default Gallery