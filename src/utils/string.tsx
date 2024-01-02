const booleanToText = (variable: boolean) => variable ? 'si' : 'no'
const capitalized = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

export default {
  booleanToText,
  capitalized,
};
