import React from 'react'
import { Box, Flex, Image, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react'
import { IoIosSearch, IoIosAppstore, IoIosNotifications, IoMdPerson, IoMdGift, IoMdPower, IoIosHeart, IoIosCard, IoIosCart, IoIosArchive, IoIosAddCircleOutline } from "react-icons/io";
import "./Navbar.css"
const Navbar = () => {
    return (
        <Box height={"60px"} bg="#2874F0" position={"sticky"} zIndex={1}>
            <Flex width="80%" margin="auto" justifyContent={"space-around"} color={"white"} fontWeight={500} fontSize="16px">

                <Image width="150px" padding={"10px"} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png" alt='logo' />
                {/* input box */}
                <Flex padding={"10px"} width="40%" gap="5px" >
                    <Input color={"grey"} bg={"white"} placeholder='Search for products, brands and more' type="text" />
                    <IoIosSearch fontSize={"35px"} color="white" />
                </Flex>

                {/* Account details popover */}

                {/* <Text className='' p={"15px"}>Vishal More</Text> */}
                <div class="class-menu">
                    <button className="class-button">Product</button>
                    <div className="dropdownmenu">
                    <Flex gap={"10px"}  >
                                <IoMdPerson fontSize={"20px"} color="blue" />
                                <Text padding={"5px"} > My Profile</Text>
                            </Flex>
                            <hr />
                            <Flex >
                                <IoIosAppstore fontSize={"20px"} color="blue" />
                                <Text padding={"10px"}> Super Coin Zone</Text>
                            </Flex>
                            <hr />
                            <Flex >
                                <IoIosArchive fontSize={"20px"} color="blue" />
                                <Text padding={"10px"}> Orders </Text>
                            </Flex>
                            <hr />
                            <Flex >
                                <IoIosHeart fontSize={"20px"} color="blue" />
                                <Text padding={"10px"}> Wishlist</Text>
                            </Flex>
                            <hr />
                            <Flex >
                                <IoIosCard fontSize={"20px"} color="blue" />
                                <Text padding={"10px"}> Coupons</Text>
                            </Flex>
                            <hr />
                            <Flex >
                                <IoMdGift fontSize={"20px"} color="blue" />
                                <Text padding={"10px"}> Gift Cards</Text>
                            </Flex>
                            <hr />
                            <Flex >
                                <IoIosNotifications fontSize={"20px"} color="blue" />
                                <Text padding={"10px"}> Notification</Text>
                            </Flex>
                            <hr />
                            <Flex >
                                <IoMdPower fontSize={"20px"} color="blue" />
                                <Text padding={"10px"}> Logout</Text>
                            </Flex>
                    </div>
                </div>

                <Text p={"15px"}>Become a Seller</Text>

                {/* cart */}
                <Flex p={"15px"} gap="10px">
                    <IoIosCart fontSize="25px" />
                    <Text> Cart</Text>
                </Flex>

            </Flex>
        </Box>
    )
}

export default Navbar