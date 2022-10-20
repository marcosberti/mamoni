import * as React from 'react'
import { useToast } from "@chakra-ui/react"
import { usePatch, usePost } from "../../hooks/useMutation"
import SettingsCard from "../SettingsCard"
import CurrencyHeaders from "./CurrencyHeaders"
import CurrencyItems from "./CurrencyItems"
import CurrencyModal from "./CurrencyModal"

const Currencies = ({ currencies }) => {
  const [currentCurrency, setCurrentCurrency] = React.useState()
  const postMutation = usePost('currencies')
  const patchMutation = usePatch('currencies')
  const toast = useToast({
    position: 'top-right',
    isClosable: true
  })

  const handleEdit = currency => { 
    // setmodaltype(MODAL_TYPES.edit)
    setCurrentCurrency(currency)
  }
  
  const handleDelete = currency => { 
    setCurrentCurrency(currency)
  }
  
  const handleSubmit = values => {
    const { mutate, reset } = currentCurrency ? patchMutation : postMutation
    const action = currentCurrency ? 'update' : 'create'
    mutate(values, {
      onSuccess() {
        toast({
          title: `Currency ${action}d successfully`,
          status: 'success'
        })
        reset()
      },
      onError() {
        toast({
          title: `Oops! couldn't ${action} the currency`,
          status: 'error'
        })
      }
    })
  }

  return (
    <SettingsCard
      title='Currencies'
      buttonTitle='Add new currency' 
      buttonText='New currency' 
      tableHeaders={<CurrencyHeaders />}
      tableItems={currencies.map(currency => (
        <CurrencyItems
          key={currency.id}
          currency={currency}
          onEdit={handleEdit}
          onDelete={handleDelete}   
        />
      ))}
    >
      {(isModalOpen, onModalClose) => (
        <CurrencyModal
          isOpen={isModalOpen} 
          onClose={onModalClose} 
          onSubmit={handleSubmit} 
        />
      )}
    </SettingsCard>
  )
}

export default Currencies