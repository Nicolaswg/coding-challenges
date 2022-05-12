// https://www.codewars.com/kata/5894318275f2c75695000146/train/javascript

function deleteDigit(n) {
  //coding and coding..
  let stringNum = n.toString()
  let arrNum = stringNum.split("")
  let smallNum = arrNum[0]
  
  for(let i =1; i<arrNum.length; i++) {
    if(arrNum[i] < smallNum) {
      smallNum = arrNum[i]
    }
  }
  arrNum.splice(arrNum.indexOf(smallNum),1)
  let result = arrNum.join("")
  
 return parseInt(result)
}
