import React from 'react'
import { Box, Button, Flex, Image, Input, Text, } from '@chakra-ui/react'
import { IoIosSearch, IoIosAppstore, IoIosNotifications, IoMdPerson, IoMdGift, IoMdPower, IoIosHeart, IoIosCard, IoIosCart, IoIosArchive } from "react-icons/io";
import "./Navbar.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <Box height={"60px"} bg="#2874F0" position={"sticky"} zIndex={1}>
            <Flex width="80%" margin="auto" justifyContent={"space-around"} color={"white"} fontWeight={500} fontSize="16px">

                <Image width="150px" padding={"10px"} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png" alt='logo' />
                {/* input box */}
                <Flex padding={"10px"} width="40%" gap="5px" >
                    <Input color={"grey"} bg={"white"} placeholder='Search for products, brands and more' type="Link" />
                    <IoIosSearch fontSize={"35px"} color="white" />
                </Flex>



                <div class="class-menu">
                    <button className="class-button">{"Username"}</button>
                    <Box className="dropdownmenu" padding={"10px"} >
                        <Flex gap={"10px"}  >
                            <Text mt="17px">
                                <IoMdPerson fontSize={"20px"} color="#2874F0" />
                            </Text>
                            <Link to="/profile" padding={"10px"} > My Profile</Link>
                        </Flex>
                        <hr />
                        <Flex >
                            <Text mt="17px">
                                <IoIosAppstore fontSize={"20px"} color="#2874F0" />
                            </Text>
                            <Link to="/profile" padding={"10px"}> Super Coin Zone</Link>
                        </Flex>
                        <hr />
                        <Flex >
                            <Text mt="17px">
                                <IoIosArchive fontSize={"20px"} color="#2874F0" />
                            </Text>
                            <Link padding={"10px"}> Orders </Link>
                        </Flex>
                        <hr />
                        <Flex >
                            <Text mt="17px">
                                <IoIosHeart fontSize={"20px"} color="#2874F0" />
                            </Text>
                            <Link padding={"10px"}> Wishlist</Link>
                        </Flex>
                        <hr />
                        <Flex >
                            <Text mt="17px">
                                <IoIosCard fontSize={"20px"} color="#2874F0" />
                            </Text>
                            <Link padding={"10px"}> Coupons</Link>
                        </Flex>
                        <hr />
                        <Flex >
                            <Text mt="17px">
                                <IoMdGift fontSize={"20px"} color="#2874F0" />
                            </Text>
                            <Link padding={"10px"}> Gift Cards</Link>
                        </Flex>
                        <hr />
                        <Flex >
                            <Text mt="17px">
                                <IoIosNotifications fontSize={"20px"} color="#2874F0" />
                            </Text>
                            <Link padding={"10px"}> Notification</Link>
                        </Flex>
                        <hr />
                        <Flex >
                            <Text mt="17px">
                                <IoMdPower fontSize={"20px"} color="#2874F0" />
                            </Text>
                            <Link padding={"10px"}> Logout</Link>
                        </Flex>
                    </Box>
                </div>

                <div class="class-menu">
                    <button className="class-button">{"Become a Seller"}</button>
                </div>

                {/* cart */}

                <div class="class-menu">
                    {/* <button className="class-button">{"Username"}</button> */}
                    <Flex p={"15px"} gap="10px" className="class-button">
                        <IoIosCart fontSize="25px" />
                        <Link> Cart</Link>
                    </Flex>
                    <Box className="dropdownmenu" padding={"10px"} >
                        <Flex gap={"10px"}  >
                            <IoMdPerson fontSize={"20px"} color="#2874F0" />
                            <Link to="/profile" padding={"10px"} > My Profile</Link>
                        </Flex>
                        <hr />
                        <Flex >
                            <IoIosAppstore fontSize={"20px"} color="#2874F0" />
                            <Link padding={"10px"}> Super Coin Zone</Link>
                        </Flex>
                        <hr />
                        <Flex >
                            <IoIosArchive fontSize={"20px"} color="#2874F0" />
                            <Link padding={"10px"}> Orders </Link>
                        </Flex>
                        <hr />
                        <Flex >
                            <IoIosHeart fontSize={"20px"} color="#2874F0" />
                            <Link padding={"10px"}> Wishlist</Link>
                        </Flex>
                        <hr />
                        <Flex >
                            <IoIosCard fontSize={"20px"} color="#2874F0" />
                            <Link padding={"10px"}> Coupons</Link>
                        </Flex>
                        <hr />
                        <Flex >
                            <IoMdGift fontSize={"20px"} color="#2874F0" />
                            <Link padding={"10px"}> Gift Cards</Link>
                        </Flex>
                        <hr />
                        <Flex >
                            <IoIosNotifications fontSize={"20px"} color="#2874F0" />
                            <Link padding={"10px"}> Notification</Link>
                        </Flex>
                        <hr />
                        <Flex >
                            <IoMdPower fontSize={"20px"} color="#2874F0" />
                            <Link padding={"10px"}> Logout</Link>
                        </Flex>
                    </Box>
                </div>

            </Flex>
        </Box>
    )
}

export default Navbar