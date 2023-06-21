import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



const HomePage = () => {



    return (
        <>
            <Flex padding={"5px"} boxShadow='lg' ga="30px" justifyContent={"space-evenly"} mt="20px" fontFamily={" Roboto, Arial, sans-serif"} lineHeight={"19px"} fontSize={"15px"} fontWeight={600} >
                <Box>
                    <Image width="64px" src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" />
                    <Text>Grocery</Text>
                </Box>
                <Box>
                    <Image width="64px" src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" />
                    <Text>Mobiles</Text>
                </Box>
                <Box>
                    <Image width="64px" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100" />
                    <Text>Fashion</Text>
                </Box>
                <Box>
                    <Image width="64px" src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" />
                    <Text>Home&Furniture</Text>
                </Box>
                <Box>
                    <Image width="64px" src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" />
                    <Text>Electronics</Text>
                </Box>
                <Box>
                    <Image width="64px" src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" />
                    <Text>Appliances</Text>
                </Box>
                <Box>
                    <Image width="64px" src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" />
                    <Text>Travels</Text>
                </Box>
                <Box>
                    <Image width="64px" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
                    <Text>Top Offers</Text>
                </Box>
                <Box>
                    <Image width="64px" src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" />
                    <Text>Beauty, Toys & More</Text>
                </Box>
                <Box>
                    <Image width="64px" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" />
                    <Text>Two Wheelers</Text>
                </Box>

            </Flex>

            <Carousel>
                <div>
                    <img width="50%" height={"100px"} src="https://rukminim1.flixcart.com/fk-p-flap/50/50/image/8ecae6b4fa12c533.jpg?q=50" alt="furniture" />
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/50/50/image/9a8b2d3f3cb861f0.png?q=50" alt="travel" />
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/50/50/image/3b100988432f7379.jpg?q=50" alt="smartphone" />
                </div>
            </Carousel>
        </>
    )
}

export default HomePage