import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NewCar extends Component {
    constructor(props){
      super(props)
      this.state = {
        form:{
          name: '',
          age: '',
          enjoys: ''
        }
      }
    }

    handleChange = (event) => {
        let {form} = this.state
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }

    onClick = (event) =>{
        event.preventDefault()
        let form = this.state.form
        this.props.onClick(form)
    }

  render() {
    return (
		<div>
            <Container>
                <Jumbotron className="m-3 d-flex justify-content-center">
                    <Row className="d-flex justify-content-center">
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
            <Container>
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            onChange={this.handleChange} value={this.state.form.name}
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                        />
                    </Form.Group>
                    <Form.Group controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            onChange={this.handleChange} value={this.state.form.age}
                            type="text"
                            placeholder="Enter Age"
                            name="age"
                        />
                    </Form.Group>
                    <Form.Group controlId="enjoys">
                        <Form.Label>Enter Hobbies</Form.Label>
                        <Form.Control
                            onChange={this.handleChange} value={this.state.form.enjoys}
                            type="text"
                            placeholder="Enter Hobbies"
                            name="enjoys"
                        />
                    </Form.Group>
                    <Button onClick={this.onClick} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
		</div>
    );
  }
}

export default NewCar;
