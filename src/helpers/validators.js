export const isRequired = (value) => {
  if (!value) {
    return 'This Field is required!'
  }
  return ''
}

// This validator must take only words
export const attributeValidator = (value) => {
  let val = isRequired(value)
  if (!val) {
    let re = /^[a-zA-Z ]+$/
    if (!re.test(value)) {
      val = 'Should be simple word!'
    }
  }
  return val
}