import React from 'react'
import conceiveimg from "../Images/subhg.jpeg"
import {Box,Text,Image, Button, Avatar} from "@chakra-ui/react"
import { CheckCircleIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import YouTube from 'react-youtube';
import styles from "../Pages/Homepage.module.css"
import {
  Flex,

  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,

  Heading,

  useColorModeValue,
} from '@chakra-ui/react';
import Reviews from './Reviews';
import Rating from './Rating'
import Ratingrender from './Ratingrender'
let initaldata=[{
  "name":"sonu",
  "rating":4,
  "description":"The plastic cup will hold most injected fluid , preventing it from entering uterus. You can try but inject 10 ml distilled water to push out fluid from the cup .also suggest women partner lying with pillow below waist area "

},
{
  "name":"R Rupa",
  "rating":5,
  "description":"The IUI team guided superb with hygienic.conversation with team n couple is gud.especially thanks to Mrs Johnson sir,veena mam coz convinced the couple cared lot to do the procedure n also gud response. "

},
{
  "name":"dipali",
  "rating":5,
  "description":"V conceive brought new hope to us.. we used it twice and got the good newsup size and quality is superb, very convenient to use, easy to disposely recommended to people facing issues with conceive.."
},
{
  "name":"hemant.h",
  "rating":4.5,
  "description":"This KIT I ordered it for my Relative, They said that, this is the first thing what i was searching and i got it in Amazon. Amazing things in Amazon. I also bought with this V conceive Home Insemination Kit is I know Ovulation Kit that helped my relatives to find their ovulation time. I thought i should give review on the behalf of my relatives. "

}





]

const frequentlyaskedquestions=[{
  q:"How Long Does Shipping Take to reach to me?",
  ans:"You will received the parcel between 5-10 days around the globe. In some country It will take 10-15 Days. For Shipping Query can reach out to us at care@vconceive.com"
},
{
  q:"Is it the same size for all bodies built?",
  ans:"Yes ( but differs if you have been pregnant once )"
},
{
  q:"When Will My Order Ship?",
  ans:"Orders are usually processed and shipped within 3 working days of purchase. But In most cases we have a record of same day dispatch."
},
{
  q:"How Do I Cancel An Order?",
  ans:"We are only able to cancel orders within the first 12 hours after the order is placed. After that the order has most likely been processed and is preparing for shipment or has been shipped. Once this takes effect, it's out of our hands. We apologize for any inconvenience this may cause, but we pride ourselves on prompt service and this includes getting your orders out as fast as possible."
},
{
  q:"What Is Your Return Policy?",
  ans:"If there’s something wrong with your order (defective product, incorrect order, damaged order etc.), please contact us within 3 days from receiving your order and we’ll be happy to assist you reviewing the case and if it is approved we will be sending a replacement. Please do not return anything before we review the case, our customer service team will review the request and will send further instructions. V Conceive reserves the right to deny any return request. Customers will only be charged once for shipping costs (this includes returns), no-restocking to be charged to the consumers for the return of the product."
},
{
  q:"How Long Does Shipping Take to reach to me?",
  ans:"We accept Paypal, Credit Card (Visa, MasterCard, Discover, and American Express), Debit Card."
},
{
  q:"Need additional help?",
  ans:"You can contact us here. care@vconceive.com or you can also reach out to our whatsapp support, where team is available for Support Chat! https://chatwith.io/s/v-conceive"
},
{
  q:"How Long Does Shipping Take?",
  ans:"Shipping times vary as we do ship worldwide from different fulfillment centers based on your location. Average shipping time is about 7 to 20 working days. Your tracking number will be updated 3-7 days after your order has been shipped."
},
{
  q:"How Long Does Shipping Take to reach to me?",
  ans:"You will received the parcel between 5-10 days around the globe. In some country It will take 10-15 Days. For Shipping Query can reach out to us at care@vconceive.com"
},
{
  q:"Can I get a replacement if I order a different size product?",
  ans:"Not required, as it comes in one size"
},
{
  q:"What should I do if I get white discharge after inserting the cup?",
  ans:"White discharge will not interfere with the process of insemination unless you feel uncomfortable."
},
{
  q:"How many have been successful with V Conceive(from last six months of launch)?",
  ans:"We have more than 220 success stories which is known to us. Due to stigma and privacy we do not hear some success story. If you wish to share your’s on our site we will provide you free counselling and one cycle of insemination for free! Please send an email to success@subhag.in"
}







]
export default function Homepage() {
  const [rating, setRating] = useState(0);
const [reviewdata,setReviewdata]=useState(initaldata)

  const handleRatingclick = (value) => {
    setRating(value);}
  return (
    <div>
<Box  >
  <Image filter="brightness(0.5)" opacity={0.8} height={["70vh","70vh","80vh","90vh","100vh"]} width={"100%"} src={conceiveimg}/>
  <Box  marginLeft={["20px","50px","50px","60px","80px"]} position={"absolute"} top={[120,150,200,200,250]} >
    <Text color="#40c7b9" fontSize={["30px","30px","54px","54px","54px"]} lineHeight={"70px"} fontFamily={"inter"} fontWeight={600} textAlign={"left"}>DO IT YOURSELF</Text>
 <Text textAlign={"left"} color="white" fontSize={["30px","30px","30px","30px","35px"]} lineHeight={"46x"} fontFamily={"inter"} fontWeight={600} >HOME INSEMINATION KIT</Text>
  <Text  textAlign={"left"} color="white" fontSize={["16px","16px","16px","16px","18px"]} lineHeight={"27px"} fontFamily={"inter"} mt="15px" fontWeight={700} >100% SAFE || 100 % NATURAL</Text>
  <Button position={"absolute"} left= {0} mt="30px" color="white" bg="#0783FF" >1499/- INR ONLY</Button> 
  </Box>
</Box>
<Box   bg={["#56627A","#007cf9","#007cf9","#007cf9","#007cf9"] }>
<Box w="80%" margin={"auto"}><Text  color="#191e2a" textAlign={"left"} fontSize={["30px","30px","40px","50px","54px"]} fontheight="70px" fontWeight={600} pt="100px">Unlock Your Path to Parenthood:</Text>
<Text  color="#191e2a" textAlign={"left"} fontSize={["30px","30px","40px","50px","54px"]} fontheight="70px" fontWeight={600} mt="10px">Introducing V Conceive Home Insemination Kit</Text>
<Box w={["100%","100%","50%","50%","50%"]} marginLeft={["0%","0%","50%","50%","50%"]} ><Text  color="white" textAlign={"left"} fontSize={["30px","30px","40px","50px","54px"]} fontheight="70px" fontWeight={600} mt="10px">Patented and Trusted by Leading IVF Clinics!</Text></Box>
<Box mt="20px" display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)"]} gap="10px">
<Image w={["100%","100%","100%","90%","90%"]} borderRadius={"20px"} src="https://assets.lightfunnels.com/cdn-cgi/image/width=3840,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/daf160d1-2053-4ec6-a2fc-f2918805b7e6.WhatsApp%20Image%202022-06-15%20at%207.00.03%20PM%20(6).jpeg"/>
<Box paddingBottom={"100px"} > 
  <Image mt="20px" src="https://assets.lightfunnels.com/cdn-cgi/image/width=1200,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/c9164df1-e03b-4e78-a48c-45c6d2a593d2.8.png"/>
<Text fontSize={"16px" } mt="20px" fontheight="24px" fontWeight={600} color="white" textAlign={"left"}>
  
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
<Box  display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)"]} gap="20px" width={"80%"} margin="auto">
<Box >
<Text  color="#101313" fontSize={["20px","30px","54px","54px","54px"]} lineHeight={["26px","30px","40px","60px","70px"]} fontFamily={"inter"} fontWeight={600} textAlign={["","","center","center","center"]} mt={["50px","50px","100px","200px","200px"]}>Increase chances of Pregnancy by 18 X</Text>
</Box>
<Box>
<Flex
      minH={'100vh'}
      align={'center'}
      width="100%"
    border={[`2px solid #40C7B9`,`2px solid #40C7B9`,"1px solid white","1px solid white","1px solid white"]}
      justify={'center'}
      bg="white">
      <Stack spacing={8} mx={'auto'} w="100%" py={12} px={6}>
        <Stack align={'center'}>
          <Text fontSize="25px" fontheight="33px" fontWeight={600}>Sign Up for a free consultation</Text>
          <Text fontSize={'lg'} color={'gray.600'}>
          
          </Text>
        </Stack>
        <Box
         w="100%"
          rounded={'lg'}
          bg="white"
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <FormControl id="name">
              <FormLabel color="black">Full Name</FormLabel>
              <Input type="text" required />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email Id</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone Number</FormLabel>
              <Input type="text"  required />
            </FormControl>
            <FormControl id="gender">
              <FormLabel>Gender</FormLabel>
              <Input type="text"  required />
            </FormControl>
            <Stack spacing={10}>
             
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
              Free Consultation
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
</Box>
</Box>
<Box w="80%" margin={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"} mt="50px"> 
  <Box >
    <Text fontSize={["20px","20px","25px","30px","38px"]} fontheight={["26px","26px","45px","49px","49px"]} color="#40c7b9" textDecorationLine={"underline"} fontWeight={700}>When should you go for IUI ?</Text>
    <Box display={"flex"} justifyContent={"center"} mt="10px" alignItems={"center"} className={styles["video-container"]} >
<YouTube   videoId={"BQ6MTym9uMQ"}  /></Box></Box>
</Box>
<Box w="80%" margin={"auto"} mt="100px" display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)"]}>
<Box height={"400px"}><Image  height={"400px"} w="100%" src="https://assets.lightfunnels.com/cdn-cgi/image/width=3840,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/96f63437-3805-4c05-ba0e-073767f2bf3c.WhatsApp%20Image%202022-06-15%20at%207.00.04%20PM%20(3).jpeg"/>

</Box>
<Box><Button mt={["50px","50px","200px","200px","200px"]} bg="#40c7b9" _hover={{bg:"#007CF9"}} color={"white"}>Order Now</Button></Box>
<Box>
  <Text fontWeight={600}  mt={["50px","50px","100px","100px","100px"]} fontSize={["20px","20px","25px","30px","35px"]} fontheight={["26px","26px","20px","30px","46px"]} textAlign={"center"} color="#40c7b9">18 times more chances to get pregnant than any other ART (Artificial Reproductive Technic)</Text>
</Box>

</Box>
<Box bg="#F4F5F7"  mt={["50px","50px","100px","100px","100px"]}  >
  <Box   w="80%" bg="#e5f1ff" margin={"auto"} >
  <Box w="80%" margin={"auto"}   display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)"]} gap="20px" >
<Box mt="30px" >
<Text  fontSize={["20px","20px","25px","30px","34px"]} fontheight={["26px","26px","45px","44px","44px"]} color="#40c7b9"  fontWeight={700}>How to use V Conceive</Text>
<Box display={"flex"} justifyContent={"center"} mt="10px" alignItems={"center"} className={styles["video-container"]} >

<YouTube videoId={"_MNc5VYGj3w"}  /></Box></Box>
<Box mt="30px" pb="10px" >
<Text  fontSize={["20px","20px","25px","30px","34px"]} fontheight={["26px","26px","45px","44px","44px"]}  color="#40c7b9"  fontWeight={700}>जानिए कैसे उपयोग करना है</Text>
<Box display={"flex"} justifyContent={"center"} mt="10px" alignItems={"center"} className={styles["video-container"]} >

<YouTube videoId={"_MNc5VYGj3w"}  /></Box></Box></Box>
</Box></Box>

<Text fontWeight={700}  mt={["50px","50px","100px","100px","100px"]} fontSize={["20px","26px","30px","44px","54px"]} fontheight={["25px","36px","50px","70px","74px"]} textAlign={"center"} color="#40c7b9">V Conceive Benefits</Text>
<Box w="80%" margin="auto">
<Box display={["block","block","flex","flex","flex"]}  >
  <Box w={["100%","100%","50%","50%" ,"30%"]} mt="10px">
<Image borderRadius={"50%"} w="100%" src="https://assets.lightfunnels.com/cdn-cgi/image/width=1200,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/62423140-e340-11ec-99bf-cf0f7d3ce8ea.png"/>
</Box>
<Box   w={["100%","100%","80%","80%" ,"80%"]}>
<Text color="rgb(87, 99, 122)" textAlign={"left"} mt={["0px","0px","80px","80px" ,"80px"]} fontSize={"16px"} fontheight="26px" fontWeight={600}>Due to low motile sperms, they cannot travel fast the long distance from vagina to uterus and they die before they can reach egg, V conceive acts like a fast bullet train and direct deposit the sperms to cervix hole which is only 3-5 mm away from uterus, this solves the problem of low motility and low sperm count
</Text>

</Box>

</Box>
</Box>
<Box w="80%" bg="#e5f1ff" margin="auto" mt="10px">
<Box display={["block","block","flex","flex","flex"]}  >
  <Box w={["100%","100%","50%","50%" ,"30%"]} mt="10px" >
<Image  borderRadius={"50%"} w="100%" src="https://assets.lightfunnels.com/cdn-cgi/image/width=1200,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/a1368680-e340-11ec-99bf-cf0f7d3ce8ea.png"/>
</Box>
<Box   w={["100%","100%","80%","80%" ,"80%"]}>
<Text color="rgb(87, 99, 122)" textAlign={"left"} mt={["0px","0px","80px","80px" ,"80px"]} fontSize={"16px"} fontheight="26px" fontWeight={600}>
The V conceive cup to protect your sperms from the vaginal fluid which can sometimes kill the sperms, In natural intercourse sperms are directly exposed to vaginal fluid but here they are 100% protected
</Text>

</Box>

</Box>
</Box>
<Box w="80%" margin="auto">
<Box display={["block","block","flex","flex","flex"]}  >
  <Box w={["100%","100%","50%","50%" ,"30%"]} mt="10px">
<Image borderRadius={"50%"} w="100%" src="https://assets.lightfunnels.com/cdn-cgi/image/width=1200,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/eaba6920-e340-11ec-8514-756372f91417.png"/>
</Box>
<Box   w={["100%","100%","80%","80%" ,"80%"]}>
<Text color="rgb(87, 99, 122)" textAlign={"left"} mt={["0px","0px","80px","80px" ,"80px"]} fontSize={"16px"} fontheight="26px" fontWeight={600}>In natural intercourse after ejaculation of sperms, they may get splashed all over the vaginal wall, and lose the way to the cervix hole. In V conceive no backflow is possible and sperms are forced to go upward and direct to the uterus where the egg is waiting for fertilization.
</Text>

</Box>

</Box>
</Box>
<Box w="80%" bg="#e5f1ff" margin="auto" mt="10px">
<Box display={["block","block","flex","flex","flex"]}  >
  <Box w={["100%","100%","50%","50%" ,"30%"]} mt="10px" >
<Image  borderRadius={"50%"} w="100%" src="https://assets.lightfunnels.com/cdn-cgi/image/width=1200,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/43e9fbf0-e341-11ec-99bf-cf0f7d3ce8ea.png"/>
</Box>
<Box   w={["100%","100%","80%","80%" ,"80%"]}>
<Text color="rgb(87, 99, 122)" textAlign={"left"} mt={["0px","0px","80px","80px" ,"80px"]} fontSize={"16px"} fontheight="26px" fontWeight={600}>
The cervix hole which is 1-2 mm in size is a gate between the Vagina and uterus that gets open only on the day of ovulation. V conceive uses the success pressure created by uterus to suck up all sperms from the cup inside uterus and increase the chance of conception.
</Text>

</Box>

</Box>
</Box>
{/* video */}
<Box w="50%" margin={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"} mt="50px"> 
  
   
    <Box display={"flex"} justifyContent={"center"} mt="10px" alignItems={"center"} className={styles["video-container2"]} >
<YouTube   videoId={"EOVJVsoljKs"}  /></Box></Box>
<Box w="80%" margin="auto"><Text  textAlign={"center"} mt={["0px","0px","80px","80px" ,"80px"]} fontSize={["16px","20px","30px","40px","54px"]} fontheight={["26px","35px","50px","60px","70px"]}  fontWeight={600}>
Embark on the Journey of Parenthood: Get Pregnant in Just 3 Steps!
</Text></Box>
<Box w="80%" margin={"auto"}  mt="50px"   display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)"]} gap="20px" >
  <Box >
    <Image  w="100%" src="https://assets.lightfunnels.com/cdn-cgi/image/width=1200,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/ec06f1a0-ba54-11ec-82fd-3be10b2fe244.png"/>
<Text fontSize={"18px"} fontheight="21px" fontWeight={500} color="rgb(25, 30, 42)">Insert</Text>
<Text mt="10px" fontSize={"16px"} fontheight="27px" fontWeight={400} color="rgb(87, 99, 122)">Insert the folded V Conceive into the Vagina</Text>
  </Box>
  <Box >
    <Image  w="100%" src="https://assets.lightfunnels.com/cdn-cgi/image/width=1200,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/06a47370-ba55-11ec-82fd-3be10b2fe244.png"/>
<Text fontSize={"18px"} fontheight="21px" fontWeight={500} color="rgb(25, 30, 42)">Inseminate</Text>
<Text mt="10px" fontSize={"16px"} fontheight="27px" fontWeight={400} color="rgb(87, 99, 122)">Push Collected Semen using syringe into V Conceive</Text>
  </Box>
  <Box >
    <Image  w="100%" src="https://assets.lightfunnels.com/cdn-cgi/image/width=1200,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/71b904a0-ba55-11ec-82fd-3be10b2fe244.png"/>
<Text fontSize={"18px"} fontheight="21px" fontWeight={500} color="rgb(25, 30, 42)">Rest for 2 hours</Text>
<Text mt="10px" fontSize={"16px"} fontheight="27px" fontWeight={400} color="rgb(87, 99, 122)">Sleep in the same position and take rest with dream of Baby.</Text>
  </Box>
  </Box>  
{/* review */}

<Reviews/>

{/* reviews box */}
<Box w="80%" margin={"auto"}  display="grid" gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(3,1fr)"]} gap="20px">

{initaldata.length>=1&&initaldata.map((el,index)=>
  <Box bg="#f4f5f7" borderRadius={"10px"} >
    
<Box w="80%" margin="auto" mt="20px" display={"flex"} justifyContent={"space-between"} >
  <Box ><Text fontSize={"18px"} lineHeight={"23px"} fontWeight={600} color="#191e2a">{el.name}</Text></Box>
  <Box border="1px solid gray" borderRadius={"20px"} w="40%" h="30px" display={"flex"} justifyContent={"center"} alignItems={"center"} ><Ratingrender rating={el.rating}/></Box>
</Box>
<Box w={"80%"} margin={"auto"} textAlign={"left"} pb="30px" mt="20px" >
<Text  fontSize={"16px"} lineHeight={"26px"} fontWeight={400} fontStyle={"italic"} color="#191e2a" >{el.description}</Text>
</Box>
</Box>

)
}



</Box>
{/* <video>>>>>>>>>>>>>>>>>>>>></video> */}
<Box w="50%" margin={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"} mt="50px"> 
  
   
    <Box display={"flex"} justifyContent={"center"} mt="10px" alignItems={"center"} className={styles["video-container2"]} >
<YouTube   videoId={"I0c_mVUDpcM"}  /></Box></Box>

{/* frequently asked questions */}
<Box w='80%' margin="auto" ><Text textAlign={"center"} fontSize={["20px","30px","40px","45px","54px"]} fontWeight={600} lineHeight={"70px" } mt="50px" color="#191e2a">Frequently asked questions</Text></Box>

<Box w="80%" margin="auto" mt="50px" display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)"]} gap="20px">
  {frequentlyaskedquestions.length>=1&&frequentlyaskedquestions.map((question,index)=>
  <Box>
    <Text textAlign={"left"} fontSize={"18px"} lineHeight={"23px"} fontWeight={500} color="#191e2a">{question.q}</Text>
<Text textAlign={"left"} fontSize={"16px"} lineHeight={"27px"} fontWeight={400} color="#3d4047" fontFamily={"inter-500"}>{question.ans}</Text>    </Box>)}

</Box>
<Box bg="#f4f5f7" mt="30px" >
  <Text textAlign={"center"} fontSize={["20px","30px","35px","45px","54px"]} lineHeight={"70px"} fontWeight={600} fontFamily={"inter"} >As Featured In</Text>
<Box w="80%"  margin="auto" pb="40px" display="grid" gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(6,1fr)","repeat(6,1fr)","repeat(6,1fr)",]} gap="30px" mt="30px">
<Box mt={["0px","0px","40px","40px","40px"]}  display={"flex"} justifyContent={"center"} alignItems={"center"}><Image src=" https://assets.lightfunnels.com/cdn-cgi/image/width=3840,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/daf49aee-4255-4d23-863d-279385a2e53d.v%20conceive%20story%20publish%20in%20your%20story.png"/></Box>
<Box mt={["0px","0px","40px","40px","40px"]}   display={"flex"} justifyContent={"center"} alignItems={"center"}><Image src="https://assets.lightfunnels.com/cdn-cgi/image/width=3840,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/32af61c4-29ce-4bd3-89ac-deef0d594f72.v%20conceive%20story%20publish%20in%20yahoo%20finance.png"/></Box>
<Box  display={"flex"} justifyContent={"center"} alignItems={"center"}><Image src="https://assets.lightfunnels.com/cdn-cgi/image/width=750,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/167a040a-eb04-4ca8-88ef-2412d6eb371e.png"/></Box>
<Box mt={["0px","0px","40px","40px","40px"]}   display={"flex"} justifyContent={"center"} alignItems={"center"}><Image src="https://assets.lightfunnels.com/cdn-cgi/image/width=3840,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/19eb69a3-4ad4-480c-9267-ff950dab359c.v%20conceive%20incubated%20in%20Soical%20Alpha.png"/></Box>
<Box mt={["0px","0px","40px","40px","40px"]}   display={"flex"} justifyContent={"center"} alignItems={"center"}><Image src="https://assets.lightfunnels.com/cdn-cgi/image/width=750,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/b3fb4c88-9267-4dcb-ad25-02693d1c79e4.4.png"/></Box>
<Box mt={["0px","0px","40px","40px","40px"]}   display={"flex"} justifyContent={"center"} alignItems={"center"}><Image src="https://assets.lightfunnels.com/cdn-cgi/image/width=3840,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/c6f8bc83-6654-4001-b8b0-a6a49973cdaf.v%20conceive%20story%20publish%20in%20navbharat%20times.png"/></Box>

</Box>

</Box>
<Box bg="#fef8ec"  >
  <Text textAlign={"center"} fontSize={["20px","30px","35px","45px","54px"]} lineHeight={"70px"} fontWeight={600} fontFamily={"inter"} pt="20px" >Certification</Text>
<Box pb="30px"  mt="30px">
<Box  display={"flex"} justifyContent={"center"} alignItems={"center"}><Image src="https://assets.lightfunnels.com/cdn-cgi/image/width=750,quality=80,format=auto/https://assets.lightfunnels.com/account-474/images_library/806c3e7a-2280-45d6-b3fd-7e4573d64903.MTIC_INTERCERT_ALTA_DEFINIZIONE.png"/></Box>



</Box>

</Box>


</div>


  

    
  )
}
