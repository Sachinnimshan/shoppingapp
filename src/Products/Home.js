import React, { Component } from 'react';
/*import Products from '../Products/Products';*/
import Products from './Products';
import Filter from '../Filter/Filter';
import {ProductData} from './ProductData';
import Cart from '../Cart/Cart';

export class Home extends Component {
    constructor(){
        super();
        this.state= {
            products: ProductData,
            CartItems: localStorage.getItem("CartItems") ?
            JSON.parse(localStorage.getItem("CartItems")): [],
            sort: "",
            size: ""
        }
        this.FilterBySize = this.FilterBySize.bind(this);
        this.FilterByPrice = this.FilterByPrice.bind(this);
        this.AddToCart = this.AddToCart.bind(this);
        this.RemoveFromCart = this.RemoveFromCart.bind(this);

       
    }

    CreateOrder(Order){
      alert("Need To Save Your Order " + Order.Name);
    }

    AddToCart =(product)=>{
      const CartItems = this.state.CartItems.slice();
      let AllReadyInCart = false;
      CartItems.forEach(item =>{
        if(item._id === product._id){
          item.count++;
          AllReadyInCart = true;
        }
      });
      if(!AllReadyInCart){
        CartItems.push({...product, count: 1});
      }
      this.setState({CartItems});
      localStorage.setItem("CartItems", JSON.stringify(CartItems));
    }

    RemoveFromCart = (product)=>{
      const CartItems = this.state.CartItems.slice();
      this.setState({CartItems: CartItems.filter((x)=> x._id !==product._id),
      });
      localStorage.setItem("CartItems",
      JSON.stringify(CartItems.filter((x)=> x._id !==product._id)));
    }

    FilterByPrice =(e) =>{
      const sort = e.target.value;
      this.setState((state) => ({
        sort: sort, products: this.state.products.slice().sort((a,b) =>(
          sort === "Lowest" ?
          ((a.Price > b.Price)? 1:-1):
          sort === "Highest" ?
          ((a.Price < b.Price)? 1:-1):

          ((a._id < b._id)? 1:-1)
          ))
      }))
    }

    FilterBySize =(e) =>{

        const filter = e.target.value;
        if(filter===""){
          this.setState({size: filter, products:ProductData});
        }
        else{
        console.log(e.target.value);
        this.setState({
          size: filter, products: ProductData.filter(
            (product)=> product.Availability.indexOf(filter)>=0
          ),
        });
      }

    }
    
    render() {
        return (
          <div>
            <div>
            <Filter 
            count = {this.state.products.length}
            sort={this.state.sort} 
            size={this.state.size}
            FilterBySize = {this.FilterBySize}
            FilterByPrice = {this.FilterByPrice}/>
            </div>
            <div className='main-home-container'>
             <Products products = {this.state.products}
             AddToCart = {this.AddToCart}/>
             <Cart CartItems={this.state.CartItems}
             RemoveFromCart = {this.RemoveFromCart}
             CreateOrder = {this.CreateOrder}/>
            </div>
            
          </div>
            
        )
    }
}

export default Home;

