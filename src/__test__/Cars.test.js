import React from 'react'
import ReactDOM from 'react-dom'
import Cars from '../pages/Cars'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

const cars= [
    {
        id: 1,
          name: 'Lightning McQueen',
          age: 2,
          enjoys: "Winning Races"
        },
        {
          id: 2,
          name: 'Doc Hudson',
          age: 4,
          enjoys: "Taking Life Easy"
        },
        {
          id: 3,
          name: 'Fillmore',
          age: 12,
          enjoys: "High Times"
    }
]

it('Cars renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Cars cars={cars} />, div)
})

it('Renders the cars', ()=>{
  const component = mount(<Cars cars={cars} />)
  const headings = component.find('h4 > .car-name')
  expect(headings.length).toBe(3)
})
