import React from 'react'
import { Box, Button, Checkbox, Flex, Image, Input, Select, Text, Textarea } from '@chakra-ui/react'
import {  AiFillCreditCard, AiOutlineDoubleRight, AiOutlineLogout, AiFillGift } from "react-icons/ai";
// import { Link } from 'react-router-dom';
import { IoMdPerson } from 'react-icons/io';

const Profile = () => {
    const [value, setvalue] = React.useState("pesronalinformation")
    return (
        <>

            <Flex width={"90%"} margin="auto" mt="10px" justifyContent={"space-between"} >
                {/* sidebar */}
                <Box width={"25%"} margin="auto" mt="10px" >
                    {/* username */}
                    <Flex boxShadow={"2xl"} padding={"20px"} gap="20px" marginBottom={"30px"}>
                        <Box>
                            <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" />
                        </Box>
                        <Box>
                            <Text>Helloo</Text>
                            <Text fontSize={"20px"} fontWeight={600} >Vishal More</Text>
                        </Box>
                    </Flex>
                    {/* other details */}
                    <Box boxShadow={"2xl"} padding={"20px"}>
                        <Flex gap={"10px"}>
                            <Text padding="10px">
                                <AiFillCreditCard color="#2874F0" fontSize={"25px"} />
                            </Text>
                            <Text padding="5px" fontSize={"20px"} fontWeight={600} color="grey">MY ORDERS</Text>
                            <Text padding="10px" ml="50px">
                                <AiOutlineDoubleRight color="grey" fontSize={"25px"} />
                            </Text>
                        </Flex>
                        <hr />
                        {/* profile */}
                        <Box>

                            <Flex gap={"10px"}>
                                <Text padding="10px">
                                    <IoMdPerson color="#2874F0" fontSize={"25px"} />
                                </Text>
                                <Text padding="5px" fontSize={"20px"} fontWeight={600} color="grey">ACCOUNT SETTINGS</Text>

                            </Flex>
                            <Box padding={"20px"}>

                                <Text onClick={() => setvalue("pesronalinformation")} padding={"5px"} ml="35px" fontWeight={400}>Personal Information</Text>
                                <Text onClick={() => setvalue("manageaddress")} padding={"5px"} ml="35px" fontWeight={400}>Manage Address</Text>
                                <Text padding={"5px"} ml="35px" fontWeight={400}>PAN Card Information</Text>
                            </Box>
                        </Box>
                        <hr />
                        {/* payment */}
                        <Box>

                            <Flex gap={"10px"}>
                                <Text padding="10px">
                                    <AiFillCreditCard color="#2874F0" fontSize={"25px"} />
                                </Text>
                                <Text padding="5px" fontSize={"20px"} fontWeight={600} color="grey">PAYMENTS</Text>

                            </Flex>
                            <Box padding={"20px"}>

                                <Text padding={"5px"} ml="35px" fontWeight={400}>Gift Cards</Text>
                                <Text padding={"5px"} ml="35px" fontWeight={400}>Saved UPI</Text>
                                <Text padding={"5px"} ml="35px" fontWeight={400}>Saved Cards</Text>
                            </Box>
                        </Box>
                        {/* my stuff */}
                        <hr />
                        <Box>

                            <Flex gap={"10px"}>
                                <Text padding="10px">
                                    <AiFillGift color="#2874F0" fontSize={"25px"} />
                                </Text>
                                <Text padding="5px" fontSize={"20px"} fontWeight={600} color="grey">MY STUFF</Text>

                            </Flex>
                            <Box padding={"20px"}>

                                <Text padding={"5px"} ml="35px" fontWeight={400}>My Coupons</Text>
                                <Text padding={"5px"} ml="35px" fontWeight={400}>My Review & Ratings</Text>
                                <Text padding={"5px"} ml="35px" fontWeight={400}>All Notifications</Text>
                                <Text padding={"5px"} ml="35px" fontWeight={400}>My Wishlist</Text>
                            </Box>
                        </Box>
                        <hr />
                        {/* logout button */}
                        <Box>

                            <Flex gap={"10px"}>
                                <Text padding="10px">
                                    <AiOutlineLogout color="#2874F0" fontSize={"25px"} />
                                </Text>
                                <Text padding="5px" fontSize={"20px"} fontWeight={600} color="grey">Logout</Text>

                            </Flex>
                        </Box>
                    </Box>
                </Box>

                {value === "pesronalinformation" ? <Box boxShadow={"2xl"} width={"70%"} margin="auto" mt="10px" >
                    {/* personal info */}
                    <Box padding="20px">
                        <Text fontSize={"20px"} fontWeight={600}>Personal Information</Text>
                        <Flex gap="20px" >
                            <Input htmlSize={20} width='auto' placeholder='First Name' contentEditable={false} />
                            <Input htmlSize={20} width='auto' placeholder='Last Name' contentEditable={false} />
                            <Button colorScheme={"blue"}>Save</Button>
                        </Flex>
                    </Box>

                    {/* gender */}
                    <Box padding={"20px"}>
                        <Text fontSize={"20px"} fontWeight={600}>Gender</Text>
                        <Flex gap="30px">
                            <Checkbox>Male</Checkbox>
                            <Checkbox>Female</Checkbox>
                            <Button colorScheme={"blue"}>Save</Button>
                        </Flex>

                    </Box>

                    {/* email */}
                    <Box padding={"20px"}>
                        <Text fontSize={"20px"} fontWeight={600}>Email Address</Text>
                        <Flex gap="30px" >
                            <Input htmlSize={20} width='auto' placeholder='Enter Email' />
                            <Button colorScheme={"blue"}>Save</Button>
                        </Flex>
                    </Box>
                    {/* number */}
                    <Box padding={"20px"}>
                        <Text fontSize={"20px"} fontWeight={600}>Mobile Number</Text>
                        <Flex gap="30px">
                            <Input htmlSize={20} width='auto' placeholder='Enter Number' />
                            <Button colorScheme={"blue"}>Save</Button>
                        </Flex>
                    </Box>



                    {/* faq */}
                    <Box padding={"20px"}>
                        <Text fontSize={"20px"} fontWeight={600}>FAQs</Text>

                        <Text fontSize={"18px"} padding="5px" fontWeight={600}>
                            What happens when I update my email address (or mobile number)?
                        </Text>

                        <Text fontSize={"15px"} padding="5px" fontWeight={400}>
                            Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
                        </Text>


                        <Text fontSize={"18px"} padding="5px" fontWeight={600}>
                            When will my Flipkart account be updated with the new email address (or mobile number)?
                        </Text>

                        <Text fontSize={"15px"} padding="5px" fontWeight={400}>
                            It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.
                        </Text>

                        <Text fontSize={"18px"} padding="5px" fontWeight={600}>
                            What happens to my existing Flipkart account when I update my email address (or mobile number)?
                        </Text>

                        <Text fontSize={"15px"} padding="5px" fontWeight={400}>
                            Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.
                        </Text>

                        <Text fontSize={"18px"} padding="5px" fontWeight={600}>
                            Does my Seller account get affected when I update my email address?
                        </Text>

                        <Text fontSize={"15px"} padding="5px" fontWeight={400}>
                            Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.
                        </Text>
                        <Box backgroundImage={"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png"}>

                            <Text mt="100px" color="#2874F0" fontSize={"20px"} padding="5px" fontWeight={500}>Deactivate Account</Text>
                        </Box>
                    </Box>

                </Box> : ""}
                {value === "manageaddress" ? <Box boxShadow={"2xl"} width={"70%"} margin="auto" mt="10px" padding={"20px"}>
                    <Text fontSize={"20px"} fontWeight={600}>Manage Address</Text>
                    <Text fontSize={"20px"} fontWeight={400} ml="50px" mt={"20px"} color="#2874F0">Add New Address</Text>
                    <Box>
                        <Flex gap="20px" mt="10px" >
                            <Input htmlSize={20} width='auto' placeholder=' Name' contentEditable={false} />
                            <Input htmlSize={20} width='auto' placeholder='10-digit mobile number' contentEditable={false} />
                        </Flex>
                        <Flex gap="20px" mt="10px" >
                            <Input htmlSize={20} width='auto' placeholder='Pincode' contentEditable={false} />
                            <Input htmlSize={20} width='auto' placeholder='Locality' contentEditable={false} />
                        </Flex>
                        {/* <Input /> */}
                        <Textarea width="489px" placeholder='Address (Area or Street)' mt="10px"></Textarea>
                        <Flex gap="20px" mt="10px" >
                            <Input htmlSize={20} width='auto' placeholder='City/District/Town' contentEditable={false} />
                            <Select width={"238px"} placeholder='Select State'>
                                <option value='Andra Pradesh'>Andra Pradesh</option>
                                <option value='Assam'>Assam</option>
                                <option value='Chandigarh'>Chandigarh</option>
                                <option value='Delhi'>Delhi</option>
                                <option value='Goa'>Goa</option>
                                <option value='Haryana'>Haryana</option>
                                <option value='Jammu'>Jammu</option>
                                <option value='Karnataka'>Karnataka</option>
                                <option value='Maharashtra'>Maharashtra</option>
                            </Select>
                        </Flex>
                        <Flex mt="20px" gap="30px">
                            <Button colorScheme={"blue"} width="200px">Save</Button>
                            <Button>Cancel</Button>
                        </Flex>
                    </Box>
                </Box> : ""}


            </Flex>
        </>
    )
}

export default Profile