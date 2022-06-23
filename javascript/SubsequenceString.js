// https://leetcode.com/problems/is-subsequence/submissions/

var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    
    while(i < s.length){
        if(j === t.length){
            return false;
        } else if(s[i] === t[j]){
            i++;
        };
        j++;
        
    };
    return true;
};
