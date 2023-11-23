import { Box, Button, Flex, Heading, Icon } from '@chakra-ui/react';
import { SideBar } from '../../components/SideBar/SideBar';
import { Header } from '../../components/Header';
import { RiAddLine } from 'react-icons/ri';
import { Input } from '../Cadastro/components';

export function Teste() {
    return (
        <Box>
            <Header />
            <Flex w={'full'} my={'3'} mx={'auto'} px={'1'}>
                <SideBar />

                <Box
                    flex={'1'}
                    borderRadius={'2xl'}
                    bg={'white'}
                    p={8}
                    boxShadow={'0 4px 12px 0 rgba(0,0,0.5)'}
                >
                    <Flex mb={'8'} justify={'space-between'} align={'center'}>
                        <Heading size={'lg'} fontWeight={'normal'}>
                            Teste
                        </Heading>
                        <Button
                            as={'a'}
                            size={'sm'}
                            fontSize={'sm'}
                            colorScheme={'blue'}
                            leftIcon={<Icon as={RiAddLine} />}
                        >
                            Criar novo cadastro
                        </Button>

                        <Input />
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}
