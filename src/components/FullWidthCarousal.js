// https://www.npmjs.com/package/react-responsive-carousel
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class FullWidthCarousal extends Component{
    render() {
        return (
            // <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
            <Carousel showArrows={true} style={{ minHeight: '50%' }}>
                <div>
                    <img src="https://react-responsive-carousel.js.org/assets/1.jpeg" />
                    <p className="legend">Nature</p>
                </div>
                <div>
                    <img src="https://react-responsive-carousel.js.org/assets/2.jpeg" />
                    <p className="legend">Water Lagoons</p>
                </div>
                <div>
                    <img src="https://react-responsive-carousel.js.org/assets/4.jpeg" />
                    <p className="legend">Parks and Highlands</p>
                </div>
            </Carousel>
        );
    }
};

export default FullWidthCarousal;