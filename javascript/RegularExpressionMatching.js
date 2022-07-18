// https://leetcode.com/problems/regular-expression-matching/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const regex = new RegExp(`\\b^${p}$\\b`);
    return regex.test(s);
};
