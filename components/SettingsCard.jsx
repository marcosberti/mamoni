import {
  Button, 
  Flex, 
  Text, 
  Table, 
  TableContainer, 
  Thead, 
  Tbody,
  Tr,
  useDisclosure,
} from "@chakra-ui/react"

const SettingsCard = ({
  title, 
  buttonTitle, 
  buttonText, 
  tableHeaders, 
  tableItems,
  children
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOpen = () => {
    onOpen()
  }

  return (
    <>
      <Flex align='center' mb='16px'>
        <Text fontSize='lg' fontWeight='bold' >
          {title}
        </Text>
        <Button 
          ml='auto' 
          opacity='0.75'
          variant='outline'
          colorScheme='green' 
          title={buttonTitle}
          onClick={handleOpen}
          sx={{
            '_hover': {
              opacity: '1'
            }
          }}
        >
          <Text fontSize='sm'>
            {buttonText}
          </Text>
        </Button>
      </Flex>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              {tableHeaders}
            </Tr>
          </Thead>
          <Tbody>
            {tableItems}
          </Tbody>
        </Table>
      </TableContainer>
      {children(isOpen, onClose)}
    </>
  )
}

export default SettingsCard