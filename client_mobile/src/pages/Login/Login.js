import { Button, Input, VStack } from 'native-base'
import { Alert } from '../../components/Alert'

export function Login() {
    return (
        <VStack space={4} p={4}>
          <Input 
            variant="underlined" 
            placeholder="User"
            w="100%"
            size="lg"
          />
          <Input
            variant="underlined" 
            placeholder="Password" 
            w="100%"
            size="lg"
            type="password"
          />
          <Button size="lg">Teste</Button>
          <Alert
            title="Erro muito loco"
            description="Usuário ou senha incorretos"
            status="error"
          />
          <Alert 
            title="Teste de informação"
            description="Usuário ou senha incorretos"
            status="info"
          />
      </VStack>
    )
}