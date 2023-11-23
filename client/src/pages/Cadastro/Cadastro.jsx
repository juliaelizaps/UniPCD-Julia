import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';
import { SideBar } from '../../components/SideBar/SideBar';
import { Header } from '../../components/Header';
import { useToast } from '@chakra-ui/react';
import { useState } from 'react';

import { Form1 } from './Form1';
import { Form2 } from './Form2';
import { Form3 } from './Form3';

export function Cadastro() {
    let sidebarBg = useColorModeValue('white', 'navy.800');
    let variantChange = '0.2s linear';
    let sidebarRadius = '20px';
    let sidebarMargins = '20px';
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);
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
                        sm: '10px',
                    }}
                    my={{
                        sm: '16px',
                    }}
                    h="calc(100vh - 32px)"
                    ps="15px"
                    pe="10px"
                    m={sidebarMargins}
                    filter="drop-shadow(0px 5px 14px rgba(0, 0, 0, 0.05))"
                    borderRadius={sidebarRadius}
                >
                    <Progress
                        hasStripe
                        value={progress}
                        mb="5%"
                        mx="5%"
                        isAnimated
                    ></Progress>
                    {step === 1 ? (
                        <Form1 />
                    ) : step === 2 ? (
                        <Form2 />
                    ) : (
                        <Form3 />
                    )}
                    <ButtonGroup mt="5%" w="100%">
                        <Flex w="100%" justifyContent="space-between">
                            <Flex>
                                <Button
                                    onClick={() => {
                                        setStep(step - 1);
                                        setProgress(progress - 33.33);
                                    }}
                                    isDisabled={step === 1}
                                    colorScheme="teal"
                                    variant="solid"
                                    w="7rem"
                                    mr="5%"
                                >
                                    Back
                                </Button>
                                <Button
                                    w="7rem"
                                    isDisabled={step === 3}
                                    onClick={() => {
                                        setStep(step + 1);
                                        if (step === 3) {
                                            setProgress(100);
                                        } else {
                                            setProgress(progress + 33.33);
                                        }
                                    }}
                                    colorScheme="teal"
                                    variant="outline"
                                >
                                    Next
                                </Button>
                            </Flex>
                            {step === 3 ? (
                                <Button
                                    w="7rem"
                                    colorScheme="red"
                                    variant="solid"
                                    onClick={() => {
                                        toast({
                                            title: 'Conta criada.',
                                            description:
                                                'Criamos sua conta para você.',
                                            status: 'success',
                                            duration: 3000,
                                            isClosable: true,
                                        });
                                    }}
                                >
                                    Submit
                                </Button>
                            ) : null}
                        </Flex>
                    </ButtonGroup>
                </Box>
            </Flex>
        </Box>
    );
}
