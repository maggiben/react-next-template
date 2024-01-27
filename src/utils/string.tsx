import i18next from 'i18next';
const booleanToText = (variable: boolean) => variable ? i18next.t('true') : i18next.t('false');
const capitalized = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);
const validateEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default {
  booleanToText,
  capitalized,
  validateEmail,
};
