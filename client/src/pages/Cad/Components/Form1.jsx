import { useState } from 'react';
import {
    Button,
    Heading,
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    FormHelperText,
    InputRightElement,
    Center,
} from '@chakra-ui/react';

export const Form1 = ({ data, updateFieldHandler }) => {
    const [show, setShow] = useState(false);
    const [confirm, confirmShow] = useState(false);
    const handleClick = () => setShow(!show);
    const confirmClick = () => confirmShow(!confirm);

    return (
        <>
            <Heading
                w="100%"
                mt={'15px'}
                textAlign={'center'}
                fontWeight="normal"
                mb="1%"
            >
                Cadastro de usuário
            </Heading>
            <Center>
                <Flex w={'50%'}>
                    <FormControl mr="2%" isRequired>
                        <FormLabel htmlFor="name" fontWeight={'normal'}>
                            Nome
                        </FormLabel>
                        <Input
                            id="name"
                            placeholder="Digite seu nome..."
                            //Para manter o valor do input atualizado
                            value={data.name || ''}
                            onChange={e =>
                                updateFieldHandler('name', e.target.value)
                            }
                        />
                    </FormControl>
                </Flex>
            </Center>
            <Center>
                <Flex w={'50%'}>
                    <FormControl mt="2%" mr={'2%'} isRequired>
                        <FormLabel htmlFor="cpf" fontWeight={'normal'}>
                            CPF
                        </FormLabel>
                        <Input
                            id="cpf"
                            value={data.cpf || ''}
                            onChange={e =>
                                updateFieldHandler('cpf', e.target.value)
                            }
                        />
                    </FormControl>

                    <FormControl mt="2%" isRequired>
                        <FormLabel htmlFor="birth" fontWeight={'normal'}>
                            Data de nascimento
                        </FormLabel>
                        <Input
                            id="birth"
                            type="date"
                            value={data.birth || ''}
                            onChange={e =>
                                updateFieldHandler('birth', e.target.value)
                            }
                        />
                    </FormControl>
                </Flex>
            </Center>
            <Center>
                <Flex w={'50%'}>
                    <FormControl mt="2%" isRequired>
                        <FormLabel htmlFor="email" fontWeight={'normal'}>
                            Endereço de email
                        </FormLabel>
                        <Input
                            id="email"
                            type="email"
                            htmlSize={4}
                            value={data.email || ''}
                            onChange={e =>
                                updateFieldHandler('email', e.target.value)
                            }
                        />
                        <FormHelperText>
                            Nunca compartilharemos seu e-mail.
                        </FormHelperText>
                    </FormControl>
                </Flex>
            </Center>
            <Center>
                <Flex w={'50%'} mt={'2%'}>
                    <FormControl mr={'2%'} isRequired>
                        <FormLabel
                            htmlFor="senha"
                            fontWeight={'password'}
                            mt="2%"
                        >
                            Digite sua senha
                        </FormLabel>
                        <InputGroup size="md">
                            <Input
                                id="senha"
                                pr="4.5rem"
                                type={show ? 'text' : 'password'}
                                placeholder="Senha..."
                                value={data.senha || ''}
                                onChange={e =>
                                    updateFieldHandler('senha', e.target.value)
                                }
                            />
                            <InputRightElement width="4.5rem">
                                <Button
                                    h="1.75rem"
                                    size="sm"
                                    onClick={handleClick}
                                >
                                    {show ? 'Esconder' : 'Mostrar'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel
                            htmlFor="password"
                            fontWeight={'normal'}
                            mt="2%"
                        >
                            Confirme sua senha
                        </FormLabel>
                        <InputGroup size="md">
                            <Input
                                id="confirmSenha"
                                pr="4.5rem"
                                type={confirm ? 'text' : 'password'}
                                placeholder="Senha..."
                                value={data.confirmSenha || ''}
                                onChange={e =>
                                    updateFieldHandler(
                                        'confirmSenha',
                                        e.target.value
                                    )
                                }
                            />
                            <InputRightElement width="4.5rem">
                                <Button
                                    h="1.75rem"
                                    size="sm"
                                    onClick={confirmClick}
                                >
                                    {confirm ? 'Esconder' : 'Mostrar'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                </Flex>
            </Center>
        </>
    );
};
