import React, { useEffect } from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/action'
import Navbar from '../Component/Navbar';

const HomePage = () => {
    const dispatch = useDispatch()
    const navValue = useSelector((state) => state.navValue)
    const productsData = useSelector((state) => state.data)
    // console.log('data:', productsData); 
    useEffect(() => {
        dispatch(fetchData("women", navValue))
    }, [fetchData, navValue]);

    return (
        <>
            {/* <Navbar /> */}
            {/* navbar with icons */}
            <Flex bg="white" width="100%" marginTop="55px" padding={"5px"} boxShadow='lg' gap="30px" justifyContent={"space-evenly"} fontFamily={" Roboto, Arial, sans-serif"} lineHeight={"19px"} fontSize={"15px"} fontWeight={600} >
                <Box onClick={() => dispatch()}>
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
            {/* homepage carousel */}
            <Carousel
                className="carousel"
                autoPlay="true"
                infiniteLoop="true"
                interval="1500"
                showThumbs=""
                marginTop="100px"

            >

                <div>
                    <img
                        src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-MainBanner-P7-ArrowUSPA-upto50.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-MainBanner-P4-FootwearCarnival-RedTapeFila-Flat60.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-MainBanner-P5-JohnplayerLeecooperAvaasa-Upto700On1000.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-MainBanner-P3-Casuals-CampusSutraVeroModa-Min60Extra30.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-MainBanner-P6-Home-HomeexpressionsStoryAtHome-5080.jpg"
                        alt=""
                    />
                </div>
            </Carousel>
            {/* map data here  */}
            <Box display="grid" gridTemplateColumns={"repeat(4,1fr)"} gap="20px">
                {productsData?.map((item) =>
                    <Box key={item._id} margin="auto">
                        <Box>
                            <Image width={"250px"} src={item.src} />
                        </Box>
                        <Box textAlign={"center"}>
                            <Text color={"#2874F0"}>{item.title}</Text>
                            <Text>{item.brand}</Text>
                            <Text>discount{item.discount} Rs{item.discountPrice}</Text>
                        </Box>
                    </Box>
                )}
            </Box>
        </>
    )
}

export default HomePage