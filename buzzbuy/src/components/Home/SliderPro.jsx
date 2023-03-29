import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function SliderPro() {
  return (
    <div style={{width:"80%", margin:"auto" , marginTop:"30px" }}>
      <Carousel responsive={responsive} >
        <div style={{borderRadius:"30px" , marginRight:"20px"}}>
            <img style={{borderRadius:"30px"}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/lumina3_1600x.png?v=1675981913"/>
        </div >
        <div style={{borderRadius:"30px" , marginRight:"20px"}}>
            <img style={{borderRadius:"30px"}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/lelo_1600x.png?v=1670240370" />
        </div>
        <div style={{borderRadius:"30px" , marginRight:"20px"}}>
            <img  style={{borderRadius:"30px"}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/glo2_1600x.png?v=1670240759" />
        </div>
        <div style={{borderRadius:"30px" , marginRight:"20px"}}>
            <img  style={{borderRadius:"30px"}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/solaris2_1_1600x.png?v=1665670319" />
        </div>
        <div style={{borderRadius:"30px" , marginRight:"10px"}}>
            <img  style={{borderRadius:"30px"}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/dog1_1_1600x.jpg?v=1663712086" />
        </div>
        <div style={{borderRadius:"30px" , marginRight:"20px"}}>
            <img  style={{borderRadius:"30px"}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/download_1_copy_1600x.jpg?v=1653328103" />
        </div>
        <div style={{borderRadius:"30px" , marginRight:"20px"}}>
            <img  style={{borderRadius:"30px"}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/pitaka_1600x.png?v=1659475653" />
        </div>
        <div style={{borderRadius:"30px" , marginRight:"20px"}}>
            <img  style={{borderRadius:"30px"}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/ohom3_1600x.png?v=1659475686" />
        </div>
        <div style={{borderRadius:"30px" , marginRight:"20px"}}>
            <img  style={{borderRadius:"30px"}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/Brookstone_Promo_Badge_3_1600x.jpg?v=1653328132" />
            
        </div>
        <div style={{borderRadius:"30px" , marginRight:"20px"}}>
            <img  style={{borderRadius:"30px"}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/download_copy_1600x.jpg?v=1653328148" />
            
        </div>
        <div style={{borderRadius:"30px" , marginRight:"20px"}}>
            <img   style={{borderRadius:"30px"}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/ReAthlete_Promo_Badge_2_1600x.jpg?v=1653328163" />  
        </div>
        <div style={{borderRadius:"30px" , marginRight:"20px"}}>
            <img  style={{borderRadius:"30px"}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/CraftyCocktail_Promo_Badge_4_1600x.jpg?v=1653328177" />  
        </div>
        <div>
            <img  style={{borderRadius:"30px"}} src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/SoloStove_Promo_Badge_1_1600x.jpg?v=1653328190" />  
        </div>

                
      </Carousel>
    </div>
  );
}

export default SliderPro;