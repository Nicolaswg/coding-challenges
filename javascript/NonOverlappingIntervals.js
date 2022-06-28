// https://leetcode.com/problems/non-overlapping-intervals/
var eraseOverlapIntervals = function(intervals) {
    let arr = intervals.sort((a,b) => a[0]-b[0]).sort((a,b) => a[1]-b[1])
    let lastNotOverlap = 0
    let counter = 0
    
    // for i = 1 in intervals
    for (let i = 1; i < arr.length; i++) {
        // if interval[i][0] >= interval [lastNotOverlap][1] (not overlaping)
            // lastNotOverlap = i
        // else 
            // counter ++
        if (arr[i][0] >= arr[lastNotOverlap][1]) {
            lastNotOverlap = i
        } else {
            counter++
        }
    }

    
    return counter
};
