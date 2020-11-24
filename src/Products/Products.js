import React, { Component } from 'react';
import './Products.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import {AiOutlineClose} from 'react-icons/ai';
import formatCurrency from '../Currency';
import Modal from 'react-modal';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export default class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: null
        };

        this.OpenModal =this.OpenModal.bind(this);
        this.CloseModal= this.CloseModal.bind(this);
    }

    OpenModal =(product)=>{
        this.setState({product});
    }

    CloseModal =()=>{
        this.setState({product: null});
    }

    render() {
        const {product} = this.state;

        return (
            <div className='products-container'>
                 <Fade bottom cascade>
                 {this.props.products.map(product=>(
                     <Card className='single-product-card' key={product._id}>
                     <Card.Body>
                     <Card.Title>{product.Title}</Card.Title>
                     <Card.Img variant="top" src={product.Image}
                     onClick={()=> this.OpenModal(product)}/>
                     </Card.Body>
                     <ListGroup className="list-group-flush">
                     <ListGroupItem>{formatCurrency (product.Price)}</ListGroupItem>
                     <ListGroupItem>
                     <Button onClick={() => this.props.AddToCart(product)}>ADD TO CART</Button></ListGroupItem>
                     </ListGroup>
                     </Card>
                      ))}  
                </Fade> 

                {product && (
                    <Modal isOpen={true} onRequestClose={this.CloseModal}>
                        <Zoom>
                        <Button className='btn-zoom-close' variant='danger' onClick={this.CloseModal}>
                            <AiOutlineClose className='btn-zoom-close-icon'/>
                        </Button>
                            <div className='single-zoom-product-container'>
                                <Card className='single-zoom-product-card'>
                                <Card.Body>
                                <Card.Title>{product.Title}</Card.Title>
                                <Card.Img variant="top" src={product.Image}/>
                                </Card.Body>
                                </Card>
                                
                            </div>
                        </Zoom>
                        

                    </Modal>
                )}
                
              </div>
              
              
            
        )
    }
}
