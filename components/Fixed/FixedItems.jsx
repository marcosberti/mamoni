import { Td, Tr, Text } from "@chakra-ui/react"
import DotMenu from '../DotMenu'
import { formatCurrency, formatDate } from "../../lib/formatters"

const FixedItems = ({item, onEdit, onDelete}) => (
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
    <Td>{formatDate(item.beginDate)}</Td>
    <Td>{formatDate(item.endDate)}</Td>
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

export default FixedItems