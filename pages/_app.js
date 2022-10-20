import { ChakraProvider, extendTheme, Grid, GridItem } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'reset-css'
import Navbar from '../components/Navbar'

const client = new QueryClient()

const theme = extendTheme({
  colors: {
    gray: {
      100: '#F5f5f5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  styles: {
    global: {
      '&::-webkit-scrollbar': {
        w: '2',
        h: '2',
      },
      '&::-webkit-scrollbar-track': {
        w: '6',
        h: '6',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '10',
        bg: `gray.300`,
      }
    }
  },
  components: {
    FormLabel: {
      baseStyle: {
        px: '1',
        bg: 'white',
        left: '8px',
        zIndex: '2',
        top: '-10px',
        fontSize: 'sm',
        w: 'fit-content',
        color: 'gray.700',
        position: 'absolute',
      }
    },
  }
})

const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={client}>
    <ChakraProvider theme={theme}>
      <Grid templateColumns={{ base: '1fr', lg: '80px auto' }} templateRows='150px auto' h='100vh' color='gray.600'>
        <GridItem rowSpan={2} colSpan={1} display={{ base: 'none', lg: 'revert'}}>
          <Navbar />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} />
        <GridItem rowSpan={1} colSpan={1} overflow='hidden' px='64px' overflowY='auto' >
          <Component {...pageProps} />
        </GridItem>
      </Grid>
    </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp