import React, { Component } from 'react';
import {ProductData} from './ProductData';

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

                </div>
                <div className='shopping-cart-container'>

                </div>
            </div>
        )
    }
}

export default Products;
