import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Box
} from "@chakra-ui/react";

import "../Styles/Admin.css"

function Admin() {
  const [adminuser, setAdminuser] = useState("");
  const [adminpass, setAdminpass] = useState("");

  const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios.get(`http://localhost:3000/products`)
  //   .then((res) => setData(res.data))
  //   .catch((err)=>console.log(err))
  // },[])
  const navigate = useNavigate();
 

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .get(`http://localhost:3000/admin`)
        .then((res) => {
          res.data.map((el) => {
            if (adminuser == el.email) {
              if (adminpass == el.password) {
                
                  toast.success("login successful",{
                      
                  
                  });
               
                setTimeout(()=>{
                  navigate("/addproduct");

                },3000)

               
              } else {
                toast.error("Wrong Credentials",{
                  position: toast.POSITION.TOP_CENTER
                });
              }
            } else {
              toast.error("Wrong email",{
                position: toast.POSITION.TOP_CENTER
              });
            }
          });
        })
        .catch((err) => console.log(err));
    }
  };
  const validate = () => {
    let result = true;
    if (adminuser === "" || adminuser == null) {
      result = false;
      toast.warning("Please Enter Username",{
        position: toast.POSITION.TOP_CENTER
      });
    }
    else if (adminpass === "" || adminpass == null) {
      result = false;
      toast.warning("Please Enter Password",{
        position: toast.POSITION.TOP_CENTER
      });
    }
    return result;
  };

  return (
    <div className="formDiv" style={{backgroundImage: `linear-gradient(to right,#EEEEEE 10%,#A5D6A7 )`}}>
      
    <div className="adminDiv">
      <h1>Welcome To Admin Panel</h1>
      {/* <table>
        <thead>
        <tr>
        <th>id</th>
        <th>image</th>
        <th>title</th>
        <th>price</th>
        <th>description</th>
        
        </tr>
        </thead>
        <tbody>
          {
            data.map((d,i)=>{
              return <tr key={i}>
                <th>{d.id}</th>
                <th>{d.image}</th>
                <th>{d.title}</th>
                <th>{d.price}</th>
                <th>{d.description}</th>
              </tr>
            })
          }
          </tbody>
      </table> */}
     
      <form onSubmit={handleAdminLogin}>
        <div>
          <label>Email</label>
          <br></br>
          <input
            className="inputad"
            type="email"
            value={adminuser}
            placeholder="Enter admin name"
            onChange={(e) => setAdminuser(e.target.value)}
         
          />
        </div>
        <br/>
        <div>
          <label>Password</label>
          <br />
        
          <input
            className="inputad"
            type="password"
            value={adminpass}
            placeholder="Enter password"
            onChange={(e) => setAdminpass(e.target.value)}
           
          />
        </div>
        <button type="submit" className="submitBtn">LOGIN</button>
      </form>
      {/* <FormControl onSubmit={handleAdminLogin}>
  <FormLabel>Email address</FormLabel>
  <Input type='email'value={adminuser} placeholder="Enter username" onChange={(e) => setAdminuser(e.target.value)} />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormLabel >Password</FormLabel>
  <Input type='password' value={adminpass} placeholder="Enter password" onChange={(e) => setAdminpass(e.target.value)}   />
  <Button type="submit" >Submit</Button>
</FormControl> */}
    </div>
    </div>
    
  );
}

export default Admin;

//create a form for admin login
//get request to admin api
//validation
//navigate to addproduct.jsx--private--when successful
//form craete for products(see db.json)
//form validation(empty)
//add product success then go to product page
