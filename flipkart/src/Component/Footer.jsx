import { Box, Container, Text, SimpleGrid, Stack, Flex, useColorModeValue, Image, Divider } from '@chakra-ui/react';

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <>
            <Box mt="50px"
                bg='rgb(23,35,55)'
                color="white"
            >
                <Container as={Stack} maxW={'7xl'} py={10} justifyContent={"space-evenly"}>
                    <SimpleGrid columns={{ base: 2, sm: 3, md: 5, lg: 7 }} spacing={8}>


                        <Stack align={'flex-start'} fontSize="14px" fontWeight={400} lineHeight="20px">
                            <ListHeader fontSize="10px">ABOUT</ListHeader>
                            <Text >Contact Us</Text>
                            <Text >About Us</Text>
                            <Text >Careers</Text>
                            <Text >Press</Text>
                            <Text >Flipkart</Text>
                            <Text >Wholesale</Text>
                            <Text >Corporate</Text>
                            <Text >Information</Text>
                        </Stack>


                        <Stack align={'flex-start'} fontSize="14px" fontWeight={400} lineHeight="20px">
                            <ListHeader fontSize="10px">HELP</ListHeader>
                            <Text >Payments</Text>
                            <Text >Shipping</Text>
                            <Text >Cancellation & Returns</Text>
                            <Text >FAQ</Text>
                            <Text >Report</Text>
                            <Text >Infringment</Text>
                        </Stack>

                        <Stack align={'flex-start'} fontSize="14px" fontWeight={400} lineHeight="20px">
                            <ListHeader fontSize="10px">CONSUMER POLICY</ListHeader>
                            <Text >Return Policy</Text>
                            <Text >Security</Text>
                            <Text >Privacy</Text>
                            <Text >Sitemap</Text>
                            <Text >Greivance</Text>
                            <Text >EPR Compliance</Text>
                        </Stack>



                        <Stack align={'flex-start'} fontSize="14px" fontWeight={400} lineHeight="20px">
                            <ListHeader fontSize="10px">Reach out to us</ListHeader>
                            <Flex gap="20px">
                                <Image src={"https://images.meesho.com/images/pow/facebook.png"} />

                                <Image src={"https://images.meesho.com/images/pow/youtube.png"} />

                                <Image src={"https://images.meesho.com/images/pow/twitter.png"} />
                            </Flex>
                        </Stack>
                        <Divider orientation='vertical' />
                        <Stack align={'flex-start'} fontSize="14px" fontWeight={400} lineHeight="20px">
                            <ListHeader fontSize="10px">Mail Us:</ListHeader>
                            <Text >Flipkart Internet Private Limited,</Text>
                            <Text >Buildings Alyssa, Begonia &</Text>
                            <Text >Clove Embassy Tech Village,</Text>
                            <Text >Bengaluru, 560103,</Text>
                            <Text >Karnataka, India</Text>
                        </Stack>

                        <Stack align={'flex-start'} fontSize="14px" fontWeight={400} lineHeight="20px">
                            <ListHeader fontSize="10px">Registered Office Address:</ListHeader>
                            <Text >Flipkart Internet Private Limited,</Text>
                            <Text >Buildings Alyssa, Begonia &</Text>
                            <Text >Clove Embassy Tech Village,</Text>
                            <Text >Bengaluru, 560103,</Text>
                            <Text >Karnataka, India</Text>
                            <Text >CIN : U51109KA2012PTC066107</Text>
                            <Text >Telephone: 044-45614700</Text>
                        </Stack>

                    </SimpleGrid>
                </Container>

            </Box>

        </>
    );
}