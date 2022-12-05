import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Button,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import { MdClose } from 'react-icons/md'
import { getDefaultInstallment } from '../../lib/settings'
import FormControl from '../FormControl'

const InstallmentModal = ({ accounts, item, isOpen, onClose, onSubmit }) => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    defaultValues: getDefaultInstallment(item)
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
              New installment expense
            </Text>
            <Button
              ml='auto'
              type='submit'
              form='intallment-form'
            >
              <Text fontSize='sm'>Create expense</Text>
            </Button>
          </Flex>
        </DrawerHeader>
        
        <DrawerBody>
          <form id='intallment-form' onSubmit={handleSubmit(onSubmit)}>
            <Flex gap={2} mb={4}>
              <FormControl flexBasis='50%' isInvalid={errors?.title}>
                <FormLabel>Title</FormLabel>
                <Input {...register('title', { required: 'This field is required' })} />
                {errors?.title ? (
                  <FormErrorMessage>{errors.title.message}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl flexBasis='50%' isInvalid={errors?.description}>
                <FormLabel>Description</FormLabel>
                <Input {...register('description', {required: 'This field is required'})} />
                {errors?.description ? (
                  <FormErrorMessage>{errors.description.message}</FormErrorMessage>
                ) : null}
              </FormControl>
            </Flex>

            <Flex gap={2} mb={4}>
              <FormControl flexBasis='50%' isInvalid={errors?.amount}>
                <FormLabel>Amount</FormLabel>
                <Input type='number' {...register('amount', {
                  validate: value => {
                    if (!value) {
                      return 'This field is required'
                    }

                    if (value <= 0) {
                      return 'Value must be greater than 0'
                    }

                    return null
                  }})} 
                />
                {errors?.amount ? (
                  <FormErrorMessage>{errors.amount.message}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl flexBasis='50%' isInvalid={errors?.accountId}>
                <FormLabel>Account</FormLabel>
                <Select borderColor='gray.400' {...register('accountId', {
                  validate: value => {
                    if (value === 'default') {
                      return 'This field is required'
                    }

                    return null
                  }})}
                >
                  <option value="default">Select an account</option>
                  {accounts.map(a => (
                    <option key={a.id} value={a.id}>{a.name}</option>
                  ))}
                </Select>
                {errors?.accountId ? (
                  <FormErrorMessage>{errors.accountId.message}</FormErrorMessage>
                ) : null}
              </FormControl>
            </Flex>

            <Flex gap={2}>
              <FormControl flexBasis='50%' isInvalid={errors?.firstPaymentDate}>
                <FormLabel>First payment date</FormLabel>
                <Input type='date' {...register('firstPaymentDate', { required: 'This field is required' })} />
                {errors?.firstPaymentDate ? (
                  <FormErrorMessage>{errors.firstPaymentDate.message}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl flexBasis='50%' isInvalid={errors?.installments}>
                <FormLabel>Installments</FormLabel>
                <Input type='number' {...register('installments', {
                  validate: value => {
                    if (!value) {
                      return 'This field is required'
                    }

                    if (value <= 0) {
                      return 'Value must be greater than 0'
                    }

                    return null
                  }})}
                />
                {errors?.installments ? (
                  <FormErrorMessage>{errors.installments.message}</FormErrorMessage>
                ) : null}
              </FormControl>
            </Flex>
          </form>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default InstallmentModal