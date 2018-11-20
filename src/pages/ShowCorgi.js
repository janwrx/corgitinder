import React, { Component } from 'react';
import {getCorgi} from '../api';

class ShowCorgi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      corgi: undefined
    }
  }

  render() {
    let corgi = this.state.corgi
    if (corgi == undefined) {
      return (
        <div>
        "Loading..."
        </div>
      )
    } else {
      return (
        <div>
          <h1>{corgi.name}</h1>
          <h2>{corgi.age}</h2>
          <h3>{corgi.enjoys}</h3>
        </div>
      )
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    console.log(id);
    getCorgi(id)
    .then((corgi) => {
      this.setState({corgi})
    })
  }
}

export default ShowCorgi;
