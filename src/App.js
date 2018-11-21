import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Corgis from './pages/Corgis';
import NewCorgi from './pages/NewCorgi';
import ShowCorgi from './pages/ShowCorgi';
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
      let latestCorgi = { successCorgi };
      // corgis list with successCorgi added
      console.log("SUCCESS! New corgi: ", successCorgi);
      this.setState({
        corgis: ,
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
