import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sliders.css";
import './Main.css'



function Main(){

    return (
        <div style={{width:"80%", margin:"auto" , marginTop:"30px" }}>
            <div style={{width:"60%"}}>

     {/* <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={200}
        totalSlides={3}
        style={{border:"1px solid red"}}
      >
        <Slider>
          <Slide index={0}>
            <img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/gun1_7c35f09b-033c-41b9-9488-48b612b9fcf3_1600x.png?v=1677707415" alt="" />
          </Slide>
          <Slide index={1}>
            <img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/promo2_1600x.png?v=1677707642" />
          </Slide>
          <Slide index={2}>
            <img src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/newyearbanner-4_1600x.png?v=1672417750" />
          </Slide>
        </Slider>
        <ButtonBack className='prev-Btn'>
        {/* <FontAwesomeIcon icon={faAngleLeft} size="xl" /> */}
        {/* </ButtonBack>
        <ButtonNext className='next-Btn'>
        {/* <FontAwesomeIcon icon={faAngleRight} size="xl" /> */}
        {/* </ButtonNext>
      </CarouselProvider> */} 
        </div>
    </div> 
    )

}

export default Main;