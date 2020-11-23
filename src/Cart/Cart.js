import React, { Component } from 'react';
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Card,ListGroup,ListGroupItem,Form} from 'react-bootstrap';
import formatCurrency from '../Currency';

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
        Name: '',
        Email: '',
        Address: '',
        ShowCheckOut : false
        }

        this.HandleInput = this.HandleInput.bind(this);
        this.CreateOrder = this.CreateOrder.bind(this);
      }

    HandleInput(e){
        const {name, value}= e.target;
        this.setState({[name] : value});
    }

    CreateOrder(e){
        e.preventDefault();
        const Order = {
            Name: this.state.Name,
            Email: this.state.Email,
            Address: this.state.Address,
            CartItems: this.props.CartItems
        };
        this.props.CreateOrder(Order);

    }

   
    render() {
        const {CartItems} = this.props;
        return (
            <div className='shopping-cart-container'>
                <div className='shopping-cart-header'>
                {CartItems.length === 0 ?
                (<div className='shopping-cart-details-container'>Cart is Empty</div>) :
                (<div className='shopping-cart-details-container'>You have {CartItems.length} Items in Cart</div>)}
                <div className='cart-items-container'>
                    <ul className='cart-items'>
                     {CartItems.map(item =>(
                     <Card key={item._id} className='single-cart-item'>
                     <Card.Body>
                     <Card.Title>{item.Title}</Card.Title>
                     <Card.Img variant="top" src={item.Image} className='cart-item-image'/>
                     </Card.Body>
                     <ListGroup className="list-group-flush">
                     <ListGroupItem>{formatCurrency (item.Price)}  X  {item.count}</ListGroupItem>
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
                <Button variant='success' 
                className='btn-proceed' onClick={() => {this.setState({ShowCheckOut : true})}}>PROCEED</Button>
                </div>

                {this.state.ShowCheckOut && (
                    <div className='show-checkout-container'>
                        <Form onSubmit={this.CreateOrder}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='Name' 
                        placeholder="Enter Name"
                        onChange={this.HandleInput}/>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name='Email' 
                        placeholder="Enter Email"
                        onChange={this.HandleInput}/>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name='Address' 
                        placeholder="Enter Address"
                        onChange={this.HandleInput}/>
                        <Button variant="success" type="submit"
                        className='btn-order-submit'>SUBMIT</Button>
                        </Form>

                    </div>
                )}


                </div>
             )}
                
            </div>    
            </div>
        )
    }
}
