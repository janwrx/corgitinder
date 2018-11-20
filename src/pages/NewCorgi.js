import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class NewCorgi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form:{
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }

  handleChange(event){
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  handleChange2 = (e) => {
    e.preventDefault()
    console.log('hello')
    this.props.handleNewCorgi(this.state.form)
  }

  render() {
    return (
      <div>
      <form>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel id="name">Name</ControlLabel>
            <FormControl
              type="text"
              name="name"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.name}
            />
            <ControlLabel id="age">Age</ControlLabel>
            <FormControl
              type="number"
              name="age"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.age}
            />
            <ControlLabel id="enjoys">Enjoys</ControlLabel>
            <FormControl
              type="text"
              name="enjoys"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.enjoys}
            />
          </FormGroup>
        <Button onClick={this.handleChange2}id="submit" type="submit">Create Corgi</Button>
      </form>
      {this.props.newCorgiSuccess && <Redirect to="/Corgis" />}
    </div>
    );
  }
}

export default NewCorgi;
