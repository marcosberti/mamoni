import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Button,
  Text,
  Flex,
  Link,
  Icon
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { MdClose } from 'react-icons/md'
import FormControl from './FormControl'
import currencies from '../data/currencies.json'

const COLORS = ['Red', 'Orange', 'Yellow', 'Green', 'Teal', 'Blue', 'Cyan', 'Purple', 'Pink']

const AccountModal = ({ isOpen, onClose, onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const handleClose = () => {
    reset()
    onClose()
  }

  return (
    <Drawer isOpen={isOpen} onClose={handleClose} size={{base: 'full', lg: 'lg'}}>
      <DrawerOverlay />
      <DrawerContent >
        <DrawerHeader borderBottom='1px solid' borderColor='gray.300'>
          <Flex align='center'>
            <Button
              mt={1}
              minW='auto'
              variant='link'
              onClick={handleClose}
            >
              <Icon as={MdClose} w={6} h={6} />
            </Button>
            <Text ml={2}>
              New account
            </Text>
            <Button
              ml='auto'
              colorScheme='green' 
              type='submit'
              form='accoutn-form'
            >
              <Text fontSize='sm'>Create account</Text>
            </Button>
          </Flex>
        </DrawerHeader>
        {/* <DrawerCloseButton /> */}

        <DrawerBody>
          <form id='accoutn-form' onSubmit={handleSubmit(onSubmit)}>
            <Flex gap='16px' mb='16px'>
              <FormControl flexBasis='50%' isInvalid={errors.name}>
                <FormLabel fontSize='sm'>Name</FormLabel>
                <Input
                  {...register('name', {required: true})}
                />
                {errors.name ? (
                  <FormErrorMessage>This field is required</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl flexBasis='50%' isInvalid={errors.currency}>
                <FormLabel fontSize='sm'>Currency</FormLabel>
                <Select {...register('currency', { required: true })}>
                  {currencies.map(currency => (
                    <option key={currency.id} value={currency.code}>{currency.name}</option>
                  ))}
                </Select>
              </FormControl>
            </Flex>
            <Flex gap='16px'>
              <FormControl flexBasis='50%' isInvalid={errors.icon}>
                <FormLabel fontSize='sm'>Icon</FormLabel>
                  <Input {...register('icon', {required: true})}/>
                  {errors.icon ? (
                    <FormErrorMessage>This field is required</FormErrorMessage>
                  ) : (
                    <FormHelperText>
                      Search the icon in <Link href='https://react-icons.github.io/react-icons' isExternal>this page</Link>
                    </FormHelperText>
                  )}
              </FormControl>
              <FormControl flexBasis='50%' isInvalid={errors.color}>
                <FormLabel fontSize='sm'>Color</FormLabel>
                  <Select {...register('color', { required: true })}>
                  {COLORS.map(color => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                  </Select>
              </FormControl>
            </Flex>
          </form>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default AccountModal