// https://leetcode.com/problems/zigzag-conversion/submissions/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const result = new Array(numRows).fill("")
    let counter = 0;
    let direction = false;
    
    if(numRows === 1 || s.length < numRows) return s;
    
    for(let i= 0; i < s.length; i++){
        let currentVal = s[i];
        result[counter] += currentVal;
        
        if(counter === 0 || counter >= numRows - 1){
            direction = !direction
        }
        
        direction ? counter++ : counter--
    }
    
    return result.join("")
};
