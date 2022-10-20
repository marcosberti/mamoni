
import * as React from 'react'
import { Box, useDisclosure } from '@chakra-ui/react'
import SettingsCard from '../components/SettingsCard'
import InstallmentsModal from '../components/InstallmentsModal'
import FixedModal from '../components/FixedModal'
import ConfirmModal from '../components/ConfirmModal'
import Currencies from '../components/Currencies'
import {
  FixedHeaders, 
  FixedItems, 
  InstallmentsHeaders, 
  InstallmentsItems
} from '../components/SettingsItems'
import { usePost } from '../hooks/useMutation'
import currenciesData from '../data/currencies.json'
import installmentsData from '../data/installments.json'
import fixedData from '../data/fixed.json'
import accountsData from '../data/accounts.json'
import { ACTIONS } from '../lib/settings'

const Settings = ({ currencies, installments, fixedExpenses, accounts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [entity, setEntity] = React.useState()

  const handleInstallmentSubmit = values => {
    console.log('', values);
  }

  const handleFixedSubmit = values => {
    console.log('', values);
  }

  const handleEdit = (data, type) => {
    setEntity({
      data,
      type,
      action: ACTIONS.edit,
    })
    // onOpen()
  }

  const handleDelete = (data, type) => {
    setEntity({
      data,
      type,
      action: ACTIONS.delete,
    })
    onOpen()
  }

  const handleConfirm = () => {

  }

  const handleCancel = () => {
    setEntity(null)
    onClose()
  }


  return (
    <>
      <Currencies currencies={currencies} />
      <Box mb={6} />
      <SettingsCard
        title='Installments expenses'
        buttonTitle='Add new intallment expense' 
        buttonText='New installment expense' 
        tableHeaders={<InstallmentsHeaders />}
        tableItems={installments.map(installment => (
          <InstallmentsItems
            key={installment.id}
            installment={installment} 
            onEdit={handleEdit}
            onDelete={handleDelete}   
          />
        ))}
      >
        {(isModalOpen, onModalClose) => (
          <InstallmentsModal 
            isOpen={isModalOpen} 
            accounts={accounts} 
            onClose={onModalClose}
            onSubmit={handleInstallmentSubmit}   
          />
        )}
      </SettingsCard>
      <Box mb={6} />
      <SettingsCard
        title='Fixed Expenses'
        buttonTitle='Add new fixed expense' 
        buttonText='New fixed expense' 
        tableHeaders={<FixedHeaders />}
        tableItems={fixedExpenses.map(expense => (
          <FixedItems
            key={expense.id}
            expense={expense} 
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      >
        {(isModalOpen, onModalClose) => (
          <FixedModal 
            isOpen={isModalOpen} 
            accounts={accounts} 
            onClose={onModalClose} 
            onSubmit={handleFixedSubmit}
          />
        )}
      </SettingsCard>
      {isOpen ? (
        <ConfirmModal
          isOpen={isOpen}
          title='Confirm action'
          text={`Are you sure you want to ${entity.action} this ${entity.type}?`}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      ) : null}
    </>
  )
}

export function getServerSideProps() {
  return {
    props: {
      currencies: currenciesData,
      installments: installmentsData,
      fixedExpenses: fixedData,
      accounts: accountsData,
    }
  }
}

export default Settings