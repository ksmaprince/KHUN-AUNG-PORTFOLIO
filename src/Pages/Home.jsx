import { Box, Button, Center, Flex, Heading, HStack, Link, Tooltip, Image, Text } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import 'aos/dist/aos.css'
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoCloudDownload } from 'react-icons/go'
import { FaPhoneAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

import { projects, skills } from '../Utils/data';

import ProjectCard from '../Components/Card';
import Svg1 from '../Components/Svg1';
import Svg2 from '../Components/Svg2';
import Svg3 from '../Components/Svg3';
import Slider from 'react-slick';
import axios from 'axios';


const Home = () => {

    const form = useRef();
    const toast = useToast()

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: matchMedia("(max-width: 425px)").matches ? 1 : matchMedia("(max-width: 1024px)").matches ? 2 : 3,
        slidesToScroll: 1,
    };

    useEffect(() => {
        // * it's from Aos library to to use scroll designing
        Aos.init()
    }, [])

    const sendEmail = async (e) => {
        console.log("Send Email Click")
        e.preventDefault();
        
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_SERVICE_TEMPLATE, form.current, process.env.REACT_APP_SERVICE_SECRET).then((result) => {
            toast({
                position: 'top-center',
                title: 'Email Sent ✔',
                description: `Thank You ${form.current.from_name.value.split(" ")[0]} for the message!`,
                status: 'success',
                duration: 5000,
                isClosable: true,
            })

            form.current.reset();
        }, (error) => {
            console.log(error.text);
            toast({
                position: 'top-right',
                title: 'Email Not sent.',
                description: "There is some error",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
        });

    };

    // const sendEmail = async (e) => {
    //     e.preventDefault();
      
    //     const formData = {
    //       name: form.current.name,
    //       email: form.current.email,
    //       phone: '1112223333', // Hardcoded for now
    //       content: form.current.content
    //     };
      
    //     try {
    //       const response = await axios.post('https://afej3vxkw2.execute-api.us-east-1.amazonaws.com/v1/contact', formData, {
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       });
      
    //       if (response.status === 200) {
    //         toast({
    //           position: 'top-center',
    //           title: 'Email Sent ✔',
    //           description: 'Your message has been sent successfully!',
    //           status: 'success',
    //           duration: 5000,
    //           isClosable: true,
    //         });
    //         form.current.reset();
    //       }
    //     } catch (error) {
    //       toast({
    //         position: 'top-center',
    //         title: 'Email Not Sent',
    //         description: `There was an error sending the message: ${error.message}`,
    //         status: 'error',
    //         duration: 5000,
    //         isClosable: true,
    //       });
    //       console.error('Error sending email:', error);
    //     }
    //   };

    return (
        <Box>
            <Box id='home'>
                <Flex flexDirection={['column-reverse', 'column-reverse', 'row']} m="auto" justifyContent="space-around" alignItems="center" h="100%">
                    <Box data-aos="fade-down">
                        <Heading>Hey! <span className='themeText'>I'm</span></Heading>
                        <Box className='content'>
                            <Heading fontSize="3.3em" className='text' data-text="Khun Aung"><span className='themeText'>Khun Aung</span></Heading>
                        </Box>
                        {/* <Box className='name'>
                            <Heading>K. Aung</Heading>
                            <Heading>K. Aung</Heading>
                        </Box> */}
                        <Text>Am a Software Developer, passionate and experienced in building Android applications.</Text>
                        <HStack className='hireMe' onClick={() => { window.open("https://ksmaprince.github.io/K.AUNG/KHUN_AUNG_RESUME.pdf", '_blank') }}>
                            {/* <a href={Resume} download="KHUN_AUNG_RESUME"> */}
                            <a href='#'>
                                <Button>Resume <GoCloudDownload /></Button>
                            </a>
                        </HStack>
                    </Box>
                    
                     <Box data-aos="fade-down">
                        <Svg1 />
                    </Box> 
                </Flex>
            </Box>

            {/* About me */}

            <Box id="aboutMe">
                <Heading>About <span className='themeText'>me</span></Heading>
                <Flex flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']} alignItems="center" h="100%">
                    <div data-aos="fade-right">
                        <Svg3 />
                    </div>

                    <Flex data-aos="fade-left">
                        <Flex w="100%" gap="10%" justifyContent="center">
                            <Image
                                borderRadius='full'
                                boxSize='250px'
                                src='https://ksmaprince.github.io/K.AUNG/khun.png'
                                alt='Khun Aung Avatar' />
                            <Svg3 />
                        </Flex>

                        <Box>
                            <Text>Skilled Android Developer with a proven track record of success with around<b className='themeText'> 6 years of experience </b> in designing, developing, maintaining, and deploying high-quality mobile apps for the financial industry. Proficient in both Java and Kotlin, with a portfolio including apps with <b className='themeText'>1,000,000+ (1 Million+) </b>downloads on the <a href='https://play.google.com/store/apps/developer?id=K.H+Innovation'> <u className='themeText'>Google Play Store. </u></a> </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>

            {/* Technical Skills section */}
            <Box id="skills">
                <Heading>
                    Technical
                    <span className="themeText"> Skills</span>
                </Heading>
                <Flex className='skills'>
                    <Flex>
                        <Heading size="lg">Professional<span className='themeText'> Skillset</span></Heading>
                        <Box>
                            {
                                skills.filter((el) => el.tag === "skill").map(skill => <Box
                                    key={skill.id}
                                    className="skill"
                                    data-aos="zoom-in-up">
                                    <Box>
                                        <Image src={skill.icon} alt={`${skill.title} icon`} />
                                    </Box>
                                    <Text>{skill.title}</Text>
                                </Box>)
                            }
                        </Box>
                    </Flex>
                    <Flex>
                        <Heading size="lg"><span className='themeText'>Backend &</span> Database</Heading>
                        <Box>
                            {
                                skills.filter((el) => el.tag === "backend").map(skill => <Box
                                    key={skill.id}
                                    className="skill"
                                    data-aos="zoom-in-down">
                                    <Box>
                                        <Image src={skill.icon} alt={`${skill.title} icon`} />
                                    </Box>
                                    <Text>{skill.title}</Text>
                                </Box>)
                            }
                        </Box>
                    </Flex>
                    <Flex>
                        <Heading size="lg">Platforms <span className='themeText'>& Tools</span></Heading>
                        <Box>
                            {
                                skills.filter((el) => el.tag === "platform").map(skill => <Box
                                    key={skill.id} className="skill"
                                    data-aos="zoom-in">
                                    <Box>
                                        <Image src={skill.icon} alt={`${skill.title} icon`} />
                                    </Box>
                                    <Text>{skill.title}</Text>
                                </Box>)
                            }
                        </Box>
                    </Flex>
                </Flex>
            </Box>


            {/* show projects */}
            <Box id="projects">
                <Heading textAlign="center">Featured <span className='themeText'>Projects</span></Heading>
                <Slider {...settings}>
                    {
                        projects.map((project, i) => <ProjectCard key={i} {...project} />)
                    }
                </Slider>
            </Box>


            {/* Github Statistics */}
            <Box id="githubStats">
                <Heading textAlign="center">Github <span className='themeText'>stats</span></Heading>
                <Center className='github-stats'>
                    <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=ksmaprince&layout=compact&hide_border=true&theme=radical" alt="Atanu's most used languages" />
                    <Image src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=ksmaprince&theme=radical" alt="Atanu's github Stats" />
                </Center>

                <Center className='github-stats'>
                    <Image src="https://github-readme-stats.vercel.app/api?username=ksmaprince&show_icons=true&locale=en&layout=compact&hide_border=true&theme=radical" alt="Atanu's github stats" />
                    <Image src="https://github-readme-streak-stats.herokuapp.com/?user=ksmaprince&layout=compact&hide_border=true&theme=radical" alt="Atanu's current Streaks" />
                </Center>

                <Center>
                    <GitHubCalendar username="ksmaprince" color="#4a8af4" children={<ReactTooltip html />} />
                </Center>
            </Box>


            {/* Contact me */}
            <Box id='contactMe'>
                <Heading textAlign="center">Contact <span className='themeText'>Me</span></Heading>
                <Flex flexDirection={["column", "column", "column", "row"]} alignItems="center">

                    <Box>
                        <Svg2 />
                    </Box>


                    <Box className='form-section'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='inputBox'>
                                <input type="text" name="from_name" required />
                                <span>Full Name</span>
                            </div>
                            {/* <div className='inputBox'>
                                <input type="phone" name="from_phone" required />
                                <span>Phone</span>
                            </div> */}
                            <div className='inputBox'>
                                <input type="email" name="from_mail" required />
                                <span>Email</span>
                            </div>
                            <div>
                                <textarea placeholder='Message 📧' name="message" />
                            </div>
                            <input type="submit" value="Send Message" />
                        </form>
                        <Flex className='contact-info'>
                            <HStack>
                                <SiGmail color="#e34133" />
                                <Text>khunaung.dev@gmail.com</Text>
                            </HStack>
                            <HStack>
                                <FaPhoneAlt color="#00a14f" />
                                <Text>+1(641)233-9391</Text>
                            </HStack>
                        </Flex>
                        <Flex gap={["10px", "20px", "20px", "40px"]}>
                            <Link href='https://wa.me/16412339391' target="_blank">
                                <Tooltip label='WhatsApp'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://brandlogos.net/wp-content/uploads/2018/10/whatsapp-logo.png" alt='Whatsapp brand logo'/>
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href='https://www.linkedin.com/in/khunsma/' target="_blank">
                                <Tooltip label='LinkedIn Profile'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" alt='Linkedin brand logo' />
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href="https://github.com/ksmaprince" target="_blank">
                                <Tooltip label='Github Profile'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='Github brand logo' />
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href="https://www.leetcode.com/khunsma" target="_blank">
                                <Tooltip label='Leetcode Profile'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt='Leetcode logo' />
                                        </Box>
                                    </Box >
                                </Tooltip>
                            </Link>

                        </Flex >
                    </Box >
                </Flex >
            </Box >
            {/* footer */}
            <Flex id='footer'>
                <Text>© Portfolio by K. Aung | All rights reserved.</Text>
                <Text>Made with 💖 by K. Aung</Text>
            </Flex>
        </Box >
    )
}

export default Home