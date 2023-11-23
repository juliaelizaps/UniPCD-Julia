import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';

//Components
import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar/SideBar';

import { Form1 } from './Components/Form1';
import { Form2 } from './Components/Form2';
import { Form3 } from './Components/Form3';
import Form4 from './Components/Form4';

//Hooks
import { useForm } from '../../hooks/useForm';
import Steps from './Components/Steps';

const formTemplate = {
    name: '',
    cpf: '',
    birth: '',
    email: '',
    password: '',
};

export function Cad() {
    //Variaveis de estilo
    let sidebarBg = useColorModeValue('white');
    let variantChange = '0.2s linear';
    let sidebarRadius = '20px';
    let sidebarMargins = '20px';

    const [data, setData] = useState(formTemplate);

    const updateFieldHandler = (key, value) => {
        setData(prev => {
            return {
                ...prev,
                [key]: value,
            };
        });
    };

    //Array de componentes de formulário
    const formComponents = [
        <Form1 data={data} updateFieldHandler={updateFieldHandler} />,
        <Form2 />,
        <Form3 />,
        <Form4 data={data} updateFieldHandler={updateFieldHandler} />,
    ];

    //Hooks
    const {
        currentStep,
        currentComponent,
        changeStep,
        isLastStep,
        isFirstStep,
    } = useForm(formComponents);

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
                    m={sidebarMargins}
                    borderRadius={sidebarRadius}
                    p={5}
                >
                    <Steps currentStep={currentStep} />
                    <form onSubmit={e => changeStep(currentStep + 1, e)}>
                        {currentComponent}
                        <ButtonGroup mt="5%" w="100%">
                            <Flex w="100%" justifyContent="space-between">
                                <Flex>
                                    {!isFirstStep && (
                                        <Button
                                            type="button"
                                            colorScheme="teal"
                                            variant="solid"
                                            w="7rem"
                                            mr="5%"
                                            onClick={() =>
                                                changeStep(currentStep - 1)
                                            }
                                        >
                                            Voltar
                                        </Button>
                                    )}

                                    {!isLastStep ? (
                                        <Button
                                            type="submit"
                                            w="7rem"
                                            colorScheme="teal"
                                            variant="outline"
                                        >
                                            Avançar
                                        </Button>
                                    ) : (
                                        <Button
                                            w="7rem"
                                            colorScheme="teal"
                                            variant="solid"
                                        >
                                            Cadastrar
                                        </Button>
                                    )}
                                </Flex>
                            </Flex>
                        </ButtonGroup>
                    </form>
                </Box>
            </Flex>
        </Box>
    );
}
