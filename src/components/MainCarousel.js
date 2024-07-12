import React, {useContext} from 'react';
import { Carousel, CarouselItem, CarouselCaption, Image} from "react-bootstrap";


const MainCarousel = () => {
    return (

        <>
            <Carousel className='shadow-lg rounded-2 carousel'>
                <CarouselItem >
                    <Image src="/assets/images/white-children-room-with-copy-space.jpg" text="First slide" className="d-block w-100 carousel__img" />
                    <CarouselCaption className='carousel__caption'>
                        <h2 className='carousel__caption-header'>Plenty of room for fun</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </CarouselCaption>
                </CarouselItem >
                <CarouselItem >
                    <Image src="/assets/images/plush-sheep-pile-blankets.jpg" text="First slide" className="d-block w-100 carousel__img" />
                    <CarouselCaption className='carousel__caption'>
                        <h2 className='carousel__caption-header'>Happy child - happy family</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem >
                    <Image src="/assets/images/interior-kids-room-decoration-with-toys.jpg" text="First slide" className="d-block w-100 carousel__img"/>
                    <CarouselCaption className='carousel__caption'>
                        <h2 className='carousel__caption-header'>A better future for your child </h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
                    </CarouselCaption>
                </CarouselItem>
            </Carousel>
        </>
    );
};

export default MainCarousel;