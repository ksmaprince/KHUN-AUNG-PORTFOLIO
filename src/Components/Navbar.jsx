import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Image, Link, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import logo from '../Images/favicon.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box className='navbar'>
            <Box className='logo'>
                <Box>
                    <Image src={logo} alt='Portfolio logo' />
                </Box>
                <Box className='name'>
                    <Heading>K.Aung</Heading>
                    <Heading>K.Aung</Heading>
                </Box>
            </Box>
            <Box display={["none", 'none', 'none', 'flex']} className="nav-options">
                <Box>
                    <Button><Link href="#"><span>Home</span></Link></Button>
                </Box>
                {/* <Box>
                    <Button><Link href="#aboutMe"><span>About me</span></Link></Button>
                </Box> */}
                <Box>
                    <Button><Link href="#skills"><span>Skills</span></Link></Button>
                </Box>
                <Box>
                    <Button><Link href="#experience"><span>Experience</span></Link></Button>
                </Box>
                <Box>
                    <Button><Link href="#education"><span>Education</span></Link></Button>
                </Box>
                <Box>
                    {/* <Button onClick={()=>{window.open("https://ksmaprince.github.io/MY-PROFILE/static/media/KHUN_AUNG_RESUME.50dfc34fdb84aaf414aa.pdf", '_blank')}}><a href={Resume} download="KHUN_AUNG_RESUME"><span>Resume</span></a></Button> */}
                    {/* <Button onClick={()=>{window.open("https://ksmaprince.github.io/K.AUNG/KHUN_AUNG_RESUME.pdf", '_blank')}}><a href="#"><span>Resume</span></a></Button> */}
                    <Button onClick={()=>{window.open("/KHUN_AUNG_RESUME.pdf", '_blank')}}><span>Resume</span></Button>
                </Box>
                <Box>
                    <Button><Link href="#contactMe"><span>Contact</span></Link></Button>
                </Box>
            </Box>
            <Button ref={btnRef} display={["block", 'block', 'block', 'none']} onClick={() => {
                isOpen ? onClose() : onOpen()
            }}>
                {
                    isOpen ? <VscChromeClose /> : <GiHamburgerMenu />
                }
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size="full"
            >
                <DrawerOverlay />
                <DrawerContent className="drawer">
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Box display={['flex', 'none']} className='logo'>
                            <Box>
                                <Image src={logo} alt='Portfolio logo' />
                            </Box>
                            <Box className='name'>
                                <Heading>K.Aung</Heading>
                                <Heading>K.Aung</Heading>
                            </Box>
                        </Box>
                    </DrawerHeader>

                    <DrawerBody>
                        <Box><Link href='#' onClick={() => onClose()}>Home</Link></Box>
                        {/* <Box><Link href='#aboutMe' onClick={() => onClose()}>About me</Link></Box> */}
                        <Box><Link href='#skills' onClick={() => onClose()}>Skills</Link></Box>
                        <Box><Link href='#experience' onClick={() => onClose()}>Experience</Link></Box>
                        <Box><Link href='#education' onClick={() => onClose()}>Education</Link></Box>
                        <Box><Link href='#projects' onClick={() => onClose()}>Projects</Link></Box>
                        <Box><Link href='#resume' onClick={() => onClose()}>Resume</Link></Box>
                        <Box><Link href='#contactMe' onClick={() => onClose()}>Contact</Link></Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Navbar
