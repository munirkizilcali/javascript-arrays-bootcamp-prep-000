var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, item) {
  return array = [item, ...array]
}
  
function destructivelyAddElementToBeginningOfArray(array, item) {
  array.unshift(item)
  return array
}
