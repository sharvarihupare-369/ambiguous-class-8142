import {
  Heading,
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import axios from 'axios'
import { useRef, useState, useEffect } from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import "../../Styles/Signup.css";
import "react-toastify/dist/ReactToastify.css";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import 'animate.css';

import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

// toast.configure()
function Signup() {
  //   const baseServerUrl = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`;

  //   const fetchData = async (url) => {
  //     let res = await fetch(`${url}/users`);
  //     let data = await res.json();
  //     console.log(data);
  //   };
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .get(`http://localhost:3000/users`)
        .then((res) => {
          res.data.map((el) => {
            if (user == el.email) {
              if (pwd == el.password) {
                  toast.success("login successful",{
                    position: toast.POSITION.TOP_CENTER
                  }); 
                  setTimeout(()=>{
                    navigate("/");
                  },3000)
              } else  {
                toast.error("Wrong Credentials",{
                  position: toast.POSITION.TOP_CENTER
                });
              }
            } else{
                // toast.error("Wrong email",{
                  /* position: toast.POSITION.TOP_CENTER*/
                // });
            } 
          });
        })
        .catch((err) => console.log(err));
    }
  };

  const validate = () => {
    let result = true;
    if (user === "" || user == null) {
      result = false;
      toast.warning("Please Enter Username",{
        position: toast.POSITION.TOP_CENTER
      });
    }
    if (pwd === "" || pwd == null) {
      result = false;
      toast.warning("Please Enter Password",{
        position: toast.POSITION.TOP_CENTER
      });
    }
    return result;
  };

  const [id, setId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = () => {
    let res = true;
    let errMsg = "Please Enter the field";
    if (id == "" || id == null) {
      res = false;
      errMsg += " " + "Username";
    } else if (fname == "" || fname == null) {
      res = false;
      errMsg += " " + "FirstName";
    } else if (lname == "" || lname == null) {
      res = false;
      errMsg += " " + "LastName";
    } else if (password == "" || password == null) {
      res = false;
      errMsg += " " + "Password";
    } else if (email == "" || email == null) {
      res = false;
      errMsg += " " + "Email";
    }
    if (!res) {
      toast.warning(errMsg,{
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        toast.warning("Please enter the valid email",{
          position: toast.POSITION.TOP_CENTER
        });
        res = false;
      }
    }

    return res;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let regObj = { id, fname, lname, email, password };
    // console.log(regObj);
    if (isValid()) {
      fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          toast.success(`Registered Successfully`,{
            position: toast.POSITION.TOP_CENTER
          });
        })
        .catch((error) => {
          toast.error("Registration Failed",{
            position: toast.POSITION.TOP_CENTER
          });
        });
    }

    setId("");
    setEmail("");
    setPassword("");
    setFname("");
    setLname("");
  };

  return (
    <>
      {/* <section>
        <p ref={errMsg} className=""></p>
    </section> */}
      <Box bgGradient="linear(blackAlpha.300 0%, gray.200 10%, blackAlpha.100 50%)">

      <div
      
        //  bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'
        // bgGradient="linear(blackAlpha.400 0%, gray.300 25%, blackAlpha.100 50%)"
      >
        <Navbar />

        <Box textAlign="center" mt="30px">
          <Heading className="signuphead" size="md" fontWeight="400">
            Sign in to your account
          </Heading>
          <Text className="signuptext" size="sm" fontWeight="400">
            Our brand new site is live. Please create a new account to explore
            this experience.
          </Text>
        </Box>

        {/* Login  */}

        <div style={{marginTop:"10px", border :"1px solid gray", width:"20%" ,textAlign:"center", padding:"5px" ,fontSize:"18px", borderRadius:"5px" }}>
            <Link to="/admin">Admin Login</Link>
            </div>


        <div className="parentCont animate__animated animate__backInDown " >
          {/* <Flex> */}
            <div className="loginDiv">
          <h3 className="headsign" >
               Login Customer
              </h3>
              <Text fontSize="12px" fontWeight="400">
              If you have an account, please sign in with your email address.
              </Text>
              <br /> 
          
             
              <form onSubmit={handleLogin}>
                <div >
                  <label>Email</label>
                  <br/>
                  <input
                   className="inpF"
                    type="email"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>
                <br />

                <div>

                  <label>Password</label>
                  <br/>
                  <input 
                    className="inpF"
                    type="password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                  />
                </div>
                <br />
                <button className="loginBtn" type="submit">
                  S I G N I N
                </button>
                
              </form>
              
          
            </div>



            <div className="formDiv">
              <h3 className="headsign" >
                Create Customer
              </h3>
              <Text fontSize="12px" fontWeight="400">
                Creating an account has many benefits: check out faster, keep
                more than one address, track orders and more.
              </Text>
              <br /> 
              <form onSubmit={handleSubmit}>
                <div >
                  <label>Username</label>
                  <br/>
                  <input
                    className="inpF"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <br />
               
                <div>
                  <label>FirstName</label>
                  <br/>
                  <input
                   className="inpF"
                    type="text"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
                <br />
               
                <div>
                  <label>LastName</label>
                  <br/>
                  <input
                   className="inpF"
                    type="text"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    />
                </div>
                
                <br />
                <div>
                  <label>Email</label>
                  <br/>
                  <input
                   className="inpF"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <br />
           
                <div>
                  <label>Password</label>
                  <br/>
                  <input
                   className="inpF"
                   type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br />
                <label>

                    <input type="checkbox" checked="checked" name="remember" /> 
                    Subscribe to our newsletter. </label>
                <br/>
                <br/>
 
                 <button className="subBtn" type="submit">
                  S U B M I T
                </button>
              </form>




            </div>

            {/* Sign Up */}
            {/* <Box p="10px" >
        <Heading size="md" fontWeight="400">
           Create Customer
          </Heading>
          <Text fontSize="12px" fontWeight="400">
          Creating an account has many benefits: check out faster, keep more than one address, track orders and more.
          </Text>
          <br /> */}

            {/* <FormControl onSubmit={handleSubmit}>
          <FormLabel  color={"blackAlpha.600"} borderRadius="0px">
          Username
          </FormLabel>
             
              <Input value={id} onChange={(e)=>setId(e.target.value)} type="text"  borderColor="blackAlpha.400" />
              
              <br />
              <br />
              <FormLabel  color={"blackAlpha.600"}>
              First Name
              </FormLabel> */}
            {/* <span className="errmsg">*</span> */}
            {/* <Input value={fname} onChange={(e)=>setFname(e.target.value)} type="text"  borderColor="blackAlpha.400" />
            
              <br />
              <br />
              <FormLabel color={"blackAlpha.600"}>Last Name</FormLabel>
              <Input value={lname} onChange={(e)=>setLname(e.target.value)} type="text"  borderColor="blackAlpha.400" />
              <br />
              <br />
              <FormLabel color={"blackAlpha.600"} borderRadius="0px">
                Email 
              </FormLabel>
              <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"   borderColor="blackAlpha.400" />
              <br />
              <br />
              <FormLabel color={"blackAlpha.600"}>Password</FormLabel>
              <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"  borderColor="blackAlpha.400" />
              <br/>
              <br/>

              <Checkbox defaultChecked>Subscribe to our newsletter.</Checkbox>
              <br/>
              <br/>
              <Button  className="subBtn"  type="submit"  >
             S U B M I T
            </Button>
              
            </FormControl>

        </Box> */}
          {/* </Flex> */}
        </div>

        <Footer />
      </div>
</Box>
    </>
  );
}

export default Signup;

// <Box  p="10px" w="50%" >
// <Heading size="md" fontWeight="400">
//   Login
// </Heading>
// <Text fontSize="12px" fontWeight="400">
//   If you have an account, please sign in with your email address.
// </Text>
// <br />

// <Box>
//   <FormControl onSubmit={handleLogin}>
//     <FormLabel color={"blackAlpha.600"} borderRadius="0px">
//       Email address
//     </FormLabel>
//     <Input value={user} onChange={(e)=> setUser(e.target.value)} type="email" borderColor="blackAlpha.400" w="80%" />
//     <FormHelperText>We'll never share your email.</FormHelperText>
//     <br />
//     <FormLabel color={"blackAlpha.600"}>Password</FormLabel>
//     <Input value={pwd}  type="password" onChange={(e)=> setPwd(e.target.value)}  borderColor="blackAlpha.400" w="80%" />
//     <Button */}
{
  /* type="submit"
  mt="15px"
  size="md"
    height="48px" */
  }
  {
    /* width="150px" */
}
{
  /* padding={"0 30px"}
  border="2px"
    borderRadius={"7px"}
    borderColor="green.500"
    bg="#65C297"
    color="white"
    fontSize={"17px"}
  >
  S I G N     I N
  </Button>
  </FormControl>

  */
}

{
  /* <p  style={{fontSize :"13px" , marginTop:"10px"}}>Forgot your password?</p>
</Box>

</Box>
*/
}
