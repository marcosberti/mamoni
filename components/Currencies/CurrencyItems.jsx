import { Td, Tr } from "@chakra-ui/react"
import DotMenu from '../DotMenu'
import { SETTING_TYPES } from "../../lib/settings"

const CurrencyItems = ({currency, onEdit, onDelete}) => (
  <Tr
    sx={{
      ':hover': {
        background: 'green.50'
      }
    }}
  >
    <Td>{currency.name}</Td>
    <Td>{currency.code}</Td>
    <Td w='50px'>
      <DotMenu
        data={currency}
        type={SETTING_TYPES.currency}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </Td>
  </Tr>
)

export default CurrencyItems