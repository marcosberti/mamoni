
export const formatCurrency = (value, currency) => {
  // return new Intl.NumberFormat('es-AR', {
  //   currency,
  //   style: 'currency',
  // }).format(value)
  return value
}

export const formatDate = (date, options = {dateStyle: 'medium'}) => {
  // return new Intl.DateTimeFormat('es-AR', {
  //   ...options
  // }).format(date);
  return 'asd'
}

export const formatMonth = date => {
  return formatDate(date, {day: '2-digit', month: 'long', year: 'numeric'}).slice(6)
}