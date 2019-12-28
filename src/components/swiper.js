import React, { Component } from 'react'
import '../../node_modules/swiper/css/swiper.min.css'
import Swiper from '../../node_modules/swiper/js/swiper.js'
import '../../node_modules/swiper/css/swiper.min.css'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newlist: [0, 1, 2, 3, 4, 5, 6]
        }
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            slidesPerView: 3,
            centeredSlides: true,
            virtual: {
                slides: this.state.newlist,
            }
        })
    }
    render() {
        return (
            <div className='new'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                    </div>
                </div>
            </div>
        )
    }
}

export default About;