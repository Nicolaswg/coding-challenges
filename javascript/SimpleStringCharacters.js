// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript

 let splitString = s.split("");
  const resultArr = []
  let upperCase = 0
  let lowerCase = 0
  let number = 0
  let special = 0
  splitString.forEach(item => {
    if(item.match(/^[A-Z]*$/)) {
      upperCase += 1
    } else if(item.match(/[a-z]/)){
      lowerCase += 1
    } else if(item.match(/^\d+$/)){
      number += 1
    } else {
      special += 1
    }
  });
  resultArr.push(upperCase, lowerCase, number, special)
  return resultArr
