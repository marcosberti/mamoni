import {FormControl as ChakraFormControl} from '@chakra-ui/react'

const FormControl = ({children, ...props}) => (
  <ChakraFormControl mt={4} borderColor='gray.400' {...props}>
    {children}
  </ChakraFormControl>
)

export default FormControl 