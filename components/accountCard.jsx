import { Flex, Box, Icon, Text } from '@chakra-ui/react'
import { MdArrowRightAlt } from 'react-icons/md'
import Link from 'next/link'
import { formatCurrency } from '../lib/formatters'
import DynamicIcon from './dynamicIcon';

const AccountCard = ({
  id,
  name,
  balance,
  currency,
  color,
  icon
}) => {
  return (
    <Flex
        w='150px'
        h='200px'
        boxShadow='lg'
        rounded='md'
        justify='end' 
        direction='column'
        bgGradient={`linear(to-br, white, ${color}.100)`}
        position='relative'
      minW='150px'
      scrollSnapAlign='start'
      >
        <Flex 
          w='60px' 
          h='60px' 
          align='center'
          justify='center' 
          borderRadius='50%' 
          border='4px solid' 
          borderColor='gray.600'
          position='absolute'
          top='25%'
          left='0'
          right='0'
          mx='auto'
      >
        <DynamicIcon name={icon} size='40px' fill='gray.600' />
      </Flex>
        <Box  
          w='100%' 
          borderTopRadius='10px' 
          borderBottomRadius='6px' 
          textAlign='end' 
          px='16px'
          pb='8px'
        >
          <Text 
            fontSize='sm' 
          fontWeight='light'>{name}</Text>
          <Text 
            fontSize='lg' 
            fontWeight='bold'
          > 
            {formatCurrency(balance, currency)}
          </Text>
          <Link
            href={`/accounts/${id}`}
          >
            <a>
              <Flex align='center' justify='end' color='blue.300'>
                <Text fontSize='sm'>
                  Go to account
                </Text>
                <Icon as={MdArrowRightAlt} />
              </Flex>
            </a>
          </Link>
        </Box>
      </Flex>
  )
}

export default AccountCard