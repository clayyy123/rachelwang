import React, { Component } from "react"
import { Container, Row, Col } from 'reactstrap';

class Classes extends Component{
  render(){
    return(
      <div className="Classes">
      <div className="offset">
      </div>
        <h1 id="class">Class Schedule</h1>
        <div id="class-body">
        
        <Row>
          <Col xs="12" md="4">
            <h2>Doux Yoga</h2><br/>
            <h4>Wednesday</h4>
            <p> 7pm-8pm</p>
          </Col>
          <Col xs="12" md="4"> 
            <h2> Align Yoga Studio</h2><br/>
            <h5>I teach Flow75 (all levels) and Restorative and Meditation60.</h5>
            <p> Schedule is different every week. Check out the schedule <a target="_blank" href="http://alignyoga.studio/schedule/">here</a></p>
          </Col>
          <Col xs="12" md="4"> 
            <h2>Private Classes</h2>
            <p>For private class inquiries, email me at: wang.ryk@gmail.com</p>
          </Col>
        </Row>
        </div>
        <div className="offset">
        </div>
      </div>
    )
  }
}

export default Classes