import React, { Component } from 'react';
import './Products.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import formatCurrency from '../Currency';

export default class Products extends Component {
    render() {
        return (
           
            
              <div className='products-container'>
                 {this.props.products.map(product=>(
                     <Card className='single-product-card' key={product._id}>
                     <Card.Body>
                     <Card.Title>{product.Title}</Card.Title>
                     <Card.Img variant="top" src={product.Image}/>
                     </Card.Body>
                     <ListGroup className="list-group-flush">
                     <ListGroupItem>{formatCurrency (product.Price)}</ListGroupItem>
                     <ListGroupItem>
                     <Button onClick={() => this.props.AddToCart(product)}>ADD TO CART</Button></ListGroupItem>
                     </ListGroup>
                     </Card>
                      ))}   
                
              </div>
            
        )
    }
}
