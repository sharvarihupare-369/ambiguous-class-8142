import {
    Box,
    Button,
    Heading,
    HStack,
    Text,
    VStack,
    WrapItem,
    Image,
    SimpleGrid,
    Grid,
    Stack,
    GridItem,
  } from "@chakra-ui/react";
  
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
  import { faFacebook , faInstagram , faYoutube , faTwitter , faPinterest, faApple} from "@fortawesome/free-brands-svg-icons";
  import { Divider } from "@chakra-ui/react";
  
  import React from "react";
  
  function Footer() {
    return (
      <Box bg="blackAlpha.700" p="100px" mt="20px" >
        <HStack>
          <Box p="20px" color="white" textAlign="left">
            <VStack>
        
              <Box mr="195px">
                <Heading as="h1" size="md" >
                  Stay in the loop
                </Heading>
              </Box>
  
              <Box >
                <Text >
                  Sign up and be the first to hear about new products and
                  promotions!
                </Text>
              </Box>
              <Box>
                <Button
                  bg="#65C297"
                  variant="solid"
                  p="0 70px"
                  mt="30px"
                  mr="100px"
                  color="white"
                  fontSize="15px"
  
  
                >
                  SIGN UP NOW
                </Button>
              </Box>
              
              <Box p="5px" >
                 <HStack p="5px"  mr="150px">
  
              <FontAwesomeIcon icon={faFacebook} size="xl" />
              <FontAwesomeIcon icon={faInstagram} size="xl" pulse/>
              <FontAwesomeIcon icon={faYoutube} size="xl"   />
              <FontAwesomeIcon icon={faTwitter} size="xl" />
              <FontAwesomeIcon icon={faPinterest} size="xl" />
              <FontAwesomeIcon icon={faApple} size="xl" />
              </HStack>
              </Box>
              <Box >
              <Text fontSize="10px" mr="100px" mt="40px">&copy; Brookstone 2023</Text>
  
              </Box>
  
            </VStack>
          </Box>
          <Box h="350px" p={5}>
            {/* <Stack direction="column" h="300px" p={4}> */}
            <Divider orientation="vertical"  />
  
            {/* </Stack> */}
          </Box>
  
          <Box >
            <VStack>
              <Box w="80%">
                <Image
                  w="100%"
                  borderRadius="20px"
                  src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/BKST_Klarna_Banner_Update_HP_Desktop_1600x.webp?v=1652916700"
                  alt="shopify"
                />
              </Box>
              {/* <Divider orientation="vertical"/> */}
  
              <Box>
                <Grid templateColumns="repeat(2, 1fr)" gap={200} mt="50px">
                  <GridItem w="100%" p="10px" color="white">
                    <Box textAlign="left">
                      <Heading as="h5" size="xs" >
                        SHOP BROOKSTONE.COM
                      </Heading>
                      <Box fontSize="13px" mt="10px">
                        <Text>Massage Chair Buyers Guide</Text>
                        <Text>FAQ</Text>
                        <Text>About Us</Text>
                        <Text>Shipping Info</Text>
                        <Text>Privacy Policy</Text>
                        <Text>Prop 65</Text>
                        <Text>Accessibility Statement</Text>
                      </Box>
                    </Box>
                  </GridItem>
                  <GridItem w="100%" p="10px" color="white">
                    <Box textAlign="left">
                      <Heading as="h5" size="xs">
                        CUSTOMER SERVICE
                      </Heading>
                      <Box fontSize="13px" mt="10px">
                        <Text>Contact Us</Text>
                        <Text>Return Policy</Text>
                        <Text>Order Tracking</Text>
                        <Text>Product Manuals</Text>
                        <Text>Your California Policy Rights</Text>
                        <Text>Accessibility Mode</Text>
                      </Box>
                    </Box>
                  </GridItem>
                </Grid>
              </Box>
            </VStack>
          </Box>
        </HStack>
      </Box>
    );
  }
  
  export default Footer;
  
  // boxSize='200px'
  