import React, {Component} from "react"
import { Container, Row, Col } from 'reactstrap';
import aboutMe from "../about.jpg"

class About extends Component {
  render(){
    return(
      <div className="About">
      <div className="offset">
      </div>
        <Row>
          <Col sm="12" md="6">
            <div id="about">
              <img id="about-me" src={aboutMe} />
            </div>
          </Col>
          <Col sm="12" md={{ size: 5}}>
          <h1> About Me </h1>
            My main motive to teach yoga is to stay dedicated to the
            students and continually serve them, inspiring them to go
            deeper within. I strive to make this practice both
            approachable and accessible to everyone, not based on any
            certain level or condition. My background is in vigorous,
            dynamic styles (cYoga, Vinyasa Flow, Hatha, Ashtanga
            Vinyasa); I also appreciate exploring slower-paced
            movements in Yin and Restorative. I aspire to guide others
            in finding their inner teacher by establishing steadiness and
            ease in body, mind, and breath.
          </Col>
        </Row>
        <div className="offset">
        </div>
      </div>
    )
  }
}

export default About