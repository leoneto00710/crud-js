export const checkInput = (param) => {
  const isEmpty = !param || param.trim() === ""
  return isEmpty
}