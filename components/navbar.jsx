import { useRouter } from 'next/router'
import { Flex } from '@chakra-ui/react'
import Link from 'next/link'
import DynamicIcon from './dynamicIcon'

const routes = [
  {
    to: '/',
    title: 'dashboard',
    icon: 'vsc/VscGraphLine'
  },
  {
    to: '/accounts',
    title: 'account',
    icon: 'md/MdFormatListBulleted'
  },
  {
    to: '/settings',
    title: 'settings',
    icon: 'md/MdSettings'
  },
]

const Navbar = () => {
  const router = useRouter()

  return (
    <Flex 
      direction='column' 
      justify='center' 
      h='100%' 
      borderRight='1px solid' 
      borderColor='gray.300'
    >
      {routes.map((route, index) => (
        <Link key={index} href={route.to} >
          <a>
            <Flex 
              title={`Go to ${route.title}`}
              px='8px'
              py='16px'
              justify='center' 
              align='center' 
              opacity='0.75' 
              bg={router.pathname === route.to ? 'blue.50' : 'inherit'}
              sx={{
                '_hover': {
                  opacity: '1'
                }
              }}
            >
              <DynamicIcon name={route.icon} fill={router.pathname === route.to ? 'black' : 'inherit'}/>
            </Flex>
          </a>
        </Link>
      ))}
    </Flex> 
  )
}

export default Navbar