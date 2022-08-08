import {
  Flex,
  Button,
  Text,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import currencies from '../data/currencies.json'
import installments from '../data/installments.json'
import fixed from '../data/fixed.json'
import { formatCurrency, formatDate } from '../lib/formatters'

const Settings = () => {
  return (
    <>
      <Flex align='center' mb='16px'>
        <Text fontSize='lg' fontWeight='bold' >
          Currencies
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
        >
          <Text fontSize='sm'>
            New currency
          </Text>
        </Button>
      </Flex>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Code</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currencies.map(currency => (
              <Tr key={currency.id}>
                <Td>{currency.name}</Td>
                <Td>{currency.code}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Divider my='32px' mx='auto' width='30%' />
      <Flex align='center' mb='16px'>
        <Text fontSize='lg' fontWeight='bold' >
          Installments
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
        >
          <Text fontSize='sm'>
            New installment
          </Text>
        </Button>
      </Flex>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>First Payment</Th>
              <Th>Installments</Th>
              <Th isNumeric>Amount</Th>
              <Th>Account</Th>
            </Tr>
          </Thead>
          <Tbody>
            {installments.map(installment => (
              <Tr key={installment.id}>
                <Td>
                  <Text>
                  {installment.title}
                  </Text>
                  <Text fontSize='sm' fontWeight='light'>
                    {installment.description}
                  </Text>
                </Td>
                <Td>{formatDate(installment.beginDate)}</Td>
                <Td>{installment.installments}</Td>
                <Td isNumeric>{formatCurrency(installment.amount, 'USD')}</Td>
                <Td>{installment.accountId}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Divider my='32px' mx='auto' width='30%' />
      <Flex align='center' mb='16px'>
        <Text fontSize='lg' fontWeight='bold' >
          Fixed Expenses
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
        >
          <Text fontSize='sm'>
            New expense
          </Text>
        </Button>
      </Flex>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Since</Th>
              <Th>To</Th>
              <Th isNumeric>Amount</Th>
              <Th>Account</Th>
            </Tr>
          </Thead>
          <Tbody>
            {fixed.map(expense => (
              <Tr key={expense.id}>
                <Td>
                  <Text>
                  {expense.title}
                  </Text>
                  <Text fontSize='sm' fontWeight='light'>
                    {expense.description}
                  </Text>
                </Td>
                <Td>{formatDate(expense.beginDate)}</Td>
                <Td>{formatDate(expense.endDate)}</Td>
                <Td isNumeric>{formatCurrency(expense.amount, 'USD')}</Td>
                <Td>{expense.accountId}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Settings