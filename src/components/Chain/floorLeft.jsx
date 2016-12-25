import React,{ Component } from 'react';
import '../../lib/swiper.min.css';
import '../../lib/swiper.min';
import '../less/Chain.less'



export default class FloorLeft extends Component{
    componentDidMount(){
           let mySwiper = new Swiper ('.swiper-container', {
               direction: 'horizontal',
               loop: true,
               pagination : '.swiper-pagination',
               paginationType : 'custom',
               paginationCustomRender: function (swiper, current, total) {
                   return current + ' of ' + total;
               },
               paginationClickable: true,
               autoplay : 3000,
               autoplayDisableOnInteraction : false,

           })

    }
    render(){
        return(
            <div className="swiper-container fl">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <span>1</span>
                    </div>
                    <div className="swiper-slide">
                        <span>2</span>
                    </div>
                    <div className="swiper-slide">
                        <span>3</span>
                    </div>
                    <div className="swiper-slide">
                        <span>4</span>
                    </div>
                    <div className="swiper-slide">
                        <span>5</span>
                    </div>
                </div>
                {/*如果需要分页器*/}
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}