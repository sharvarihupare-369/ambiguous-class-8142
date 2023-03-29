import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import ImageCarousal from "./ImageCarousal";
import "./Sliders.css";

function Sliders() {
  let cont = document.querySelector(".product_container");

  const [count, setCount] = useState(0);

  const handlePrev = () => {
    setCount(count + 1);
    let width = cont.clientWidth;
    cont.scrollLeft = cont.scrollLeft - width;
    console.log(width);
  };

  const handleNext = () => {
    setCount(count + 1);
    let width = cont.clientWidth;
    
    cont.scrollLeft = cont.scrollLeft + width;
    console.log(width);
  };

  return (
    <>
      <div className="product_carousal">
        <button className="prev-btn" onClick={handlePrev}>
         <FontAwesomeIcon icon={faAngleLeft} size="xl" />
        </button>
        <button className="next-btn" onClick={handleNext} >
          {/* <p>&gt;</p> */}
          <FontAwesomeIcon icon={faAngleRight} size="xl" />
        </button>

        <div className="product_container">
          <ImageCarousal
            cardno="1"
            image={
              "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/15392549_merlot_2.jpg?v=1642115672"
            }
          />
          <ImageCarousal
            cardno="2"
            image={
              "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/14534545_black_2.jpg?v=1644850807"
            }
          />
          <ImageCarousal
            cardno="3"
            image={
              "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/lee2.png?v=1662754582"
            }
          />
          <ImageCarousal
            cardno="4"
            image={
              "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/ZC-7ZJG-1XHA_Large_Grey_4.jpg?v=165472318"
            }
          />
          <ImageCarousal
            cardno="5"
            image={
              "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/BKSCNTRL_Black_Front_1_800x.jpg?v=1591741733"
            }
          />
          <ImageCarousal
            cardno="6"
            image={
              "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/11361101_black_1_800x.jpg?v=1602008915"
            }
          />
         
          <ImageCarousal
            cardno="7"
            image={
              "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/3dfan_1_800x.jpg?v=1657760756"
            }
          />
          <ImageCarousal
            cardno="8"
            image={
              "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/0012_White_Natural_1_800x.jpg?v=1641949636"
            }
          />
          <ImageCarousal
            cardno="9"
            image={
              "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/REI_Lifestyle_4_800x.jpg?v=1595004469"
            }
          />
          <ImageCarousal
            cardno="10"
            image={
              "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/glouv_3_800x.jpg?v=1665091275"
            }
          />
          <ImageCarousal
            cardno="11"
            image={
              "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/M7-5EOM-S7TJ_Grey_9_jpeg_800x.jpg?v=1627598114"
            }
          />
          <ImageCarousal
            cardno="12"
            image={
              "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/LM-001_4.jpg?v=1642638801"
            }
          />
          <ImageCarousal
            cardno="13"
            image={
              "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/BR-EV-1121-BK_800x.jpg?v=1598408068"
            }
          />
          <ImageCarousal
            cardno="14"
            image={
              "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/850002308211_black_2_800x.jpg?v=1633566512"
            }
          />
          <ImageCarousal
            cardno="15"
            image={
              "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/90063_Juniper_Throw_White_2_800x.jpg?v=1637254923"
            }
          />
          <ImageCarousal
            cardno="16"
            image={
              "https://cdn.shopify.com/s/files/1/0262/2226/4423/products/BSSK9050BKv3.jpg?v=1643834171"
            }
          />
        </div>
      </div>
    </>
  );
}

export default Sliders;
