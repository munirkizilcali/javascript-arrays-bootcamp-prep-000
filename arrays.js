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

function addElementToEndOfArray(array, item) {
  return array = [...array, item]
}

function destructivelyAddElementToEndOfArray(array, item) {
  array.push(item)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, `yaraaam`))
