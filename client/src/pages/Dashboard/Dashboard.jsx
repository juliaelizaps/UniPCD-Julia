import { Box, Button, Flex, Heading, Icon } from '@chakra-ui/react';
import { SideBar } from '../../components/SideBar/SideBar';
import { Header } from '../../components/Header';
import { RiAddLine } from 'react-icons/ri';

export function Dashboard() {
    return (
        <Box>
            <Header />
            <Flex w={'99%'} my={'3'} h={'98%'} mx={'auto'} px={'1'}>
                <SideBar />

                <Box flex={'1'} borderRadius={'2xl'} bg={'white'} p={8}>
                    <Flex mb={'10'} justify={'space-between'} align={'center'}>
                        <Heading size={'lg'} fontWeight={'normal'}>
                            Deshboard
                        </Heading>
                        <Button
                            as={'a'}
                            size={'sm'}
                            fontSize={'sm'}
                            colorScheme={'blue'}
                            leftIcon={<Icon as={RiAddLine} />}
                        >
                            Criar novo
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}
