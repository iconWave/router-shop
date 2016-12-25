import React, { Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
import '../components/less/Links.less'
import ChainF2 from '../components/Chain/ChainF2';
const Links = () =>
    <nav className="nav-route">
        <div className="nav-menu fl">
            <Link activeClassName="height-light" to="/">
                <span>智能手环</span>
                <span></span>
            </Link>
        </div>
        <div className="nav-menu fl">
            <Link activeClassName="height-light" to="/parts">
                <span>其他配件</span>
                <span></span>
            </Link>
        </div>
        <div className="nav-menu fl">
            <Link activeClassName="height-light" to="/cellphone">
                <span>手机</span>
                <span></span>
            </Link>
        </div>
        <div className="nav-menu fl">
            <Link activeClassName="height-light" to="/sourse">
                <span>移动电源</span>
            </Link>
        </div>
    </nav>;

class Cellphone extends Component{
    render(){
        return (
            <div>
                <Links/>
                <ChainF2/>
            </div>
        )
    }
}

export default Cellphone;