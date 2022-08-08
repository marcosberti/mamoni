import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Button,
  Text,
  Flex,
  Link
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import currencies from '../data/currencies.json'

const COLORS = ['Red', 'Orange', 'Yellow', 'Green', 'Teal', 'Blue', 'Cyan', 'Purple', 'Pink']

const AccountModal = ({ isOpen, onClose, onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const handleClose = () => {
    reset()
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size='form'>
      <ModalOverlay />
      <ModalContent >
        <ModalHeader borderBottom='1px solid' borderColor='gray.300'>
          <Flex align='center'>
            New account
            <Button
              ml='auto'
              colorScheme='blue' 
              type='submit'
              form='accoutnForm'
            >
              <Text fontSize='sm'>Create account</Text>
            </Button>
          </Flex>
        </ModalHeader>
        {/* <ModalCloseButton /> */}

        <ModalBody>
          <form id='accoutnForm' onSubmit={handleSubmit(onSubmit)}>
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
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AccountModal