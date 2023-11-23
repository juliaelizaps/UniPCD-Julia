import {
    Box,
    Stack,
    Heading,
    Container,
    Input,
    Button,
    SimpleGrid,
    Image,
    Center,
    FormControl,
    FormLabel,
    InputGroup,
    InputRightElement,
    Text,
    Link as ChakraLink,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import pessoa from '../../components/assets/img/Login/pessoas.png';
import AuthService from '../../services/AuthService';
import { Link as ReactRouterLink } from 'react-router-dom';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleEmailChange = event => {
        setEmail(event.target.value);
        setError(false);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
        setError(false);
    };

    const handleLogin = async () => {
        try {
            const response = await AuthService.login(email, password);
            sessionStorage.setItem('token', response.token);
            window.location.href = '/home';
        } catch (error) {
            setError(true);
        }
    };
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Box position={'relative'}>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 30 }}
            >
                <Stack spacing={{ base: 10, md: 20 }} py={50}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{
                            base: '3xl',
                            sm: '4xl',
                            md: '5xl',
                            lg: '8xl',
                        }}
                    ></Heading>
                    <Image src={pessoa} />
                </Stack>
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}
                >
                    <Stack spacing={4}>
                        <Center>
                            <Heading
                                color={'gray.800'}
                                lineHeight={1.1}
                                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                            >
                                Bem-Vindo
                            </Heading>
                        </Center>
                    </Stack>
                    <Box as={'form'} mt={10}>
                        <Stack spacing={4}>
                            <FormControl id="email" isRequired>
                                <FormLabel>Endereço de email</FormLabel>
                                <Input
                                    type="email"
                                    onChange={handleEmailChange}
                                />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Senha</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        onChange={handlePasswordChange}
                                    />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword(
                                                    showPassword =>
                                                        !showPassword
                                                )
                                            }
                                        >
                                            {showPassword ? (
                                                <ViewIcon />
                                            ) : (
                                                <ViewOffIcon />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button
                                fontFamily={'heading'}
                                bg={'gray.200'}
                                color={'gray.800'}
                                onClick={handleLogin}
                            >
                                ENTRAR
                            </Button>
                        </Stack>
                        <Center mt="1vh">
                            <Text>
                                <ChakraLink
                                    as={ReactRouterLink}
                                    color="#0969DA"
                                    to="/ForgottenPassword"
                                    href="#"
                                >
                                    Esqueci minha senha
                                </ChakraLink>
                            </Text>
                        </Center>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
