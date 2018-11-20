import React from 'react'
import ReactDOM from 'react-dom'
import Corgis from '../Corgis'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

const corgis = [
  {
    id: 0,
    name: 'Sausage',
    age: 3,
    enjoys: "Long walks to the park."
  },
  {
    id: 1,
    name: 'J Street',
    age: 5,
    enjoys: "Taking the bus."
  },
  {
    id: 2,
    name: 'Butch',
    age: 4,
    enjoys: "Eating human food."
  }
]

it(' Corgis renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Corgis corgis={corgis}/>, div)
});

it('Renders the corgis', ()=>{
  const component = mount(<Corgis corgis={corgis} />)
  const headings = component.find('h4 > .corgi-name')
  expect(headings.length).toBe(3)
});
