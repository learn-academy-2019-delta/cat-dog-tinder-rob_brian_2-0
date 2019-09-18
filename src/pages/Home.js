import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Home extends Component {
  render() {
    return (
		<div>
        <Container>
            <Jumbotron class="m-3 d-flex justify-content-center">
                <Row class="d-flex justify-content-center">
                    <Col md={6}>
        	           <h1>This is Car Crush!</h1>
                       <h4>A safe place to find a new ride</h4>
                    </Col>
                    <Col md={4}>
                        <img style={{width: "15rem"}}src="https://vignette.wikia.nocookie.net/disney/images/4/40/Cars-Logo.png/revision/latest?cb=20141115144525" />
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
		</div>
    );
  }
}

export default Home;
