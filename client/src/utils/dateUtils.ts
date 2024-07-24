export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}