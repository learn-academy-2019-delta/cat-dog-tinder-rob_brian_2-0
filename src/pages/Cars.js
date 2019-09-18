import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'



class Cars extends Component {
  render() {
    return (
		<div>
            <Container>
                <Jumbotron class="m-3 d-flex justify-content-center">
                    <Row class="d-flex justify-content-center">
                        <Col md={6}>
                           <h1>Looking for a new ride?</h1>
                           <h4>A safe place to find a new ride</h4>
                        </Col>
                        <Col md={4}>
                            <img style={{width: "15rem"}}src="https://vignette.wikia.nocookie.net/disney/images/4/40/Cars-Logo.png/revision/latest?cb=20141115144525" />
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
            <Container>
                <Row style={{display:"flex", justifyContent:"center", flexDirection: "row"}}>
                    {this.props.cars.map((car, index) =>{
                      return (
                          <Col xs={6} md={4}>
                            <Card style={{ width: '12rem' }}>
                              <Card.Img variant="top" src={car.img} />
                              <Card.Body>
                                <Card.Title>{car.name}</Card.Title>
                                <Card.Subtitle>{car.age}</Card.Subtitle>
                                <Card.Text>
                                  {car.enjoys}
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                      )
                    })}
                </Row>
            </Container>
		</div>
    );
  }
}

export default Cars;
