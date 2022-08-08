import { Flex } from '@chakra-ui/react'
import AccountCard from '../components/accountCard'
import accounts from '../data/accounts'

const AccountCards = () => {
  return (
    <Flex gap='24px' overflowX='auto' scrollSnapType='x mandatory'>
      {accounts.map(account => (
        <AccountCard 
          key={account.id}
          id={account.id}
          name={account.name}
          balance={account.balance}
          currency={account.currency}
          color={account.color}
          icon={account.icon}
        />
      ))}
    </Flex>
  )
}

export default AccountCards