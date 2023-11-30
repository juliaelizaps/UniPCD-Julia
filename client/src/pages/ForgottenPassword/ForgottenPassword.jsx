import React, { useState } from 'react';
import {
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function ForgottenPassword() {
    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSendLink = async () => {
        // Simulação do envio de e-mail
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsEmailSent(true);
    };

    return (
        <Box
            maxW="md"
            mx="auto"
            mt={10}
            p={6}
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
        >
            <Heading mb={4} textAlign="center">
                Recuperar Senha
            </Heading>
            {isEmailSent ? (
                <>
                    <Alert status="success" mb={4}>
                        <AlertIcon />
                        Um link de recuperação foi enviado para o seu e-mail.
                    </Alert>
                    <Button colorScheme="teal" mt={4} onClick={() => setIsEmailSent(false)}>
                        Anterior
                    </Button>
                    <Link to="/Login">
                        <Button colorScheme="teal" mt={4} ml={4}>
                            Voltar para página inicial
                        </Button>
                    </Link>
                </>
            ) : (
                <>
                    <Text mb={4}>
                        Por favor, insira seu endereço de e-mail. Um link de recuperação
                        será enviado para você.
                    </Text>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            placeholder="Seu endereço de e-mail"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </FormControl>
                    <Button
                        colorScheme="teal"
                        mt={4}
                        onClick={handleSendLink}
                        isLoading={isEmailSent}
                        loadingText="Enviando..."
                    >
                        Esqueceu a Senha
                    </Button>
                </>
            )}
        </Box>
    );
}

export default ForgottenPassword;
