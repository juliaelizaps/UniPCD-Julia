import { Box, Stack, Text } from '@chakra-ui/react';

export function NavSection(props) {
    return (
        <Box>
            <Text fontWeight="bold" color="gray.900" fontSize="small"></Text>
            {props.title}
            <Stack spacing="4" mt="8" align="stretch">
                {props.children}
            </Stack>
        </Box>
    );
}
