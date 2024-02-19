export const dateTimeFormatOptions = Intl.DateTimeFormat().resolvedOptions(); 
export function toLocaleDateString(date: string | Date) {
  return new Date(date).toLocaleDateString(dateTimeFormatOptions.locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}