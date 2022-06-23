// https://leetcode.com/problems/isomorphic-strings/submissions/
var isIsomorphic = function(s, t) {
    
    if(s.length !== t.length) return false;
    
    const map = new Map();
    const set = new Set();
    
    for (let i = 0; i <= s.length; i++) {
        let chart1 = s.charAt(i);
        let chart2 = t.charAt(i);
            
        if(map.has(chart1) == true){
            
            if(map.get(chart1) !== chart2) {
                return false;
            }
        } else {
            
            if(set.has(chart2) == true) {
                return false;
            }
        }
        
        map.set(chart1, chart2);
        set.add(chart2)
    }
    return true;
};
