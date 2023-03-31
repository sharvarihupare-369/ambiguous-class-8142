
import React, { useEffect ,useState} from 'react'

function Product() {

    const [detail,setDetail] = useState([])

    const fetchAndRender = async() => {
        let res = await fetch(`http://localhost:3000/products`)
        let data = await res.json()
        console.log(data)
        setDetail(data)
        // return data;
    }

    useEffect(() => {
       fetchAndRender()
    },[])



  return (
    <div>
       {
        detail.map((product) =>{
            return (
                <div>
                    <img src={product.image} />
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            )
        })
       }
    </div>
  )
}

export default Product