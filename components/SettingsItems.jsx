import {
  Text,
  Tr,
  Th,
  Td,
  Icon,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { MdMoreVert } from 'react-icons/md'
import { formatCurrency, formatDate, formatMonth } from '../lib/formatters'
import { MONTH_IN_MS, SETTING_TYPES } from '../lib/settings'

const DotMenu = ({data, type, onEdit, onDelete}) => (
  <Menu>
    <MenuButton
      variant='ghost'
      opacity='0.5'
      size='lg'
      as={Button}
      sx={{
        ':hover': {
          opacity: '1',
          background: 'none'
        }
      }}
    >
      <Icon as={MdMoreVert} />
    </MenuButton>
    <MenuList boxShadow='md' py='0' minW='100px'>
      <MenuItem
        p={4}
        onClick={() => onEdit(data, type)}
      >
        Edit
      </MenuItem>
      <MenuItem
        p={4}
        onClick={() => onDelete(data, type)}
      >
        Delete
      </MenuItem>
    </MenuList>
  </Menu>
)

const InstallmentsHeaders = () => (
  <>
    <Th>Title</Th>
    <Th>Account</Th>
    <Th>First Payment</Th>
    <Th>Last Payment</Th>
    <Th isNumeric>Installments</Th>
    <Th isNumeric>Amount</Th>
    <Th />
  </>
)

const InstallmentsItems = ({installment, onEdit, onDelete}) => (
  <Tr
    key={installment.id}
    sx={{
      ':hover': {
        background: 'green.50'
      }
    }}
  >
    <Td>
      <Text>
      {installment.title}
      </Text>
      <Text fontSize='sm' fontWeight='light'>
        {installment.description}
      </Text>
    </Td>
    <Td>{installment.accountId}</Td>
    <Td>{formatMonth(installment.firstPaymentDate)}</Td>
    <Td>{formatMonth(+installment.firstPaymentDate + (installment.installments * MONTH_IN_MS))}</Td>
    <Td isNumeric>{installment.installments}</Td>
    <Td isNumeric>{formatCurrency(installment.amount, 'USD')}</Td>
    <Td w='50px'>
      <DotMenu 
        data={installment}
        type={SETTING_TYPES.installment}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </Td>
  </Tr> 
)

const FixedHeaders = () => (
  <>
    <Th>Title</Th>
    <Th>Account</Th>
    <Th>Since</Th>
    <Th>To</Th>
    <Th isNumeric>Amount</Th>
    <Th />
  </>
)

const FixedItems = ({expense, onEdit, onDelete}) => (
  <Tr
    key={expense.id}
    sx={{
      ':hover': {
        background: 'green.50'
      }
    }}
  >
    <Td>
      <Text>
      {expense.title}
      </Text>
      <Text fontSize='sm' fontWeight='light'>
        {expense.description}
      </Text>
    </Td>
    <Td>{expense.accountId}</Td>
    <Td>{formatDate(expense.beginDate)}</Td>
    <Td>{formatDate(expense.endDate)}</Td>
    <Td isNumeric>{formatCurrency(expense.amount, 'USD')}</Td>
    <Td w='50px'>
      <DotMenu 
        data={expense}
        type={SETTING_TYPES.fixed}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </Td>
  </Tr>
)

export {
  InstallmentsHeaders,
  InstallmentsItems,
  FixedHeaders,
  FixedItems,
}