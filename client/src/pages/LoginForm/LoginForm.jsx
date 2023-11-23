import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardBody,
    Center,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text,
    VStack,
    Alert,
    AlertIcon,
    AlertDescription,
    Image,
} from '@chakra-ui/react';
import Logo from '../../components/assets/img/Header/logo.png';
import AuthService from '../../services/AuthService';

export function LoginForm() {
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

    return (
        <Box>
            <Center>
                <Stack spacing="5">
                    <VStack as="header" spacing="6" mt="8">
                        <Image src={Logo} w={'30%'} m={'10%'} />
                        <Heading
                            as="h1"
                            fontWeight="300"
                            fontSize="24px"
                            letterSpacing="-0.5px"
                        >
                            UniPCD
                        </Heading>
                    </VStack>
                    <Card
                        bg="#f6f8fa"
                        variant="outline"
                        borderColor="#d8dee4"
                        w="318px"
                    >
                        <CardBody>
                            <form>
                                <Stack spacing="4">
                                    <FormControl>
                                        <FormLabel size="sm">
                                            Usuário ou Email
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            bg="white"
                                            borderColor="#d8dee4"
                                            size="sm"
                                            borderRadius="6px"
                                            onChange={handleEmailChange}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <HStack justify="space-between">
                                            <FormLabel size="sm">
                                                Password
                                            </FormLabel>
                                            <Button
                                                as="a"
                                                href="#"
                                                variant="link"
                                                size="xs"
                                                color="#0969da"
                                                fontWeight="500"
                                            >
                                                recuperar senha?
                                            </Button>
                                        </HStack>
                                        <Input
                                            type="password"
                                            bg="white"
                                            borderColor="#d8dee4"
                                            size="sm"
                                            borderRadius="6px"
                                            onChange={handlePasswordChange}
                                        />
                                    </FormControl>

                                    <Button
                                        bg="#2da44e"
                                        color="white"
                                        size="sm"
                                        _hover={{ bg: '#2c974b' }}
                                        _active={{ bg: '#298e46' }}
                                        onClick={handleLogin}
                                    >
                                        Login
                                    </Button>
                                    {error && (
                                        <Alert status="error">
                                            <AlertIcon />
                                            <AlertDescription>
                                                Email ou senha incorretos
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                </Stack>
                            </form>
                        </CardBody>
                    </Card>

                    <Card variant="outline" borderColor="#d0d7de">
                        <CardBody>
                            <Center>
                                <HStack fontSize="sm" spacing="1">
                                    <Text>Novo no CEI?</Text>
                                    <Link isExternal color="#0969da" href="#">
                                        Crie a sua conta aqui.
                                    </Link>
                                </HStack>
                            </Center>
                        </CardBody>
                    </Card>
                </Stack>
            </Center>
            <Center as="footer" mt="16">
                <HStack spacing="4" pt="2">
                    <Link isExternal color="#0969da" href="#" fontSize="xs">
                        Termos
                    </Link>
                    <Link isExternal color="#0969da" href="#" fontSize="xs">
                        Privacidade
                    </Link>
                    <Link isExternal color="#0969da" href="#" fontSize="xs">
                        Segurança
                    </Link>
                    <Link isExternal href="#" fontSize="xs">
                        Contato
                    </Link>
                </HStack>
            </Center>
        </Box>
    );
}
