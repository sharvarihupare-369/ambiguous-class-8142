
import React, { useEffect ,useState} from 'react'
import ProductCard from './ProductCard'
import Navbar from '../../components/Home/Navbar'
import Footer from '../../components/Home/Footer'

function Product() {

    const [detail,setDetail] = useState([])
    const [totalC,setTotalC] = useState()
    const [page,setPage] = useState(1)
    const [totalPage,setTotalPage] = useState()
    const [limit,setLimit] = useState(9)
    



    const fetchAndRender = async(page,limit) => {
        let res = await fetch(`http://localhost:3000/products?_limit=${limit}&_page=${page}`)
        let totalCount = (res.headers.get("X-Total-Count"))
        let data = await res.json()
       
        setDetail(data)
        setTotalC(totalCount)
        setTotalPage(Math.ceil(totalCount/limit))
        
    }

    useEffect(() => {
       fetchAndRender(page,limit)
    },[page,limit])

    // console.log(totalC)
    console.log(totalPage)


  return (
    <div>
      <Navbar data={detail} setData={setDetail} />
       <ProductCard data={detail} page={page} totalpages={totalPage} setPage={setPage} totalcount ={totalC} />
       <Footer/>
       
    </div>
  )
}

export default Product