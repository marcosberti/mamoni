import { Flex, Box, Text, List, ListItem, Skeleton } from '@chakra-ui/react'
import Card from '../components/Card'
import accounts from '../data/accounts.json'
import movements from '../data/movements.json'
import { formatCurrency } from '../lib/formatters'

const Home = () => {
  return (
    <>
      <Flex align='center' mb='16px'>
        <Text fontSize='lg' fontWeight='bold' casing='uppercase' letterSpacing='2px'>
          Your accounts
        </Text>
      </Flex>
      <Flex gap='24px' overflowX='auto' scrollSnapType='x mandatory'>
        {accounts.map(account => (
          <Card 
            key={account.id}
            id={account.id}
            name={account.name}
            amount={account.balance}
            currency={account.currency}
            color={account.color}
            icon={account.icon}
            linkTo='accounts'
            linkToLabel='account'
          />
        ))}
      </Flex>
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

export default Home
