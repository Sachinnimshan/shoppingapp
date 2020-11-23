import React, { Component } from 'react';
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import formatCurrency from '../Currency';

export default class Cart extends Component {
    render() {
        const {CartItems} = this.props;
        return (
            <div className='shopping-cart-container'>
                <div className='shopping-cart-header'>
                {CartItems.length === 0 ?
                (<div className='shopping-cart-details-container'>Cart is Empty</div>) :
                (<div className='shopping-cart-details-container'>You Have {CartItems.length} Items in Cart</div>)}
                <div className='cart-items-container'>
                    <ul className='cart-items'>
                     {CartItems.map(item =>(
                     <Card key={item._id} className='single-cart-item'>
                     <Card.Body>
                     <Card.Title>{item.Title}</Card.Title>
                     <Card.Img variant="top" src={item.Image} className='cart-item-image'/>
                     </Card.Body>
                     <ListGroup className="list-group-flush">
                     <ListGroupItem>{formatCurrency (item.Price)} X {item.count}</ListGroupItem>
                     <ListGroupItem>
                     <Button variant='danger' onClick={() => this.props.RemoveFromCart(item)}>
                         REMOVE</Button></ListGroupItem>
                     </ListGroup>
                     </Card>
                     ))}

                    </ul>

                </div>
                {CartItems.length !== 0 &&(
                <div>
                    <div className='shopping-cart-total'>
                    Total : {""} 
                    {formatCurrency(CartItems.reduce((a,c) => a + c.Price * c.count,0)
                    )}
                    </div>
                <div className='shopping-cart-proceed'>
                <Button variant='success' className='btn-proceed'>PROCEED</Button>
                </div>
                </div>
                )}
                
            </div>    
            </div>
        )
    }
}
