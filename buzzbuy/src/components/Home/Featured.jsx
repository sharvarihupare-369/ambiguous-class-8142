import { Grid, GridItem , Box ,Image, Heading } from "@chakra-ui/react";

function Featured() {
  return (
    <>
    <Heading as="h4" size="md" textAlign={"center"} color="gray.600" mt="50px" fontWeight="300" textTransform={"Uppercase"} >Featured Categories</Heading>
    <Box mb="250px" width="90%" ml="80px" p="10px" mt="30px">
      <Grid templateColumns="repeat(6, 1fr)" gap={10}>
        <GridItem w="100%" h="10" > 
        <Image src='https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_3_1600x.webp?v=1652917417' alt='audio' />
        </GridItem>
        <GridItem w="100%" h="10"  >
            <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_15_1600x.webp?v=1652917776"  alt="descarga"/>
        </GridItem>
        <GridItem w="100%" h="10" > 
         <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_5_1600x.webp?v=1652917431" />
        </GridItem>
        <GridItem w="100%" h="10"> 
         <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_6_1600x.webp?v=1652917439" />
        </GridItem>
        <GridItem w="100%" h="10"> 
         <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_7_1600x.webp?v=1652917449" />
        </GridItem>
        <GridItem w="100%" h="10"> 
         <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_8_1600x.webp?v=1652917479" />
        </GridItem>
       
      </Grid>
    </Box>
    <Box mb="250px" width="90%" ml="80px" p="10px" mt="20px">
      <Grid templateColumns="repeat(6, 1fr)" gap={10}>
        <GridItem w="100%" h="10" > 
        <Image src='https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_9_1600x.webp?v=1652917507' alt='pillow' />
        </GridItem>
        <GridItem w="100%" h="10"  >
            <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_10_1600x.webp?v=1652917518"  alt="skincare"/>
        </GridItem>
        <GridItem w="100%" h="10" > 
         <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/led_1600x.png?v=1661534692" />
        </GridItem>
        <GridItem w="100%" h="10"> 
         <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_12_1600x.webp?v=1652917527" />
        </GridItem>
        <GridItem w="100%" h="10"> 
         <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_13_1600x.webp?v=1652917545" />
        </GridItem>
        <GridItem w="100%" h="10"> 
         <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_14_1600x.webp?v=1652917554" />
        </GridItem>
       
      </Grid>
    </Box>
    </>
  );
}

export default Featured;
