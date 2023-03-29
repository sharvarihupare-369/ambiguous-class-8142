import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, Text, Flex, Input, Center, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
//  const links = [
//   { path: "/", text: "Home" },
//   { path: "/new", text: "New" },
//   { path: "/wellness", text: "Wellness" },
//   { path: "/sleep", text: "Sleep" },
//   { path: "/wine&bar", text: "Wine&bar" },
//   { path: "/fitness", text: "Fitness" },
//   { path: "/outdoor", text: "Outdoor" },
//   { path: "/technology", text: "Technology" },
//   { path: "/travel", text: "Travel" },
//   { path: "/accessories", text: "Accessories" },
//   { path: "/entertainment", text: "Entertainment" },
//   { path: "/gifts", text: "Gifts" },
//   { path: "/sale", text: "Sale" },
// ];

function Navbar() {
  const defaultStyle = {
    textDecoration: "none",
    color: "#50514F",
  };

  const activeStyle = {
    textDecoration: "underline",
    textDecorationThickness: "3px",
    // padding : "4px",
    color: "black",
  };
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
          <Box w="10%">
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
                variant="outline"
                placeholder="Search"
                border="2px solid"
                focusBorderColor="blackAlpha.300"
                borderColor="blackAlpha.300"
                bg="white"
              />

              <Box pos="absolute" top="64px" right="510px">
                <FontAwesomeIcon icon={faSearch} color="grey" />
              </Box>
            </Flex>
          </Box>

          <Flex justifyContent="space-around" mr="5%">
            <Box p="10px">
              <FontAwesomeIcon icon={faUser} size="xl" color="grey" />
            </Box>
            <Box p="10px">
              <FontAwesomeIcon icon={faHeart} size="xl" color="grey" />
            </Box>
            <Box p="10px 15px" bg="green.300" borderRadius="5px">
              <FontAwesomeIcon icon={faCartShopping} size="xl" color="white" />
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
          fontWeight: "200",
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
      </Box>
    </div>
  );
}

export default Navbar;
