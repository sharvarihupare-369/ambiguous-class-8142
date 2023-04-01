import React from "react";
import {
  Grid,
  GridItem,
  Card,
  Box,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Select,
  Checkbox,
  CheckboxGroup,
  VStack,
  Flex,
} from "@chakra-ui/react";

function ProductCard({ data, page, setPage, totalcount, totalpages }) {
  // console.log(totalcount)

  return (
    <>
      <Box w="10%" ml="1250px" mt="50px" mb="30px">
        <Select placeholder="Featured">
          <option value="option3">Lowest Price</option>
          <option value="option4">Highest Price</option>
          <option value="option5">Alphabetical: A-Z</option>
          <option value="option6">Alphabetical: Z-A</option>
        </Select>
      </Box>
      <Box
        w="85%"
        m="auto"
        display={"flex"}
        /* border="1px solid black" */ p="10px"
      >
        <Box w="30%" /* border="1px solid red" */>
          <Box mt="20px" ml="20px" p="5px">
            <Text>Price</Text>
            <Stack spacing={5} direction="row">
              <VStack>
                <Checkbox>$50 - $100</Checkbox>
                <Checkbox>$100 - $150</Checkbox>
                <Checkbox>$150 - $200</Checkbox>
                <Checkbox>$200 - $250</Checkbox>
                <Checkbox>$250 - $300</Checkbox>
                <Checkbox>$300 - $500</Checkbox>
                <Checkbox>$500 & Above</Checkbox>
              </VStack>
            </Stack>
          </Box>
        </Box>

        <Grid
          // border={"1px solid black"}
          templateColumns="repeat(3, 1fr)"
          gap={6}
        >
          {data.map((product) => {
            return (
              <GridItem p="10px" w="100%">
                {/* <Box> */}

                <Card maxW="sm" boxShadow="lg" p="6" rounded="md" bg="white">
                  <CardBody h="600px">
                    <Image
                      w="100%"
                      h="200px"
                      src={product.image}
                      alt={product.title}
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="sm">{product.title}</Heading>
                      {/* <Text>{product.description}</Text> */}
                      <Text color="blackAlpha.700" fontSize="md">
                        ${product.price}
                      </Text>
                      {/* <Text fontSize={"sm"} >{product.desc}</Text> */}
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button variant="solid" colorScheme="blue">
                        Buy now
                      </Button>
                      <Button
                        bg="#388E3C"
                        color="white"
                        fontSize="15px"
                        variant="ghost"
                      >
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
                {/* </Box> */}
              </GridItem>
            );
          })}
        </Grid>
      </Box>

     <Box>

      <Flex justifyContent={"space-between"} w="30%" m="auto" >
        <Button disabled={page == 1} onClick={() => setPage(page-1)} >Prev</Button>
        {new Array(totalpages).fill(0).map((el, i) => {
          return (
            <Button  key={i + 1} onClick={() => setPage(i + 1)}>
              {i + 1}
            </Button>
          );
        })}
        <Button disabled={page == totalpages} onClick={() => setPage(page+1)}>Next</Button>
      </Flex>
        </Box>
    </>
  );
}

export default ProductCard; 
