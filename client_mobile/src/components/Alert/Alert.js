// import { StatusBar } from 'expo-status-bar';
import { Box, VStack, Center, Alert as BaseAlert, HStack, IconButton, CloseIcon, Text } from 'native-base'

export function Alert({ title, description, status}) {
  return <Center>
      <VStack space={5} maxW="400">
        <BaseAlert w="100%" status={status}>
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={1} alignItems="center" justifyContent="space-between">
              <HStack space={2} flexShrink={1} alignItems="center">
                <BaseAlert.Icon />
                <Text fontSize="md" fontWeight="medium" _dark={{
                color: "coolGray.800"
              }}>
                  { title }
                </Text>
              </HStack>
              <IconButton variant="unstyled" _focus={{
              borderWidth: 0
            }} icon={<CloseIcon size="3" />} _icon={{
              color: "coolGray.600"
            }} />
            </HStack>
            <Box pl="6" _dark={{
            _text: {
              color: "coolGray.600"
            }
          }}>
              { description }
            </Box>
          </VStack>
        </BaseAlert>
      </VStack>
    </Center>;
}