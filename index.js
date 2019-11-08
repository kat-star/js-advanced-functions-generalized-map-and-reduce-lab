// Add your functions here
function map(sourceArray, funct) {
  let newArr = [];
  sourceArray.forEach(ele => newArr.push(funct(ele)))
  return newArr;
}

function reduce(sourceArray, funct, startPoint = null) {
  let memo = startPoint;
  let newArr = [...sourceArray]
  if (!startPoint) {
    memo = sourceArray[0];
    newArr = sourceArray.slice(1)
  }
  newArr.forEach(ele => {
    memo = funct(ele, memo)
  })
  return memo;
}

// console.log(reduce([1, 2, 3], function (e, memo) { return e + memo }, 100))


// memo += arr[i]
// memo = yield(e, memo)