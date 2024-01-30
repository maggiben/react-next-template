import i18next from 'i18next';
export const booleanToText = (variable: boolean) => variable ? i18next.t('true') : i18next.t('false');
export const capitalized = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);
export const validateEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
