import * as React from 'react'
import { ChakraProvider, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import 'reset-css'
import Layout from '../components/Layout'
import {theme as extendedTheme} from '../lib/theme'

const client = new QueryClient()

const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'green',
    components: ['Button'],
  }),
  extendedTheme
)

const MyApp = ({ Component, pageProps }) => {
  const [supabase] = React.useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <QueryClientProvider client={client}>
        <ChakraProvider theme={theme}>
          {Component.authPage ? (
            <Component {...pageProps} />
          ): (
            <Layout>
              <Component {...pageProps} />
            </Layout>
            )}
        </ChakraProvider>
      </QueryClientProvider>
    </SessionContextProvider>
  )
}

export default MyApp