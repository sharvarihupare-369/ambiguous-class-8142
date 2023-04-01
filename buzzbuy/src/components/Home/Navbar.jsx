import React from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { Box, Text, Flex, Input, Center, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {useState} from "react"



function Navbar({data,setData}) {
  console.log(data)

  const [inputData,setInputData] = useState("")
  
  
  //  let filterData =  data.filter((ele) => {
  //   return ele.title.toLowerCase() == inputData.toLowerCase()
  // })



  // setData(filterData)

 
   
 
   
 
    const handleUser = () =>{
      navigate("/signup")

    }    
     const navigate = useNavigate()
  

  return (
    <div>
      <Center
        className="offer"
        bg="rgb(36, 123, 160)"
        fontSize="14px"
        p="5px"
        color="white"
      >
        Save up to 70% Off | Shop Now
      </Center>

      <Box h="90px" p="10px" bg="blackAlpha.50">
        <Flex justifyContent="space-between" alignItems="center">
          <Box w="10%" >
            <Image
              w="100%"
             
              ml="100px"
              borderRadius="10px"
              border="1px solid"
              borderColor="blackAlpha.300"
              src={require("G:/Brookstonewebsite/mybrookstone/src/Assets/logo/BuzzBuy.png")}
              alt="logo"
            />
          </Box>
          {/* <VscAccount fontSize="25px"/> */}
          <Box w="40%">
            <Flex>
              <Input
                onChange={(e)=>setInputData(e.target.value)  }
                
                variant="outline"
                placeholder="Search"
                border="2px solid"
                focusBorderColor="blackAlpha.300"
                borderColor="blackAlpha.300"
                bg="white"
              />

              <Box pos="absolute" top="64px" right="530px">
                <FontAwesomeIcon icon={faSearch} color="grey" />
              </Box>
            </Flex>
          </Box>

          <Flex justifyContent="space-around" mr="8%">
            <Box p="10px"  onClick={handleUser}>
              <FontAwesomeIcon icon={faUser} size="xl" color="grey" />
            </Box>
            <Box p="10px">
              <FontAwesomeIcon icon={faHeart} size="xl" color="grey" />
            </Box>
            <Box p="10px 20px" bg="green.300" borderRadius="5px">
              <FontAwesomeIcon icon={faCartShopping} size="xl" color="white" />
              <Box w="20px" h="10px"  borderRadius={"50%"}  color="white" textAlign={"center"} position={"relative"} bottom="20px" left="20px" >
                0
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "90%",
          margin: "10px auto",
          fontWeight: "300",
          color: "#50514F",
        }}
      >
        <Link to="/new">New</Link>
        <Link to="/">Home</Link>
        <Link to="/wellness">Wellness</Link>
        <Link to="/sleep">Sleep</Link>
        <Link to="/wine&bar">Wine&bar</Link>
        <Link to="/fitness">Fitness</Link>
        <Link to="/outdoor">Outdoor</Link>
        <Link to="/technology">Technology</Link>
        <Link to="/travel">Travel</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/gifts">Gifts</Link>
        <Link to="/sale">sale</Link>
        {/* <Link to="/login">Signup</Link> */}
        
      </Box>
    </div>
  );
}

export default Navbar;
