import { Image, Box, Flex, useColorModeValue } from '@chakra-ui/react';
import Logo from '../../components/assets/img/Header/logo.png';
import { SideBar } from '../../components/SideBar/SideBar';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer/Footer';

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export function Home() {
    let sidebarBg = useColorModeValue('white', 'navy.800');
    let variantChange = '0.2s linear';
    let sidebarRadius = '20px';
    let sidebarMargins = '20px';

    return (
        <Box>
            <Header />
            <Flex my={'3'} px={'1'}>
                <SideBar />
                <Box
                    bg={sidebarBg}
                    transition={variantChange}
                    w="100%"
                    maxW="100%"
                    ms={{
                        sm: '16px',
                    }}
                    my={{
                        sm: '16px',
                    }}
                    h="calc(100vh - 32px)"
                    ps="15px"
                    pe="20px"
                    m={sidebarMargins}
                    filter="drop-shadow(0px 5px 14px rgba(0, 0, 0, 0.05))"
                    borderRadius={sidebarRadius}
                >
                    <Image src={Logo} w={'30%'} m={'10%'} />
                </Box>
            </Flex>
            <Footer />
        </Box>
    );
}
