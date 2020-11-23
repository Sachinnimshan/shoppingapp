import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductData} from './ProductData';
import Cart from '../Cart/Cart';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import './Products.css';

class Products extends Component {
  constructor(){
    super();
    this.state={
      proditems: ProductData,
      cartItems: [],
      size: "",
      sort: ""
    }
    this.FilterBySize = this.FilterBySize.bind(this);
    this.FilterBySort = this.FilterBySort.bind(this);
  }

  FilterBySize(e){
    const filter = e.target.value;
    if(filter===""){
      this.setState({Size: filter, proditems:ProductData});
    }
    else{
    console.log(e.target.value);
    this.setState({
      Size: filter, proditems: ProductData.filter(
        (product)=> product.Availability.indexOf(filter)>=0
      ),
    });
  }
  }

  FilterBySort(e){
    const sort = e.target.value;
    this.setState((state) => ({
      Sort: sort, proditems: this.state.proditems.slice().sort((a,b)=>(
        sort === "Lowest" ?
        ((a.Price > b.Price)? 1:-1):
        sort === "Highest" ?
        ((a.Price < b.Price)? 1:-1):
        sort === "Latest" 
        ((a._id < b._id)? 1:-1)
        ))
    }))
  }
  
  AddToCart(product){
    const cartItems = this.state.cartItems.slice();
    let AllReadyInCart = false;
    cartItems.forEach(item=>{
      if(item._id === product._id){
        item.count++;
        AllReadyInCart = true;
      }
    });
    if(!AllReadyInCart){
      cartItems.push({...product, count: 1});
    }

    this.setState({cartItems});

  }

    render() {
      
        return (
       <div>
            <div className='filter-products-container'>
                    <div className='display-items-container'>
                    <h5>No Of Available Products - {this.state.proditems.length}</h5>
                    </div>

                    <div className='filter-container'>
                    <select className='filter-dropdowns' 
                    value={this.state.Sort} onChange={this.FilterBySort}>
                          <option >Latest</option>
                          <option value='Lowest'>Lowest</option>
                          <option value='Highest'>Highest</option>
                      </select>
                    </div>

                    <div className='filter-container'>
                    <select className='filter-dropdowns' 
                    value={this.state.Sort} onChange={this.FilterBySize}>
                          <option> ALL </option>
                          <option value="XS">XS</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value='XL'>XL</option>
                          <option value='XXL'>XXL</option>
                      </select>
                    </div>
                    

                </div>
            <div className='main-products-container'>
              <div className='products-container'>
            {this.state.proditems.map((item,index)=>{
                return(
                  <Card className='single-product-card' key={index}>
                    <Card.Body>
                    <Card.Title>{item.Title}</Card.Title>
                    <Card.Img variant="top" src={item.Image}/>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>{item.Price}</ListGroupItem>
                      <ListGroupItem>
                        <Button onClick={this.state.AddToCart}>ADD TO CART</Button>
                        </ListGroupItem>
                    </ListGroup>
                  </Card>
                  );
               })}
            
            </div>

            <div className='shopping-cart-container'>
           
            </div>
            </div>
            
            </div>    
     
        )
    }
}

export default Products;
