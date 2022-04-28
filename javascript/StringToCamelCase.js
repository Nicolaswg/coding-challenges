// Addapted from -> https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
function toCamelCase(str){
  const firstChar = str.charAt(0);
  //   split each word in an array item (using _ or -)
  const splittedString =  str.includes('_') ? str.split('_') : str.split('-');
  console.log(splittedString);
    //   check if first char is uppercase
  
  let result = '';
  if(firstChar.toUpperCase() === firstChar){
    result = splittedString.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join('');
  }else{
     result = splittedString[0] + splittedString.slice(1).map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join('');
  }
  return result;
}
