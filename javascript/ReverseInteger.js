// https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let min = Math.pow(-2, 31);
    let max = (Math.pow(2, 31) -1);
    let holder = 0;
    const negative = x < 0;
    
    while(x !== 0) {
        const pop = x % 10;
        console.log(pop)
        x = negative ? Math.ceil(x/10) : Math.floor(x/10);
        
        holder = holder * 10 + pop
        
        if(holder <= min || holder >= max) return 0;
    }
    return holder
};
