import React from 'react'
import Carousel from 'styled-components-carousel';
import {DivCarousel} from "./styled"

const CarouselMovie = () => {
    return (
        <Carousel
        slidesToShow={3}
        center
        breakpoints={[
            {
                size: 1000,
                settings: {
                    slidesToShow: 1,
                    showArrows: true,
                    showIndicator: true,
                    swipeable: true,
                },
            },
            {
                size: 600,
                settings: {
                    slidesToShow: 3,
                    showArrows: true,
                    showIndicator: true,
                    swipeable: true,
                },
            },
            {
                size: 1000,
                settings: {
                    slidesToShow: 4,
                    showArrows: true,
                    showIndicator: true,
                    center: true,
                    swipeable: true,
                },
            },
        ]}
    >
        <DivCarousel>
        <img src="https://res.cloudinary.com/yhonamc/image/upload/v1630819217/mulan_rljzxq.png" alt=""></img>
        </DivCarousel>
        <DivCarousel>
        <img src="https://res.cloudinary.com/yhonamc/image/upload/v1630819216/unidos_igqjuc.png" alt=""></img>
        </DivCarousel>
        <DivCarousel>
        <img src="https://res.cloudinary.com/yhonamc/image/upload/v1630819216/raya_djsjn6.png" alt=""></img>
        </DivCarousel>
    </Carousel>
   
    )
}

export default CarouselMovie;
