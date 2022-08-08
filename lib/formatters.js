
export const formatCurrency = (value, currency) => {
  return new Intl.NumberFormat('es-AR', {
    currency,
    style: 'currency',
  }).format(value)
}

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('es-AR', {
    dateStyle: 'medium'
  }).format(date);
}