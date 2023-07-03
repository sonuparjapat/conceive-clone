import { ReactNode } from 'react';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Avatar,
  HStack,

  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image
} from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input

  
  } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';


const Links = ['Ovulation Calculator', 'Research Data', 'Certification'];
const navbarfont={
    fontFamily:"Inter",
    "color":"rgb(25, 30, 42)",
    "fontWeight":400,
    "fontSize":"16px",
    "lineHeight":"18px"
 
   
}
const commoncolor={
    "one":"#007cf9"
}
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
const location=useLocation()
const navigate=useNavigate()
  const btnRef = React.useRef()
  return (
    <>
      <Box border="1px solid red" zIndex={"overlay"} position="sticky" top={0}  bg="white" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} w="90%" margin="auto">
          
          <HStack spacing={8} alignItems={'center'}>
            <Link to="/"><Box><Image w="100%" height="40px" src="https://assets.lightfunnels.com/account-474/images_library/7357b2f2-7dc6-40a5-9119-09c54da9c4fd.v%20conceive%20home%20insemination%20kit.svg"/></Box>
            </Link>
          </HStack>
          <Flex alignItems={'center'}>
          <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
              <Link   key={link } to={`${link}`} >  <Box  _hover={{textDecoration:"underline",color:"red"}} textDecoration={location.pathname==`/${link}`?"underline":"none"} style={navbarfont} >{link}</Box></Link>
              ))}  <Button
              variant={'solid'}
             bg={commoncolor.one}
              fontFamily={navbarfont.fontFamily}
         fontSize={navbarfont.fontSize}
         fontWeight={navbarfont.fontWeight}
         color={"white"}
              mr={4}
              >
             Buy now
            </Button>

            </HStack>
          
           <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            ref={btnRef} colorScheme='teal' 
          />
          </Flex>
        </Flex>

        {isOpen ?  <Drawer
     
          isOpen={isOpen}
          size="50%"
          placement='right'
          onClose={onClose}
 
        >
          <DrawerOverlay />
          <DrawerContent  maxW="60%"
          w="auto">
            <DrawerCloseButton />
           <DrawerBody  > <Box display="grid" gridTemplateColumns="repeat(1,1fr)" gap="30px" mt="50px">
              {Links.map((link) => (
              <Link   key={link } to={`${link}`} >  <Box  _hover={{textDecoration:"underline",color:"red"}} textDecoration={location.pathname==`/${link}`?"underline":"none"} style={navbarfont} >{link}</Box></Link>
              ))}  <Button
              variant={'solid'}
             bg={commoncolor.one}
              fontFamily={navbarfont.fontFamily}
         fontSize={navbarfont.fontSize}
         fontWeight={navbarfont.fontWeight}
         color={"white"}
              mr={4}
              >
             Buy now
            </Button>
            </Box>
           </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
           
            </DrawerFooter>
          </DrawerContent>
        </Drawer>: null}
      </Box>

  
    </>
  );
}