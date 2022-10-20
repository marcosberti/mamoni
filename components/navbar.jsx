import { useRouter } from 'next/router'
import { Flex } from '@chakra-ui/react'
import SafeLink from './SafeLink'
import DinamicIcon from './DinamicIcon'

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

const getIsActiveRoute = (path, routerPath) => {
  const isIndex = path === '/'
  return path === routerPath || (!isIndex && routerPath.includes(path))
}

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
      {routes.map((route) => (
        <SafeLink key={route.to} href={route.to} >
          <Flex 
            title={`Go to ${route.title}`}
            px='8px'
            py='16px'
            justify='center' 
            align='center' 
            opacity='0.75' 
            bg={getIsActiveRoute(route.to, router.pathname) ? 'green.50' : 'inherit'}
            sx={{
              '_hover': {
                opacity: '1'
              }
            }}
          >
            <DinamicIcon name={route.icon} fill={getIsActiveRoute(route.to, router.pathname) ? 'black' : 'inherit'}/>
          </Flex>
        </SafeLink>
      ))}
    </Flex> 
  )
}

export default Navbar