import {
  Box,
  Flex,
  Icon,
  Text,
  List,
  ListItem,
  StatArrow,
  Stat,
  StatNumber,
  Button,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import {MdMoreVert} from 'react-icons/md'
import SafeLink from '../../components/SafeLink'
import categories from '../../data/categories.json'
import movements from '../../data/movements.json'
import Card from '../../components/Card'
import DinamicIcon from '../../components/DinamicIcon'
import {formatCurrency, formatDate} from '../../lib/formatters'

const Account = ({movements, sumarized}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  const handleEdit = () => {
    console.log('edittttt')
  }

  const handleDelete = () => {
    console.log('delelte')
  }

  return (
    <Box>
      <Box mb="16px">
        <SafeLink href="/accounts">
          <Flex align="center" gap="8px" role="group">
            <Icon as={HiOutlineArrowNarrowLeft} w="12px" h="12px" />
            <Text _groupHover={{textDecoration: 'underline'}}>
              Back to accounts
            </Text>
          </Flex>
        </SafeLink>
      </Box>
      <Flex gap="32px" mb="32px">
        {sumarized.map(s => (
          <Card
            key={s.id}
            h="170px"
            name={s.name}
            icon={s.icon}
            color={s.color}
            amount={s.amount}
            currency={s.currency}
          />
        ))}
      </Flex>
      <Flex justify="flex-end" mb="16px">
        dates filters
        <Button
          opacity="0.75"
          variant="outline"
          colorScheme="green"
          title="Add new movement"
          sx={{
            _hover: {
              opacity: '1',
            },
          }}
          onClick={onOpen}
        >
          <Text fontSize="sm">New movement</Text>
        </Button>
      </Flex>
      <List pb="16px" overflowY="auto" h="50vh">
        {movements.map(movement => (
          <ListItem
            key={movement.id}
            borderBottom="1px solid"
            borderColor="gray.300"
            role="group"
          >
            <Flex align="center">
              <Box flexBasis="95%">
                <Button
                  variant="ghost"
                  p="16px"
                  w="100%"
                  h="auto"
                  textAlign="start"
                  onClick={handleEdit}
                >
                  <Box color={`${movement.category.color}.300`}>
                    <DinamicIcon name={movement.category.icon} />
                  </Box>
                  <Box ml="16px">
                    <Text fontSize="xs" fontWeight="light">
                      {movement.description}
                    </Text>
                    <Text fontWeight="bold">{movement.title}</Text>
                    <Text fontSize="sm">
                      {formatDate(movement.date, 'short')}
                    </Text>
                  </Box>
                  <Box ml="auto">
                    <Stat>
                      <StatNumber fontSize="xl">
                        <StatArrow type="decrease" />
                        {formatCurrency(
                          movement.amount,
                          movement.account.currency.code
                        )}
                      </StatNumber>
                    </Stat>
                  </Box>
                </Button>
              </Box>
              <Menu>
                <MenuButton
                  as={IconButton}
                  p="0"
                  mx="auto"
                  variant="ghost"
                  visibility="hidden"
                  _groupHover={{visibility: 'revert'}}
                  icon={<Icon as={MdMoreVert} w="24px" h="24px" />}
                />
                <MenuList minW="8rem">
                  <MenuItem onClick={() => handleEdit(movement)}>Edit</MenuItem>
                  <MenuItem
                    color="red.400"
                    onClick={() => handleDelete(movement.id)}
                  >
                    Delete
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export function getServerSideProps() {
  const sumarized = movements.reduce((acc, movement) => {
    let category = acc.find(a => a.id === movement.categoryId)
    if (!category) {
      const catData = categories.find(c => c.id === movement.categoryId)
      category = {
        ...catData,
        amount: 0,
        currency: 'ARS',
      }
      acc.push(category)
    }

    category.amount += movement.amount
    return acc
  }, [])

  return {
    props: {
      movements: movements.map(movement => {
        const {name, icon, color} = categories.find(
          c => c.id === movement.categoryId
        )
        return {
          ...movement,
          account: {
            currency: {
              code: 'ARS',
            },
          },
          category: {
            name,
            icon,
            color,
          },
        }
      }),
      sumarized,
    },
  }
}

export default Account
