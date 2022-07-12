/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 0;
        let h = n;
        let res = 0;
        
        while(l <= h) {
            let mid = Math.floor(l + (h-l) / 2)
            let badVersion = isBadVersion(mid);
            
            if(badVersion) {
                res = mid
                h = mid -1;
            } else {
                l = mid + 1;
            }
        }
        return res;
    };
};
