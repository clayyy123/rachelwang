import React, {Component} from "react"
import { Container, Row, Col } from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


function importAll(r) {
  return r.keys().map(r);
}
const yogaGal = importAll(require.context('../Yoga', false, /\.(png|jpe?g|svg)$/));
const items = [
  {
    src: yogaGal.slice(0,10),
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: yogaGal.slice(10,19),
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src:yogaGal.slice(19,28),
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];


class Gallery extends Component{
  // componentDidMount(){
  //   this.setState({
  //     images: yogaGal
  //   })
  // }

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
        <Row>
          {item.src.map((image) =>{
          return (
            <Col xs="2">
              <img className="gallery" src={image} />
            </Col>
          )
          })}
        </Row>
        </CarouselItem>
      );
    });

    return (
      <div>
        <h1> Gallery </h1>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
    
  }
}





export default Gallery