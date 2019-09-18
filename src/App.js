import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import lightningmcqueen from './lightningmcqueen.jpg'
import dochudson from './dochudson.png'
import fillmore from './fillmore.png'

import Cars from './pages/Cars'
import NewCar from './pages/NewCar'
import Home from './pages/Home'

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            cars: [
                {
                      id: 1,
                      name: 'Lightning McQueen',
                      age: 2,
                      enjoys: "Winning Races",
                      img: lightningmcqueen
                    },
                    {
                      id: 2,
                      name: 'Doc Hudson',
                      age: 4,
                      enjoys: "Taking Life Easy",
                      img: dochudson
                    },
                    {
                      id: 3,
                      name: 'Fillmore',
                      age: 12,
                      enjoys: "High Times",
                      img: fillmore
                }
            ]
        }
    }

    handleNewCar = (form) => {
        console.log(form)
    }

  render() {
    return (
		<div>
            <Router>
            <Nav className="justify-content-center bg-secondary" activeKey="/home">
                <Nav.Item>
                    <Link className = "text-white m-3" to='/'>Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to='/cars' className = "text-white m-3">Cars</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to='/newCars' className = "text-white m-3">New Car</Link>
                </Nav.Item>
            </Nav>

				<Switch>
					<Route exact path="/cars" render={(props) => <Cars{...props} cars={this.state.cars} /> } />
					<Route exact path="/newCars" render={(props) => <NewCar{...props} onClick={this.handleNewCar}/>} />
					<Route exact path="/" component={Home} />
				</Switch>
			</Router>

		</div>
    );
  }
}

export default App;
