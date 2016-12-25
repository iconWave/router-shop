import React, { Component } from 'react';
import './less/Head.less';

class Head extends Component{
    render(){
        return (
            <div className="head">
                <div className="head-left fl">
                    <a href="javascript:void(0)">
                        <span></span>
                    </a>
                </div>
                <div className="head-center fl">
                    <input placeholder=" 冰箱" type="text"/>
                    <span></span>
                </div>
                <div className="head-right fl">
                    <a href="javascript:void(0)"></a>
                </div>
            </div>
        )
    }
}

export default Head;