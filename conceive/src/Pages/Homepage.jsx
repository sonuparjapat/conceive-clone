import React from 'react'
import conceiveimg from "../Images/subhg.jpeg"
import {Box,Text,Image, Button} from "@chakra-ui/react"
import { CheckCircleIcon } from '@chakra-ui/icons'
export default function Homepage() {
  return (
    <div>
<Box  >
  <Image filter="brightness(0.5)" opacity={0.8} height={["60vh","70vh","80vh","90vh","100vh"]} width={"100%"} src={conceiveimg}/>
  <Box marginLeft={["20px","50px","50px","60px","80px"]} position={"absolute"} top={[120,150,200,200,250]} ><Text textAlign={"left"} color="#40c7b9" fontSize={["30px","30px","54px","54px","54px"]} lineHeight={"70px"} fontFamily={"inter"} fontWeight={600} >DO IT YOURSELF</Text>
  <Text textAlign={"left"} color="white" fontSize={["30px","30px","30px","30px","35px"]} lineHeight={"46x"} fontFamily={"inter"} fontWeight={600} >HOME INSEMINATION KIT</Text>
  <Text  textAlign={"left"} color="white" fontSize={["16px","16px","16px","16px","18px"]} lineHeight={"27px"} fontFamily={"inter"} mt="20px" fontWeight={700} >100% SAFE || 100 % NATURAL</Text>
  <Button marginRight={"100%"} mt="30px" color="white" bg="#0783FF" >1499/- INR ONLY</Button></Box>
</Box>
<Box   bg={["#56627A","#007cf9","#007cf9","#007cf9","#007cf9"] }>
<Box w="80%" margin={"auto"}><Text  color="#191e2a" textAlign={"left"} fontSize={["30px","30px","40px","50px","54px"]} fontHeight="70px" fontWeight={600} pt="100px">Unlock Your Path to Parenthood:</Text>
<Text  color="#191e2a" textAlign={"left"} fontSize={["30px","30px","40px","50px","54px"]} fontHeight="70px" fontWeight={600} mt="10px">Introducing V Conceive Home Insemination Kit</Text>
<Box w={["100%","100%","50%","50%","50%"]} marginLeft={["0%","0%","50%","50%","50%"]} ><Text  color="white" textAlign={"left"} fontSize={["30px","30px","40px","50px","54px"]} fontHeight="70px" fontWeight={600} mt="10px">Patented and Trusted by Leading IVF Clinics!</Text></Box>
<Box mt="20px" display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)"]} gap="10px">
<Image w={["100%","100%","100%","90%","90%"]} borderRadius={"20px"} src="https://assets.lightfunnels.com/cdn-cgi/image/width=3840,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/daf160d1-2053-4ec6-a2fc-f2918805b7e6.WhatsApp%20Image%202022-06-15%20at%207.00.03%20PM%20(6).jpeg"/>
<Box > 
  <Image mt="20px" src="https://assets.lightfunnels.com/cdn-cgi/image/width=1200,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/c9164df1-e03b-4e78-a48c-45c6d2a593d2.8.png"/>
<Text fontSize={"16px" } mt="20px" fontHeight="24px" fontWeight={600} color="white" textAlign={"left"}>
  
<CheckCircleIcon color="white"/>  Discover the Natural Path to Parenthood<br></br>

<CheckCircleIcon color="white"/>Experience the Convenience of Parenthood with No Waiting Time at the Clinic<br></br>

<CheckCircleIcon color="white"/>"Embrace Peace of Mind on Your Parenthood Journey, Eliminating Any Concerns of Sperm Mixing!"<br></br>

<CheckCircleIcon color="white"/>"Embrace a Comfortable Path to Parenthood : Offering a Needle-Free Solution with No Painful Injections!"<br></br>

<CheckCircleIcon color="white"/>Liberate Yourself from the Burden of High IVF Costs: Offering an Affordable Solution to Help You on Your Path to Parenthood!<br></br>
</Text>
</Box>
</Box>


</Box>


</Box>
    </div>
  )
}
