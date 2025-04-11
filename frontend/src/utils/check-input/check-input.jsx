const checkInput = (param, setErrorState) => {
  const isEmpty = !param || param.trim() === ""
  setErrorState(isEmpty)
  return isEmpty
}