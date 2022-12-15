import React from 'react'
import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  VStack,
  HStack,
} from '@chakra-ui/react'

import { FaBars, FaWallet } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box zIndex={'100'} pos={'absolute'}>
        <Button
          pos='fixed'
          top='4'
          left='4'
          colorScheme='blue'
          variant="ghost"
          onClick={onOpen}
        >
          <FaBars size='25' />
        </Button>
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>mCash</DrawerHeader>
          <Box textAlign="center" colorScheme="blue">
            <Box
              h={45}
              w={45}
              bg="#a4a4d9f5"
              color="white"
              fontWeight="700"
              fontSize="25"
              borderRadius="full"
              padding={4}
              ml="auto"
              mr="auto"
              pt="1"
              pl="3"
            > A</Box>
            <p textAlign="center" ml="-10" >abhishekparmar@gmail.com</p>
          </Box>
          <VStack alignItems='flex-start' marginLeft="20" marginTop="5">

            <Button variant="ghost" colorScheme={'blue'} onClick={onClose}>
              <Link to={'/'}>Home</Link>
            </Button>
            <Button variant="ghost" colorScheme={'blue'} onClick={onClose}>
              <Link to={'/redeem'}>Redeem</Link>
            </Button>
            <Button variant="ghost" colorScheme={'blue'} onClick={onClose}>
              <Link to={'/transaction'}>Transaction</Link>
            </Button>
            <Button variant="ghost" colorScheme={'blue'} onClick={onClose}>
              <Link to={'/invite'}>Invite a friend</Link>
            </Button>
            <Button variant="ghost" colorScheme={'blue'} onClick={onClose}>
              <Link to={'/rate-us'}>Rate us</Link>
            </Button>
            <Button variant="ghost" colorScheme={'blue'} onClick={onClose}>
              <Link to={'/help-support'}>Help & Support</Link>
            </Button>
            <Button variant="ghost" colorScheme={'blue'} onClick={onClose}>
              <Link to={'/privacy-policy'}>Privacy Policy</Link>
            </Button>

          </VStack>

          <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
            <Button colorScheme={'purple'} onClick={onClose} w="105px" display={"flex"} justifyContent="space-between">
              <FaWallet />
              <Link to={'/redeem'}>Wallet</Link>
            </Button>


          </HStack>







        </DrawerContent>

      </Drawer>

    </>
  )
}

export default Header