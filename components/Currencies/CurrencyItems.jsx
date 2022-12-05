import { Td, Tr } from "@chakra-ui/react"
import DotMenu from '../DotMenu'

const CurrencyItems = ({item, onEdit, onDelete}) => (
  <Tr
    sx={{
      ':hover': {
        background: 'green.50'
      }
    }}
  >
    <Td>{item.name}</Td>
    <Td>{item.code}</Td>
    <Td w='50px'>
      <DotMenu
        data={item}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </Td>
  </Tr>
)

export default CurrencyItems