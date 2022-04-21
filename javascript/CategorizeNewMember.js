#https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data){
  result = []
  data.forEach((e) => {
    let age = e[0]
    let handicap = e[1]
    
    if(age >= 55 && handicap > 7) {
      result.push('Senior')
    } else{
      result.push('Open')
    }
  })
  return result
