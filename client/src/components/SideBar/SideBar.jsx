import { Box, Image, Stack, useColorModeValue } from '@chakra-ui/react';
import {
    RiContactsLine,
    RiHome4Line,
    Ri24HoursLine,
    RiAdminLine,
    RiCalendarLine,
    RiRoadMapLine,
} from 'react-icons/ri';
import {
    AiOutlineBarChart,
    AiOutlineControl,
    AiOutlineFundProjectionScreen,
} from 'react-icons/ai';
import {
    renderThumbDark,
    renderThumbLight,
    renderTrack,
    renderTrackRTL,
    renderView,
    renderViewRTL,
} from '../Scrollbar';
import { Scrollbars } from 'react-custom-scrollbars';
import { NavSection } from './NavSection';
import { NavLink } from './NavLink';
import logo from '../assets/img/Header/logo.png';
import { HSeparator } from '../Separator';

export function SideBar() {
    let sidebarBg = useColorModeValue('white', 'navy.800');
    let variantChange = '0.2s linear';
    let sidebarRadius = '20px';
    let sidebarMargins = '20px';

    var brand = (
        <Box pt={'25px'} mb="12px">
            <Image mx={'20'} src={logo} w={'10'} />
            <HSeparator my="26px" />
        </Box>
    );

    return (
        <Box
            bg={sidebarBg}
            transition={variantChange}
            w="280px"
            maxW="280px"
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
            <Scrollbars
                autoHide
                renderTrackVertical={
                    document.documentElement.dir === 'rtl'
                        ? renderTrackRTL
                        : renderTrack
                }
                renderThumbVertical={useColorModeValue(
                    renderThumbLight,
                    renderThumbDark
                )}
                renderView={
                    document.documentElement.dir === 'rtl'
                        ? renderViewRTL
                        : renderView
                }
            >
                <Box>{brand}</Box>
                <Stack spacing="7" align="flex-start" padding={3}>
                    <NavSection title={'GERAL'}>
                        <NavLink icon={RiHome4Line} href="/home">
                            Página inicial
                        </NavLink>
                        <NavLink icon={RiContactsLine} href="/cadastro">
                            Painel do usuário
                        </NavLink>
                        <NavLink icon={RiCalendarLine} href="/teste">
                            Calendário
                        </NavLink>
                    </NavSection>
                    <NavSection title={'RELATÓRIOS'}>
                        <NavLink
                            icon={AiOutlineFundProjectionScreen}
                            href="/dashboard"
                        >
                            Dashboard
                        </NavLink>
                        <NavLink icon={RiRoadMapLine} href="/">
                            Mapas
                        </NavLink>
                        <NavLink icon={AiOutlineBarChart} href="/cad">
                            Gráficos
                        </NavLink>
                    </NavSection>
                    <NavSection title={'NOTICIAS'}>
                        <NavLink icon={AiOutlineControl}>
                            Vaga de emprego
                        </NavLink>
                        <NavLink icon={RiAdminLine}>Eventos</NavLink>
                        <NavLink icon={Ri24HoursLine}>Leis e Notícias</NavLink>
                    </NavSection>
                    <NavSection title={'PERSONALIZAR'}>
                        <NavLink icon={AiOutlineControl}>Controle</NavLink>
                        <NavLink icon={RiAdminLine}>Admin</NavLink>
                        <NavLink icon={Ri24HoursLine}>E-mail</NavLink>
                    </NavSection>
                </Stack>
            </Scrollbars>
        </Box>
    );
}
