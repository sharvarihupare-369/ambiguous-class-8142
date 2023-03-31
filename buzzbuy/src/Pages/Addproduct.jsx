

import React, { useEffect, useState } from 'react'
import './AddProduct.css'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link, useNavigate} from "react-router-dom"
import "../Styles/Admin.css"

function Addproduct() {


   const [proid,setProid] = useState("")
   const [image,setImage] = useState("")
   const [title,setTitle] = useState("")
   const [price,setPrice] = useState("")
   const [desc,setDesc] = useState("")

   const navigate = useNavigate()
   
   const handleSubmit = (e) => {
     e.preventDefault();
     let productObj = {proid,image,title,price,desc}
    if(validate()){

      fetch(`http://localhost:3000/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify(productObj),
    })
    .then((res) => {
      console.log(res)
      toast.success(`Added Successfully`,{
        position: toast.POSITION.TOP_CENTER,
      });
      cleanup()
      
      navigate('/product')
       
       

      })
      .catch((error) => {
        toast.error("Adding Failed",{
          position: toast.POSITION.TOP_CENTER,
        });
      });
    }
  }

  const cleanup = () => {
     setProid("")
     setImage("")
     setDesc("")
     setPrice("")
     setTitle("")
  }



   const validate = () => {
    let result = true;
    if (proid === "" || proid == null) {
      result = false;
      toast.warning("Please Enter ProductId",{
        position: toast.POSITION.TOP_CENTER,
      });
    }
    else if (image === "" || image == null) {
      result = false;
      toast.warning("Please Enter Image",{
        position: toast.POSITION.TOP_CENTER,
      });
    }
    else if (title === "" || title == null) {
      result = false;
      toast.warning("Please Enter Title",{
        position: toast.POSITION.TOP_CENTER,
      });
    }
    else if (price === "" || price == null) {
      result = false;
      toast.warning("Please Enter Price",{
        position: toast.POSITION.TOP_CENTER,
      });
    }
    else if (desc === "" || desc == null) {
      result = false;
      toast.warning("Please Enter Description",{
        position: toast.POSITION.TOP_CENTER,
      });
    }
    return result;
  };


  const handleProduct = () => {
    navigate('/product')
  }
 

  return (
   <>
    
    <div className='adminDiv'>

     <form onSubmit={handleSubmit}>
      <div >
       <label>id</label>
          <br/>
       <input type="text"  value={proid} onChange={(e) =>setProid(e.target.value)}  className="inputad" />
      </div>
      <div>
      <label>image</label>
      <br/>
       <input type="text" value={image} onChange={(e) =>setImage(e.target.value)}  className="inputad"  />
      </div>
      <div>
       <label>Title</label>
       <br/>
       <input type="text" value={title} onChange={(e) =>setTitle(e.target.value)}  className="inputad"  />
      </div>
      <div>
       <label>Price</label>
       <br/>
       <input type="text" value={price} onChange={(e) =>setPrice(e.target.value)}  className="inputad"  />
      </div>
      <div>
       <label>Description</label>
       <br/>
       <input type="text" value={desc} onChange={(e) =>setDesc(e.target.value)}  className="inputad"  />
      </div>
      <button type="submit" className='submitBtn'>Submit</button>
     </form>
 
    </div>
    <div>
      <button onClick={handleProduct}>GO TO PRODUCT PAGE</button>
    </div>
   </>
  )
}

export default Addproduct