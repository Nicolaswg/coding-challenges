// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input) {
    if(input === null || input === []) {
      return []
    }
  
  let pSum = 0;
  let positive = 0;
  let negative = 0
  const arr = []
  input.forEach((e) => {
    if(e > 0) {
      positive +=1
    } else{
      negative += e 
    }
  })

  arr.push(positive, negative)
  if(arr[0] === 0 && arr[1] === 0) return []
  return arr
}
