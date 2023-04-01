import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sliders.css";
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function Main(){

    return (
        <div style={{width:"80%", margin:"auto" , marginTop:"30px" ,display :"flex" , flexDirection:"row"}}>
            <div style={{width:"60%"}}>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/gun1_7c35f09b-033c-41b9-9488-48b612b9fcf3_1600x.png?v=1677707415"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/promo2_1600x.png?v=1677707642"
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/newyearbanner-4_1600x.png?v=1672417750"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>



    
        </div>
        <div style={{width:"40%", display : "flex" , flexDirection:"column" }}>
         <div style={{  marginTop:"0px"}}>
          <img style={{width:"90%", margin:"auto"}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/osaki-greatdeals2_1600x.png?v=1670241153" />
         </div>
         <div style={{width : "90%" , margin:"auto" ,display:"grid" ,gridTemplateColumns:"repeat(2,1fr)" , gap:"20px" }}>
          <div style={{marginTop:"75px" , marginBottom:"0px"}}>
             <img   src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/new-march_f1cb60e6-b081-4e95-b0be-ee49e42a51d9_1600x.png?v=1680190375" />

          </div>
          <div style={{marginTop:"75px" , marginBottom:"0px"}}>
             <img  src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/best-march_1600x.png?v=1680190376" />

          </div>
         </div>
      </div>
    </div> 
    )

}

export default Main;