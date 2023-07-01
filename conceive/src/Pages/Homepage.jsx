import React from 'react'
import conceiveimg from "../Images/subhg.jpeg"
import {Box,Text,Image, Button} from "@chakra-ui/react"
export default function Homepage() {
  return (
    <div>
<Box  >
  <Image filter="brightness(0.5)" opacity={0.8} height={["70vh","70vh","80vh","90vh","100vh"]} width={"100%"} src={conceiveimg}/>
  <Box marginLeft={["20px","20px","20px","60px","80px"]} position={"absolute"} top={[120,50,100,100,250]} ><Text textAlign={"left"} color="#40c7b9" fontSize={["30px","30px","54px","54px","54px"]} lineHeight={"70px"} fontFamily={"inter"} fontWeight={600} >DO IT YOURSELF</Text>
  <Text textAlign={"left"} color="white" fontSize={["30px","30px","30px","30px","35px"]} lineHeight={"46x"} fontFamily={"inter"} fontWeight={600} >HOME INSEMINATION KIT</Text>
  <Text  textAlign={"left"} color="white" fontSize={["16px","16px","16px","16px","18px"]} lineHeight={"27px"} fontFamily={"inter"} mt="20px" fontWeight={700} >100% SAFE || 100 % NATURAL</Text>
  <Button marginRight={"100%"} mt="30px" color="white" bg="#0783FF" >1499/- INR ONLY</Button></Box>
</Box>
    </div>
  )
}
