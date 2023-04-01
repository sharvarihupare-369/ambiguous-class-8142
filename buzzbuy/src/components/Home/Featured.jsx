import { Grid, GridItem , Box ,Image, Heading ,Text} from "@chakra-ui/react";

function Featured() {
  return (
    <>
    <Heading as="h4" size="md" textAlign={"center"} color="gray.600" mt="50px" fontWeight="300" textTransform={"Uppercase"} >Featured Categories</Heading>
    <Box mb="250px" width="90%" ml="80px" p="15px" mt="30px">
      <Grid templateColumns="repeat(6, 1fr)" gap={10}>
        <GridItem w="100%" h="10" > 
        <Image src='https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_3_1600x.webp?v=1652917417' alt='audio' />
        <Text textAlign={"center"} mt="15px" color={"gray.600"} >Audio</Text>
        </GridItem>
        <GridItem w="100%" h="10"  >
            <Image  src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_15_1600x.webp?v=1652917776"  alt="descarga"/>
            <Text  textAlign={"center"} mt="15px" color={"gray.600"}  >Massage Chairs</Text>
        </GridItem>
        <GridItem w="100%" h="10" > 
         <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_5_1600x.webp?v=1652917431" />
         <Text  textAlign={"center"} mt="15px" color={"gray.600"}  >Foot & Leg Massage</Text>
        </GridItem>
        <GridItem w="100%" h="10"> 
         <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_6_1600x.webp?v=1652917439" />
         <Text  textAlign={"center"} mt="15px" color={"gray.600"}  >Neck & Back Massage</Text>
        </GridItem>
        <GridItem w="100%" h="10"> 
         <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_7_1600x.webp?v=1652917449" />
         <Text  textAlign={"center"} mt="15px" color={"gray.600"}  >Wine & Bar</Text>
        </GridItem>
        <GridItem w="100%" h="10"> 
         <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_8_1600x.webp?v=1652917479" />
         <Text  textAlign={"center"} mt="15px" color={"gray.600"}  >Lightening</Text>
        </GridItem>
       
      </Grid>
    </Box>
    <Box mb="250px" width="90%" ml="80px" p="15px" mt="20px">
      <Grid templateColumns="repeat(6, 1fr)" gap={10}>
        <GridItem w="100%" h="10" > 
        <Image src='https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_9_1600x.webp?v=1652917507' alt='pillow' />
        <Text  textAlign={"center"} mt="15px" color={"gray.600"}  > Pillows </Text>
        </GridItem>
        <GridItem w="100%" h="10"  >
            <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_10_1600x.webp?v=1652917518"  alt="skincare"/>
            <Text  textAlign={"center"} mt="15px" color={"gray.600"}  > Skincare</Text>
        </GridItem>
        <GridItem w="100%" h="10" > 
         <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/led_1600x.png?v=1661534692" />
         <Text  textAlign={"center"} mt="15px" color={"gray.600"} >LED Light Therapy</Text>
        </GridItem>
        <GridItem w="100%" h="10"> 
         <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_12_1600x.webp?v=1652917527" />
         <Text  textAlign={"center"} mt="15px" color={"gray.600"}  >Technology</Text>
        </GridItem>
        <GridItem w="100%" h="10"> 
         <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_13_1600x.webp?v=1652917545" />
         <Text  textAlign={"center"} mt="15px" color={"gray.600"}  >Kitchen</Text>
        </GridItem>
        <GridItem w="100%" h="10"> 
         <Image src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/descarga_14_1600x.webp?v=1652917554" />
         <Text  textAlign={"center"} mt="15px" color={"gray.600"}  >Outdoor</Text>
        </GridItem>
       
      </Grid>
     
    </Box>
    <Box w="90%" m="auto" p="10px" mt="120px" mb="70px">
        <Image w="100%" src="https://cdn.shopify.com/s/files/1/0262/2226/4423/files/DT_Banner_1f221451-d6eb-474e-bdd7-c741539a4a70_1600x.jpg?v=1659733245" />
      </Box>
    </>
  );
}

export default Featured;
