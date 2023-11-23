import { Center, Flex, Heading, Text } from '@chakra-ui/react';

const Form4 = ({ data }) => {
    return (
        <>
            <Flex>
                <Center h={'100px'}>
                    <Heading
                        mt={'20%'}
                        ml={'20%'}
                        textAlign={'center'}
                        fontWeight="normal"
                        mb="10%"
                    >
                        Verifique os dados estão corretos antes de cadastrar{' '}
                    </Heading>
                </Center>
            </Flex>
            <Flex w={'50%'} mt={'10%'}>
                <Text>Nome: {data.name}</Text>
            </Flex>
            <Flex w={'50%'}>
                <Text>Cpf: {data.cpf}</Text>
            </Flex>
            <Flex w={'50%'}>
                <Text>Data Nascimento: {data.birth}</Text>
            </Flex>
            <Flex w={'50%'}>
                <Text>E-mail: {data.email}</Text>
            </Flex>
            <Flex w={'50%'}>
                <Text>Senha: {data.senha}</Text>
            </Flex>
        </>
    );
};

export default Form4;
