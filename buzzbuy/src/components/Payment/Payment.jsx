
import { Heading ,Box, Text, Input,Checkbox, CheckboxGroup, Select , Flex , Image ,Button
 , Highlight} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'


function Payment() {
    const navigate = useNavigate()
  return (
    <div>
      <Navbar/>
        
        <Box w="90%" m="auto" display={"flex"} >
        <Box w="60%" p="50px" color="blackAlpha.700"  boxShadow='sm' rounded='xl' bg='white'>

          <Box w="40%" mr="100px">
            <Image w="90%" mr="20px" src={require("G:/Brookstonewebsite/mybrookstone/src/Assets/logo/BuzzBuy.png")} />
          </Box>
          <Box>
            <Text> Cart  {" > "} Information {" > "} Shipping {" > "} Payment </Text> 
          </Box>
          <Box>
            <Text>Express Checkout</Text>
            <Flex>
                <Box>
                    {/* <Image src= /> */}
                </Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </Flex>
          </Box>
        <Box  display={"flex"} justifyContent={"space-between"} alignItems={"center"} alignContent={"center"}  >
        <Heading   as="h4" size="sm" fontWeight={"400"}   >Contact Information</Heading>
        <Box cursor={"pointer"} onClick={()=> navigate('/signup')}>

        <Text fontSize={"10px"}  mt="5px">
            
        <Highlight  query='Log in' styles={{ px: '1', py: '1', color:"green.300" }}>
        Already have an account?Log in 
</Highlight>
           </Text>
        </Box>
        </Box>
        <Box>

        <Input placeholder='Email' focusBorderColor='green.300' mt="10px" />
        <Checkbox fontSize={"10px"} mt="5px" defaultChecked>Email me with news and offers</Checkbox>
        </Box>
        <Box mt="50px"  >
            <Text  >Shipping address</Text>
            <Select  placeholder='country/region'  focusBorderColor='green.300'  >Country/region

            <option value="india"  focusBorderColor='green.300' >India</option>
            <option value="usa"  focusBorderColor='green.300' >USA</option>
            <option value="uk"  focusBorderColor='green.300' >UK</option>
            </Select>
            <Flex justifyContent={"space-between"} mt="10px" >
                <Box w="49%">
                <Input placeholder='First Name' focusBorderColor='green.300' />
                </Box>
                <Box w="49%" >
                <Input placeholder='Last Name' focusBorderColor='green.300' />
                </Box>
            </Flex>
            <Input placeholder='Address' focusBorderColor='green.300'  mt="10px"  />
            <Input placeholder='Apartment,suite,etc.(optional)' focusBorderColor='green.300'  mt="10px"  />
            <Flex justifyContent={"space-between"}  mt="10px" >
                <Box w="33%">
                <Input placeholder="City" focusBorderColor='green.300' />
                </Box>
                <Box w="33%" >
                <Input placeholder="Province" focusBorderColor='green.300' />
                </Box>
                <Box>
                <Input placeholder="Postal Code" focusBorderColor='green.300' />
                </Box>


            </Flex>

            <Input placeholder='Phone' focusBorderColor='green.300'  mt="10px"  />

            <Checkbox  mt="10px"  fontSize={"10px"} defaultChecked>Text me with news and offers</Checkbox>

        </Box>
        <Flex justifyContent={"space-between"} mt="20px">

         <Text color= "green.300" >{"<"} Return to Cart</Text>
        <Button p="30px" color="white" bg="green.300" >Continue to shipping</Button>
        </Flex>
        </Box>

        </Box>
        <Footer/>
    </div>
  )
}

export default Payment