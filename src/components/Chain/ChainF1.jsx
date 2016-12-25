import React, { Component } from 'react';
import FloorLeft from './floorLeft';
import FloorRight from './floorRight';
export default class ChainF1 extends Component{
    render(){
        return (
            <div className="clearfloat">
                <FloorLeft/>
                <FloorRight/>
            </div>
        )
    }
}