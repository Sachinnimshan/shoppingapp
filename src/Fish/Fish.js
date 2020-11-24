import React, { Component } from 'react';
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';

class Fish extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                {this.props.fish.map(fish=>(
                    <Card>
                    <Card.Body>
                        <Card.Title>{fish.Name}</Card.Title>
                        <Card.Img src={fish.Image}/>
                    </Card.Body>
                    </Card>

                ))}
            </div>
        )
    }
}

export default Fish;
