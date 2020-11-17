import React, { Component } from 'react';
import {ProductData} from './ProductData';
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
                 <h1>Sachin Nimshan</h1>
                </div>
                <div className='shopping-cart-container'>
                <h1>Sachin Nimshan</h1>
                </div>
            </div>
        )
    }
}

export default Products;
