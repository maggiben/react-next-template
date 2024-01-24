const isEqual = <T>(firstVal: Array<T> | undefined, secondVal: Array<T> | undefined): boolean => 
  JSON.stringify(firstVal) === JSON.stringify(secondVal);

const removeProperty = <T, K extends keyof T>(array: T[], property: K): T[] =>
  array.map((item) => {
    const { [property]: removedProperty, ...rest } = item;
    return rest as T; // Explicit type cast to T
  });

const splitIntoTuples = <T>(array: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

export default {
  isEqual,
  removeProperty,
  splitIntoTuples,
};
