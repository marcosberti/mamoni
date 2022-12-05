import {
  Button, 
  Flex, 
  Text, 
  Table, 
  TableContainer, 
  Thead, 
  Tbody,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import * as React from 'react'
import { useRouter } from 'next/router'
import ConfirmModal  from './ConfirmModal'
import { useDelete, usePatch, usePost } from "../hooks/useMutation"
import { MODAL_KEYS } from '../lib/modal'

const SettingsCard = ({
  title, 
  type,
  endpoint,
  buttonTitle, 
  buttonText, 
  items,
  tableHeaders: TableHeaders, 
  tableItems: TableItems,
  modalForm: ModalForm,
  onRefresh,
  ...props
}) => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [currentItem, setCurrentItem] = React.useState()
  const [activeModal, setActiveModal] = React.useState()
  const postMutation = usePost(endpoint)
  const patchMutation = usePatch(endpoint)
  const deleteMutation = useDelete(endpoint)
  const toast = useToast({
    position: 'top-right',
    isClosable: true
  })

  const handleClose = () => {
    setCurrentItem(null)
    onClose()
  }

  const handleOpen = () => {
    onOpen()
  }

  const handleEdit = item => {
    setCurrentItem(item)
    onOpen()
    // setActiveModal(MODAL_KEYS.edit)
  }
  
  const handleDelete = item => {
    setCurrentItem(item)
    setActiveModal(MODAL_KEYS.delete)
  }

  const handleConfirmDelete = () => {
    const { mutate, reset } = deleteMutation
    mutate(currentItem.id, {
      onSuccess() {
        toast({
          title: `${type[0].toUpperCase()}${type.slice(1)} deleted successfully`,
          status: 'success'
        })
        setCurrentItem(null)
        setActiveModal(null)
        reset()
        onRefresh()
      },
      onError(error) {
        if (error.status === 401) {
          router.push('/signin')
        } else {
          toast({
            title: `Oops! couldn't delete the ${type}`,
            status: 'error'
          })
        }
      }
    })
  }

  const handleCancelDelete = () => {
    setCurrentItem(null)
    setActiveModal(null)
  }

  const handleSubmit = values => {
    const { mutate, reset } = currentItem ? patchMutation : postMutation
    const action = currentItem ? 'update' : 'create'
    const data = currentItem ? { ...currentItem, ...values } : values
    
    mutate(data, {
      onSuccess() {
        toast({
          title: `${type[0].toUpperCase()}${type.slice(1)} ${action}d successfully`,
          status: 'success'
        })
        setCurrentItem(null)
        onClose()
        reset()
        onRefresh()
      },
      onError(error) {
        if (error.status === 401) {
          router.push('/signin')
        } else {
          toast({
            title: `Oops! couldn't ${action} the ${type}`,
            status: 'error'
          })
        }
      }
    })
  }

  return (
    <>
      <Flex align='center' mb='16px'>
        <Text fontSize='lg' fontWeight='bold' >
          {title}
        </Text>
        <Button 
          ml='auto' 
          opacity='0.75'
          variant='outline'
          title={buttonTitle}
          onClick={handleOpen}
          sx={{
            '_hover': {
              opacity: '1'
            }
          }}
        >
          <Text fontSize='sm'>
            {buttonText}
          </Text>
        </Button>
      </Flex>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <TableHeaders />
            </Tr>
          </Thead>
          <Tbody>
            {items.map(item => (
              <TableItems
                key={item.id}
                item={item}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {isOpen ? (
        <ModalForm
          isOpen={isOpen}
          item={currentItem}
          onClose={handleClose}
          onSubmit={handleSubmit}
          {...props}
        />
      ) : null}
      {activeModal === MODAL_KEYS.delete ? (
        <ConfirmModal
          isOpen={activeModal === MODAL_KEYS.delete}
          title='Confirm'
          text={`Are you sure you want to delete ${currentItem.name || currentItem.title}?`}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      ) : null}
    </>
  )
}

export default SettingsCard