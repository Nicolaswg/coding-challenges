// https://leetcode.com/problems/find-pivot-index/submissions/

var pivotIndex = function(nums) {
    let total = 0;
    let leftSum = 0;
    nums.forEach((item) => total += item)
    
    for(let i = 0; i<=nums.length; i++){
        if(total - leftSum - nums[i] === leftSum) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};
