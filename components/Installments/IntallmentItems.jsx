import { Td, Tr, Text } from "@chakra-ui/react"
import DotMenu from '../DotMenu'
import { MONTH_IN_MS } from "../../lib/settings"
import { formatCurrency, formatMonth } from "../../lib/formatters"

const InstallmentItems = ({item, onEdit, onDelete}) => (
  <Tr
    key={item.id}
    sx={{
      ':hover': {
        background: 'green.50'
      }
    }}
  >
    <Td>
      <Text>
      {item.title}
      </Text>
      <Text fontSize='sm' fontWeight='light'>
        {item.description}
      </Text>
    </Td>
    <Td>{item.accountId}</Td>
    <Td>{formatMonth(item.firstPaymentDate)}</Td>
    <Td>{formatMonth(+item.firstPaymentDate + (item.installments * MONTH_IN_MS))}</Td>
    <Td isNumeric>{item.installments}</Td>
    <Td isNumeric>{formatCurrency(item.amount, 'USD')}</Td>
    <Td w='50px'>
      <DotMenu 
        data={item}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </Td>
  </Tr> 
)

export default InstallmentItems