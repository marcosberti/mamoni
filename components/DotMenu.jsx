import { Button, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { MdMoreVert } from "react-icons/md"

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

export default DotMenu