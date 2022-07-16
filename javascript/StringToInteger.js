// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} s
 * @return {number}
 */

/*
const min = Math.pow(-2, 31);
const max = Math.pow(2,31)-1;
let result = parseInt(text);

if(Number.isNaN(result)) result = 0;

result > max ? result = max : result < min ? result = min : result;

return result;
*/

var myAtoi = function(s) {
    const newString = s.trim();
    const min =  Math.pow(-2, 31);
    const max = (Math.pow(2, 31)-1);
    let result = 0;
    
    if(newString.match(/-\d/)) {
        result = parseInt(newString.match(/-\d/).input);
        if(result < min){
            return min;
        }
    }else if(newString.match(/^[\d]/)) {
        result = parseInt(newString.match(/^[\d]/).input);
        if(result > max) {
            return max;
        }
    } else if(newString[0] === "+") {
        result = parseInt(newString);
        if(result > max) {
            return max;
        }
    }
    return Number.isNaN(result) ? 0 : result;
};
