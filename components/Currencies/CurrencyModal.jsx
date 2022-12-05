import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Text,
  Flex,
  Icon
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { MdClose } from 'react-icons/md'
import { getDefaultCurrency } from '../../lib/settings'
import FormControl from '../FormControl'

const CurrencyModal = ({ isOpen, item, onClose, onSubmit }) => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    defaultValues: getDefaultCurrency(item)
  })
  
  const handleClose = () => {
    reset()
    onClose()
  }

  return (
    <Drawer isOpen={isOpen} onClose={handleClose} size={{base: 'full', lg: 'lg'}}>
      <DrawerOverlay />
      <DrawerContent>
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
              New currency
            </Text>
            <Button
              ml='auto'
              type='submit'
              form='currency-form'
            >
              <Text fontSize='sm'>Create currency</Text>
            </Button>
          </Flex>
        </DrawerHeader>
        
        <DrawerBody>
          <form id='currency-form' onSubmit={handleSubmit(onSubmit)}>
            <Flex gap={2}>
              <FormControl flexBasis='50%' isInvalid={errors?.name}>
                <FormLabel>Name</FormLabel>
                <Input {...register('name', { required: 'This field is required' })} />
                {errors?.name ? (
                  <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl flexBasis='50%' isInvalid={errors?.code}>
                <FormLabel>Code</FormLabel>
                <Input {...register('code', {required: 'This field is required'})} />
                {errors?.code ? (
                  <FormErrorMessage>{errors.code.message}</FormErrorMessage>
                ) : null}
              </FormControl>
            </Flex>
          </form>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default CurrencyModal