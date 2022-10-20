import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { MdArrowRightAlt } from 'react-icons/md'
import DinamicIcon from './DinamicIcon'
import SafeLink from './SafeLink'
import { formatCurrency } from '../lib/formatters'

const Card = ({ id, icon, name, amount, currency, color, linkTo, h = '200px', linkToLabel }) => {
  return (
    <Flex
      w='150px'
      h={h}
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
        <DinamicIcon name={icon} size='40px' fill='gray.600' />
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
          {formatCurrency(amount, currency)}
        </Text>
        {(linkTo && id) ? (
          <SafeLink
            href={`/${linkTo}/${id}`}
          >
            <Flex align='center' justify='end' color='blue.300'>
              <Text fontSize='sm'>
                Go to {linkToLabel}
              </Text>
              <Icon as={MdArrowRightAlt} />
            </Flex>
          </SafeLink>
        ) : null}
      </Box>
    </Flex>
  )
}

export default Card