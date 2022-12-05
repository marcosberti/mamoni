
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import SettingsCard from '../components/SettingsCard'
import {CurrencyHeaders, CurrencyItems, CurrencyModal} from '../components/Currencies'
import { IntallmentHeaders, IntallmentItems, IntallmentModal } from '../components/Installments'
import { FixedHeaders, FixedItems, FixedModal } from '../components/Fixed'
import currenciesData from '../data/currencies.json'
import installmentsData from '../data/installments.json'
import fixedData from '../data/fixed.json'
import accountsData from '../data/accounts.json'
import { SETTING_TYPES } from '../lib/settings'

const Settings = ({ currencies, installments, fixed, accounts }) => {
  const router = useRouter();

  const handleRefreshData = () => {
    router.replace(router.asPath);
  }

  return (
    <>
      <SettingsCard
        title='Currencies'
        type={SETTING_TYPES.currency}
        endpoint='currencies'
        buttonTitle='Add new currency' 
        buttonText='New currency' 
        items={currencies}
        tableHeaders={CurrencyHeaders}
        tableItems={CurrencyItems}
        modalForm={CurrencyModal}
        onRefresh={handleRefreshData}
      />
      <Box mb={6} />
      
      <SettingsCard
        title='Installments expenses'
        type={SETTING_TYPES.installment}
        endpoint='installments'
        buttonTitle='Add new installment expense' 
        buttonText='New installment expense' 
        items={installments}
        accounts={accounts}
        tableHeaders={IntallmentHeaders}
        tableItems={IntallmentItems}
        modalForm={IntallmentModal}
        onRefresh={handleRefreshData}
      />
      <Box mb={6} />
      
      <SettingsCard
        title='Fixed expenses'
        type={SETTING_TYPES.fixed}
        endpoint='fixed'
        buttonTitle='Add new fixed expense' 
        buttonText='New fixed expense' 
        items={fixed}
        accounts={accounts}
        tableHeaders={FixedHeaders}
        tableItems={FixedItems}
        modalForm={FixedModal}
        onRefresh={handleRefreshData}
      />
    </>
  )
}

export function getServerSideProps() {
  return {
    props: {
      currencies: currenciesData,
      installments: installmentsData,
      fixed: fixedData,
      accounts: accountsData,
    }
  }
}

export default Settings