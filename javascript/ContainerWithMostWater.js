// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0;
    let i =0;
    let j = height.length -1 ;
    
    while(i < j) {
        const temp = (j-i) * Math.min(height[i], height[j])
        area = Math.max(area,temp);
        if(height[i]> height[j]){
            j--
        }else{
            i++
        }
    }
    return area;
};
