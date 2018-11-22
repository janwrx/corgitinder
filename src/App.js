import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Corgis from './pages/Corgis';
import NewCorgi from './pages/NewCorgi';
import ShowCorgi from './pages/ShowCorgi';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import { getCorgis, createCorgi, getCorgi } from './api';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      corgis: [],
      newCorgiSuccess: false    }
  }

  componentDidMount() {
    getCorgis()
    .then(APIcorgis => {
      console.log("helo")
      this.setState({
        corgis: APIcorgis
      })
    })
  }


  handleNewCorgi = (newCorgi) => {
    console.log("New Corgi TRY", newCorgi)
    createCorgi(newCorgi)
    .then(successCorgi => {
      // corgis list with successCorgi added
      console.log("SUCCESS! New corgi: ", successCorgi);
      this.setState({
        // corgis: ,
        newCorgiSuccess: true
      })
    })
  }

  submitCorgi = (corgi) => {
    let corgis = this.state.corgis
    corgis[corgis.length] = {id: (corgis.length), name: corgi.name, age: corgi.age, enjoys: corgi.enjoys}
    console.log("HELLO")
    this.setState({corgis: corgis})
  }

  render() {
    return (
      <div>
      <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Plenty Of Corgis</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="/NewCorgi">
      Add yo'self!
    </NavItem>
    <NavItem eventKey={2} href="/Corgis">
      View All
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>;

        <Header />
        <Router>
          <Switch>
            <Route path="Corgis/:id" component={ShowCorgi} />
            <Route exact path="/Corgis" render={(props) => <Corgis corgis={this.state.corgis}/>} />
            <Route exact path="/NewCorgi" render={(props) => <NewCorgi handleNewCorgi={this.handleNewCorgi} submitCorgi={this.submitCorgi} newCorgiSuccess={this.state.newCorgiSuccess}/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
