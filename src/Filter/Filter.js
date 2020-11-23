import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
    render() {
        return (
        <div>
            <div className='main-filter-container'>
                    <div className='display-items-container'>
                    <h4>No Of Available Products - {this.props.count}</h4>
                    </div>

                    <div className='filter-container'>
                    <select className='filter-dropdowns' 
                    value={this.props.sort} onChange={this.props.FilterByPrice}>
                          <option >Latest</option>
                          <option value="Lowest">Lowest</option>
                          <option value="Highest">Highest</option>
                      </select>
                    </div>

                    <div className='filter-container'>
                    <select className='filter-dropdowns' 
                    value={this.props.size} onChange={this.props.FilterBySize}>
                          <option value=""> ALL </option>
                          <option value="XS">XS</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                          <option value="XXL">XXL</option>
                      </select>
                    </div>
                    

                </div>
            

        </div>
        )
    }
}

export default Filter;
