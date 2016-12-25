import React,{ Component } from 'react';
import '../less/Chain.less';

let ary = [];
for(var i = 0;i < 16; i++){
    ary[i] = 1;
}
class ImgComponent extends Component{
    render(){
        return(
            <div className="single">
                <div className="pic">
                    <span></span>
                </div>
                <div className="content">
                    <div className="content-top">
                       <h5>京东自营，品质保证 bong3手环</h5>
                    </div>
                    <div className="content-middle">
                        <span>
                            <em>¥</em>169.00
                        </span>
                        <span>赠品</span>
                    </div>
                    <div className="content-bottom">
                        <span>95%好评</span>
                        <span>13631人评价</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default class ChainF2 extends Component{
    render(){
        return(
            <div className="clearfloat chinF2">
                <div className="hd">
                    <h5>相识商品</h5>
                </div>
                {
                    ary.map((item,index) =>{
                        return <ImgComponent key={index}/>
                    })
                }
            </div>
        )
    }
}