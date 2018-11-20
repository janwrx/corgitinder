import React, { Component } from 'react';
import { Grid, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';


class Corgis extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
                <ListGroup>
                {this.props.corgis.map((corgi, index) =>{
                  return (
                    <ListGroupItem
                      key={index}
                      header={
                        <h4>
                          <span className='corgi-name'>
                            {corgi.name}
                          </span>
                          - <small className='corgi-age'>{corgi.age} years old</small>
                        </h4>
                      }>
                      <span className='corgi-enjoys'>
                        {corgi.enjoys}
                      </span>
                    </ListGroupItem>
                  )
                })}
              </ListGroup>
            </Col>
        </Row>
      </Grid>
    );
  }
}

export default Corgis;
