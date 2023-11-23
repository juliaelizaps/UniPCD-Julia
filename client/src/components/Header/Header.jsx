import {
    Flex,
    Icon,
    Text,
    HStack,
    Box,
    Button,
    Avatar,
    WrapItem,
} from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

export function Header() {
    const toSignout = () => {
        sessionStorage.removeItem('token');
        window.location.href = '/';
    };

    let navbarIcon = 'black';
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={3480}
            h="100%"
            mx={'auto'}
            align="center"
            px="8"
            bg={'white'}
            py={'2'}
            boxShadow={'0 1px 10px 0 rgba(0,0,0.1)'}
        >
            <Flex align={'center'} ml="auto">
                <HStack
                    spacing={'8'}
                    mx={'8'}
                    pr={'8'}
                    py={'1'}
                    color={'gray.700'}
                    borderRightWidth={1}
                    borderColor={'gray.700'}
                >
                    <Icon as={RiNotificationLine} fontSize={'20'} />
                    <Icon as={RiUserAddLine} fontSize={'20'} />
                </HStack>
                <Flex align={'center'}>
                    <Box mr={'4'} textAlign={'right'}>
                        <Text>Alex Francis</Text>
                        <Text color={'gray.700'} fontSize={'small'}>
                            alex@estudante.sc.senai.br
                        </Text>
                    </Box>
                    <WrapItem>
                        <Avatar
                            bg="teal.500"
                            size="md"
                            name="Alex Francis"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGl85zNwP76L7ode4VrjaV9Pwn1CVfGLIOiw&usqp=CAU"
                        />{' '}
                    </WrapItem>
                </Flex>
                <HStack
                    pr={'8'}
                    py={'4'}
                    color={'gray.700'}
                    borderRightWidth={1}
                    borderColor={'gray.700'}
                ></HStack>
                <NavLink to="/">
                    <Button
                        fontSize="sm"
                        me={{ sm: '2px', md: '16px' }}
                        color={navbarIcon}
                        variant="no-effects"
                        onClick={toSignout}
                    >
                        <Text>Sair</Text>
                    </Button>
                </NavLink>
            </Flex>
        </Flex>
    );
}
