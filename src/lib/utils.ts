

/**
 * Formats a price value to a currency string
 */
export function formatPrice(price: number, options: {
  currency?: 'USD' | 'EUR' | 'GBP',
  notation?: Intl.NumberFormatOptions['notation']
} = {}) {
  const { currency = 'USD', notation = 'standard' } = options;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Truncates a string to a specified length and adds an ellipsis
 */
export function truncateText(text: string, length: number) {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Generates a random ID
 */
export function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Debounces a function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Capitalizes the first letter of a string
 */
export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Formats a date to a readable string
 */
export function formatDate(date: Date | string) {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
