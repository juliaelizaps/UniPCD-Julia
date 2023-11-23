// ForgotPassword.jsx
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

export function ForgottenPassword() {
    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSendLink = async () => {
        //  colocar aqui a logíca de como enviar :)
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
                <Alert status="success" mb={4}>
                    <AlertIcon />
                    Um link de recuperação foi enviado para o seu e-mail.
                </Alert>
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
                        to='/login'
                    >
                        Enviar Link de Recuperação
                    </Button>
                </>
            )}
        </Box>
    );
};

export default ForgottenPassword;
