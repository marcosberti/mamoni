import {
  Box,
  Flex,
  Text,
  Icon,
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  List,
  ListItem
 } from '@chakra-ui/react'
import { MdMoreVert } from 'react-icons/md';
import SafeLink from '../../components/SafeLink'
import AccountModal from '../../components/AccountModal'
import DinamicIcon from '../../components/DinamicIcon';
import accountsData from '../../data/accounts.json'
import { formatCurrency } from '../../lib/formatters';

const Accounts = ({ accounts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleEdit = account => {
    console.log('account', account);
  }

  const handleSubmit = (values) => {
    console.log('values', values);
  }

  const handleDelete = (id) => {

  }

  return (
    <>
      <AccountModal isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} />
      <Flex
        mb='16px'
        justify='flex-end'
      >
        <Button 
          opacity='0.75'
          variant='outline'
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
      <List>
        {accounts.map(account => (
          <ListItem key={account.id} mb='32px'>
            <Flex
              boxShadow='lg'
              rounded='md'
              bgGradient={`linear(to-br, white, ${account.color}.100)`}
              role='group'
              align='center'
            >
              <Box flexBasis='95%'>
                <SafeLink href={`/accounts/${account.id}`}>
                  <Flex
                    p='16px'
                    pr='0'
                    gap='16px'
                    align='center'
                    cursor='pointer'
                  >
                    <Flex 
                      w='60px' 
                      h='60px' 
                      align='center'
                      justify='center' 
                      borderRadius='50%' 
                      border='4px solid' 
                      borderColor='gray.600'
                    >
                      <DinamicIcon name={account.icon} size='40px' fill='gray.600' />
                    </Flex>
                    <Box maxW='40ch'>
                      <Text fontSize='lg' fontWeight='bold' textTransform='capitalize'>
                        {account.name}
                      </Text>
                      <Text fontSize='sm' fontWeight='light'>
                        {account.description}
                      </Text>
                    </Box>
                    <Flex direction='column' ml='auto' align='flex-end'>
                      <Stat title='Income'>
                        <StatLabel fontSize='xs' fontWeight='light' textAlign='end'>This month</StatLabel>
                        <StatNumber>
                          <StatArrow type='increase' /> {formatCurrency(account.income, 'ARS')}
                        </StatNumber>
                      </Stat>
                      <Stat title='Spent'>
                        <StatNumber>
                          <StatArrow type='decrease' /> {formatCurrency(account.spent, 'ARS')}
                        </StatNumber>
                      </Stat>
                    </Flex>
                  </Flex>
                </SafeLink>
              </Box>
              <Menu size='sm'>
                <MenuButton
                  as={IconButton}
                  p='0'
                  mx='auto'
                  variant='ghost' 
                  colorScheme={account.color} 
                  visibility='hidden' 
                  _groupHover={{ visibility: 'revert' }}
                  icon={<Icon as={MdMoreVert} w='24px' h='24px' />}
                />
                <MenuList minW='8rem'>
                  <MenuItem onClick={() => handleEdit(account)}>Edit</MenuItem>
                  <MenuItem color='red.400' onClick={() => handleDelete(account.id)}>Delete</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export function getServerSideProps() {
  return {
    props: {
      accounts: accountsData.map(account => ({
        ...account,
        income: 178500,
        spent: 150000
      }))
    }
  }
}

export default Accounts