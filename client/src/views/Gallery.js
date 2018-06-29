import React, {Component} from "react"
import { Container, Row, Col } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Slider from "react-slick";
import Pop from "./Modal.js"


function importAll(r) {
  return r.keys().map(r);
}
const square = importAll(require.context('../square', false, /\.(png|jpe?g|svg)$/));
const horizontal = importAll(require.context('../horizontal', false, /\.(png|jpe?g|svg)$/));
const vertical = importAll(require.context('../vertical', false, /\.(png|jpe?g|svg)$/));
const together = square.concat(horizontal, vertical)


class Gallery extends Component{

  state = {
    modal: false
  }

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
          breakpoint: 900,
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
            fade:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
    return (
      <div className="carousel">
      <div className="offset">
      </div>
      <h1> Gallery </h1>
        <Slider {...settings}>
          {together.map(image=>{
            return (
            <div>
              <div className="image-holder">
                <img className="gallery" src={image} />
                <div className="overlay">
                </div>
              </div>
              <Pop image={image}/>
            </div>
            )
          })}
        </Slider>
      <div className="offset">
      </div>
      </div>
          )
  }
}





export default Gallery