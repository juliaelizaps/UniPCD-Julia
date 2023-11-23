import { chakra, shouldForwardProp } from '@chakra-ui/react';

export const Input = chakra('input', {
    shouldForwardProp: prop => {
        const isChakraProp = !shouldForwardProp(prop);

        if (isChakraProp) {
            return ['simple', 'big'].includes(prop);
        }
    },
    baseStyle: {
        width: '20%',
        height: '40px',
        borderRadius: '10px',
        border: '1px solid #D7D7D7',
        padding: '0 16px',
        color: '#666360',
        _placeholder: {
            color: '#666360',
        },
    },
});
