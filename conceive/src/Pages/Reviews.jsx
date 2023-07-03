
import React, { useState } from 'react'
import Rating from './Rating'
import { Button,Text,Box,useColorModeValue,Stack,FormControl,FormLabel,Input,Flex,Heading,Link,Checkbox, Textarea} from '@chakra-ui/react';
import Ratingrender from './Ratingrender';
const initialdata={
    "name":"",
    "review":""
}
export default function Reviews() {
  const [initialdata,setInitialdata]=useState(false)
  const handlereview=()=>{
    setInitialdata(!initialdata)
  }
    const [rating, setRating] = useState(0);

    const handleRatingClick = (value) => {
      setRating(value);
    } 
  return (
    <div >
      <Box  display="flex" justifyContent={"center"} alignItems={"center"}>
  <Box w="100px" mt="50px" fontWeight={700} height={"40px"} borderRadius={"30px"} bg="#b2d7fd" color="blue.500"><Text textAlign={"center"}  mt="8px"> Reviews</Text></Box>  

</Box>
   <Box w="80%" margin="auto" mt="30px">
    <Text textAlign={"center"} fontSize={["20px","25px","40px","45px","54px"]} fontWeight={600} lineHeight="70px"  color="#191e2a">our customers Reviews </Text>
    <Text textAlign={"center"} fontSize={"18px"} fontWeight={400} color="#57637a" lineHeight="29px">If you used this product, share your thoughts with other couples.</Text>
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
    <Button onClick={handlereview} mt="20px" bg="white" borderRadius={"10px"} mb="10px">Write a Review</Button></Box>
    <Box   display={initialdata?"inline":"none"} >
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      mt="50px"
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} w="80%" margin="auto" py={12} px={6} >
        
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white')}
          boxShadow={'lg'}
          p={8}>
   <form>
          <Stack spacing={4}>
         
            <Box  display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)"]} gap="20px">
             
          <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder='John Doe'/>
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder='example@email.com'/>
            </FormControl></Box>
            <Rating value={rating} Click={handleRatingClick}/>
            <FormControl id="description">
              <FormLabel>How was your overall experience?</FormLabel>
              <Textarea placeholder='Enter Your Comment Here' type="text" />
            </FormControl>
            <Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)"]} gap="20px">
             
              <Button
              type="submit"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
             Submit
              </Button>
             
              <Button onClick={handlereview}>Close</Button>
            </Box>
          </Stack> </form>
        </Box>
      </Stack>
    </Flex>



    </Box>
    
    </Box>
  
  </div>
  )
}
