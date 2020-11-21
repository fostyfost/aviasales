export const toggleArrayValue = <T>(arr: T[], value: T): T[] => {
  if (arr.includes(value)) {
    return arr.filter(item => item !== value)
  }

  return [...arr, value]
}
