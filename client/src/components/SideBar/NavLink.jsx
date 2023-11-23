import { Icon, Link as ChakraLink, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function NavLink(props, ...rest) {
    return (
        <Link to={props.href} passHref>
            <ChakraLink display={'flex'} align={'center'} {...rest}>
                <Icon as={props.icon} fontSize={'20'} />
                <Text ml={'4'} fontWeight={'medium'}>
                    {props.children}
                </Text>
            </ChakraLink>
        </Link>
    );
}
