import React, {Component} from "react"
import { Container, Row, Col } from 'reactstrap';

function importAll(r) {
  return r.keys().map(r);
}
const yogaGal = importAll(require.context('../Yoga', false, /\.(png|jpe?g|svg)$/));


class Gallery extends Component{

  state={
    images: null
  }

  componentDidMount(){
    
this.setState({
      images: yogaGal
    })
  }

  
  render(){
    return(
      <div className="Gallery">
        <h1> Gallery </h1>
        <Row>
        {this.state.images && 
        this.state.images.map((image) => {
          // return <Col><div className="border"><img className="gallery" src={`${image}`}/></div></Col>
          return <Col><div className="border"> </div></Col>
        })}
        </Row>
      </div>
    )
  }
}

export default Gallery