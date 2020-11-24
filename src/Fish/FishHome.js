import React, { Component } from 'react';
import {FishData} from './FishData';
import Fish from './Fish';

class FishHome extends Component {
    constructor(){
        super();
        this.state = {
            fish: FishData
        }
    }
    render() {
        return (
            <div>
                <Fish fish={this.state.fish}/>
            </div>
        )
    }
}

export default FishHome;
