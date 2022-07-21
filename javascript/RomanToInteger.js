// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
        roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    
    let result = 0;
    
    for(let i = 0; i< s.length; i++) {
        let cur = roman[s[i]];
        let next = roman[s[i+1]]
        if(cur < next ) {
            result += next - cur
            i++
        }else {
            result += cur
        }
    }
};
