var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, item) {
  return array2 = [item, ...array]
}
  
function destructivelyAddElementToBeginningOfArray(array, item) {
  return array = [item, ...array]
}

addElementToBeginningOfArray(chocolateBars, `yarrak`)
console.log(chocolateBars)

destructivelyAddElementToBeginningOfArray(chocolateBars, `emmeli`)
console.log(chocolateBars)