// https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/train/javascript

function removeParentheses(s){
  let result = "";
  let count = 0;
  for (let letter of s){
    if (letter == "(") count += 1;
    if (count == 0) result += letter;
    if (letter == ")") count -= 1
  }
  return result
  }
