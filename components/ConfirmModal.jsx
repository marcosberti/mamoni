import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react'

const ConfirmModal = ({isOpen, title, text, onConfirm, onCancel}) => (
  <Modal isCentered isOpen={isOpen} onClose={onCancel}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        {title}
      </ModalHeader>
      <ModalBody>
        {text}
      </ModalBody>
      <ModalFooter>
        <Button
          variant='solid'
          colorScheme='green'
          fontSize='sm'
          onClick={onConfirm}
        >
          Confirm
        </Button>
        <Button
          ml={2}
          variant='outline'
          colorScheme='green'
          fontSize='sm'
          onClick={onCancel}
        >
          Cancel
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)

export default ConfirmModal