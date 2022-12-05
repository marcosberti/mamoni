const MONTH_IN_MS = 30 * 24 * 60 * 60 * 1000

const SETTING_TYPES = {
  currency: 'currency',
  installment: 'installment expense',
  fixed: 'fixed expense',
}

const ACTIONS = {
  edit: 'edit',
  delete: 'delete'
}

const getDate = ms => {
  return new Date(Number(ms)).toJSON().slice(0, 10)
}

const getDefaultCurrency = (currency) => {
  return {
    name: currency?.name ?? '',
    code: currency?.code ?? ''
  }
}

const getDefaultInstallment = installment => {
  return {
    title: installment?.title ?? '',
    description: installment?.description ?? '',
    amount: installment?.amount ?? null,
    accountId: installment?.accountId ?? 'default',
    installments: installment?.installments ?? null,
    firstPaymentDate: installment ? getDate(installment.firstPaymentDate) : null,
  }
}

const getDefaultFixed = fixed => {
  return {
    title: fixed?.title ?? '',
    description: fixed?.description ?? '',
    amount: fixed?.amount ?? null,
    accountId: fixed?.accountId ?? 'default',
    beginDate: fixed ? getDate(fixed.beginDate) : null,
    endDate: fixed ? getDate(fixed.endDate) : null,
  }
}

export {
  MONTH_IN_MS,
  SETTING_TYPES,
  ACTIONS,
  getDefaultCurrency,
  getDefaultInstallment,
  getDefaultFixed
}