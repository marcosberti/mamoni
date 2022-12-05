import * as React from 'react'
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Box, Button, Flex, FormControl, FormLabel, Input, Text, useToast } from "@chakra-ui/react"
import { useForm } from 'react-hook-form'

const SignIn = () => {
  const router = useRouter()
  const supabase = useSupabaseClient()
  const [isLoading, setIsLoading] = React.useState(false)
  const { register, handleSubmit, setValue, formState: {errors}} = useForm()
  const toast = useToast({
    position: 'top-right',
    status: 'error',
    isClosable: true
  })

  const handleFormSubmit = async (values) => {
    setIsLoading(true)

    const { email, password} = values
    const {error} = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setIsLoading(false)

    if (error) {
      setValue('password', null)
      toast({
        title: error.message
      })
    } else {
      router.push(router.query.redirectedFrom ?? '/')
    }
  }

  return (
    <Flex h='100%'>
      <Flex h='100%' justify='center' align='center' flexBasis='40%' >
        <Box w='60%'>
          <Text fontSize='2xl' fontWeight='bold' color='gray.800' >u bck mafren</Text>
          <Text fontSize='sm' fontWeight='semibold' color='gray.700' >Sign in into your account</Text>
          <Box mt={8}>
          <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
            <FormControl isInvalid={errors.email?.message}>
              <FormLabel>Username</FormLabel>
                <Input type='email' placeholder="me@mail.com" {...register('email', { required: 'This field is required' })} />
            </FormControl>
            <FormControl isInvalid={errors.password?.message}>
              <FormLabel>
                <Flex justify='space-between' align='center'>
                  <Text as='span'>Password</Text>
                  <Text as='span' fontSize='xs' color='gray.600'>Forgot password?</Text>
                </Flex>
              </FormLabel>
              <Input type='password' placeholder='••••••••' {...register('password', {required: 'This field is required'})} />
            </FormControl>
            <Button type='submit' w='100%' isLoading={isLoading}>Login</Button>
          </form>
          </Box>
        </Box>
      </Flex>
      <Flex h='100%' flexBasis='60%' bg='gray.600' />
    </Flex>
  )
}

SignIn.authPage = true

export default SignIn