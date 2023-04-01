
import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from "../Pages/navbar/Home"
import New from "../Pages/navbar/New"
import Message from "../Pages/navbar/Message"
import Wellness from "../Pages/navbar/Wellness"
import Sleep from "../Pages/navbar/Sleep"
import WineBar from "../Pages/navbar/WineBar"
import Fitness from "../Pages/navbar/Fitness"
import Outdoor from "../Pages/navbar/Outdoor"
import Technology from "../Pages/navbar/Technology"
import Travel from "../Pages/navbar/Travel"
import Accessories from "../Pages/navbar/Accessories"
import Entertainment from "../Pages/navbar/Entertainment"
import Gifts from "../Pages/navbar/Gifts"
import Sale from "../Pages/navbar/Sale"
import Signup from './SigninFun/Signup'
import Addproduct from '../Pages/Addproduct'
import Admin from './Admin'
import Product from '../Pages/Products/Product'
import WellnessProduct from '../Pages/Products/Wellness/WellnessProducts'
import WellProductCard from '../Pages/Products/Wellness/WellProductCard'
import AddWellProduct from '../Pages/Products/Wellness/AddWellProduct'


function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<New/>} />
            <Route path="/messages" element={<Message/>} />
            <Route path="/wellnes" element={<Wellness/>} />
            <Route path="/sleep" element={<Sleep/>} />
            <Route path="/wine&bar" element={<WineBar/>} />
            <Route path="/fitness" element={<Fitness/>} />
            <Route path="/outdoor" element={<Outdoor/>} />
            <Route path="/technology" element={<Technology/>} />
            <Route path="/travel" element={<Travel/>} />
            <Route path="/accessories" element={<Accessories/>} />
            <Route path="/entertainment" element={<Entertainment/>} />
            <Route path="/gifts" element={<Gifts/>} />
            <Route path="/sale" element={<Sale/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/addproduct" element={<Addproduct/>} />
            {/* <Route path="/addwellnesspro" element={<AddWellProduct/>} /> */}
            {/* <Route path="/product" element={<Product/>} /> */}
        </Routes>
    </div>
  )
}

export default AllRoutes