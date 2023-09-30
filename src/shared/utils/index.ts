import dayjs from 'dayjs'

export function capitalizeFLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getDiffBetweenDates = (date: string): number => {
  const currentDate = dayjs() // Get the current date
  const targetDate = dayjs(date) // Parse the input date
  // Calculate the difference in days
  const diff = targetDate.diff(currentDate, 'day')
  return diff >= 0 ? diff : -diff
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0, // Set minimum fraction digits to 0
    maximumFractionDigits: 0,
  }).format(price)
}
