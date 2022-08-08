import { Flex, Box, Text, Button, List, ListItem, Skeleton, useDisclosure } from '@chakra-ui/react'
import AccountCards from '../components/accountCards'
import AccountModal from '../components/accountModal'
import movements from '../data/movements.json'
import { formatCurrency } from '../lib/formatters'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const onSubmit = (values) => {
    console.log('submit', values);
  }

  return (
    <>
      <AccountModal isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />
      <Flex align='center' mb='16px'>
        <Text fontSize='lg' fontWeight='bold' casing='uppercase' letterSpacing='2px'>
          Your accounts
        </Text>
        <Button 
          ml='auto' 
          opacity='0.75'
          variant='outline'
          colorScheme='blue' 
          title='Add new account'
          sx={{
            '_hover': {
              opacity: '1'
            }
          }}
          onClick={onOpen}
        >
          <Text fontSize='sm'>
            New account
          </Text>
        </Button>
      </Flex>
      <AccountCards />
      <Box mb='64px' />
      <Flex gap='64px'>
        <Box flexBasis='50%'>
          <Text fontSize='lg' fontWeight='bold' mb='16px'>Latest movements</Text>
          <List>
            {movements.slice(0, 5).map(movement => (
              <ListItem key={movement.id} p='8px' borderBottom='1px solid' borderColor='gray.300' >
                <Flex>
                  <Box>
                    <Text fontSize='xs' fontWeight='light'>
                      {movement.title} - {movement.accountId}
                    </Text>
                    <Text>{movement.description}</Text>
                  </Box>
                  <Flex align='center' ml='auto'>
                    <Text>
                      {formatCurrency(movement.amount, 'ARS')}
                    </Text>
                  </Flex>
                </Flex>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flexBasis='50%'>
          <Text fontSize='lg' fontWeight='bold' mb='16px'>Money allocation</Text>
          <Skeleton height='88%' />
        </Box>
      </Flex>
    </>
  )
}
