const isEqual = <T>(firstVal: Array<T> | undefined, secondVal: Array<T> | undefined): boolean => 
  JSON.stringify(firstVal) === JSON.stringify(secondVal);

const removeProperty = <T, K extends keyof T>(array: T[], property: K): T[] =>
  array.map((item) => {
    const { [property]: removedProperty, ...rest } = item;
    return rest as T; // Explicit type cast to T
  });

export default {
  isEqual,
  removeProperty
};
