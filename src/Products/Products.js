import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductData} from './ProductData';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Badge,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import './Products.css';

class Products extends Component {

    constructor(){
        super();
        this.state=
        {
            Products: ProductData,
            Sizes: '',
            Sort: ''

        }
    }
    

    render() {
        return (
            <div className='main-products-container'>
            <div className='products-container'>
            {ProductData.map((item,index)=>{
                return(
                  <Card className='single-product-card'>
                    <Card.Body>
                    <Card.Title>{item.Title}</Card.Title>
                    <Card.Img variant="top" src={item.Image}/>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>{item.Price}</ListGroupItem>
                      <ListGroupItem><Link to=''><Button>ADD TO CART</Button></Link></ListGroupItem>
                    </ListGroup>
                  </Card>
                  );
               })}
            
            </div>

            <div className='shopping-cart-container'>
            <h1> Hello Sachin</h1>
            </div>
            </div>
            
            
     
        )
    }
}

export default Products;
