const binarySearch = (nums, target) => {
	let left = 0;
  let rigth = nums.length - 1;
  
  while(left <= rigth) {
  	const middle = Math.floor((left + rigth) / 2);
    const current = nums[middle]
    
    if(current > target) {
    	rigth = middle - 1
    }else if( current < target) {
     left = middle + 1
    }else{
     return middle
    }
  }
  return - 1
}

console.log(binarySearch([1,2,3,4,5,6,9,21], 9))
