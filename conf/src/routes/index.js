import React, { Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
import Head from '../components/Head'
import Chain from '../containers/Chain';
import Parts from '../containers/Parts';
import Cellphone from '../containers/Cellphone';
import Sourse from '../containers/Sourse';

class App extends Component{
    componentWillMount(){
       const automatic = () =>{
           const desW = 640,
               winW = document.documentElement.clientWidth,
               ratio = winW/desW;
           if(winW > desW) {
               let bodyNode = document.body;
               bodyNode.style.width = desW + 'px';
               bodyNode.style.marginLeft = "auto";
               bodyNode.style.marginRight = "auto";
           }
           else if (winW < 320){
               let bodyNode = document.body;
               bodyNode.style.width = 320 + 'px';
               document.documentElement.width = 320 + 'px';
               document.documentElement.style.fontSize = 50 + 'px';
           }else{
               document.documentElement.style.fontSize = ratio*100 + 'px';

           }
        };
        automatic();
        window.addEventListener('resize',automatic,false);
    }
    render() {
        return (
                <div>
                    <Head/>
                    <Router history={browserHistory}>
                        <Route path="/" component={Chain} />
                        <Route path="/parts" component={Parts} />
                        <Route path="/cellphone" component={Cellphone} />
                        <Route path="/sourse" component={Sourse} />
                    </Router>
                </div>
        );
    }
}

export default App;